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
