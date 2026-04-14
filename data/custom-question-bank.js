// 使用方式：
// 1. 這份題庫提供期中考用的整合練習題。
// 2. 若後續新增或改題，請同步更新版本字串。
// 3. 題目格式請維持：
//    id, category, type, question, options, answer, explanation

window.CUSTOM_QUESTION_BANK_VERSION = '2026-04-14-midterm-rebuild-61';

window.CUSTOM_QUESTION_BANK = [
  {
    id: 'mid-001',
    category: '資料來源與整理',
    type: '工具比較',
    question: '若同一平台同時提供 API 與公開網頁，為了長期穩定蒐集文字資料，通常優先考慮哪一種方式？',
    options: ['API', '直接截圖存圖檔', '只靠人工複製貼上', '先做 TF-IDF 再決定'],
    answer: 0,
    explanation: '平台提供的 API 通常比直接解析網頁 HTML 更穩定，也較容易維護與重複取得資料。'
  },
  {
    id: 'mid-002',
    category: '資料來源與整理',
    type: '資料篩選',
    question: '研究「手機電池災情」時，若關鍵字「電池」同時抓到汽車電池與行動電源文章，最適合先加入哪一種規則減少噪音？',
    options: ['黑名單', '詞性標記', 'Lemmatization', 'Macro-F1'],
    answer: 0,
    explanation: '黑名單用來排除雖然字面相似、但與研究主題無關的內容，是降低噪音的直接做法。'
  },
  {
    id: 'mid-003',
    category: '資料來源與整理',
    type: '資料表概念',
    question: '在 tidy data 的想法中，最理想的資料表結構是什麼？',
    options: ['一列放多個觀測值，方便摘要', '一欄混合時間、地點與文字內容', '一列一筆觀測、一欄一個變數', '先把所有欄位合併成一個文字欄'],
    answer: 2,
    explanation: 'Tidy data 的核心原則是每列對應一筆觀測、每欄對應一個變數，方便後續轉換與分析。'
  },
  {
    id: 'mid-004',
    category: '資料來源與整理',
    type: '變數判斷',
    question: '若資料表包含「發文時間、作者、國家、情緒分數」四欄，哪一欄最接近 measure variable？',
    options: ['發文時間', '作者', '國家', '情緒分數'],
    answer: 3,
    explanation: '時間、作者、國家較像描述背景的 dimension variable；情緒分數則較接近真正分析結果或量測值。'
  },
  {
    id: 'mid-005',
    category: '資料來源與整理',
    type: '研究設計',
    question: '在社群資料蒐集流程中，白名單最主要的功能是什麼？',
    options: ['保留明確相關的來源或關鍵字', '將每篇文件轉成向量', '估計分類器準確率', '找出最近鄰文件'],
    answer: 0,
    explanation: '白名單用來明確保留與研究主題相關的來源、版面或關鍵字，提升資料相關性。'
  },
  {
    id: 'mid-006',
    category: '資料來源與整理',
    type: '資料品質',
    question: '若評論資料中充滿內容極短、重複貼文與疑似機器人訊息，最直接的風險是什麼？',
    options: ['會讓資料污染，分析結果失真', '會自動提高模型可解釋性', '會使 IDF 一律變成 0', '會讓 API 轉成 N-gram'],
    answer: 0,
    explanation: '短文、機器人與假評論都可能污染資料，進而使情緒分析、主題分析與分類結果偏差。'
  },
  {
    id: 'mid-007',
    category: '資料來源與整理',
    type: '流程題',
    question: '就整體流程而言，下列何者最合理地描述「先有資料」階段的順序？',
    options: ['資料來源 -> 抓取 -> 篩選 -> 過濾 -> tidy data', '斷詞 -> NER -> 情緒分析 -> ROC', 'TF-IDF -> KNN -> Precision -> Recall', 'Lemmatization -> API -> Heatmap -> Macro-F1'],
    answer: 0,
    explanation: '期中考筆記將資料階段整理為：資料來源、抓取、篩選、過濾，再整理成可分析的 tidy data。'
  },
  {
    id: 'mid-008',
    category: '文字前處理',
    type: '概念題',
    question: '文字前處理中的 normalization，最接近下列哪一種工作？',
    options: ['把不同寫法整理成一致形式', '替每個字標上詞性', '將文件分成正負面', '計算 ROC 曲線'],
    answer: 0,
    explanation: 'Normalization 是將大小寫、符號、格式等不同寫法統一，讓後續處理更穩定。'
  },
  {
    id: 'mid-009',
    category: '文字前處理',
    type: '細節題',
    question: '對中文社群文本做斷句時，哪一項最容易造成句界判斷困難？',
    options: ['標點混用或缺少標點', 'IDF 計算方式不同', 'BERT 參數太多', '資料集標籤太少'],
    answer: 0,
    explanation: '中文常有標點混用、口語斷句與缺少標點的情況，會讓 sentence segmentation 更不穩定。'
  },
  {
    id: 'mid-010',
    category: '文字前處理',
    type: '中英差異',
    question: '為什麼中文比英文更常需要特別做 word segmentation？',
    options: ['中文句子一定沒有動詞', '中文文字天然沒有空格分詞', '英文完全不需要前處理', '中文不能做詞性標記'],
    answer: 1,
    explanation: '英文通常以空格區分單詞，中文則沒有天然空格，因此分詞特別重要。'
  },
  {
    id: 'mid-011',
    category: '文字前處理',
    type: '詞典輔助',
    question: '若斷詞工具總把「行動銀行」切成「行動 / 銀行」，哪一種改善方式最符合課堂觀念？',
    options: ['加入領域字典或自建詞庫', '先算 Precision', '改成畫 ROC 曲線', '直接刪掉所有停用字'],
    answer: 0,
    explanation: '中文斷詞常需要領域字典輔助，才能避免把重要複合詞切錯。'
  },
  {
    id: 'mid-012',
    category: '文字前處理',
    type: '應用判斷',
    question: '哪一項任務最不適合在一開始就大量刪除停用字？',
    options: ['文字雲', '機器翻譯', '字詞共現分析', '關鍵字抽取'],
    answer: 1,
    explanation: '翻譯需要保留完整語法與語意關係，過早刪除停用字往往會破壞原句意思。'
  },
  {
    id: 'mid-013',
    category: '文字前處理',
    type: '名詞比較',
    question: 'Stemming 與 lemmatization 的主要差別，最接近以下哪一項？',
    options: ['兩者都只用在中文斷詞', 'Stemming 常較粗略，lemmatization 較接近字典原型', '兩者都等同 POS 標記', 'lemmatization 只用來畫 heatmap'],
    answer: 1,
    explanation: 'Stemming 常是機械式截斷字尾；lemmatization 則較傾向還原成正式字典型。'
  },
  {
    id: 'mid-014',
    category: '文字前處理',
    type: '例題判斷',
    question: '若英文單字 remaining 經處理後變成 remain，這最可能是哪一種操作的結果？',
    options: ['Sentence segmentation', 'Lemmatization', 'Whitelist filtering', 'Specificity'],
    answer: 1,
    explanation: 'remaining 還原為 remain，屬於詞形還原的典型例子。'
  },
  {
    id: 'mid-015',
    category: '文字前處理',
    type: '流程題',
    question: '下列哪一種順序最符合一般文本處理流程？',
    options: ['清理格式 -> 斷句 -> 斷詞 -> 停用字處理', 'TF-IDF -> NER -> 抓資料 -> 斷句', '分類 -> 清理格式 -> 斷詞 -> 評估', 'Heatmap -> 停用字 -> API -> 特徵抽取'],
    answer: 0,
    explanation: '一般先處理原始格式與符號，再切句、切詞，之後才進入停用字與更進階的語言分析。'
  },
  {
    id: 'mid-016',
    category: '文字前處理',
    type: '整併策略',
    question: '同義字整併或同義字字典的主要目的，最接近下列哪一項？',
    options: ['減少意思相近但寫法不同造成的分散', '把所有名詞改成動詞', '讓 ROC 一定提高', '取代所有人工標註'],
    answer: 0,
    explanation: '同義字整併可以把語意接近但表面寫法不同的詞合併，降低特徵過度分散。'
  },
  {
    id: 'mid-017',
    category: '語言結構分析',
    type: '基本概念',
    question: 'POS 最主要是在補充哪一種資訊？',
    options: ['字在句子中的語法角色', '文件之間的向量距離', '模型的 AUC', '資料來源是否合法'],
    answer: 0,
    explanation: 'POS 會標示詞是名詞、動詞、形容詞等，幫助理解詞在句子中的語法功能。'
  },
  {
    id: 'mid-018',
    category: '語言結構分析',
    type: '工具比較',
    question: '下列哪一組最合理地配對了分析目的與方法？',
    options: ['找人名與日期 -> NER', '計算稀有度 -> POS', '判斷正負面 -> IDF', '找最近鄰 -> Sentence segmentation'],
    answer: 0,
    explanation: 'NER 的目標是辨識人名、日期、國家、組織等具名實體。'
  },
  {
    id: 'mid-019',
    category: '語言結構分析',
    type: '標註系統',
    question: 'POS tagset 這個概念，最接近以下哪一項？',
    options: ['詞性標記的標籤系統', '資料抓取的 API 規格', '文件分類的評估表', '情緒字典的版本號'],
    answer: 0,
    explanation: 'Tagset 指的是標記集合，例如 Penn Treebank 或其他中文標註系統所使用的標籤規範。'
  },
  {
    id: 'mid-020',
    category: '語言結構分析',
    type: '序列標註',
    question: '若一個任務需要對句子中的每個 token 都個別預測標籤，最適合把它視為哪一類任務？',
    options: ['Sequence labeling', 'Document clustering', 'Cross-validation', 'Keyword scraping'],
    answer: 0,
    explanation: 'POS 與 NER 都可視為 sequence labeling，因為需要對序列中的每個 token 預測標籤。'
  },
  {
    id: 'mid-021',
    category: '語言結構分析',
    type: 'NER概念',
    question: '在 NER 中，Entity 最接近下列哪個意思？',
    options: ['文本中的具名對象或具特定類別的片段', '一篇文件的總字數', '每個特徵的 TF 值', '分類器的學習率'],
    answer: 0,
    explanation: 'Entity 指的是文字中的具名對象，例如 PERSON、DATE、ORG、COUNTRY 等。'
  },
  {
    id: 'mid-022',
    category: '語言結構分析',
    type: '編碼觀念',
    question: 'IOB encoding 在 NER 中最常用來表達什麼？',
    options: ['向量的維度與權重', '某個 token 是否在實體內及是否為開頭', '模型是否過擬合', '文件是否屬於正類'],
    answer: 1,
    explanation: 'IOB 常用來表示 token 是否位在實體外、實體內，或是實體開頭。'
  },
  {
    id: 'mid-023',
    category: '語言結構分析',
    type: '工具定位',
    question: '若想同時做詞性標記與命名實體辨識，下列哪種敘述最合理？',
    options: ['兩者都屬於語言結構分析', '兩者都只是資料抓取', '兩者都等於 TF-IDF', '兩者都只用來算 Accuracy'],
    answer: 0,
    explanation: 'POS 與 NER 都是在切詞之後補充更進一步的語言結構資訊。'
  },
  {
    id: 'mid-024',
    category: '文字表示',
    type: 'BoW概念',
    question: 'Bag of Words 最重要的限制是什麼？',
    options: ['不容易保留字詞順序', '不能表示文件是否出現某字', '完全不能做分類', '只適用於影像資料'],
    answer: 0,
    explanation: 'BoW 重點在記錄詞是否出現或出現幾次，通常不強調詞序資訊。'
  },
  {
    id: 'mid-025',
    category: '文字表示',
    type: 'N-gram概念',
    question: '若把短語 "social media analysis" 視為特徵，哪一種表示最可能保留這種局部順序資訊？',
    options: ['Bag of Words 單詞統計', 'Bigram / Trigram', '只保留文件作者', '只算 Accuracy'],
    answer: 1,
    explanation: 'N-gram 會保留連續詞序資訊，因此比單純 unigram 更能表達局部片語結構。'
  },
  {
    id: 'mid-026',
    category: '文字表示',
    type: 'TF觀念',
    question: 'TF 主要反映哪一種資訊？',
    options: ['某詞在單篇文件中的相對常見程度', '某詞在全部文件中的稀有度', '模型在測試集的準確率', '文件的情緒方向'],
    answer: 0,
    explanation: 'TF 關心的是該詞在某一篇文件內的出現頻率，屬於局部重要性。'
  },
  {
    id: 'mid-027',
    category: '文字表示',
    type: 'IDF觀念',
    question: '若某個字幾乎出現在語料庫中的每一篇文件，則它的 IDF 通常會如何？',
    options: ['偏低', '偏高', '一定等於 1', '一定等於 Precision'],
    answer: 0,
    explanation: 'IDF 衡量字在整體語料中的稀有度，越常見的字區辨力越低，因此 IDF 也越低。'
  },
  {
    id: 'mid-028',
    category: '文字表示',
    type: 'TF-IDF應用',
    question: 'TF-IDF 最常被視為哪一種用途的基礎表示？',
    options: ['文件向量化與特徵加權', '資料抓取與白名單建立', '只做詞性標記', '只做模型部署'],
    answer: 0,
    explanation: 'TF-IDF 常用來把文字轉成帶權重的向量，供分類、相似度與關鍵字分析使用。'
  },
  {
    id: 'mid-029',
    category: '文字表示',
    type: '矩陣概念',
    question: '若把很多篇文章一起整理成 document-feature matrix，哪個描述最合理？',
    options: ['列是文件、欄是特徵', '列是情緒、欄是作者', '列是模型、欄是 API', '列是 ROC、欄是 AUC'],
    answer: 0,
    explanation: 'Document-feature matrix 會把文件當列、特徵當欄，方便演算法計算。'
  },
  {
    id: 'mid-030',
    category: '文字表示',
    type: '稀疏性',
    question: '文字資料常被說成高維且稀疏，最主要原因是什麼？',
    options: ['詞彙表很大，但單篇文件只用到其中少數詞', '每篇文件長度都完全一樣', '所有字詞在每篇文件都會出現', '文本不能轉成數值'],
    answer: 0,
    explanation: '文本特徵常以詞彙表展開，維度很高；但任何一篇文件只會使用其中少數詞，因此矩陣大多數位置是 0。'
  },
  {
    id: 'mid-031',
    category: '文字表示',
    type: '特徵值',
    question: '在 document-feature matrix 中，某一格的 feature value 最可能代表什麼？',
    options: ['字詞是否出現、詞頻或 TF-IDF 權重', '只可能是文件作者編號', '只可能是類別名稱', '只可能是 ROC 的座標'],
    answer: 0,
    explanation: '文件-特徵矩陣中的值可設計成是否出現、詞頻或 TF-IDF 等不同特徵表示。'
  },
  {
    id: 'mid-032',
    category: '探索式分析',
    type: '關鍵字抽取',
    question: '若想從大量貼文中找出較具代表性的字詞，哪一種作法最貼近課堂提到的關鍵字抽取概念？',
    options: ['綜合字詞的重要性後挑出代表字', '只看作者帳號', '只看資料抓取時間', '只把每篇文件長度排序'],
    answer: 0,
    explanation: '關鍵字抽取常以詞的重要性為基礎，例如平均 TF-IDF 或每篇 top-k 詞再做統計。'
  },
  {
    id: 'mid-033',
    category: '探索式分析',
    type: '視覺化',
    question: '文字雲最主要想呈現的是什麼？',
    options: ['字詞的相對重要性或頻率', '模型參數的梯度變化', '文件分類的混淆矩陣', '交叉驗證的切分方式'],
    answer: 0,
    explanation: '文字雲通常用字詞大小表現頻率或重要性，是探索資料的直觀視覺化方式。'
  },
  {
    id: 'mid-034',
    category: '探索式分析',
    type: '共現網路',
    question: '若兩個詞在同一批文件中常一起出現，最適合用哪一類分析概念來描述這種關係？',
    options: ['字詞相關或共現關係', '句子分隔符號', 'Logistic loss', 'Whitelist 規則'],
    answer: 0,
    explanation: '當兩個詞常共同出現時，可從共現網路或字詞相關分析的角度理解它們的關係。'
  },
  {
    id: 'mid-035',
    category: '探索式分析',
    type: '相關指標',
    question: '若把字是否出現視為二元變數，要衡量兩詞是否同步出現，哪個指標最貼近課堂脈絡？',
    options: ['Phi coefficient', 'Sigmoid function', 'AUC', 'Specificity'],
    answer: 0,
    explanation: '課堂將字詞相關視為二元出現模式，可用 phi coefficient 衡量兩詞的關聯程度。'
  },
  {
    id: 'mid-036',
    category: '探索式分析',
    type: '相似度',
    question: '若兩篇文件內容方向很接近，但長度差很多，哪個相似度指標通常較適合比較它們的文本方向？',
    options: ['Cosine similarity', 'Sentence segmentation', 'Whitelist', 'Specificity'],
    answer: 0,
    explanation: 'Cosine similarity 著重向量方向，常比直接看長度差異的距離更適合比較文本內容方向。'
  },
  {
    id: 'mid-037',
    category: '探索式分析',
    type: '時間分析',
    question: '若想比較某議題在不同月份的討論熱度變化，最接近哪一種分析想法？',
    options: ['時間趨勢分析', '詞形還原', 'IOB 編碼', 'Random Forest'],
    answer: 0,
    explanation: '觀察議題或關鍵字隨時間的變動，屬於時間趨勢分析。'
  },
  {
    id: 'mid-038',
    category: '探索式分析',
    type: 'Heatmap',
    question: 'Heatmap 最適合拿來呈現哪種資訊？',
    options: ['不同變數交叉下的強弱分布', '每個 token 的詞性標籤', 'API 回傳的原始 JSON', '模型訓練的程式碼結構'],
    answer: 0,
    explanation: 'Heatmap 透過顏色深淺呈現變數交叉下的大小或強弱分布。'
  },
  {
    id: 'mid-039',
    category: '任務與情緒分析',
    type: '任務判斷',
    question: '若研究目標是把貼文分成「客服抱怨、產品心得、優惠資訊」三類，最適合視為哪一種任務？',
    options: ['Text classification', 'Sentence segmentation', 'NER', 'Stemming'],
    answer: 0,
    explanation: '將文本分到預先定義的類別中，屬於文件分類或文字分類任務。'
  },
  {
    id: 'mid-040',
    category: '任務與情緒分析',
    type: '概念比較',
    question: 'Sentiment polarity 最接近下列哪一種意思？',
    options: ['情緒的正負向取向', '句子的長短結構', '詞性的標記方式', '文件的作者性別'],
    answer: 0,
    explanation: 'Sentiment polarity 指的是情緒的正面、負面或中性取向。'
  },
  {
    id: 'mid-041',
    category: '任務與情緒分析',
    type: '層次判斷',
    question: '若研究者想判斷「每一句話」各自是正面還是負面，最直接對應哪一種層次？',
    options: ['Sentence-level sentiment', 'Document-level sentiment', 'Aspect-level sentiment', 'Word segmentation'],
    answer: 0,
    explanation: 'Sentence-level sentiment 是對每個句子分別判斷情緒，而不是整篇文件或特定面向。'
  },
  {
    id: 'mid-042',
    category: '任務與情緒分析',
    type: '面向情緒',
    question: '題目問「大家對某品牌客服速度的評價如何？」時，最接近哪一種分析層次？',
    options: ['Aspect-level sentiment', 'Document similarity', 'Tidy data', 'Cross-validation'],
    answer: 0,
    explanation: '客服速度是特定面向，因此較適合 aspect-level sentiment。'
  },
  {
    id: 'mid-043',
    category: '任務與情緒分析',
    type: '方法比較',
    question: '若沒有標註好的正負面文件集，但已有情緒詞典，最自然的起點是哪一種做法？',
    options: ['字典法', 'KNN 分類法', 'Random Forest', 'Cross-validation'],
    answer: 0,
    explanation: '沒有標註資料時，較容易先用 lexicon-based 方法；若做分類法則通常需要標註好的訓練資料。'
  },
  {
    id: 'mid-044',
    category: '任務與情緒分析',
    type: '情緒元素',
    question: '在情緒分析中，Opinion Holder 指的是什麼？',
    options: ['表達意見的人或主體', '被評論的產品面向', '模型的預測門檻', '字典中的停用字'],
    answer: 0,
    explanation: 'Opinion Holder 指的是誰在表達這個意見，例如使用者、評論者或作者。'
  },
  {
    id: 'mid-045',
    category: '任務與情緒分析',
    type: '情緒元素',
    question: '在 "這台手機的電池續航力很差" 這句話中，最可能的 Feature / Aspect 是什麼？',
    options: ['電池續航力', '作者名字', '句子標點', '資料來源平台'],
    answer: 0,
    explanation: 'Feature / Aspect 指的是情緒指向的產品或事物面向，此句明顯是在評價電池續航力。'
  },
  {
    id: 'mid-046',
    category: '任務與情緒分析',
    type: '困難現象',
    question: '在字典法中，哪一類詞最可能直接改變原本情緒方向？',
    options: ['否定詞', '日期詞', '國家名詞', '句號符號'],
    answer: 0,
    explanation: '否定詞如 not、不、沒有 等，常會把原本正向或負向的方向反轉。'
  },
  {
    id: 'mid-047',
    category: '任務與情緒分析',
    type: '困難現象',
    question: '像 very、a bit、less 這類詞，在情緒分析中最常被視為哪一類訊號？',
    options: ['程度詞或加強詞', '停用字', '命名實體', '維度變數'],
    answer: 0,
    explanation: '這類詞不一定改變方向，但會調整情緒強度，因此常視為 amplifier 或程度詞。'
  },
  {
    id: 'mid-048',
    category: '任務與情緒分析',
    type: '方法比較',
    question: '相較於單純字典法，文件分類法做情緒分析最關鍵的前提是什麼？',
    options: ['有標註好的訓練資料', '每篇文件都要先翻譯', '每個字都要是名詞', '一定要有 NRC 字典'],
    answer: 0,
    explanation: '分類式情緒分析仰賴帶標籤的訓練資料來學習正負面模式。'
  },
  {
    id: 'mid-049',
    category: '模型與分類',
    type: '方法分類',
    question: '下列哪一種方法最符合 memory-based classification 的精神？',
    options: ['KNN', 'Logistic Regression', 'SVM', 'Naive Bayes'],
    answer: 0,
    explanation: 'Memory-based 方法不先學顯式數學模型，而是直接參照既有訓練樣本，KNN 是代表方法。'
  },
  {
    id: 'mid-050',
    category: '模型與分類',
    type: 'KNN觀念',
    question: 'KNN 中的 K 值，最直接代表哪個意思？',
    options: ['分類時參考的最近鄰居數量', '要切成幾個字做斷詞', '模型輸出的類別數', 'TF-IDF 的維度'],
    answer: 0,
    explanation: 'KNN 會找距離最近的 K 個樣本來決定新文件類別，因此 K 代表鄰居數量。'
  },
  {
    id: 'mid-051',
    category: '模型與分類',
    type: '模型觀念',
    question: 'Logistic Regression 中 sigmoid function 的角色最接近下列哪一項？',
    options: ['把線性分數壓到 0 到 1 之間', '把文件切成句子', '把詞轉成 lemma', '把類別數量變成 K'],
    answer: 0,
    explanation: 'Sigmoid 會把線性組合得到的分數轉為 0 到 1 之間，常視為類別機率。'
  },
  {
    id: 'mid-052',
    category: '模型與分類',
    type: '模型家族',
    question: 'Random Forest 最接近下列哪一種模型家族？',
    options: ['樹與集成模型', '序列標註模型', '字典法模型', '資料抓取工具'],
    answer: 0,
    explanation: 'Random Forest 是把多棵決策樹集成起來的模型，屬於樹與集成方法。'
  },
  {
    id: 'mid-053',
    category: '模型與分類',
    type: '模型家族',
    question: 'BERT 類模型在課堂脈絡中最接近哪一種方法？',
    options: ['現代深度語言模型', '停用字字典', '規則式黑名單', '資料表欄位名稱'],
    answer: 0,
    explanation: 'BERT 類模型屬於現代深度語言模型，可接不同任務頭進行分類或標註。'
  },
  {
    id: 'mid-054',
    category: '模型與分類',
    type: '資料需求',
    question: '在傳統文件分類中，若某些類別的樣本量非常少，最常見的風險是什麼？',
    options: ['模型對少數類別學得不穩', 'TF 一定無法計算', '所有句子都會無法斷詞', 'API 一定失效'],
    answer: 0,
    explanation: '樣本過少會讓模型難以學習該類別的穩定特徵，少數類別的效能通常較差。'
  },
  {
    id: 'mid-055',
    category: '評估',
    type: '混淆矩陣',
    question: '若模型把負類樣本誤判成正類，這在混淆矩陣中屬於哪一種情況？',
    options: ['False Positive', 'False Negative', 'True Positive', 'True Negative'],
    answer: 0,
    explanation: '實際為負、預測為正，屬於 False Positive。'
  },
  {
    id: 'mid-056',
    category: '評估',
    type: '指標關係',
    question: 'Recall 與下列哪一個指標在二元分類中最接近同義？',
    options: ['Sensitivity', 'Specificity', 'AUC', 'Precision'],
    answer: 0,
    explanation: 'Recall 與 Sensitivity 都是在問：真正的正類有多少被模型成功抓到。'
  },
  {
    id: 'mid-057',
    category: '評估',
    type: '指標意義',
    question: 'Specificity 最主要衡量哪一種能力？',
    options: ['正確排除負類的能力', '抓到正類的能力', '衡量字詞稀有度', '模型的訓練速度'],
    answer: 0,
    explanation: 'Specificity 關心的是所有真正負類中，有多少被模型正確判為負類。'
  },
  {
    id: 'mid-058',
    category: '評估',
    type: '情境判斷',
    question: '若任務最怕漏掉真正的異常案例，通常應優先觀察哪一個指標？',
    options: ['Recall', 'Specificity', 'Document similarity', 'IDF'],
    answer: 0,
    explanation: '怕漏掉真正異常時，重點是降低 FN，因此通常優先看 Recall。'
  },
  {
    id: 'mid-059',
    category: '評估',
    type: 'ROC觀念',
    question: 'ROC 圖上的橫軸最常代表什麼？',
    options: ['1 - Specificity', 'Precision', 'F1', 'Accuracy'],
    answer: 0,
    explanation: 'ROC 圖常以 1-specificity 作為橫軸、sensitivity 作為縱軸。'
  },
  {
    id: 'mid-060',
    category: '評估',
    type: 'AUC觀念',
    question: 'AUC 最適合被理解為什麼？',
    options: ['ROC 曲線下面積的整體表現指標', '停用字比例', '每篇文件的平均詞數', '模型的類別數量'],
    answer: 0,
    explanation: 'AUC 是 ROC 曲線下面積，常用來概括模型在不同門檻下的整體區辨能力。'
  },
  {
    id: 'mid-061',
    category: '評估',
    type: '多類別評估',
    question: 'Macro-F1 最接近哪一種計算方式？',
    options: ['先算每個類別的 F1，再直接平均', '先把所有類別的 TP、FP、FN 全部加總後再算', '只計算最大類別的 F1', '只適用於二元分類'],
    answer: 0,
    explanation: 'Macro-F1 會先算每個類別自己的 F1，再直接平均，因此較重視各類別一視同仁。'
  }
];
