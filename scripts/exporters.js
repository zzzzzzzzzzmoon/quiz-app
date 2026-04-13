function drawRoundedRect(ctx, x, y, width, height, radius, fill, stroke = null) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();

  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }

  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}

function createExportCanvas(width, height, scale = 3) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);
  return { canvas, ctx };
}

function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  const paragraphs = String(text).split('\n');

  paragraphs.forEach(paragraph => {
    const words = paragraph.split(/\s+/).filter(Boolean);
    if (!words.length) {
      lines.push('');
      return;
    }

    let current = '';
    words.forEach(word => {
      const next = current ? `${current} ${word}` : word;
      if (ctx.measureText(next).width <= maxWidth) {
        current = next;
        return;
      }

      if (current) {
        lines.push(current);
        current = '';
      }

      let fragment = '';
      [...word].forEach(char => {
        const candidate = fragment + char;
        if (ctx.measureText(candidate).width > maxWidth && fragment) {
          lines.push(fragment);
          fragment = char;
        } else {
          fragment = candidate;
        }
      });
      current = fragment;
    });

    if (current) lines.push(current);
  });

  return lines.length ? lines : [''];
}

function drawCanvasTextBlock(ctx, lines, x, y, lineHeight, color) {
  ctx.fillStyle = color;
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
  return y + lines.length * lineHeight;
}

function canvasToBlob(canvas) {
  return new Promise(resolve => {
    canvas.toBlob(resolve, 'image/png');
  });
}

async function downloadCanvas(canvas, filename) {
  const blob = await canvasToBlob(canvas);
  if (!blob) {
    throw new Error('圖片產生失敗');
  }

  const url = URL.createObjectURL(blob);
  const isMobile = window.matchMedia('(max-width: 768px)').matches || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  try {
    if (isMobile) {
      const tab = window.open(url, '_blank', 'noopener');
      if (!tab) {
        window.location.href = url;
      }
    } else {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  } finally {
    window.setTimeout(() => URL.revokeObjectURL(url), 60000);
  }
}

export async function exportSessionAsImage({ currentSession, quizCategoryLabel, quizModeLabel }) {
  if (!currentSession.results.length) {
    alert('請先完成一輪作答，再匯出本輪截圖。');
    return;
  }

  const total = currentSession.queue.length;
  const correct = currentSession.score;
  const wrong = total - correct;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  const width = 1280;
  const cardWidth = width - 120;
  const textWidth = cardWidth - 72;
  const baseRowGap = 24;
  const statCardWidth = (cardWidth - 24) / 2;

  const measureCanvas = document.createElement('canvas');
  const measureCtx = measureCanvas.getContext('2d');

  const rowLayouts = currentSession.results.map((result, index) => {
    measureCtx.font = '700 30px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    const questionLines = wrapCanvasText(measureCtx, `${index + 1}. ${result.question}`, textWidth);
    measureCtx.font = '500 24px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    const answerLines = wrapCanvasText(measureCtx, `你的答案：${String.fromCharCode(65 + result.selectedIndex)}. ${result.selectedText}`, textWidth);
    const correctLines = wrapCanvasText(measureCtx, `正確答案：${String.fromCharCode(65 + result.correctIndex)}. ${result.correctText}`, textWidth);
    const explanationLines = wrapCanvasText(measureCtx, `解析：${result.explanation}`, textWidth);
    const rowHeight = 52 + questionLines.length * 40 + answerLines.length * 32 + correctLines.length * 32 + explanationLines.length * 32 + 68;
    return { result, questionLines, answerLines, correctLines, explanationLines, rowHeight };
  });

  const contentHeight = rowLayouts.reduce((sum, row) => sum + row.rowHeight + baseRowGap, 0);
  const height = 300 + 180 + 72 + contentHeight + 60;
  const { canvas, ctx } = createExportCanvas(width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f8f9fd');
  gradient.addColorStop(1, '#eef2fa');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#111827';
  ctx.font = '700 52px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
  ctx.fillText('本輪結果截圖', 60, 86);

  ctx.fillStyle = '#6b7280';
  ctx.font = '26px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
  ctx.fillText(`匯出時間 ${new Date().toLocaleString('zh-TW')}`, 60, 126);

  const badges = [quizCategoryLabel, quizModeLabel];
  let badgeX = 60;
  badges.forEach(label => {
    ctx.font = '700 22px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    const badgeWidth = ctx.measureText(label).width + 40;
    drawRoundedRect(ctx, badgeX, 156, badgeWidth, 48, 24, 'rgba(10,132,255,0.12)', 'rgba(10,132,255,0.16)');
    ctx.fillStyle = '#0065d1';
    ctx.fillText(label, badgeX + 20, 187);
    badgeX += badgeWidth + 16;
  });

  const stats = [
    { label: '本輪題數', value: `${total}` },
    { label: '答對題數', value: `${correct}` },
    { label: '正確率', value: `${accuracy}%` },
    { label: '錯題數', value: `${wrong}` }
  ];

  stats.forEach((stat, index) => {
    const x = 60 + (index % 2) * (statCardWidth + 24);
    const y = 232 + Math.floor(index / 2) * 96;
    drawRoundedRect(ctx, x, y, statCardWidth, 84, 24, 'rgba(255,255,255,0.9)', 'rgba(15,23,42,0.08)');
    ctx.fillStyle = '#6b7280';
    ctx.font = '23px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillText(stat.label, x + 24, y + 32);
    ctx.fillStyle = '#111827';
    ctx.font = '700 40px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillText(stat.value, x + 24, y + 68);
  });

  let y = 440;
  ctx.fillStyle = '#111827';
  ctx.font = '700 34px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
  ctx.fillText('逐題明細', 60, y);
  y += 28;

  rowLayouts.forEach(({ result, questionLines, answerLines, correctLines, explanationLines, rowHeight }) => {
    drawRoundedRect(ctx, 60, y, cardWidth, rowHeight, 28, 'rgba(255,255,255,0.92)', 'rgba(15,23,42,0.08)');

    let cursorY = y + 42;
    ctx.font = '700 30px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    cursorY = drawCanvasTextBlock(ctx, questionLines, 96, cursorY, 40, '#111827');

    cursorY += 12;
    ctx.font = '500 24px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    cursorY = drawCanvasTextBlock(ctx, answerLines, 96, cursorY, 32, '#374151');
    cursorY += 4;
    cursorY = drawCanvasTextBlock(ctx, correctLines, 96, cursorY, 32, '#374151');
    cursorY += 4;
    drawCanvasTextBlock(ctx, explanationLines, 96, cursorY, 32, '#6b7280');

    const statusLabel = result.isCorrect ? '答對' : '答錯';
    const statusFill = result.isCorrect ? 'rgba(52,199,89,0.14)' : 'rgba(255,59,48,0.12)';
    const statusStroke = result.isCorrect ? 'rgba(52,199,89,0.25)' : 'rgba(255,59,48,0.22)';
    const statusText = result.isCorrect ? '#1c8d42' : '#c9342c';
    ctx.font = '700 20px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    const statusWidth = ctx.measureText(statusLabel).width + 34;
    drawRoundedRect(ctx, width - 60 - statusWidth, y + 24, statusWidth, 40, 20, statusFill, statusStroke);
    ctx.fillStyle = statusText;
    ctx.fillText(statusLabel, width - 60 - statusWidth + 17, y + 50);

    y += rowHeight + baseRowGap;
  });

  try {
    await downloadCanvas(canvas, 'quiz-session-summary.png');
  } catch (error) {
    alert(`匯出失敗：${error.message}`);
  }
}

export async function exportProgressAsImage({ questions, progress, sessionHistory, getWrongQuestionCount }) {
  if (!sessionHistory.length && !Object.keys(progress).length) {
    alert('目前還沒有作答紀錄可匯出。');
    return;
  }

  const totalSessions = sessionHistory.length;
  const averageAccuracy = totalSessions
    ? Math.round(sessionHistory.reduce((sum, item) => sum + item.accuracy, 0) / totalSessions)
    : 0;
  const totalWrongQuestions = getWrongQuestionCount();
  const width = 960;
  const height = 460;
  const { canvas, ctx } = createExportCanvas(width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f8f9fd');
  gradient.addColorStop(1, '#eef2fa');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#111827';
  ctx.font = '700 48px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
  ctx.fillText('刷題總紀錄', 72, 88);

  ctx.fillStyle = '#6b7280';
  ctx.font = '28px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
  ctx.fillText(`匯出時間 ${new Date().toLocaleString('zh-TW')}`, 72, 132);

  const cards = [
    { label: '題庫總題數', value: `${questions.length}` },
    { label: '總作答次數', value: `${totalSessions}` },
    { label: '平均正確率', value: `${averageAccuracy}%` },
    { label: '錯題數', value: `${totalWrongQuestions}` }
  ];

  cards.forEach((card, index) => {
    const x = 72 + (index % 2) * 396;
    const y = 176 + Math.floor(index / 2) * 150;
    drawRoundedRect(ctx, x, y, 324, 120, 28, 'rgba(255,255,255,0.88)', 'rgba(15,23,42,0.08)');
    ctx.fillStyle = '#6b7280';
    ctx.font = '24px -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif';
    ctx.fillText(card.label, x + 24, y + 42);
    ctx.fillStyle = '#111827';
    ctx.font = '700 44px -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif';
    ctx.fillText(card.value, x + 24, y + 92);
  });

  try {
    await downloadCanvas(canvas, 'quiz-progress-summary.png');
  } catch (error) {
    alert(`匯出失敗：${error.message}`);
  }
}
