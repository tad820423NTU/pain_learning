# Pain Study Room｜固定製作、驗證與發布工作流

版本：2026-11-05 v1.0

**唯一入口：在這個 ChatGPT 對話說「幫我做新的一章」。** 不需要自己切換 Notion、Work、Codex 或 GitHub。

## A. 指令如何解讀

- 「幫我做新的一章」：先讀取 Notion「一直複習」資料表當下排序及 GitHub 最新內容，選下一個尚未完成的正式章節。目前疼痛疾病／藥理／法規八大正式主題 CRPS、PHN、TN、PSPS2、Fibromyalgia、MPS、Opioid tolerance & OIH、Taiwan opioid regulation 皆有互動教材。下一個依 Notion 已確認順序的未完成主題候選為 Cervical Plexus（神經肌肉解剖）。；每次仍以最新資料為準。
- 「幫我做 XXX」：指定主題優先，避免重複建立既有 Notion 頁面。
- 「幫我補強 XXX 的致病機轉」：只修改所指定的內容，保留其餘資料、個人標記和閱讀進度。
- 遇到不能查證的數據、工具權限不足或發布失敗，立即標示阻礙，不可宣稱完成。

## B. 新增醫學教材

1. 先取最新 Notion 篇章、原始研究、教科書與 GitHub 網站版本，保留使用者修訂。
2. 以 Bonica 第五版、相關現行臨床指引、重要診斷研究、systematic review/meta-analysis、RCT 為主要來源。查 DOI、PMID、年份、PICO 與 follow-up，避免二手引用。
3. 疾病篇以十二章為參考（定義與分類、流行病學、Pathophysiology、臨床表現、診斷、鑑別、非藥物與整體治療、藥物、介入、臨床決策與預後、五篇關鍵研究、五題臨床題）。解剖用十章既有模板；法規/藥理按主題調整。不以固定字數充數。
4. 以英文慣用專業術語為主，首次必要時中文加英文，例如 central sensitization（中樞敏感化）；中文負責說明臨床邏輯。
5. 五篇真正重要且經核實的文獻須附 AMA citation、DOI/PMID、PICO、樣本、效果與 95% CI（確有資料才列）、limitations、臨床意義。另設五題 single-best-answer 臨床情境題，Notion 答案放摺疊區。
6. 將全文轉為網站互動課程。每個單元固定四階段：①認識概念 → ②理解機轉 → ③臨床連結 → ④自我整理。機轉複雜者使用 4–8 個可選擇機轉節點，區分 anatomy、molecular/pathway、symptoms 與 evidence boundaries。**先學習，再測驗。**

## C. 三項醫學品質閘門

| 檢驗 | 必須查核 | 沒通過怎麼處理 |
| --- | --- | --- |
| 豐富度 | Coverage matrix 包括定義、流行病學、完整機轉、症狀與臨床推理、診斷/鑑別、治療、追蹤/預後、情境教學 | 補上缺少的概念；不能以字數或章節數冒充完整 |
| 準確性 | 原始診斷準則、藥物劑量/renal adjustment/TFDA、RCT 效應量/CI、不同 subgroup 與研究設計、介入風險及證據等級 | 修正，或標示「待查證」；重要高風險資訊未核實則不視為醫學驗證通過 |
| 一致性 | 與 CRPS、PHN、既有篇章的英文術語、疾病分類、證據強度、四段教學及病例是否矛盾 | 進行 cross-chapter reconciliation，記錄衝突與修正 |

注意：自我查核能降低錯誤，不等於獨立醫師同儕審查。文獻存在不等於研究結論已準確引用。沒有核實的數字不要編造。

### Mechanism Atlas 視覺一致性規格（2026-11-20）

- **所有六節點機轉／制度圖譜都以 PHN 為參考範本**。使用既有 `.mechanism-grid` 或 `.mechanism-map`，共享網站全域 CSS，不要在新章只用未設定版面的六個 inline 按鈕。
- 桌機與平板為 **兩欄、三列、等寬、相同行高**。每格具編號（01–06）、完整標題與清楚的 selected state；窄手機螢幕（≤520px）改為整齊單欄，避免擠壓文字。
- 不因統一樣式刪減 mechanisms 的內容或例子；只改變按鈕的排列與點選後的解說容器。新課程應沿用該 UI 與共通的 `showMechanism` 行為。
- 回歸測試必須實際驗證每個 Atlas 的 **computed geometry**（欄數、按鈕等寬與對齊），而不只檢查「有六個按鈕」。同時核對 active state、detail text、無水平溢出及 notes/progress 原狀。

### 五篇核心文獻的固定顯示標準（2026-11-20）

- 疾病與藥理教學章節的五篇 Key Evidence，在**第二階段**提供一個預設收合的「延伸：五篇核心文章」區塊，每篇均需顯示：**完整英文文章標題、作者、期刊、年份、研究類型、研究設計、核實的主要結果、證據限制與原始 DOI**。沿用 `paper-collection / paper-card` 版型；不可只列五個 DOI。
- 內容從 Notion 對應的 Paper 1–5 原始證據卡同步，並針對 DOI / bibliographic metadata 查核。若尚未獲得可信來源核實，標示待查，不編造 effect size、作者或 DOI。
- **Taiwan Opioid Regulation** 以官方法源與國際政策文件為主，無 DOI 的來源不能硬加 DOI；**Pain Neurobiology** 基礎導讀不強制五篇文章。
- 視覺調整不得改動教學其他四階段、講義正文、使用者學習進度或 Notion 學習狀態。GitHub Actions 必須檢查各主題五張 article cards、可展開、標題/研究類型/結果/限制及每張 DOI 超連結。

## D. 統整和網站發布

1. Notion 保存完整醫學正文，GitHub Pages 保存可公開互動導讀。兩者目前由 ChatGPT 對照同步，**並非自動即時雙向同步**。
2. 新章更新首頁主題目錄、搜尋、分類、狀態、深連結；未完成的主題標示「規劃中」，完成互動教材但尚待完整查核的標示「可試讀」。
3. 保留原本的進度儲存鍵與筆記：CRPS 是 pain-study-room-crps-v1，其他課程沿用既有鍵名。未經相容性測試，不做破壞性儲存格式變更。
4. 進行桌機/平板/手機 Playwright smoke tests：首頁、4 格對齊、搜尋/篩選、所有章節入口、可點選的機轉、首頁往返、筆記、分享連結、JS errors、水平溢出。若新章引入額外互動，需新增對應測試。
5. 更新 QA_REPORT.md、qa-results.json、content-manifest.json、CHANGELOG.md，再使用已授權 GitHub 連線提交至 tad820423NTU/pain_learning 的 main。提交前先讀取 remote SHA，避免蓋掉非本次修改。
6. 查看 GitHub Pages build/deploy 結果，必要時查看實際公開頁面；僅當部署成功時回報「網站已更新」。發布網址維持 https://tad820423ntu.github.io/pain_learning/。
7. 每次交付簡潔回報：完成何章、來源與醫學驗證結果、功能測試結果、仍待查核清單，以及固定公開網址。

## E. 保護資料及讀書狀態

- 公開 repo 不能上傳病人個資、病歷、私人 Notion 連結、密碼、API key、未授權的教科書全文或圖片。
- Notion 大綱為「待撰寫」；完成全文為「待精讀」；使用者開始閱讀為「複習中」；完成闔書練習與測驗才可能是「已掌握」。
- AI 完成教材不等於使用者已閱讀，不可改寫 Bonica 的獨立讀書進度。
- 此工作流是每次受指示才執行，**不是背景自動更新**。

## F. 可直接使用的指令

- 幫我做新的一章。
- 幫我做 Trigeminal Neuralgia，按照我們的工作流。
- 幫我補強 PHN 的致病機轉並更新網站。
- 檢查網站最新版本的醫學準確性和前後一致性（只檢查，不新增）。
