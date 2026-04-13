window.WEEKLY_QUESTION_BANK_VERSION = '2026-04-13';

// 維護方式：
// 1. 每新增一週，就照下面格式新增一個 week 物件。
// 2. 題目 id 請保持唯一，建議使用 w8-q01 這種命名。
// 3. 修改預設題庫後，請同步更新上方版本字串，讓瀏覽器自動套用新版題庫。
window.WEEKLY_QUESTION_BANK = [
  {
    id: 'week3',
    number: 3,
    label: '第 3 週',
    sourceFile: '5-測驗/3.pdf',
    questions: [
      {
        id: 'w3-q01',
        type: '單選題',
        question: '以下何者是抓取討論版資料時要注意的事項？',
        options: ['確定合適的討論版', '訂定適當的關鍵字', '設定白名單', '設定黑名單', '以上皆是'],
        answer: 4,
        explanation: '抓取討論版資料時，討論版選擇、關鍵字設定、白名單與黑名單都需要一併考量。'
      },
      {
        id: 'w3-q02',
        type: '單選題',
        question: '以下何者不是抓取和清理資料時要做的工作？',
        options: ['標詞性', '去除格式化符號', '去除特殊符號', '全形轉半形'],
        answer: 0,
        explanation: '標詞性通常是後續分析重要字詞時才會進行，不屬於前面的抓取與清理工作。'
      },
      {
        id: 'w3-q03',
        type: '單選題',
        question: '以下何者不是去除停用字後的應用？',
        options: ['文字雲', '字詞共現圖', '找出討論議題', '句子翻譯', '找出情緒'],
        answer: 3,
        explanation: '句子翻譯需要保留完整字詞脈絡，不能先把停用字去掉。'
      },
      {
        id: 'w3-q04',
        type: '單選題',
        question: '有關斷詞的敘述何者正確？',
        options: ['要先標好詞性才來斷詞', '好的斷詞結果常需要輔助詞庫，例如領域字典', '斷詞前應該先去除停用字（stopwords）', '以上皆非'],
        answer: 1,
        explanation: '斷詞通常先於詞性標記與停用字移除，且常需搭配領域字典輔助。'
      },
      {
        id: 'w3-q05',
        type: '單選題',
        question: '以下符號何者不是用來當句子的分隔符號？',
        options: ['、', '。', ';', '?', '!'],
        answer: 0,
        explanation: '頓點可作為詞語列舉的分隔，不是常見的斷句符號。'
      },
      {
        id: 'w3-q06',
        type: '單選題',
        question: '有關詞性標記何者為非？',
        options: ['每種語言都有詞性', 'JJ 為形容詞', 'NN 為名詞', 'VB 為副詞'],
        answer: 3,
        explanation: 'VB 代表一般動詞，不是副詞。'
      },
      {
        id: 'w3-q07',
        type: '單選題',
        question: '有關停用字的敘述何者正確？',
        options: ['不同語言有不同的停用字集', '如果沒有排除停用字，文字雲裡會有不少停用字', '為了較好的斷詞結果，常把停用字也加入斷詞字典', '以上皆對'],
        answer: 3,
        explanation: '題目列出的三個敘述都正確，因此答案是「以上皆對」。'
      },
      {
        id: 'w3-q08',
        type: '單選題',
        question: '以下何者是還原字詞的原型？',
        options: ['Stemming', 'POS', 'Lemmatization', 'Word segmentation'],
        answer: 2,
        explanation: 'Lemmatization 的目的就是把字詞還原成原型。'
      },
      {
        id: 'w3-q09',
        type: '單選題',
        question: '以下有關文字的字詞共現圖何者正確？',
        options: ['高頻字一定會出現在字詞共現圖', '兩個高頻且常一起出現的字一定會出現在字詞共現圖', '字詞共現圖裡，一個群聚的字越多表示這個主題被討論越多', '以上皆對'],
        answer: 1,
        explanation: '高頻字若沒有穩定共同出現對象，不一定會進入共現圖；群聚字多也不等於文件數更多。'
      },
      {
        id: 'w3-q10',
        type: '單選題',
        question: '以下哪種圖是用顏色深淺來表示數量值？',
        options: ['長條圖', '熱圖', '曲線圖', '字詞共現相關圖'],
        answer: 1,
        explanation: '熱圖會用顏色深淺呈現數值大小，顏色越深通常代表值越高。'
      }
    ]
  },
  {
    id: 'week4',
    number: 4,
    label: '第 4 週',
    sourceFile: '5-測驗/4.pdf',
    questions: [
      {
        id: 'w4-q01',
        type: '單選題',
        question: '下述有關 sentiment analysis 何者為非？',
        options: ['主要是找出文件裡如憤怒和高興的情緒', '主要是找出文件評價的情緒取向', '可以使用字典法來分析 sentence-level 的情緒', '可以使用字典法來分析 document-level 的情緒'],
        answer: 0,
        explanation: 'Sentiment 指的是對實體的正負向評價，不是像憤怒或高興這種瞬時情緒。'
      },
      {
        id: 'w4-q02',
        type: '單選題',
        question: '下列何種資料集裡無法決定情緒對象？',
        options: ['廣泛新聞資料', '某一個特定議題討論版的評論', '某一個產品討論版裡的評論', '以上皆非'],
        answer: 0,
        explanation: '廣泛新聞沒有固定的討論對象；特定議題或產品討論區則有明確情緒目標。'
      },
      {
        id: 'w4-q03',
        type: '單選題',
        question: '有關 LIWC 字庫的敘述何者正確？',
        options: ['LIWC 字庫僅區分正面和負面字', 'LIWC 字庫僅有英文字', 'LIWC 字庫裡每個字的類別有程度之分', 'LIWC 字庫可用來找出主觀的句子'],
        answer: 3,
        explanation: 'LIWC 不只分正負面，也不只限英文，且類別不是用權重程度標註。'
      },
      {
        id: 'w4-q04',
        type: '單選題',
        question: '有關 NRC 字庫的敘述何者正確？',
        options: ['NRC 字庫僅區分正面和負面字', 'NRC 字庫裡每個字可以有多個類別', 'NRC 字庫僅有英文字', '以上皆非'],
        answer: 1,
        explanation: 'NRC 不只有正負面，也可擴展到不同語言；同一個字可以同時對應多個情緒類別。'
      },
      {
        id: 'w4-q05',
        type: '單選題',
        question: '以下那些詞性的字可能是情緒字？',
        options: ['形容詞', '動詞', '名詞', '以上皆是'],
        answer: 3,
        explanation: '情緒字不只限形容詞，動詞與名詞也都可能帶有情緒色彩。'
      },
      {
        id: 'w4-q06',
        type: '單選題',
        question: '情緒分析字典法較不適合以下那種用途？',
        options: ['Sentence-level 情緒分析', 'Document-level 情緒分析', '諷刺句分析', '以上皆不適合'],
        answer: 2,
        explanation: '諷刺句常表面說正話、實際表反義，字典法較難處理這類反諷語境。'
      }
    ]
  },
  {
    id: 'week5',
    number: 5,
    label: '第 5 週',
    sourceFile: '5-測驗/5.pdf',
    questions: [
      {
        id: 'w5-q01',
        type: '單選題',
        question: '下述有關 coreNLP 的 NER 的敘述何者正確？',
        options: ['可用來找出人名（Person）', '可用來找出國家名（Country）', '可用來找出意識形態（Ideology）', '以上皆對'],
        answer: 3,
        explanation: 'coreNLP 的 NER 支援多種實體型態，包含 Person、Country 與 Ideology。'
      },
      {
        id: 'w5-q02',
        type: '單選題',
        question: '考慮句子「US officials will visit China next week for trade talks to resolve the remaining sticking points in talks to end the trade war with communist China.」，下述有關 NER 的敘述何者有誤？',
        options: ['有三個 COUNTRY', '有一個 DATE', '有一個 IDEOLOGY', '有一個 CAUSE_OF_DEATH'],
        answer: 2,
        explanation: '句中可辨識 3 個 COUNTRY、1 個 DATE、1 個 IDEOLOGY，沒有 CAUSE_OF_DEATH。'
      },
      {
        id: 'w5-q03',
        type: '單選題',
        question: '上述句子裡的字哪些經過 lemmatization 後會不同？',
        options: ['China', 'remaining', 'trade', 'communist'],
        answer: 1,
        explanation: 'remaining 經 lemmatization 後會還原成 remain。'
      },
      {
        id: 'w5-q04',
        type: '單選題',
        question: '上述句子裡的詞性何者為非？',
        options: ['US / 名詞', 'officials / 名詞', 'sticking / 名詞', 'points / 動詞'],
        answer: 3,
        explanation: 'points 在這個句子中是名詞，不是動詞。'
      },
      {
        id: 'w5-q05',
        type: '單選題',
        question: '用進階字典法決定句子情緒時需考慮？',
        options: ['Sentiment words', 'Amplifier', 'Negation', '以上皆是'],
        answer: 3,
        explanation: '進階字典法需要同時考慮情緒字、程度詞與否定詞。'
      },
      {
        id: 'w5-q06',
        type: '單選題',
        question: '使用文件分類方式（或稱機器學習）來進行情緒分析時，必定需要？',
        options: ['斷詞', '刪除停用字', '正向文件集和負向文件集', '情緒字典'],
        answer: 2,
        explanation: '監督式分類一定需要標註好的正負向訓練資料；斷詞、停用字與情緒字典則不是一律必需。'
      },
      {
        id: 'w5-q07',
        type: '單選題',
        question: '以下那些功能是 Stanford coreNLP 沒有提供的？',
        options: ['Machine Translation', 'NER', 'Sentence Sentiment', 'Universal Dependencies'],
        answer: 0,
        explanation: 'coreNLP 有提供 NER、情緒分析與 Universal Dependencies，但不提供機器翻譯。'
      }
    ]
  },
  {
    id: 'week6',
    number: 6,
    label: '第 6 週',
    sourceFile: '5-測驗/6.pdf',
    questions: [
      {
        id: 'w6-q01',
        type: '單選題',
        question: '按照 TF-IDF 定義，若某篇文章 A 共有 256 個字，「分析」出現 8 次，請問「分析」在文章 A 的 TF 值為何？',
        options: ['1/8', '1/32', '1/64', '1/16'],
        answer: 1,
        explanation: 'TF = 8 / 256 = 1 / 32。'
      },
      {
        id: 'w6-q02',
        type: '單選題',
        question: '承上題，若資料集共有 100000 篇文章，而「分析」出現在其中 100 篇，請問它的 IDF 值為何？',
        options: ['2', '8', '1', '3'],
        answer: 3,
        explanation: 'IDF = log(100000 / 100) = log(1000) = 3。'
      },
      {
        id: 'w6-q03',
        type: '單選題',
        question: '下列有關 TF-IDF 的敘述何者正確？',
        options: ['同一文件裡各個字的 TF 值都相同', '同一文件裡各個字的 IDF 值都相同', '同一文件裡各個字的 TF-IDF 值都相同', '同一個字在不同文件的 IDF 值都相同'],
        answer: 3,
        explanation: 'IDF 是針對字詞在整個語料中的稀有程度，同一個字在不同文件中的 IDF 會相同。'
      },
      {
        id: 'w6-q04',
        type: '單選題',
        question: '考慮 D1 =「To be or not to be; not to be or to be」與 D2 =「To be or not to be」，若用 TF-IDF 向量表示文件，以下敘述何者為真？',
        options: ['Euclidean distance 為 0', 'Cosine similarity 為 1', 'Pearson correlation 為 1', '以上皆是'],
        answer: 3,
        explanation: '兩個文件的 TF-IDF 向量完全相同，因此距離為 0，相似度與相關係數都為 1。'
      },
      {
        id: 'w6-q05',
        type: '單選題',
        question: '以下何者不是 N-gram model 的應用範圍？',
        options: ['打字時猜測下一個字母', '編寫文章時建議下一個字或子句', '語音轉文字時提高文字的正確率', '生產良率預測'],
        answer: 3,
        explanation: 'N-gram model 主要用於語言模型與文字處理，不是生產良率預測工具。'
      },
      {
        id: 'w6-q06',
        type: '單選題',
        question: '以下有關字詞共現圖（Word Correlation Network）何者為偽？',
        options: ['出現的字詞頻率必須高於某個門檻值', '出現的線之兩個字詞其相關性必須高於某個門檻值', '降低門檻值可以減少出現的字詞或是線', '可以根據每個文件的 TF-IDF 向量來計算後繪出字詞共現圖'],
        answer: 2,
        explanation: '降低門檻值通常會讓更多字詞與連線被納入，而不是變少。'
      }
    ]
  },
  {
    id: 'week7',
    number: 7,
    label: '第 7 週',
    sourceFile: '5-測驗/7.pdf',
    questions: [
      {
        id: 'w7-q01',
        type: '單選題',
        question: '以下有關文件分類訓練資料集的敘述何者為非？',
        options: ['文件需要人工標籤（human label）', '可用 TF-IDF 當成文件特徵向量（feature vector）', '可表示成 document-term matrix', '一個文件可有多個類別'],
        answer: 3,
        explanation: '本題所指的訓練資料集是一文件對應一個類別的設定，因此 D 為非。'
      },
      {
        id: 'w7-q02',
        type: '單選題',
        question: '以下有關文件資料集的敘述何者正確？',
        options: ['通常文件特徵向量的維度很小', '一個文件裡大部分的特徵值為 0', '通常文件的類別會很多', '測試的時間比訓練的時間長'],
        answer: 1,
        explanation: '文件資料常以大量詞項作為特徵，因此向量高維且稀疏，多數位置會是 0。'
      },
      {
        id: 'w7-q03',
        type: '單選題',
        question: '以下哪一種特徵值不是從文件的內容取得？',
        options: ['文件的作者', '文件字數', '文件的可讀性', '文件的平均句子長度'],
        answer: 0,
        explanation: '作者通常來自文件的外部 metadata，其餘選項都能直接從內容推導。'
      },
      {
        id: 'w7-q04',
        type: '單選題',
        question: '以下哪一種分類方法不需要訓練分類模型？',
        options: ['邏輯式回歸（logistic regression）', '決策樹（Decision tree）', 'SVM', 'KNN'],
        answer: 3,
        explanation: 'KNN 屬於 memory-based 方法，分類時直接查詢訓練資料，不需先訓練模型。'
      },
      {
        id: 'w7-q05',
        type: '單選題',
        question: '以下哪一種分類方法的分類時間跟訓練資料集的大小成正比？',
        options: ['邏輯式回歸（logistic regression）', '決策樹（Decision tree）', 'SVM', 'KNN'],
        answer: 3,
        explanation: 'KNN 在預測時要比對訓練資料，因此分類時間會隨訓練集大小增加。'
      },
      {
        id: 'w7-q06',
        type: '單選題',
        question: '請問以下哪一種資訊通常分類器（classifier）無法提供？',
        options: ['判斷一份文件屬於哪一個類別', '判斷一份文件屬於哪一個類別的機率', '判斷每一個特徵屬性的重要性', '哪些特徵屬性是多餘的'],
        answer: 3,
        explanation: '特徵是否多餘通常牽涉共線性或特徵選擇，不是分類器本身必然能提供的資訊。'
      },
      {
        id: 'w7-q07',
        type: '單選題',
        question: '請問以下哪一種用來衡量分類器的效能？',
        options: ['specificity', 'precision', 'recall', 'sensitivity', '以上皆是'],
        answer: 4,
        explanation: 'precision、recall、sensitivity 與 specificity 都是常見的分類效能指標。'
      },
      {
        id: 'w7-q08',
        type: '單選題',
        question: '考慮一個 Covid-19 的測試劑，我們希望不要漏掉任何一個感染的人，以下敘述何者正確？',
        options: ['Precision 要 100%', 'Recall 要 100%', 'Accuracy 要 100%', 'F1 score 要 100%'],
        answer: 1,
        explanation: '不要漏掉感染者代表 FN 必須為 0，因此應追求 Recall = 100%。'
      },
      {
        id: 'w7-q09',
        type: '單選題',
        question: '考慮以下數種分類器的 ROC 圖，以下敘述何者為非？',
        options: ['對於每一種方法，sensitivity 越大則 specificity 也越大', '對於任何方法，若 recall = 1，則 specificity 都為 0', '每一種方法都比隨機猜測（random guess）好', '最好的方法為 proposed CNN'],
        answer: 0,
        explanation: 'sensitivity 增加時通常是 1 - specificity 也增加，也就是 specificity 反而會下降。'
      },
      {
        id: 'w7-q10',
        type: '單選題',
        question: '使用傳統的方法（即講義所提的方法）來做文件分類，以下敘述何者正確？',
        options: ['通常需要大量的訓練資料', '每一個類別的文件不能太少', '各個類別的資料量不要差太多', '以上皆是'],
        answer: 3,
        explanation: '傳統文件分類通常需要足夠訓練資料、各類別樣本不能太少，且類別分布不宜差距過大。'
      }
    ]
  }
];
