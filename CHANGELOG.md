# Changelog

## 2026-11-05 — Public preview

- 保留既有 CRPS 12 單元、PHN 13 單元、Pain neurobiology 4 單元。
- 修正桌機首頁四步驟為等寬同列；閱讀導覽也為等寬四格。小螢幕自動排列為 2×2。
- 公開版本去除私人 Notion 頁面網址及個人識別資料。
- 重要研究結果逐項對照原始文獻，加入 `QA_REPORT.md` 和 QA 結果檔。
- 保持其他未撰寫主題為「規劃中」，不誤標為完成。
- 這次是靜態網站公開試讀初版，非已完成臨床專家審閱的成品。

## 2026-11-05 — Topic homepage and standard workflow

- 新增真正的主題首頁、3 個可學習課程及全部 26 個主題目錄，支援搜尋與分類。
- 新增 #/topic/crps、#/topic/phn、#/topic/basics 可分享的主題連結，以及從課程返回首頁的導覽。
- 保留 CRPS 12、PHN 13、Pain neurobiology 4 個單元；與原始公開版比對，原有教材資料未變動。
- 首頁四階段桌機 1×4、手機 2×2；三種尺寸執行 66 項瀏覽器 smoke tests，均通過（測試環境以 localStorage shim 模擬存取）。
- 新增 WORKFLOW.md，規範未來「幫我做新的一章」的研究、三道醫學品質閘門、整合、QA 與 GitHub 更新流程。
- 醫學全文未完成獨立專家審閱，持續標示公開試讀版。

## 2026-11-14 — TN + Fibromyalgia deep learning release

- 依 Bonica 5th Ch66 與 Ch36、ICHD-3、EAN、ACR/EULAR 與重要原始研究完成 Trigeminal Neuralgia 和 Fibromyalgia 兩篇 Notion 正文，各 12 章、6 個 pathophysiology nodes、5 篇 evidence cards、5 題單選臨床題（摺疊解析），狀態維持待精讀。
- 網站新增 TN 和 FM 各 12 個互動單元、每章 4 階段，mechanism atlas 各 6 個節點。CRPS 12、PHN 13、Pain neurobiology 4 的內容與舊 storage keys 均未修改。
- 首頁由 3 個可學習主題增為 5 個；其餘 21 個主題仍標規劃中，支援 #/topic/tn 和 #/topic/fibro。
- 將 TN 和 Fibro 課程拆出獨立 public local JS 檔 chapters/tn.js、chapters/fibro.js，不包含私人 Notion URL 或受版權保護的教科書正文。
- 以 GitHub Actions Playwright smoke suite 執行桌機／平板／手機 QA，實際結果以 workflow logs 為準。臨床內容仍為公開試讀、非完整獨立醫師審查版本。

## 2026-11-14 — Browser favicon

- 新增 `favicon.svg`，以網站現有的深藍圓角方形與白色 Georgia 字體 P 作為瀏覽器分頁與書籤 favicon。
- `index.html` 宣告版本化 SVG favicon 路徑，未修改既有五個學習主題、閱讀進度鍵或互動機制。

## 2026-11-15 — PSPS Type 2 / FBSS 與 Myofascial Pain Syndrome

- 依 Bonica 第五版 Ch75 / Ch35 完成兩篇原 Notion 正文，各 12 章、6 機轉、5 篇 DOI 文獻、5 題摺疊解析，均待精讀。
- GitHub 新增 chapters/psps2.js、chapters/mps.js，各 12 個四階段單元與六機轉。首頁更新 7 個可閱讀課程、19 個規劃中主題，深連結 #/topic/psps、#/topic/mps。
- PSPS2 結合 PROCESS RCT vs 2023 Cochrane sham evidence 的 PICO 差異；MPS 區分觸診共識、可靠度及注射/乾針療效。
- 新版 GitHub Actions Playwright 設計 120 項回歸測試，以實際日誌判定通過；仍為醫學公開試讀、非全面專家驗證。

## 2026-11-15 — Opioid Tolerance/OIH 與 Taiwan Opioid Regulation

- 完成既有 Notion 兩篇大綱的正式正文：OIH 12 章、法規與國際比較13章，各6機轉／制度節點、5份核心原始研究或官方法源、5題四選一含摺疊解析。Notion 均待精讀、掌握度未評估。
- 新增 chapters/oih.js（12×4 learning stages）、chapters/reg.js（13×4 learning stages），接入七個舊課程但不改變舊 storage keys。
- 首頁從7個可讀主題增至9個，規劃中17個；公開深連結 #/topic/oih 與 #/topic/reg。
- 醫學上區分 opioid tolerance／withdrawal／OUD／OIH；RVM/NMDA/HCN2 的 preclinical evidence 不等於臨床診斷。
- 台灣法律與行政指引及國際 CDC 2022／Canada 2017／NICE 2021 分別標示來源與適用族群。TFDA 2022 100 MEDD 為審慎重新評估參考，不是法律硬上限。
- Playwright 三種 viewport 跨七個舊課程與兩篇新課程，預計156項；最終以 GitHub Actions 事實結果為準。
- 全篇的台灣藥品逐品項仿單與健保給付、最新法規修訂及外部法律/醫師完整審查仍待核對，維持 public-preview status。

## 2026-11-20 — Unified Mechanism Atlas layout

- 以 PHN 的 2×3 等寬 Mechanism Atlas 作為全部八個圖譜的共通樣式；補上 `.mechanism-map` 的 grid 排版、01–06 視覺編號、按鈕 hover/focus 與手機單欄規則。
- 擴充 Playwright QA：八個圖譜在桌機、平板與手機均加入欄數／等寬／對齊檢查，GitHub Actions [run #44686563119](https://github.com/tad820423NTU/pain_learning/actions/runs/44686563119) **180/180 通過**。
- 只修改網站的 CSS、回歸測試與維護文件，保留九個主題的醫學內容、課程資料和閱讀進度。
