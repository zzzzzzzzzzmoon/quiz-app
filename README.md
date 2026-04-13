# quiz-app

這個專案現在改成「每週題庫維護」模式。

## 題庫來源

- `5-測驗/3.pdf` 對應第 3 週
- `5-測驗/4.pdf` 對應第 4 週
- `5-測驗/5.pdf` 對應第 5 週
- `5-測驗/6.pdf` 對應第 6 週
- `5-測驗/7.pdf` 對應第 7 週

整理後的預設題庫放在：

- `data/weekly-question-bank.js`
- `data/custom-question-bank.js`

## 專案結構

目前前端已從單一 `index.html` 拆成下列結構：

- `index.html`
  頁面骨架，只放 HTML 結構與 script/style 載入。
- `styles/main.css`
  所有樣式集中在這裡。
- `scripts/question-bank.js`
  題庫版本、預設題庫組裝、題庫資料驗證。
- `scripts/storage.js`
  `localStorage` 讀寫，包含題庫、逐題進度、考試輪次紀錄。
- `scripts/exporters.js`
  匯出首頁統計圖片與交卷長圖。
- `scripts/app.js`
  畫面切換、刷題流程、統計更新、事件綁定。

後續若要維護功能，優先改對應模組，不要把邏輯再塞回 `index.html`。

## 後續新增第 8 週的方法

1. 打開 `data/weekly-question-bank.js`
2. 更新 `window.WEEKLY_QUESTION_BANK_VERSION`
3. 在 `window.WEEKLY_QUESTION_BANK` 陣列最後新增一個新的週次物件
4. 題目 `id` 請保持唯一，建議格式用 `w8-q01`、`w8-q02`
5. push 到 GitHub 後重新整理頁面

## 新增 GPT 產生的自訂題庫

如果你是請 GPT 幫你一次生一批題目，請改：

1. 打開 `data/custom-question-bank.js`
2. 更新 `window.CUSTOM_QUESTION_BANK_VERSION`
3. 把 GPT 給你的題目貼進 `window.CUSTOM_QUESTION_BANK = [ ... ]`
4. push 到 GitHub 後重新整理頁面

這樣自訂題目就不是只存在瀏覽器，而是會跟著專案一起部署出去。

注意：

- `data/custom-question-bank.js` 裡的題目在頁面中會統一歸類成 `期中考自訂題目`
- 不需要手動再分週次

## 每一週的格式

```js
{
  id: 'week8',
  number: 8,
  label: '第 8 週',
  sourceFile: '5-測驗/8.pdf',
  questions: [
    {
      id: 'w8-q01',
      type: '單選題',
      question: '題目內容',
      options: ['A', 'B', 'C', 'D'],
      answer: 0,
      explanation: '解析內容'
    }
  ]
}
```

## 自訂題庫格式

```js
window.CUSTOM_QUESTION_BANK = [
  {
    id: 'custom-001',
    type: '單選題',
    question: '題目內容',
    options: ['A', 'B', 'C', 'D'],
    answer: 0,
    explanation: '解析內容'
  }
];
```

## 統計邏輯

- `錯題數`
  以「曾經答錯過的唯一題目數」計算，不會因為同一題錯很多次而重複累加。
- `總作答次數`
  以「完成一整輪考試」算 1 次，不是逐題累加。
- `平均正確率`
  先算每一輪考試的正確率，再取所有輪次的平均值。

## 如果更新後還是看到舊題目

這個網站會把題庫和作答紀錄存到瀏覽器 `localStorage`。

處理方式：

- 先重新整理頁面
- 再按頁面上的「還原每週預設題庫」

目前程式已經支援預設題庫版本更新，正常情況下會自動把舊版內建題庫換成新版。
