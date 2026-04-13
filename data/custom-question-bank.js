
// 使用方式：
// 1. 把 GPT 產生的題目貼到下面陣列裡。
// 2. 每次修改後，請同步更新上面的版本字串。
// 3. 題目格式請維持：
//    id, category, type, question, options, answer, explanation
// 4. category 可以寫成「自訂題庫」或「期中考」這類你想顯示在下拉選單裡的名稱。

window.CUSTOM_QUESTION_BANK_VERSION = '2026-04-13-midterm-50';

window.CUSTOM_QUESTION_BANK = [
  {
    id: 'mid-001',
    category: '基本文字處理',
    type: '觀念題',
    question: '抓取討論版資料時，以下哪一項最完整地涵蓋應注意的事項？',
    options: ['確定合適的討論版', '訂定適當的關鍵字', '設定白名單與黑名單', '以上皆是'],
    answer: 3,
    explanation: '抓取資料時，資料來源、關鍵字、白名單與黑名單都要一起考量，才能提高資料相關性。'
  },
  {
    id: 'mid-002',
    category: '基本文字處理',
    type: '判斷題',
    question: '以下哪一項不是抓取與初步清理文字資料時要做的工作？',
    options: ['標詞性', '去除格式化符號', '去除特殊符號', '全形轉半形'],
    answer: 0,
    explanation: '標詞性通常是在斷詞之後、分析重要字詞時才進行，不屬於最前面的抓取與初步清理工作。'
  },
  {
    id: 'mid-003',
    category: '基本文字處理',
    type: '應用題',
    question: '以下哪一項通常不是去除停用字之後的應用？',
    options: ['文字雲', '字詞共現圖', '找出討論議題', '句子翻譯'],
    answer: 3,
    explanation: '句子翻譯需要保留完整語句資訊，若先去掉停用字，常會破壞原句意思。'
  },
  {
    id: 'mid-004',
    category: '基本文字處理',
    type: '觀念題',
    question: '有關中文斷詞的敘述，以下何者正確？',
    options: ['要先標好詞性才來斷詞', '好的斷詞結果常需要輔助詞庫或領域字典', '斷詞前應該先去除停用字', '以上皆非'],
    answer: 1,
    explanation: '斷詞通常先於標詞性與停用字處理，而中文斷詞常需要自建詞庫來改善結果。'
  },
  {
    id: 'mid-005',
    category: '基本文字處理',
    type: '細節題',
    question: '以下哪一個符號通常不是拿來當句子分隔符號？',
    options: ['、', '。', '；', '？'],
    answer: 0,
    explanation: '頓號通常用於列舉，不是主要的斷句符號；句號、分號、問號較常作為句界。'
  },
  {
    id: 'mid-006',
    category: '基本文字處理',
    type: '判斷題',
    question: '以下有關詞性標記的敘述，何者為非？',
    options: ['每種語言都有詞性', 'JJ 常表示形容詞', 'NN 常表示名詞', 'VB 表示副詞'],
    answer: 3,
    explanation: 'VB 代表動詞，不是副詞；副詞常見標記是 RB。'
  },
  {
    id: 'mid-007',
    category: '基本文字處理',
    type: '綜合題',
    question: '以下有關停用字的敘述何者正確？',
    options: ['不同語言有不同的停用字集', '若不排除停用字，文字雲裡常會充滿停用字', '為了較好的斷詞結果，有時也會把停用字放進斷詞字典', '以上皆是'],
    answer: 3,
    explanation: '停用字的處理會依語言與任務而不同，而且在某些工具流程中，停用字也可能先納入字典以利斷詞。'
  },
  {
    id: 'mid-008',
    category: '基本文字處理',
    type: '名詞題',
    question: '以下哪一個概念是把字詞還原成原型（lemma）？',
    options: ['Stemming', 'POS', 'Lemmatization', 'Word Segmentation'],
    answer: 2,
    explanation: 'Lemmatization 是把字詞還原成較標準的字典型態，例如 remaining 變成 remain。'
  },
  {
    id: 'mid-009',
    category: '基本文字處理',
    type: '比較題',
    question: '以下關於字詞共現圖的敘述，何者正確？',
    options: ['高頻字一定會出現在字詞共現圖中', '兩個高頻且常一起出現的字，較可能出現在字詞共現圖中', '一個群聚的字越多，代表這個主題的文件數一定越多', '只要做完斷詞就一定能得到高品質字詞共現圖'],
    answer: 1,
    explanation: '字詞共現圖不只看單字高頻，還看彼此共同出現的關係；群聚大不代表該主題文件數一定更多。'
  },
  {
    id: 'mid-010',
    category: '基本文字處理',
    type: '定義題',
    question: '基本文字資料處理的核心目標，最接近以下哪一項？',
    options: ['把所有句子都翻譯成英文', '把每篇文章壓縮成最短摘要', '從適當文本中找出重要字詞', '只保留名詞刪除其他詞性'],
    answer: 2,
    explanation: '課堂把基本自然語言處理的目標定義為：從適當文本中找出重要字詞。'
  },

  {
    id: 'mid-011',
    category: '情緒分析',
    type: '定義題',
    question: 'Sentiment analysis 的主要目的為何？',
    options: ['判斷文章、句子或目標的情緒取向', '只找出憤怒與高興等一時情緒', '把句子切成字詞', '找出作者真實身分'],
    answer: 0,
    explanation: 'Sentiment analysis 重點在於判斷正負向等評價取向，而不只是描述暫時的情緒種類。'
  },
  {
    id: 'mid-012',
    category: '情緒分析',
    type: '應用題',
    question: '在以下哪一種資料中，通常最難直接決定情緒分析的對象？',
    options: ['廣泛新聞資料', '特定議題討論版留言', '特定產品討論版評論', '品牌專屬客服評論'],
    answer: 0,
    explanation: '廣泛新聞常沒有明確單一的情緒對象；但特定議題或產品評論通常有比較清楚的目標。'
  },
  {
    id: 'mid-013',
    category: '情緒分析',
    type: '字典題',
    question: '以下有關 LIWC 字庫的敘述，何者正確？',
    options: ['LIWC 只分正面與負面', 'LIWC 只有英文版本', 'LIWC 會替每個字給 0 到 1 的情緒強度', 'LIWC 可用來找出主觀句子或主觀字詞線索'],
    answer: 3,
    explanation: 'LIWC 不只包含正負向，還有其他心理與語言類別，也不是只有英文字。'
  },
  {
    id: 'mid-014',
    category: '情緒分析',
    type: '字典題',
    question: '以下有關 NRC 字庫的敘述，何者正確？',
    options: ['NRC 僅區分正負面', 'NRC 裡每個字可以對應多個類別', 'NRC 只有英文', 'NRC 不包含情緒類別'],
    answer: 1,
    explanation: 'NRC 不只分正負向，也包含 anger、joy、fear、trust 等多種情緒類別，而且一個字可能對應多個類別。'
  },
  {
    id: 'mid-015',
    category: '情緒分析',
    type: '觀念題',
    question: '以下哪些詞性的字有可能成為情緒字？',
    options: ['只有形容詞', '只有動詞', '只有名詞', '形容詞、動詞、名詞都可能'],
    answer: 3,
    explanation: '情緒相關詞不只會出現在形容詞，也可能是動詞或名詞。'
  },
  {
    id: 'mid-016',
    category: '情緒分析',
    type: '限制題',
    question: '情緒分析的字典法較不適合以下哪一種情況？',
    options: ['Sentence-level 分析', 'Document-level 分析', '諷刺句分析', '產品評論分析'],
    answer: 2,
    explanation: '諷刺句常用反話，單靠情緒字典容易誤判。'
  },
  {
    id: 'mid-017',
    category: '詞性與NER',
    type: '功能題',
    question: '以下哪些是 Stanford coreNLP NER 可以辨識的實體類型？',
    options: ['Person', 'Country', 'Ideology', '以上皆是'],
    answer: 3,
    explanation: '課堂提到 coreNLP 的 NER 類型相當多，包含 Person、Country、Ideology 等。'
  },
  {
    id: 'mid-018',
    category: '詞性與NER',
    type: '例題',
    question: '句子 US officials will visit China next week ... communist China. 中，以下哪個敘述有誤？',
    options: ['有三個 COUNTRY', '有一個 DATE', '有一個 IDEOLOGY', '有一個 CAUSE_OF_DEATH'],
    answer: 3,
    explanation: '該句可以辨識出 COUNTRY、DATE、IDEOLOGY，但沒有 CAUSE_OF_DEATH。'
  },
  {
    id: 'mid-019',
    category: '詞性與NER',
    type: 'Lemmatization',
    question: '以下哪個字在 lemmatization 後會與原字不同？',
    options: ['China', 'remaining', 'trade', 'communist'],
    answer: 1,
    explanation: 'remaining 經 lemmatization 後可還原為 remain。'
  },
  {
    id: 'mid-020',
    category: '情緒分析',
    type: '進階字典法',
    question: '用進階字典法決定句子情緒時，需要考慮哪些因素？',
    options: ['Sentiment words', 'Amplifier', 'Negation', '以上皆是'],
    answer: 3,
    explanation: '進階字典法通常至少要同時考慮情緒字、加強字與否定字。'
  },

  {
    id: 'mid-021',
    category: '文件表示',
    type: '定義題',
    question: 'Bag of Words 最接近以下哪種文件表示方式？',
    options: ['用字詞出現次數或是否出現來表示文件', '把句子全部翻譯成向量', '只保留關鍵字的情緒分數', '把作者與日期當成唯一特徵'],
    answer: 0,
    explanation: 'Bag of Words 主要以字詞的出現與次數來表示文件，不直接保留語序結構。'
  },
  {
    id: 'mid-022',
    category: '文件表示',
    type: 'TF-IDF概念',
    question: '使用 TF-IDF 表示文件時，向量的維度和值通常分別代表什麼？',
    options: ['維度是文件；值是作者', '維度是字詞；值是字詞的重要性', '維度是句子；值是詞性', '維度是情緒；值是主題'],
    answer: 1,
    explanation: 'TF-IDF 向量的維度通常是字詞，數值代表該字詞在該文件中的重要程度。'
  },
  {
    id: 'mid-023',
    category: '文件表示',
    type: '計算題',
    question: '某文件 A 有 256 個字，字詞「分析」在其中出現 8 次，則它在文件 A 的 TF 值為何？',
    options: ['1/8', '1/32', '1/64', '1/16'],
    answer: 1,
    explanation: 'TF = 該字在文件中的次數 / 文件總字數 = 8 / 256 = 1/32。'
  },
  {
    id: 'mid-024',
    category: '文件表示',
    type: '計算題',
    question: '若共有 100000 篇文章，其中「分析」出現在 100 篇文章，則該字的 IDF 約為何？',
    options: ['2', '8', '1', '3'],
    answer: 3,
    explanation: 'IDF = log(100000 / 100) = log(1000) ≈ 3。'
  },
  {
    id: 'mid-025',
    category: '文件表示',
    type: '觀念題',
    question: '以下有關 TF-IDF 的敘述何者正確？',
    options: ['同一文件裡各字的 TF 值都相同', '同一文件裡各字的 IDF 值都相同', '同一文件裡各字的 TF-IDF 值都相同', '同一個字在不同文件中的 IDF 值相同'],
    answer: 3,
    explanation: 'IDF 是字詞層級的全域衡量，跟字在整個語料庫出現的文件數有關，因此同一個字跨文件會共享同一個 IDF。'
  },
  {
    id: 'mid-026',
    category: '文件表示',
    type: '相似度題',
    question: '若兩篇文件的 TF-IDF 向量完全相同，則下列何者為真？',
    options: ['Euclidean distance 為 0', 'Cosine similarity 為 1', 'Pearson correlation 為 1', '以上皆是'],
    answer: 3,
    explanation: '兩個向量完全相同時，距離為 0、夾角相似為 1、線性相關也為 1。'
  },
  {
    id: 'mid-027',
    category: '文件表示',
    type: 'N-gram',
    question: '以下何者不是 n-gram model 的典型應用範圍？',
    options: ['打字時猜下一個字母', '寫作時建議下一個字或片語', '語音轉文字時提高正確率', '生產良率預測'],
    answer: 3,
    explanation: 'n-gram 屬於文字與序列語言模型的應用，不是一般製造良率預測的核心方法。'
  },
  {
    id: 'mid-028',
    category: '文件表示',
    type: '字詞共現圖',
    question: '以下有關字詞共現圖（Word Correlation Network）的敘述，何者為偽？',
    options: ['出現的字詞頻率常需高於某個門檻值', '線連接的兩字詞其相關性常需高於某個門檻值', '降低門檻值可以減少出現的字詞或線', '可以根據文件的 TF-IDF 向量來計算後繪圖'],
    answer: 2,
    explanation: '降低門檻通常會讓更多字詞與線被保留下來，而不是更少。'
  },
  {
    id: 'mid-029',
    category: '文件表示',
    type: '定義題',
    question: 'n-gram 最準確的定義為何？',
    options: ['文本中連續的 n 個項目序列', '文本中出現頻率最高的 n 個字', '一篇文章前 n 句的摘要', '一段文字中所有名詞的集合'],
    answer: 0,
    explanation: 'n-gram 指的是文本中連續的 n 個 items，可以是字母、詞或其他單位。'
  },
  {
    id: 'mid-030',
    category: '文件表示',
    type: '語言模型',
    question: 'n-gram 語言模型主要在做什麼？',
    options: ['根據作者資訊預測主題', '把文件壓縮為固定長度向量', '根據前面 n-1 個字來預測下一個字', '只用來計算 TF 值'],
    answer: 2,
    explanation: 'n-gram language model 的核心是：根據前面若干個字詞，估計下一個字詞的機率。'
  },

  {
    id: 'mid-031',
    category: '文件分類',
    type: '訓練資料題',
    question: '以下有關文件分類訓練資料集的敘述，何者為非？',
    options: ['文件需要人工標籤', '可用 TF-IDF 當文件特徵向量', '可表示成 document-term matrix', '一個文件可同時有多個類別'],
    answer: 3,
    explanation: '依本課傳統單標籤分類設定，一份訓練文件通常只對應一個類別。'
  },
  {
    id: 'mid-032',
    category: '文件分類',
    type: '資料特性',
    question: '以下有關文件資料集的敘述何者正確？',
    options: ['通常文件特徵向量的維度很小', '一個文件裡大部分的特徵值通常為 0', '通常文件的類別會很多很多', '測試時間通常比訓練時間更長'],
    answer: 1,
    explanation: '文件以字詞為特徵時，維度高且稀疏，因此大多數特徵值為 0。'
  },
  {
    id: 'mid-033',
    category: '文件分類',
    type: '特徵題',
    question: '以下哪一種特徵值通常不是直接從文件內容本身取得？',
    options: ['文件作者', '文件字數', '文件可讀性', '平均句子長度'],
    answer: 0,
    explanation: '作者屬於 metadata，不一定能從文本內容直接推導；其他項目則通常可從文件內容計算。'
  },
  {
    id: 'mid-034',
    category: '文件分類',
    type: '方法題',
    question: '以下哪一種分類方法不需要先訓練出數學分類模型？',
    options: ['Logistic Regression', 'Decision Tree', 'SVM', 'KNN'],
    answer: 3,
    explanation: 'KNN 是 memory-based 方法，分類時直接參考訓練樣本，不像其他方法要先學出參數模型。'
  },
  {
    id: 'mid-035',
    category: '文件分類',
    type: '效率題',
    question: '以下哪一種分類方法的分類時間，較容易跟訓練資料集大小成正比？',
    options: ['Logistic Regression', 'Decision Tree', 'SVM', 'KNN'],
    answer: 3,
    explanation: 'KNN 在分類時要查詢訓練集中與測試樣本最接近的文件，因此訓練集越大通常越慢。'
  },
  {
    id: 'mid-036',
    category: '文件分類',
    type: '功能題',
    question: '通常分類器無法直接提供以下哪一種資訊？',
    options: ['這份文件屬於哪個類別', '這份文件屬於各類別的機率', '每個特徵的重要性', '哪些特徵一定是多餘的'],
    answer: 3,
    explanation: '判斷特徵是否多餘，常需要額外做特徵選擇或共線性分析，不是一般分類器直接保證提供的資訊。'
  },
  {
    id: 'mid-037',
    category: '文件分類',
    type: '評估題',
    question: '以下哪些都可用來衡量分類器效能？',
    options: ['Specificity', 'Precision', 'Recall', 'Sensitivity', '以上皆是'],
    answer: 4,
    explanation: 'Precision、Recall 在資訊檢索與電腦科學常用；Sensitivity、Specificity 在醫學與統計也常用。'
  },
  {
    id: 'mid-038',
    category: '文件分類',
    type: '應用題',
    question: '若一個 Covid-19 測試劑的目標是「不要漏掉任何一個感染者」，最應優先追求哪個指標？',
    options: ['Precision 100%', 'Recall 100%', 'Accuracy 100%', 'F1 100%'],
    answer: 1,
    explanation: '不要漏掉感染者表示假陰性 FN 要盡量為 0，因此 Recall 需盡量接近 100%。'
  },
  {
    id: 'mid-039',
    category: '文件分類',
    type: 'ROC題',
    question: '以下關於 ROC 圖的敘述，何者為非？',
    options: ['對同一方法而言，sensitivity 越大則 specificity 也越大', '若 recall = 1，則 specificity 可能降到很低', 'ROC 對角線代表隨機猜測表現', 'AUC 可作為 ROC 的整體衡量指標'],
    answer: 0,
    explanation: 'ROC 圖上 sensitivity 增加時，常伴隨 1-specificity 增加，也就是 specificity 下降。'
  },
  {
    id: 'mid-040',
    category: '文件分類',
    type: '實務題',
    question: '使用傳統方法做文件分類時，以下哪項敘述最合理？',
    options: ['通常需要足夠的訓練資料', '每個類別的文件數不宜太少', '各類別資料量不要差太多通常較理想', '以上皆是'],
    answer: 3,
    explanation: '在傳統文本分類中，資料量、各類樣本充足度與類別平衡都會影響模型效果。'
  },

  {
    id: 'mid-041',
    category: 'AI倫理',
    type: '平台與資訊',
    question: '以下有關社群平台推薦演算法的敘述，何者正確？',
    options: ['主要目標是讓使用者更客觀理解事實', '常優先推薦你目前喜歡的內容，可能造成同溫層', '會自然降低群體分化', '主要作用只是提升資料清理品質'],
    answer: 1,
    explanation: '課堂強調推薦演算法常強化黏著度與既有偏好，結果可能形成同溫層與分化。'
  },
  {
    id: 'mid-042',
    category: 'AI倫理',
    type: '誤導訊息',
    question: '以下哪一種做法最符合「誤導的訊息」常見的問題？',
    options: ['把文本做 TF-IDF 向量化', '把類別不平衡資料重抽樣', '把相關性直接解釋成因果關係', '使用白名單與黑名單'],
    answer: 2,
    explanation: '課堂特別指出，將相關性直接說成因果性，是非常常見的誤導方式。'
  },
  {
    id: 'mid-043',
    category: 'AI倫理',
    type: '倫理觀念',
    question: '以下哪一項最符合隱私性（Privacy）的倫理概念？',
    options: ['某些資訊即使揭露不違法，也可能對個人造成傷害', '只要合法就完全沒有倫理疑慮', '隱私只跟醫療資料有關', '隱私與 AI 系統無關'],
    answer: 0,
    explanation: '課堂強調隱私不只是法律問題，某些揭露即使合法，仍可能對個人帶來實質傷害。'
  },
  {
    id: 'mid-044',
    category: 'AI倫理',
    type: '倫理觀念',
    question: '可究責性（Accountability）最核心在問什麼？',
    options: ['誰的模型準確率最高', '誰應該為什麼事負責', '誰的資料量最大', '誰的介面最好看'],
    answer: 1,
    explanation: 'Accountability 的重點不是技術表現，而是責任歸屬與問責。'
  },
  {
    id: 'mid-045',
    category: 'AI倫理',
    type: '倫理觀念',
    question: '透明性與可解釋性（Transparency & Explainability）最強調下列哪一組內容？',
    options: ['只要知道輸入資料量即可', '只要知道模型名稱即可', '只要知道結果正不正確即可', '需要知道風險，並理解建議是如何做出的'],
    answer: 3,
    explanation: '透明與可解釋不只看答案本身，還包括風險與決策形成方式。'
  },
  {
    id: 'mid-046',
    category: 'AI倫理',
    type: '倫理觀念',
    question: '知情同意（Informed Consent）通常包括哪些要素？',
    options: ['揭露與瞭解', '自主與確認', '只要簽名即可', '揭露、瞭解、自主、確認'],
    answer: 3,
    explanation: '課堂將知情同意拆成揭露、瞭解、自主、確認四個要素。'
  },
  {
    id: 'mid-047',
    category: 'AI倫理',
    type: '公平性',
    question: '人口學公平性（Demographic Parity）最接近哪個定義？',
    options: ['不同群體有同等機會被選到', '相似個體應有相似結果', '能力高的人一定要被選到', '所有群體都要有完全相同比例的結果與能力'],
    answer: 0,
    explanation: 'Demographic Parity 著重的是不同群體在結果上有相近的被選取機會。'
  },
  {
    id: 'mid-048',
    category: 'AI倫理',
    type: '公平性',
    question: '機會的平等（Equality of Opportunity）最接近以下哪個敘述？',
    options: ['所有人不看能力都要被選到', '在每個群體中，有能力的人有同等機會被選到', '只保障少數群體', '只要求結果比例相同'],
    answer: 1,
    explanation: 'Equality of Opportunity 的重點是：在不同群體裡，符合條件、有能力的人應有相等機會。'
  },
  {
    id: 'mid-049',
    category: 'AI倫理',
    type: '公平性',
    question: '個體公平性（Individual Fairness）主要強調什麼？',
    options: ['少數群體一定要有更多名額', '不同群體要完全相同結果', '類似條件的人應得到類似結果', '所有人都要拿到一樣的分數'],
    answer: 2,
    explanation: '個體公平性不是看群體比例，而是看條件相近的個體是否受到相近對待。'
  },
  {
    id: 'mid-050',
    category: 'AI倫理',
    type: '應用題',
    question: '以下哪些都屬於課堂提到的具爭議 AI 應用？',
    options: ['通緝犯辨識', '罪犯保釋判斷', '申請者過濾（ATS）', '以上皆是'],
    answer: 3,
    explanation: '課堂舉出的爭議 AI 應用包含通緝犯辨識、保釋判斷、ATS，以及行銷／選舉操作等。'
  }
];