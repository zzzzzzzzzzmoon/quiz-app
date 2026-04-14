export const LEGACY_DEFAULT_QUESTION_IDS = [
  'nlp-001',
  'nlp-002',
  'nlp-003',
  'nlp-004',
  'nlp-005',
  'nlp-006',
  'nlp-007',
  'nlp-008'
];

export const WEEKLY_QUESTION_SET_VERSION = window.WEEKLY_QUESTION_BANK_VERSION || '2026-04-13';
export const CUSTOM_QUESTION_SET_VERSION = window.CUSTOM_QUESTION_BANK_VERSION || 'no-custom-bank';
export const DEFAULT_QUESTION_SET_VERSION = `${WEEKLY_QUESTION_SET_VERSION}__${CUSTOM_QUESTION_SET_VERSION}`;

export const WEEKLY_QUESTIONS = (window.WEEKLY_QUESTION_BANK || []).flatMap(week =>
  week.questions.map(item => ({
    ...item,
    category: week.label,
    weekId: week.id,
    weekNumber: week.number,
    sourceFile: week.sourceFile
  }))
);

function resolveCustomCategory(item) {
  if (typeof item?.category === 'string' && /^期中考自訂題目-\d+$/.test(item.category)) {
    return item.category;
  }
  if (typeof item?.id === 'string' && item.id.startsWith('mid3-')) {
    return '期中考自訂題目-3';
  }
  if (typeof item?.id === 'string' && item.id.startsWith('mid2-')) {
    return '期中考自訂題目-2';
  }
  if (typeof item?.id === 'string' && item.id.startsWith('mid1-')) {
    return '期中考自訂題目-1';
  }
  if (typeof item?.id === 'string' && item.id.startsWith('mid-')) {
    return '期中考自訂題目';
  }
  return item?.category || '自訂題庫';
}

export const CUSTOM_QUESTIONS = (window.CUSTOM_QUESTION_BANK || []).map(item => ({
  ...item,
  category: resolveCustomCategory(item),
  sourceFile: item.sourceFile || 'data/custom-question-bank.js'
}));

export const DEFAULT_QUESTIONS = [...WEEKLY_QUESTIONS, ...CUSTOM_QUESTIONS];

export function isValidQuestionSet(data) {
  return Array.isArray(data) && data.length && data.every(item =>
    item &&
    typeof item.id === 'string' &&
    typeof item.category === 'string' &&
    typeof item.type === 'string' &&
    typeof item.question === 'string' &&
    Array.isArray(item.options) &&
    typeof item.answer === 'number' &&
    typeof item.explanation === 'string'
  );
}

export function matchesQuestionIds(data, expectedIds) {
  return Array.isArray(data) &&
    data.length === expectedIds.length &&
    data.every((item, index) => item?.id === expectedIds[index]);
}

export function isLegacyBundledQuestionSet(data) {
  return matchesQuestionIds(data, LEGACY_DEFAULT_QUESTION_IDS) ||
    matchesQuestionIds(data, DEFAULT_QUESTIONS.map(item => item.id));
}

export function normalizeQuestionCategories(data) {
  if (!Array.isArray(data)) return data;

  return data.map(item => {
    if (!item || typeof item !== 'object') return item;
    if (typeof item.category === 'string' && /^期中考自訂題目-\d+$/.test(item.category)) {
      return item;
    }
    if (typeof item.id === 'string' && item.id.startsWith('mid3-')) {
      return { ...item, category: '期中考自訂題目-3' };
    }
    if (typeof item.id === 'string' && item.id.startsWith('mid2-')) {
      return { ...item, category: '期中考自訂題目-2' };
    }
    if (typeof item.id === 'string' && item.id.startsWith('mid1-')) {
      return { ...item, category: '期中考自訂題目-1' };
    }
    if (typeof item.id === 'string' && item.id.startsWith('mid-')) {
      return { ...item, category: '期中考自訂題目' };
    }
    return item;
  });
}
