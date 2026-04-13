import { DEFAULT_QUESTIONS } from './question-bank.js';
import {
  loadProgress,
  loadQuestions,
  loadSessionHistory,
  saveProgress,
  saveQuestions,
  saveSessionHistory
} from './storage.js';
import { exportProgressAsImage, exportSessionAsImage } from './exporters.js';

let questions = loadQuestions();
let progress = loadProgress();
let sessionHistory = loadSessionHistory();

let currentSession = {
  queue: [],
  index: 0,
  score: 0,
  answered: false,
  results: []
};

const els = {
  homeView: document.getElementById('homeView'),
  appVersionBadge: document.getElementById('appVersionBadge'),
  quizShell: document.getElementById('quizShell'),
  categorySelect: document.getElementById('categorySelect'),
  modeSelect: document.getElementById('modeSelect'),
  selectionHint: document.getElementById('selectionHint'),
  startBtn: document.getElementById('startBtn'),
  exportProgressBtn: document.getElementById('exportProgressBtn'),
  clearProgressBtn: document.getElementById('clearProgressBtn'),
  importArea: document.getElementById('importArea'),
  importBtn: document.getElementById('importBtn'),
  exportQuestionsBtn: document.getElementById('exportQuestionsBtn'),
  resetQuestionsBtn: document.getElementById('resetQuestionsBtn'),
  statTotal: document.getElementById('statTotal'),
  statWrong: document.getElementById('statWrong'),
  statAnswered: document.getElementById('statAnswered'),
  statAccuracy: document.getElementById('statAccuracy'),
  quizProgressWrap: document.getElementById('quizProgressWrap'),
  quizCard: document.getElementById('quizCard'),
  summaryCard: document.getElementById('summaryCard'),
  quizModeBadge: document.getElementById('quizModeBadge'),
  quizCategoryBadge: document.getElementById('quizCategoryBadge'),
  quizRestartBtn: document.getElementById('quizRestartBtn'),
  quizHomeBtn: document.getElementById('quizHomeBtn'),
  progressText: document.getElementById('progressText'),
  scoreText: document.getElementById('scoreText'),
  progressFill: document.getElementById('progressFill'),
  questionTitle: document.getElementById('questionTitle'),
  optionsContainer: document.getElementById('optionsContainer'),
  resultBanner: document.getElementById('resultBanner'),
  explanationBox: document.getElementById('explanationBox'),
  nextBtn: document.getElementById('nextBtn'),
  summaryTotal: document.getElementById('summaryTotal'),
  summaryCorrect: document.getElementById('summaryCorrect'),
  summaryAccuracy: document.getElementById('summaryAccuracy'),
  summaryWrong: document.getElementById('summaryWrong'),
  summaryTableBody: document.getElementById('summaryTableBody'),
  summaryMobileList: document.getElementById('summaryMobileList'),
  retryWrongBtn: document.getElementById('retryWrongBtn'),
  captureBtn: document.getElementById('captureBtn')
};

const VERSION_ASSETS = [
  window.location.pathname || './index.html',
  './styles/main.css',
  './scripts/app.js',
  './scripts/exporters.js',
  './scripts/question-bank.js',
  './scripts/storage.js',
  './data/weekly-question-bank.js',
  './data/custom-question-bank.js'
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function exportJSON(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function formatVersion(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `v${year}.${month}.${day}-${hours}${minutes}`;
}

async function fetchLastModified(url) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      cache: 'no-store'
    });
    if (!response.ok) return null;
    const lastModified = response.headers.get('last-modified');
    if (!lastModified) return null;

    const timestamp = Date.parse(lastModified);
    return Number.isNaN(timestamp) ? null : timestamp;
  } catch (error) {
    return null;
  }
}

async function resolveAppVersion() {
  const timestamps = await Promise.all(
    VERSION_ASSETS.map(path => fetchLastModified(path))
  );

  const latestTimestamp = Math.max(
    ...timestamps.filter(timestamp => typeof timestamp === 'number'),
    Date.parse(document.lastModified || '')
  );

  if (!Number.isFinite(latestTimestamp)) {
    return 'v--';
  }

  return formatVersion(new Date(latestTimestamp));
}

function getQuestionStats(questionId) {
  return progress[questionId] || { answered: 0, correct: 0, wrong: 0 };
}

function getWrongQuestionCount(pool = questions) {
  return pool.filter(question => (getQuestionStats(question.id).wrong || 0) > 0).length;
}

function getCategories() {
  const categories = [...new Set(questions.map(question => question.category))];
  return [...categories, '全部題庫'];
}

function updateGlobalStats() {
  const totalSessions = sessionHistory.length;
  const averageAccuracy = totalSessions
    ? Math.round(sessionHistory.reduce((sum, item) => sum + item.accuracy, 0) / totalSessions)
    : 0;

  els.statTotal.textContent = questions.length;
  els.statWrong.textContent = getWrongQuestionCount();
  els.statAnswered.textContent = totalSessions;
  els.statAccuracy.textContent = `${averageAccuracy}%`;
}

function getCategoryPool(category = els.categorySelect.value) {
  if (!category || category === '全部題庫') return [...questions];
  return questions.filter(question => question.category === category);
}

function applyModeFilter(pool, mode = els.modeSelect.value) {
  if (mode !== 'wrongOnly') return [...pool];
  return pool.filter(question => (getQuestionStats(question.id).wrong || 0) > 0);
}

function updateSelectionSummary() {
  const category = els.categorySelect.value || '全部題庫';
  const basePool = getCategoryPool(category);
  const filteredPool = applyModeFilter(basePool);
  const categoryLabel = category === '全部題庫' ? '全部題庫' : category;

  if (els.modeSelect.value === 'all') {
    els.selectionHint.textContent = `${categoryLabel}將一次刷完整批題目，共 ${filteredPool.length} 題。`;
  } else {
    els.selectionHint.textContent = filteredPool.length
      ? `${categoryLabel}目前共有 ${filteredPool.length} 題錯題。`
      : `${categoryLabel}目前沒有錯題可刷。`;
  }

  els.startBtn.textContent = '開始刷題';
}

function showHomeView() {
  els.homeView.classList.remove('hidden');
  els.quizShell.classList.add('hidden');
  els.quizProgressWrap.classList.add('hidden');
  els.quizCard.classList.add('hidden');
  els.summaryCard.classList.add('hidden');
}

function showFocusView(view = 'quiz') {
  els.homeView.classList.add('hidden');
  els.quizShell.classList.remove('hidden');
  els.quizProgressWrap.classList.toggle('hidden', view !== 'quiz');
  els.quizCard.classList.toggle('hidden', view !== 'quiz');
  els.summaryCard.classList.toggle('hidden', view !== 'summary');
}

function renderCategoryOptions() {
  const categories = getCategories();
  const current = els.categorySelect.value;

  els.categorySelect.innerHTML = '';
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    els.categorySelect.appendChild(option);
  });

  if (categories.includes(current)) {
    els.categorySelect.value = current;
  } else {
    els.categorySelect.value = categories[0];
  }

  updateSelectionSummary();
}

function buildQueue() {
  const pool = applyModeFilter(getCategoryPool());
  if (!pool.length) {
    alert('目前條件下沒有可刷的題目。你可以改成「全部題目」或先累積一些錯題。');
    return [];
  }
  return pool;
}

function modeLabel(mode) {
  return mode === 'wrongOnly' ? '只刷錯題' : '全部題目';
}

function renderCurrentQuestion() {
  const question = currentSession.queue[currentSession.index];
  if (!question) {
    finishSession();
    return;
  }

  currentSession.answered = false;
  els.nextBtn.disabled = true;
  els.nextBtn.textContent = currentSession.index === currentSession.queue.length - 1 ? '交卷' : '下一題';
  els.resultBanner.className = 'result-banner hidden';
  els.resultBanner.textContent = '';
  els.explanationBox.className = 'explanation hidden';
  els.explanationBox.innerHTML = '';

  els.progressText.textContent = `第 ${currentSession.index + 1} / ${currentSession.queue.length} 題`;
  els.scoreText.textContent = `目前得分：${currentSession.score}`;
  els.progressFill.style.width = `${(currentSession.index / currentSession.queue.length) * 100}%`;
  els.questionTitle.textContent = question.question;

  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  els.optionsContainer.innerHTML = '';

  question.options.forEach((text, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.innerHTML = `<span class="option-letter">${letters[index]}</span><span>${escapeHtml(text)}</span>`;
    button.addEventListener('click', () => answerQuestion(index));
    els.optionsContainer.appendChild(button);
  });
}

function startSession(customQueue = null) {
  const queue = customQueue || buildQueue();
  if (!queue.length) return;

  currentSession = {
    queue,
    index: 0,
    score: 0,
    answered: false,
    results: []
  };

  showFocusView('quiz');
  els.quizModeBadge.textContent = modeLabel(els.modeSelect.value);
  els.quizCategoryBadge.textContent = els.categorySelect.value || '全部題庫';
  renderCurrentQuestion();
}

function answerQuestion(selectedIndex) {
  if (currentSession.answered) return;

  const question = currentSession.queue[currentSession.index];
  const isCorrect = selectedIndex === question.answer;
  currentSession.answered = true;

  if (isCorrect) currentSession.score += 1;

  const stats = getQuestionStats(question.id);
  stats.answered = (stats.answered || 0) + 1;
  if (isCorrect) {
    stats.correct = (stats.correct || 0) + 1;
  } else {
    stats.wrong = (stats.wrong || 0) + 1;
  }

  progress[question.id] = stats;
  saveProgress(progress);
  updateGlobalStats();
  updateSelectionSummary();

  [...els.optionsContainer.querySelectorAll('.option')].forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add('correct');
    if (index === selectedIndex && index !== question.answer) button.classList.add('wrong');
  });

  els.resultBanner.className = `result-banner ${isCorrect ? 'result-ok' : 'result-bad'}`;
  els.resultBanner.textContent = isCorrect ? '✅ 答對了！' : '❌ 答錯了';
  els.explanationBox.className = 'explanation';
  els.explanationBox.innerHTML = `<strong>解析：</strong>${escapeHtml(question.explanation)}<br><br><strong>正確答案：</strong>${String.fromCharCode(65 + question.answer)}. ${escapeHtml(question.options[question.answer])}`;
  els.nextBtn.disabled = false;
  els.scoreText.textContent = `目前得分：${currentSession.score}`;
  els.progressFill.style.width = `${((currentSession.index + 1) / currentSession.queue.length) * 100}%`;

  currentSession.results.push({
    questionId: question.id,
    question: question.question,
    selectedIndex,
    correctIndex: question.answer,
    selectedText: question.options[selectedIndex],
    correctText: question.options[question.answer],
    explanation: question.explanation,
    isCorrect
  });
}

function nextQuestion() {
  currentSession.index += 1;
  if (currentSession.index >= currentSession.queue.length) {
    finishSession();
    return;
  }
  renderCurrentQuestion();
}

function finishSession() {
  const total = currentSession.queue.length;
  const correct = currentSession.score;
  const wrong = total - correct;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;

  showFocusView('summary');
  els.progressFill.style.width = '100%';
  els.summaryTotal.textContent = total;
  els.summaryCorrect.textContent = correct;
  els.summaryWrong.textContent = wrong;
  els.summaryAccuracy.textContent = `${accuracy}%`;

  sessionHistory.push({
    timestamp: new Date().toISOString(),
    total,
    correct,
    accuracy,
    category: els.quizCategoryBadge.textContent,
    mode: els.quizModeBadge.textContent
  });
  saveSessionHistory(sessionHistory);
  updateGlobalStats();

  els.summaryTableBody.innerHTML = currentSession.results.map((result, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(result.question)}</td>
      <td>${String.fromCharCode(65 + result.selectedIndex)}. ${escapeHtml(result.selectedText)}</td>
      <td>${String.fromCharCode(65 + result.correctIndex)}. ${escapeHtml(result.correctText)}</td>
      <td>${result.isCorrect ? '✅ 正確' : '❌ 錯誤'}</td>
    </tr>
  `).join('');

  els.summaryMobileList.innerHTML = currentSession.results.map((result, index) => `
    <article class="summary-result-card">
      <div class="summary-card-top">
        <div class="summary-card-index">第 ${index + 1} 題</div>
        <div class="summary-status ${result.isCorrect ? 'summary-status-ok' : 'summary-status-bad'}">
          ${result.isCorrect ? '✅ 正確' : '❌ 錯誤'}
        </div>
      </div>
      <div class="summary-card-question">${escapeHtml(result.question)}</div>
      <div class="summary-card-line">
        <div class="summary-card-label">你的答案</div>
        <div class="summary-card-value">${String.fromCharCode(65 + result.selectedIndex)}. ${escapeHtml(result.selectedText)}</div>
      </div>
      <div class="summary-card-line">
        <div class="summary-card-label">正確答案</div>
        <div class="summary-card-value">${String.fromCharCode(65 + result.correctIndex)}. ${escapeHtml(result.correctText)}</div>
      </div>
    </article>
  `).join('');

  const wrongQueue = currentSession.results
    .filter(result => !result.isCorrect)
    .map(result => questions.find(question => question.id === result.questionId))
    .filter(Boolean);

  els.retryWrongBtn.disabled = wrongQueue.length === 0;
  els.retryWrongBtn.dataset.queue = JSON.stringify(wrongQueue.map(question => question.id));
}

function resetSessionView() {
  currentSession = {
    queue: [],
    index: 0,
    score: 0,
    answered: false,
    results: []
  };
  showHomeView();
}

function importQuestionsFromTextarea() {
  const text = els.importArea.value.trim();
  if (!text) {
    alert('請先貼上題庫 JSON。');
    return;
  }

  try {
    const data = JSON.parse(text);
    if (!Array.isArray(data) || !data.length) {
      alert('JSON 需為非空陣列。');
      return;
    }

    for (const item of data) {
      if (
        typeof item.id !== 'string' ||
        typeof item.category !== 'string' ||
        typeof item.type !== 'string' ||
        typeof item.question !== 'string' ||
        !Array.isArray(item.options) ||
        typeof item.answer !== 'number' ||
        typeof item.explanation !== 'string'
      ) {
        alert('題目格式不正確，請檢查每一題是否含有 id/category/type/question/options/answer/explanation。');
        return;
      }
    }

    questions = data;
    saveQuestions(questions, 'custom');
    renderCategoryOptions();
    updateGlobalStats();
    resetSessionView();
    alert('題庫匯入成功！');
  } catch (error) {
    alert(`JSON 解析失敗，請檢查格式。\n\n${error.message}`);
  }
}

function clearAllProgress() {
  const confirmed = confirm('確定要清空所有作答紀錄嗎？這不會刪掉題庫。');
  if (!confirmed) return;

  progress = {};
  sessionHistory = [];
  saveProgress(progress);
  saveSessionHistory(sessionHistory);
  updateGlobalStats();
  updateSelectionSummary();
  alert('已清空作答紀錄。');
}

function resetQuestionsToDefault() {
  const confirmed = confirm('確定要還原每週預設題庫嗎？目前自訂題庫會被覆蓋。');
  if (!confirmed) return;

  questions = [...DEFAULT_QUESTIONS];
  saveQuestions(questions, 'default');
  renderCategoryOptions();
  updateGlobalStats();
  resetSessionView();
  alert('已還原每週預設題庫。');
}

async function init() {
  els.appVersionBadge.textContent = await resolveAppVersion();
  renderCategoryOptions();
  updateGlobalStats();
  updateSelectionSummary();

  els.startBtn.addEventListener('click', () => startSession());
  els.captureBtn.addEventListener('click', () => exportSessionAsImage({
    currentSession,
    quizCategoryLabel: els.quizCategoryBadge.textContent,
    quizModeLabel: els.quizModeBadge.textContent
  }));
  els.categorySelect.addEventListener('change', updateSelectionSummary);
  els.modeSelect.addEventListener('change', updateSelectionSummary);
  els.quizRestartBtn.addEventListener('click', () => startSession(currentSession.queue.length ? [...currentSession.queue] : null));
  els.quizHomeBtn.addEventListener('click', resetSessionView);
  els.nextBtn.addEventListener('click', nextQuestion);

  els.retryWrongBtn.addEventListener('click', () => {
    const ids = JSON.parse(els.retryWrongBtn.dataset.queue || '[]');
    const queue = ids.map(id => questions.find(question => question.id === id)).filter(Boolean);
    if (!queue.length) {
      alert('本輪沒有錯題。');
      return;
    }
    startSession(queue);
  });

  els.importBtn.addEventListener('click', importQuestionsFromTextarea);
  els.exportQuestionsBtn.addEventListener('click', () => exportJSON('questions.json', questions));
  els.exportProgressBtn.addEventListener('click', () => exportProgressAsImage({
    questions,
    progress,
    sessionHistory,
    getWrongQuestionCount
  }));
  els.clearProgressBtn.addEventListener('click', clearAllProgress);
  els.resetQuestionsBtn.addEventListener('click', resetQuestionsToDefault);
}

init();
