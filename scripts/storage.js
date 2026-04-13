import {
  DEFAULT_QUESTIONS,
  DEFAULT_QUESTION_SET_VERSION,
  isLegacyBundledQuestionSet,
  isValidQuestionSet,
  normalizeQuestionCategories
} from './question-bank.js';

export const STORAGE_KEYS = {
  questions: 'quiz_app_questions_v1',
  questionSource: 'quiz_app_question_source_v1',
  defaultVersion: 'quiz_app_default_version_v1',
  progress: 'quiz_app_progress_v1',
  sessions: 'quiz_app_sessions_v1'
};

function persistQuestions(nextQuestions, source = 'custom') {
  localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(nextQuestions));
  localStorage.setItem(STORAGE_KEYS.questionSource, source);

  if (source === 'default') {
    localStorage.setItem(STORAGE_KEYS.defaultVersion, DEFAULT_QUESTION_SET_VERSION);
    return;
  }

  localStorage.removeItem(STORAGE_KEYS.defaultVersion);
}

export function loadQuestions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.questions);
    const source = localStorage.getItem(STORAGE_KEYS.questionSource);
    const defaultVersion = localStorage.getItem(STORAGE_KEYS.defaultVersion);

    if (!raw) {
      persistQuestions(DEFAULT_QUESTIONS, 'default');
      return [...DEFAULT_QUESTIONS];
    }

    const data = normalizeQuestionCategories(JSON.parse(raw));
    if (!isValidQuestionSet(data)) {
      persistQuestions(DEFAULT_QUESTIONS, 'default');
      return [...DEFAULT_QUESTIONS];
    }

    if (source === 'custom') return data;

    if (source === 'default') {
      if (defaultVersion === DEFAULT_QUESTION_SET_VERSION) return data;
      persistQuestions(DEFAULT_QUESTIONS, 'default');
      return [...DEFAULT_QUESTIONS];
    }

    if (isLegacyBundledQuestionSet(data)) {
      persistQuestions(DEFAULT_QUESTIONS, 'default');
      return [...DEFAULT_QUESTIONS];
    }

    persistQuestions(data, 'custom');
    return data;
  } catch {
    persistQuestions(DEFAULT_QUESTIONS, 'default');
    return [...DEFAULT_QUESTIONS];
  }
}

export function saveQuestions(questions, source = 'custom') {
  persistQuestions(questions, source);
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.progress);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
}

export function loadSessionHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.sessions);
    if (!raw) return [];

    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];

    return data.filter(item =>
      item &&
      typeof item.total === 'number' &&
      typeof item.correct === 'number' &&
      typeof item.accuracy === 'number'
    );
  } catch {
    return [];
  }
}

export function saveSessionHistory(sessionHistory) {
  localStorage.setItem(STORAGE_KEYS.sessions, JSON.stringify(sessionHistory));
}
