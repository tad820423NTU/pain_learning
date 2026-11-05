# Pain Study Room｜疼痛專科互動學習室

這是公開閱讀的疼痛醫學分段學習網站。**目前為 public preview（公開試讀版），不是已完成臨床專家審閱的醫學教材。**

## 使用方式

網站以「① 認識概念 → ② 理解機轉 → ③ 臨床連結 → ④ 自我整理」逐步教學，先讀懂再練習。桌機四格同列，手機 2×2。

- **CRPS**：12 個完整互動導讀單元、6 個 pathophysiology 節點。
- **PHN**：13 個完整互動導讀單元、6 個 pathophysiology 節點。
- **Pain neurobiology**：4 個基礎導讀單元。
- **其他主題**：目前僅有目錄或規劃，尚未完成教材。

網站是沒有後端的靜態 HTML。個人閱讀進度與筆記儲存在自己瀏覽器的 localStorage，**不會跨裝置自動同步**。

## GitHub Pages 公開發布

這個 repository 的 `main` 分支根目錄已有 `index.html`。要啟用網站：

1. 開啟本 repository 的 **Settings → Pages**。
2. **Build and deployment → Source** 選 **Deploy from a branch**。
3. **Branch** 選 **main**，資料夾選 **/(root)**，按 **Save**。
4. 待 Pages 顯示正式發布網址後，即可公開分享。未完成啟用前，不能認定網站已公開上線。

預期形式為 `https://tad820423NTU.github.io/pain_learning/`，但必須以 GitHub Pages 實際顯示的 URL 為準。

## 內容更新與品質原則

- 以獨立醫學正文、Bonica、原始 clinical guideline、systematic review、RCT 為基礎。
- 每次更新應查核內容**豐富度、醫學準確性、前後一致性**，保留中英並列專業術語與四階段教學。
- 量化結果要記錄 PICO、population、outcome、confidence interval、follow-up、限制，避免誤把機轉假說當成已證實療效。
- 不得只因 HTML 可運作，就宣稱臨床藥物劑量、適應症與醫療資訊已全部審核。
- `QA_REPORT.md` 記錄本版測試與仍待驗證項目；`content-manifest.json` 是目前教材完成度的來源；`CHANGELOG.md` 記錄更新。
- 後續改版請優先更新同一個 repository，而不是產生多個獨立下載版本。

## 公開與隱私

這個 GitHub repository 為 **Public**。請勿提交病人資料、未授權的教科書原文/圖表、私人 Notion workspace 連結、帳號密碼或 API 金鑰。本站僅供醫學教育使用，不能取代臨床判斷、個別診療或最新臺灣藥品仿單。
