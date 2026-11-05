# Pain Study Room｜初版品質稽核

**日期：2026-11-05**  
**狀態：可供公開試讀的教學原型。不是經同儕審查的完整醫學教材。**

## 1. 網站功能及排版

- Playwright + Chromium 自動化檢查：**31 通過，0 失敗**。結果見 [`qa-results.json`](qa-results.json)。
- 1440 px 桌機顯示四個等寬的學習流程，行為正常。
- 390 px 行動裝置顯示 2×2 的流程格，不產生水平溢出。
- CRPS 12 modules、PHN 13 modules、兩組各 6 個 mechanism buttons，切換成功。
- 主題圖書館、概念分段導航、臨床機轉面板能正常操作。
- 沒有發現瀏覽器 JavaScript runtime error。
- 公開版本不含私人 Notion 頁面網址或可見的個人身分識別資訊。
- 測試未涵蓋所有作業系統、無障礙驗證、網路攻擊測試或所有瀏覽器。

## 2. 醫學高影響量化證據交叉核對

以下僅是**指定重點聲明的查核**，並不代表教材每句話已驗證。

| 主題 | 核對的資料 | 結果 | 來源 |
| --- | --- | --- | --- |
| CRPS | Budapest clinical sensitivity 0.99、specificity 0.68；1994 IASP specificity 0.41 | 符合原文摘要 | [Harden et al. 2010](https://pubmed.ncbi.nlm.nih.gov/20493633/) |
| CRPS | ACCURATE 下肢 CRPS/causalgia，DRG vs SCS 3 個月 success 81.2% vs 55.7%，12 個月 74.2% vs 53.0% | 符合原文，不能外推所有部位／病因 | [Deer et al. 2017](https://pubmed.ncbi.nlm.nih.gov/28030470/) |
| CRPS | Bisphosphonates 11 RCT/754 人；短期 MD −10.0/100（CI −18.9 至 −1.1），low certainty | 符合 2026 研究摘要 | [Ferraro et al. 2026](https://pubmed.ncbi.nlm.nih.gov/41397259/) |
| CRPS | 2022 practical diagnostic and treatment guidelines, DOI | DOI/出版資訊正確 | [Harden et al. 2022](https://pubmed.ncbi.nlm.nih.gov/35687369/) |
| CRPS | NEJM 2025 Clinical Practice；most patients improve within 18 months | 符合摘要，非個體康復保證 | [Goebel 2025](https://www.nejm.org/doi/full/10.1056/NEJMcp2415752) |
| PHN | Pregabalin 300mg/day PHN ≥50% responder NNTB 5.3（CI 3.9–8.1）；600mg/day 3.9（3.1–5.5） | 符合 Cochrane 原文 | [Derry et al. 2019](https://doi.org/10.1002/14651858.CD007076.pub3) |
| PHN | ZOE-70 ≥70 歲 HZ efficacy 89.8%；pooled PHN efficacy 88.8%（CI 68.7–97.1） | 符合原文。此為 primary prevention efficacy，非治療效果 | [Cunningham et al. 2016](https://pubmed.ncbi.nlm.nih.gov/27626517/) |
| PHN | 2026 Korean Pain Society refractory PHN guideline | DOI、作者與出版資訊核對 | [Kang et al. 2026](https://pubmed.ncbi.nlm.nih.gov/41887754/) |
| PHN | 2026 mechanisms/stratified management narrative review | DOI、作者與研究類型核對 | [Tang & Zhao 2026](https://pubmed.ncbi.nlm.nih.gov/42377991/) |

## 3. 仍需進一步醫學審核的內容

- 所有藥物的臺灣適應症、TFDA 仿單、renal dose adjustment、特殊族群使用與現行疫苗政策，仍需做本地化逐項查核。
- CRPS steroid、ketamine、bisphosphonate 等非一致性用藥的研究方案、off-label 情境及 contraindications，尚未完成完整 dose-level 稽核。
- PHN 各種神經阻斷、PRF、SCS/DRG、BTX-A 的研究比較與推薦強度，應逐項對照原始 PICO；不同 neuropathic pain 疾病不可直接外推。
- 部分 glial、P2X4/BDNF、central sensitization 細節由模型與機轉研究支持，不能當作所有病人的確定分子病因。
- 每一個句子與來源的段落對照尚未全面完成。**自我驗證不能替代醫師/專家複核。**

## 4. 結論

**技術功能與主題呈現已通過本次自動化測試；關鍵文獻數字已做來源交叉驗證。** 目前宜標示「公開試讀版」，後續在臨床處置相關內容及引用深度完成逐篇稽核後，再升級為正式驗證版。
