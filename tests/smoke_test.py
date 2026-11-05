"""Homepage + content regression checks for the public Pain Study Room.

Run from repository root: python tests/smoke_test.py
Requires playwright and Chromium. The tool-only browser disallows direct
navigation, so page.set_content uses an in-memory localStorage shim.
This exercises application persistence logic, not production storage policy.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
import os
import re

root=Path(__file__).resolve().parent.parent
html=(root/'index.html').read_text(encoding='utf-8')
shim="""<script>
window.__testStorage={};
Object.defineProperty(window,'localStorage',{configurable:true,value:{
getItem(k){return window.__testStorage[k]??null},
setItem(k,v){window.__testStorage[k]=String(v)},
removeItem(k){delete window.__testStorage[k]}
}});
</script>"""
assert "<script>\n'use strict';" in html
html=html.replace("<script>\n'use strict';",shim+"<script>\n'use strict';",1)
checks=[]

def ck(name,condition):
    checks.append({'check':name,'pass':bool(condition)})
    if not condition:print('FAIL',name)

with sync_playwright() as p:
    opts={'headless':True,'args':['--no-sandbox','--disable-dev-shm-usage']}
    if os.path.exists('/usr/bin/chromium'):opts['executable_path']='/usr/bin/chromium'
    browser=p.chromium.launch(**opts)
    for width,device in [(1440,'desktop'),(768,'tablet'),(390,'mobile')]:
        context=browser.new_context(viewport={'width':width,'height':900})
        page=context.new_page()
        errors=[]
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.set_content(html,wait_until='load')
        page.wait_for_timeout(50)
        ck(f'{device}: landing visible',page.locator('#homeView').is_visible() and not page.locator('#lessonView').is_visible())
        ck(f'{device}: three available courses',page.locator('#homeFeatured .featured-card').count()==3)
        ck(f'{device}: 26 catalog topics',page.locator('#homeCatalog .topic-card').count()==26)
        ck(f'{device}: exactly 23 planned topics',page.locator('#homeCatalog .topic-card:not(.live)').count()==23)
        boxes=[page.locator('.home-step').nth(i).bounding_box() for i in range(4)]
        ck(f'{device}: four-step balanced layout',len(set(round(b['y']) for b in boxes))==(1 if width>=720 else 2))
        ck(f'{device}: home-step equal widths',max(b['width'] for b in boxes)-min(b['width'] for b in boxes)<2)
        page.locator('#homeSearch').fill('pHn')
        ck(f'{device}: case-insensitive search',page.locator('#homeCatalog .topic-card').count()==1)
        page.locator('#homeSearch').fill('')
        page.locator('button[data-home-group="解剖"]').click()
        ck(f'{device}: anatomy filter',page.locator('#homeCatalog .topic-card').count()==6)
        page.locator('button[data-home-group="全部"]').click()
        page.locator('#homeFeatured [data-home-topic="crps"]').click()
        page.wait_for_timeout(50)
        ck(f'{device}: open CRPS and hide home',page.locator('#lessonView').is_visible() and not page.locator('#homeView').is_visible())
        ck(f'{device}: CRPS 12 modules',page.locator('#navList .nav-item').count()==12)
        page.locator('#noteInput').fill('study-note-persisted')
        page.locator('#navList button[data-nav="2"]').click()
        page.locator('#nextBtn').click()
        ck(f'{device}: six CRPS mechanisms',page.locator('.mechanism-button').count()==6)
        page.locator('[data-mech="central"]').click()
        ck(f'{device}: CRPS mechanism detail','central' in page.locator('.mech-head h3').inner_text().lower())
        page.locator('#homeOpen').click()
        ck(f'{device}: return home',page.locator('#homeView').is_visible())
        page.locator('#homeFeatured [data-home-topic="crps"]').click()
        page.locator('#navList button[data-nav="0"]').click()
        ck(f'{device}: original notes key survives',page.locator('#noteInput').input_value()=='study-note-persisted')
        page.evaluate("location.hash='#/topic/phn'")
        page.wait_for_timeout(50)
        ck(f'{device}: PHN shareable hash route',page.locator('#lessonView').is_visible() and page.locator('#navList .nav-item').count()==13)
        page.locator('#navList button[data-nav="2"]').click()
        page.locator('#nextBtn').click()
        ck(f'{device}: six PHN mechanisms',page.locator('.mechanism-button').count()==6)
        page.locator('[data-mech="phn-central"]').click()
        ck(f'{device}: PHN mechanism detail','central' in page.locator('.mech-head h3').inner_text().lower())
        page.locator('#homeOpen').click()
        page.locator('#homeFeatured [data-home-topic="basics"]').click()
        ck(f'{device}: basics 4 guided modules',page.locator('#lessonView').is_visible() and page.locator('#navList .nav-item').count()==4)
        page.locator('#homeOpen').click()
        ck(f'{device}: no horizontal overflow',page.evaluate('document.documentElement.scrollWidth<=innerWidth+2'))
        ck(f'{device}: zero JS runtime errors',len(errors)==0)
        context.close()
    browser.close()

ck('static: no private Notion page URLs','app.notion.com/p/' not in html)
ck('static: public preview medical disclaimer','臨床處置內容仍持續接受專業審閱' in html)
ck('static: DOI source links',html.count('https://doi.org/')>=5)
ck('static: no remote JS dependency',not re.search(r'<script[^>]+src=',html))
ck('static: 4 learning stages preserved',"const stages=['先建立概念','拆解原理','帶到臨床','讀後整理'];" in html)
ck('static: no user identifiable string',not any(s in html for s in ['家豪','Chia-Hao','亞東醫院','病歷號','病人姓名']))

report={'date':'2026-11-05','passed':sum(x['pass'] for x in checks),'failed':sum(not x['pass'] for x in checks),'checks':checks,'full_medical_review_completed':False,'live_pages_browser_check_completed':False,'scope':'Local Chromium smoke tests, with test-only in-memory storage shim'}
(root/'qa-results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f"Passed {report['passed']}; failed {report['failed']}")
if report['failed']:raise SystemExit(1)
