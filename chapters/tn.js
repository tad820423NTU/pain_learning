/* Pain Study Room: Trigeminal Neuralgia, original teaching content. */
window.PAIN_TN={
  "id": "tn",
  "title": "Trigeminal neuralgia",
  "name": "三叉神經痛",
  "modules": [
    {
      "title": "TN 是什麼？分型怎麼看",
      "en": "Definition & Classification",
      "sub": "Classical、secondary 與 idiopathic 究竟差在哪？",
      "q": "Classical、secondary 與 idiopathic 究竟差在哪？",
      "steps": [
        "<p><strong>Trigeminal neuralgia（TN）</strong>是一種反覆、單側、突發突止的 intense electric shock-like facial pain，分布限於 CN V 的 V1／V2／V3。典型發作從不足一秒到 2 分鐘，常被刷牙、洗臉、刮鬍或冷風吹拂等 <em>innocuous stimuli</em> 引發。</p><div class=\"softbox\"><h3>兩種分類維度</h3><p>病因：classical／secondary／idiopathic；疼痛 phenotype：purely paroxysmal 或 with concomitant continuous pain。不要把它們當成互斥的五種疾病。</p></div>",
        "<table><tr><th>Etiology</th><th>核心條件</th></tr><tr><td>Classical TN</td><td>影像或術中可見 NVC 且造成 root morphological change（displacement/atrophy）</td></tr><tr><td>Secondary TN</td><td>MS、CPA tumour、AVM 等可解釋 neuralgia 的病變</td></tr><tr><td>Idiopathic TN</td><td>無可解釋病因；可有無形態改變的 vascular contact</td></tr></table><p><strong>Contact ≠ compression</strong>：只見血管碰到神經不能確立 classical TN。</p>",
        "<p>患者右側 V2/V3 被刷牙觸發 20 秒電擊痛；MRI 僅顯示 SCA 與三叉神經接觸，無萎縮或移位。臨床可診斷 TN，但不能因此分為 classical。<strong>仍要評估有無 secondary pathology</strong>。</p>",
        "<div class=\"review-box\"><h3>收斂成一句</h3><p>Clinical TN 靠 ICHD-3 病史；classical 需要 neurovascular compression 加神經形態變化；secondary 有其他神經疾病；idiopathic 找不到解釋性病因。</p></div>"
      ]
    },
    {
      "title": "流行病學與危險因子",
      "en": "Epidemiology & Risk",
      "sub": "為什麼各研究 TN 發生率差距很大？",
      "q": "為什麼各研究 TN 發生率差距很大？",
      "steps": [
        "<p>TN 在中高齡、女性較常見，V2/V3 受影響多於 V1。Rochester 1945–1984 年人口研究的粗發生率約 <strong>4.3/100,000 人年</strong>；瑞典 2009–2017 年病例回顧估計 <strong>5.5/100,000 人年（95% CI 4.7–6.4）</strong>。</p>",
        "<p>2026 年整合 17 項研究的 meta-regression 得到 pooled incidence 25.33/100,000 person-years（95% CI 11.87–54.02），但 <strong>I² 99.96%</strong>，顯示研究定義與辨識方式差異巨大。不可把 pooled estimate 當成台灣固定的真實發生率。</p><p>Secondary TN 常與 MS 或 CPA lesion 等有關；不能以單純發病年齡排除。</p>",
        "<p>一名 37 歲、雙側 facial shocks 且有視神經炎病史的患者，必須特別留意 MS。另一名 71 歲單側典型疼痛，仍需 MRI 排除 secondary TN，不能因符合典型年齡就省略影像。</p>",
        "<div class=\"review-box\"><h3>分母不要混淆</h3><p>Population incidence（每十萬人年）≠ prevalence ≠ 「門診面部疼痛中 TN 的比例」。精準數值須一起帶上年份、研究人口和病例定義。</p></div>"
      ]
    },
    {
      "title": "從 REZ 到瞬間電擊痛",
      "en": "Pathophysiology & Anatomy",
      "sub": "Aβ light touch 怎麼變成劇烈疼痛？",
      "q": "Aβ light touch 怎麼變成劇烈疼痛？",
      "steps": [
        "<p>Trigeminal ganglion 收集 V1（forehead/eye）、V2（midface/maxilla）、V3（lower face/mandible）感覺傳入，proprioception 亦涉及 mesencephalic nucleus。Trigeminal root 進入 pons 前的 <strong>root entry zone（REZ）</strong>附近有 CNS/PNS myelin transition，是 classical TN 的典型壓迫區。</p><p>先理解路徑：<strong>neurovascular compression → focal demyelination → abnormal excitability / ephaptic coupling → paroxysmal discharge</strong>。</p>",
        "<h3>Mechanism Atlas｜六條機轉</h3><div class=\"mechanism-map\"><button class=\"mechanism-button\" data-mech=\"tn-rez\">REZ / NVC</button><button class=\"mechanism-button\" data-mech=\"tn-myelin\">Demyelination</button><button class=\"mechanism-button\" data-mech=\"tn-ephaptic\">Ephaptic</button><button class=\"mechanism-button\" data-mech=\"tn-ectopic\">Ectopic firing</button><button class=\"mechanism-button\" data-mech=\"tn-central\">Central pathways</button><button class=\"mechanism-button\" data-mech=\"tn-secondary\">Secondary lesion</button></div><div id=\"mechanismDetail\" class=\"mechanism-detail\" aria-live=\"polite\"></div><p>以上是 mechanistic explanations，並非臨床分型的必要檢驗項目。</p>",
        "<p>刷牙的 innocuous mechanoreceptor input 進入 hyperexcitable、局部 demyelinated trigeminal fibers；部分神經訊號可能經 ephaptic transmission 帶動附近纖維異常放電，經 trigeminal pain pathways 形成 shock-like pain。臨床有效的 sodium-channel blocker 具機轉合理性，<strong>但不能證明每人有相同 ion channel mutation</strong>。</p>",
        "<div class=\"review-box\"><h3>考前閉書畫圖</h3><p>V1/V2/V3 → Gasserian ganglion → REZ → pons trigeminal sensory nuclei → thalamocortical systems。並解釋 focal demyelination、ephaptic transmission、trigger zone 和 refractory period 的連結。</p></div>"
      ]
    },
    {
      "title": "發作特徵與背景痛",
      "en": "Clinical Phenotypes & Course",
      "sub": "什麼才叫典型 paroxysmal TN？",
      "q": "什麼才叫典型 paroxysmal TN？",
      "steps": [
        "<p>Paroxysms 通常持續極短、起止突然、極度疼痛，常有 small trigger zones，V2/V3 最常見；患者可能因恐懼發作而不願飲水、進食或刷牙。發作後有時出現 refractory period，亦可有自發 remissions 與 relapses。</p>",
        "<table><tr><th>Phenotype</th><th>差異</th></tr><tr><td>Purely paroxysmal</td><td>兩次 attacks 之間不持續痛</td></tr><tr><td>With concomitant continuous pain</td><td>仍符合典型 paroxysms，但發作間有 background pain</td></tr><tr><td>Painful trigeminal neuropathy</td><td>持續痛和客觀 sensory deficit 可能更突出，須另循 ICHD-3 評估</td></tr></table>",
        "<p>牙痛常有局部叩診／冷熱反應、長時間痠痛；TN 則看「innocuous facial trigger 導致 seconds-long shock」。沒有 shock-like attacks 的單純慢性臉痛，不可草率叫 TN type 2。</p>",
        "<div class=\"review-box\"><h3>辨認要點</h3><p>Unilateral、trigeminal distribution、seconds–2 minutes、electric shock-like、triggered by innocuous stimuli。<strong>有 continuous pain 也必須存在典型 paroxysms</strong> 才符合 TN phenotype。</p></div>"
      ]
    },
    {
      "title": "ICHD-3 Criteria 與 MRI",
      "en": "Diagnosis & Assessment",
      "sub": "誰該做高解析三叉神經 MRI？",
      "q": "誰該做高解析三叉神經 MRI？",
      "steps": [
        "<p>ICHD-3：單側三叉神經分布內反覆發作；疼痛從一瞬到 2 分鐘、劇烈且 sharp/shooting/electric；由無害刺激誘發；排除更好的 ICHD 診斷。檢查 facial sensation、corneal reflex、jaw power、其他 cranial nerves 和 dental status。</p>",
        "<p>EAN guideline 建議所有 TN patients 在可行時 MRI：<strong>high-resolution 3D T2（CISS/FIESTA）、3D TOF-MRA、contrast-enhanced 3D T1</strong>，檢視 NVC 與 MS plaque/CPA mass。影像應區分 simple contact 與 nerve displacement/atrophy；MRI 不是「有 blood vessel contact 就確診」。</p>",
        "<p>「70 歲典型 V3 TN，所以不需要 MRI」是陷阱。沒有臨床特徵能完全排除 secondary TN。MRI 不能做時，專科可考慮 CT 或 trigeminal reflex neurophysiology，但檢查各有局限。</p>",
        "<div class=\"review-box\"><h3>診斷與病因分型分開</h3><p>Phenotype 主要靠問診，MRI 是排除 secondary causes 及決定 classical/idiopathic、是否適合 MVD 的工具。MRI 無異常不排除 clinical TN。</p></div>"
      ]
    },
    {
      "title": "Differential & Red Flags",
      "en": "Differential Diagnosis",
      "sub": "哪些臉痛不能只當 TN 治療？",
      "q": "哪些臉痛不能只當 TN 治療？",
      "steps": [
        "<table><tr><th>症狀</th><th>鑑別</th></tr><tr><td>牙齒冷熱/叩診痛</td><td>Pulpitis、periodontal disease</td></tr><tr><td>耳咽喉、吞嚥誘發刺痛</td><td>Glossopharyngeal neuralgia</td></tr><tr><td>眼眶周圍發作合併明顯 lacrimation/rhinorrhea</td><td>TACs，包括 SUNCT/SUNA</td></tr><tr><td>持續灼痛加 sensory loss</td><td>Painful trigeminal neuropathy、PHN</td></tr><tr><td>咬肌、顳顎關節壓痛</td><td>TMD</td></tr></table>",
        "<p>Red flags：progressive facial numbness、motor weakness、corneal reflex abnormality、雙側疼痛、年輕合併其他神經症狀、聽力或平衡改變、癌症病史、感染症狀。眼痛伴視力減退也要排除眼部急症。</p>",
        "<p>39 歲患者 facial electric shocks、同時 gait ataxia 與 sensory changes。首要不是把 CBZ 推到最大劑量，而是安排 MRI、神經科評估與排除 MS/brainstem pathology。</p>",
        "<div class=\"review-box\"><h3>防止 anchoring</h3><p>任何臉痛不等於 TN。頸後、耳後、咽喉的位置不完全屬 trigeminal territory。病史、神經學及牙科檢查不可省略。</p></div>"
      ]
    },
    {
      "title": "功能與跨團隊照護",
      "en": "Multimodal Care",
      "sub": "為什麼 TN 應評估進食、口腔清潔和營養？",
      "q": "為什麼 TN 應評估進食、口腔清潔和營養？",
      "steps": [
        "<p>TN 常影響 oral hygiene、chewing、drinking、sleep 與 social participation。用 attack diary 記錄 attack frequency、duration、trigger、background pain、功能與 adverse effects。治療目標要能吃喝、刷牙與參與生活，而不只是降低單次 NRS。</p>",
        "<p>患者可短期使用柔軟食物、調整刷牙方式與減少已知刺激；嚴重恐懼、失眠可以提供心理支持。但 <strong>nonpharmacologic support 不是 CBZ/OXC 與適當 surgical evaluation 的替代品</strong>。失能者應由神經科、神外、疼痛科與口腔顏面團隊協作。</p>",
        "<p>患者因發作兩日不敢喝水，已有脫水與體重下降。此時需 urgent clinical review、電解質評估、急性疼痛控制，不能要求病人單靠分心或暴露治療。</p>",
        "<div class=\"review-box\"><h3>Function first</h3><p>問吃得下嗎、喝得下嗎、刷得了牙嗎、睡得好嗎；協助病人避免不必要拔牙，早期討論可治療的病因與選病介入。</p></div>"
      ]
    },
    {
      "title": "CBZ、OXC 與第二線藥物",
      "en": "Pharmacological Management",
      "sub": "Sodium channel blockade 為何是第一線？",
      "q": "Sodium channel blockade 為何是第一線？",
      "steps": [
        "<p><strong>Carbamazepine（CBZ）/ oxcarbazepine（OXC）</strong>透過 voltage-gated sodium channel blockade 降低異常 paroxysmal discharges，是 EAN 首選。成人常見低劑量起始 CBZ 100 mg BID 或 OXC 150 mg BID，再緩慢 titration，常見治療範圍 CBZ 約 400–1200 mg/day、OXC 約 600–1800 mg/day；須依個體狀況及台灣藥品仿單調整。</p>",
        "<table><tr><th>藥物</th><th>重要監測/角色</th></tr><tr><td>CBZ</td><td>CBC、LFT、Na，CYP induction／drug interactions、rash、骨髓抑制</td></tr><tr><td>OXC</td><td>Na 尤其 hyponatremia、腎功能、dizziness/somnolence</td></tr><tr><td>Lamotrigine / baclofen</td><td>Second-line/add-on；lamotrigine 緩慢加量，baclofen sedation/withdrawal</td></tr><tr><td>Gabapentin / pregabalin</td><td>特定持續痛或不耐受一線患者可考慮，TN-specific direct evidence 較有限</td></tr><tr><td>Botulinum toxin A</td><td>選定 refractory 病例，protocol 和證據異質</td></tr></table><p>台灣等東亞族群尤其注意 <strong>HLA-B*15:02</strong> 相關 SJS/TEN 風險，處方前依藥品仿單與藥物基因指引評估。</p>",
        "<p>高齡患者 OXC 加量後 confusion/ataxia，應先測 serum sodium 與 drug interactions，評估 renal function。急性 severe TN exacerbation 可在有監測的專科環境評估 IV lidocaine/fosphenytoin，但不可當一般門診未監測注射。</p>",
        "<div class=\"review-box\"><h3>三個高頻考點</h3><p>CBZ/OXC first line；HLA-B*15:02 的嚴重皮膚反應風險；OXC hyponatremia。TN-specific long-term opioids 不是優先選擇。</p></div>"
      ]
    },
    {
      "title": "MVD 與神經毀損性手術",
      "en": "Interventional & Surgical Management",
      "sub": "哪些患者適合 MVD、哪些適合 percutaneous？",
      "q": "哪些患者適合 MVD、哪些適合 percutaneous？",
      "steps": [
        "<p>選定 <strong>classical TN with morphological NVC</strong>、藥物不足或不能耐受時，MVD 是重要外科選項。Posterior fossa approach 將 offending vessel 與 proximal trigeminal root 隔開，目標保留神經功能，而不是直接做 neurolysis。</p>",
        "<table><tr><th>介入</th><th>選擇理由與風險</th></tr><tr><td>MVD</td><td>適合具明確 NVC 的患者；CSF leak、hearing loss、顱內血管/神經風險</td></tr><tr><td>RF rhizotomy</td><td>Gasserian ganglion 熱凝；麻木、corneal sensory loss、anesthesia dolorosa</td></tr><tr><td>Balloon compression / glycerol</td><td>Percutaneous ablative options；麻木、咀嚼肌無力、復發</td></tr><tr><td>Stereotactic radiosurgery</td><td>非開顱，但起效可能延後、復發/感覺異常</td></tr></table>",
        "<p>85 歲、嚴重心肺共病、沒有 morphologic NVC 的患者，未必適合後顱窩手術。需共同決策比較 neurosurgical referral、ablative alternatives 與患者對 sensory deficit 的接受度。</p>",
        "<div class=\"review-box\"><h3>證據界線</h3><p>2025 prospective 非隨機 cohort 的 5-year pain-free without medication：MVD 59% vs medical 19%（RR 3.03，95% CI 1.67–5.50），但 attrition/selection bias 限制因果推論，不能說手術一定優於用藥。</p></div>"
      ]
    },
    {
      "title": "治療流程、追蹤與預後",
      "en": "Clinical Algorithm",
      "sub": "從典型 shock pain 到精準選病。",
      "q": "從典型 shock pain 到精準選病。",
      "steps": [
        "何時該轉介 neurosurgery？",
        "<ol><li>確認 trigeminal electric paroxysms 與 innocuous triggers。</li><li>檢查 sensory、corneal reflex、jaw、dental/ocular findings，處理 red flags。</li><li>安排 high-resolution MRI，分類 classical/secondary/idiopathic。</li><li>考慮 HLA 風險後使用 CBZ/OXC，監測 CBC/LFT/Na 和 adverse effects。</li><li>追蹤 attack diary、sleep、nutrition、oral hygiene；若藥物失效或副作用難耐，轉介手術團隊。</li></ol>",
        "<p>病程可能有 remission 和 relapse。藥物停用或減量需循序，不能把短期發作消失當完全治癒。疼痛量表之外，追蹤 disability、參與生活、藥物負擔及術後 sensory complications。</p>",
        "<p>患者 MRI 有 severe unilateral NVC with root displacement，OXC 足量試用後仍無法進食。合理下一步是討論 MVD benefit/risks，而不是不斷換用一般鎮痛藥延誤有效治療。</p>"
      ]
    },
    {
      "title": "五篇重要文獻",
      "en": "Key Evidence",
      "sub": "把分類、指引與觀察性結果分清楚。",
      "q": "把分類、指引與觀察性結果分清楚。",
      "steps": [
        "哪些研究能支持 TN 的核心臨床決策？",
        "<p>核心閱讀：<strong>ICHD-3（2018）</strong>用於臨床診斷；<strong>Cruccu et al.（2016）</strong>建立 etiologic classification／grading；<strong>Bendtsen et al.（2019）</strong> EAN guideline；<strong>Lambru et al.（2021）</strong> clinical guide；<strong>Worm et al.（2025）</strong> prospective 5-year outcomes。</p><details class=\"deepen paper-collection\"><summary>延伸：五篇核心文章｜標題、研究結果與 DOI</summary><div class=\"detail paper-collection-body\"><article class=\"paper-card\"><div class=\"paper-card-heading\"><span class=\"paper-index\">PAPER 01</span><span class=\"paper-type\">Diagnostic classification</span></div><h4 class=\"paper-title\">The International Classification of Headache Disorders, 3rd edition</h4><p class=\"paper-meta\">Headache Classification Committee of the International Headache Society · Cephalalgia · 2018</p><p class=\"paper-design\"><strong>研究設計：</strong>International expert classification；用來界定臨床診斷而非比較治療效果。</p><p class=\"paper-finding\"><strong>核心發現：</strong>反覆 unilateral trigeminal electric paroxysms；從不足一秒到 2 分鐘、intense、innocuous trigger；沒有 single pooled effect size。</p><p class=\"paper-limits\"><strong>研究限制：</strong>ICHD-3 是 phenotype-based operational criteria，無 gold-standard lab test。</p><a class=\"paper-doi\" href=\"https://doi.org/10.1177/0333102417738202\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀原始文章 · DOI: 10.1177/0333102417738202</a></article><article class=\"paper-card\"><div class=\"paper-card-heading\"><span class=\"paper-index\">PAPER 02</span><span class=\"paper-type\">Expert consensus / classification</span></div><h4 class=\"paper-title\">Trigeminal neuralgia: new classification and diagnostic grading for practice and research</h4><p class=\"paper-meta\">Cruccu G, Finnerup NB, Jensen TS, et al · Neurology · 2016</p><p class=\"paper-design\"><strong>研究設計：</strong>跨學科專家分類共識/文獻回顧；非 RCT。</p><p class=\"paper-finding\"><strong>核心發現：</strong>建立 classical（morphological NVC）、secondary（neurological disease）、idiopathic 以及 diagnostic certainty。</p><p class=\"paper-limits\"><strong>研究限制：</strong>無單一 sample-based effect size／CI，分類證據含觀察與專家判斷。</p><a class=\"paper-doi\" href=\"https://doi.org/10.1212/WNL.0000000000002840\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀原始文章 · DOI: 10.1212/WNL.0000000000002840</a></article><article class=\"paper-card\"><div class=\"paper-card-heading\"><span class=\"paper-index\">PAPER 03</span><span class=\"paper-type\">Clinical practice guideline</span></div><h4 class=\"paper-title\">European Academy of Neurology guideline on trigeminal neuralgia</h4><p class=\"paper-meta\">Bendtsen L, Zakrzewska JM, Abbott J, et al · Eur J Neurol · 2019</p><p class=\"paper-design\"><strong>研究設計：</strong>Systematic evidence review + GRADE / good-practice guideline。</p><p class=\"paper-finding\"><strong>核心發現：</strong>MRI 3D T2、3D TOF-MRA、3D T1-Gad；CBZ/OXC 首選；選定 classical TN 首先考慮 MVD。</p><p class=\"paper-limits\"><strong>研究限制：</strong>多項藥物與介入證據的 certainty 不高；guideline 不是單一 efficacy trial。</p><a class=\"paper-doi\" href=\"https://doi.org/10.1111/ene.13950\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀原始文章 · DOI: 10.1111/ene.13950</a></article><article class=\"paper-card\"><div class=\"paper-card-heading\"><span class=\"paper-index\">PAPER 04</span><span class=\"paper-type\">Clinical practice review</span></div><h4 class=\"paper-title\">Trigeminal neuralgia: a practical guide</h4><p class=\"paper-meta\">Lambru G, Zakrzewska JM, Matharu M · Pract Neurol · 2021</p><p class=\"paper-design\"><strong>研究設計：</strong>Narrative clinical practice review，整合 diagnosis/medical/surgical choices。</p><p class=\"paper-finding\"><strong>核心發現：</strong>支持 MRI etiologic work-up、CBZ/OXC、難治時選 MVD 或其他 neuroablative options。</p><p class=\"paper-limits\"><strong>研究限制：</strong>非新 randomized trial，不可編造 comparator-specific effect size。</p><a class=\"paper-doi\" href=\"https://doi.org/10.1136/practneurol-2020-002782\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀原始文章 · DOI: 10.1136/practneurol-2020-002782</a></article><article class=\"paper-card\"><div class=\"paper-card-heading\"><span class=\"paper-index\">PAPER 05</span><span class=\"paper-type\">Prospective observational cohort</span></div><h4 class=\"paper-title\">Five-year prospective outcomes of medical management and microvascular decompression in trigeminal neuralgia</h4><p class=\"paper-meta\">Worm J, Heinskou TB, Rochat P, et al · J Neurol · 2025</p><p class=\"paper-design\"><strong>研究設計：</strong>Prospective nonrandomized referral-center cohort；626 eligible，227 completed at 5 years（95 MVD、132 medical）。</p><p class=\"paper-finding\"><strong>核心發現：</strong>Medication-free pain freedom 59% MVD vs 19% medical，RR 3.03（95% CI 1.67–5.50）；postoperative hypoesthesia 23%，hearing impairment 7%。</p><p class=\"paper-limits\"><strong>研究限制：</strong>Attrition 399/626、非隨機治療分派、selection bias；不能直接做因果推論。</p><a class=\"paper-doi\" href=\"https://doi.org/10.1007/s00415-025-13447-9\" target=\"_blank\" rel=\"noopener noreferrer\">閱讀原始文章 · DOI: 10.1007/s00415-025-13447-9</a></article></div></details>",
        "<table><tr><th>文章</th><th>證據類型</th></tr><tr><td>ICHD-3</td><td>Classification / diagnosis</td></tr><tr><td>Cruccu 2016</td><td>Consensus grading</td></tr><tr><td>Bendtsen 2019</td><td>Systematic review / GRADE-guideline</td></tr><tr><td>Lambru 2021</td><td>Clinical narrative practice review</td></tr><tr><td>Worm 2025</td><td>Prospective observational cohort，非 random allocation</td></tr></table>",
        "<p>五年 Worm cohort：626 eligible、227 completed，MVD 95、medical 132。Medication-free pain freedom 為 59% vs 19%（RR 3.03，95% CI 1.67–5.50）。<strong>不能</strong>誤讀為 randomized efficacy，也不能忽略只完成 227/626 follow-up。</p><p><a href=\"https://doi.org/10.1212/WNL.0000000000002840\" target=\"_blank\" rel=\"noopener\">Cruccu</a> · <a href=\"https://doi.org/10.1111/ene.13950\" target=\"_blank\" rel=\"noopener\">EAN</a> · <a href=\"https://doi.org/10.1136/practneurol-2020-002782\" target=\"_blank\" rel=\"noopener\">Lambru</a> · <a href=\"https://doi.org/10.1007/s00415-025-13447-9\" target=\"_blank\" rel=\"noopener\">Worm</a></p>"
      ]
    },
    {
      "title": "讀完後的五題臨床整合",
      "en": "Board-style Synthesis",
      "sub": "先讀完，再查看答案。",
      "q": "先讀完，再查看答案。",
      "steps": [
        "可以從分型走到選藥與手術嗎？",
        "<p>閉書說明：ICHD-3 的 time/quality/trigger/distribution、classical 的神經形態變化、MRI 三種序列、CBZ/OXC 的安全性、MVD 與神經毀損性手術的不同。</p>",
        "<p>五個病例：① MRI 只有 contact；② 32 歲雙側痛合併 sensory deficit；③ OXC 後 confusion；④ NVC + refractory attacks；⑤ 五年 observational cohort 的數據。先自己寫下一步，再展開答案。</p>",
        "<div class=\"reveal\"><button class=\"reveal-btn\" type=\"button\">查看五題答案與逐題推理 <span class=\"chev\">⌄</span></button><div class=\"reveal-body\"><ol><li><strong>Idiopathic TN 較合理</strong>，contact 無 morphology 不符合 classical。</li><li><strong>MRI 排查 MS/brainstem lesion</strong>，有 secondary TN red flags。</li><li><strong>驗 serum sodium</strong> 並評估 OXC toxicity、腎功能與藥物交互作用。</li><li><strong>Neurosurgical MVD discussion</strong>，合適 NVC 且藥物失效/不耐。</li><li><strong>不可推論因果</strong>，2025 study 非隨機且有失訪與 selection bias。</li></ol></div></div>"
      ]
    }
  ],
  "mechanisms": {
    "tn-rez": {
      "title": "01 · Root entry zone & NVC",
      "subtitle": "CNS/PNS transition, compression not mere contact",
      "body": "<p>Proximal trigeminal root 在 pons 的 REZ 附近容易受血管 pulsation 影響。<strong>Classical TN 要求神經根移位/萎縮等形態變化</strong>，僅見血管接觸不能斷定病因。</p>"
    },
    "tn-myelin": {
      "title": "02 · Focal demyelination",
      "subtitle": "Loss of insulation increases abnormal excitability",
      "body": "<p>局灶受壓可造成 myelin damage、axonal damage，改變 conduction insulation。它在 classical TN 有解剖與病理支持，但不能說所有 idiopathic TN 都是同一病變。</p>"
    },
    "tn-ephaptic": {
      "title": "03 · Ephaptic transmission",
      "subtitle": "Cross-talk between neighboring nerve fibers",
      "body": "<p>局部 demyelinated fibers 的 electrical cross-talk 假說，解釋 innocuous Aβ touch 如何引發 pain-related discharges。<strong>這是有生理合理性的模型，不是常規個人檢驗</strong>。</p>"
    },
    "tn-ectopic": {
      "title": "04 · Ectopic firing",
      "subtitle": "High-frequency discharges and sodium-channel excitability",
      "body": "<p>受損纖維可能 ectopic high-frequency firing；CBZ/OXC 對電擊發作有效，符合 sodium-channel mechanism，但治療反應不能指定個人 ion channel molecular defect。</p>"
    },
    "tn-central": {
      "title": "05 · Central trigeminal pathways",
      "subtitle": "Background pain and central processing",
      "body": "<p>Brainstem trigeminal nuclei、thalamus 和 cortical networks 可以參與痛覺維持。Concomitant continuous pain 可能涉及額外的 central sensitization，但沒有可靠 CNS biomarker 可代替 ICHD criteria。</p>"
    },
    "tn-secondary": {
      "title": "06 · Secondary lesions",
      "subtitle": "MS plaque, CPA mass and neurovascular abnormality",
      "body": "<p>MS、CPA tumor 或 AVM 可能傷害 trigeminal system 而產生 secondary TN。雙側、明顯 numbness 或其他 cranial nerve signs 應促進 MRI，但典型單側 TN 也須影像評估。</p>"
    }
  },
  "updated": "2026-11-14",
  "review_status": "key-claims-cross-checked/full-clinician-review-pending"
};
