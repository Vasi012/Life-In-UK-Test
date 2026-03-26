// const quizQuestionsDataBase = ... (now loaded globally from questionnaire.js)

const TOTAL_QUESTIONS = 24;
const PASS_MARK = Math.ceil(TOTAL_QUESTIONS * 0.8); // 80% pass mark
const QUIZ_DURATION_MS = 45 * 60 * 1000; // 45 minutes

const startPageBtn = document.getElementById('start-page-btn');
const introPanel = document.getElementById('intro-panel');
const beginQuizBtn = document.getElementById('begin-quiz-btn');
const quizPanel = document.getElementById('quiz-panel');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const questionCount = document.getElementById('question-count');
const timerEl = document.getElementById('timer');
const progressFillEl = document.getElementById('progress-fill');
const submitBtn = document.getElementById('submit-btn');
const resultPanel = document.getElementById('result-panel');
const userScoreEl = document.getElementById('user-score');
const messageEl = document.getElementById('message');
const historySummaryEl = document.getElementById('history-summary');
const passLikelihoodEl = document.getElementById('pass-likelihood');
const reviewPanel = document.getElementById('review-panel');
// Debug: Check if elements are found
console.log('startPageBtn:', startPageBtn);
console.log('introPanel:', introPanel);
console.log('beginQuizBtn:', beginQuizBtn);

let shuffledQuestions = [];
let currentIndex = 0;
let selectedAnswers = new Set();
let score = 0;
let answeredQuestions = [];
let timerInterval = null;
let timeLeftMs = QUIZ_DURATION_MS;

function randomSubset(list, size) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, size);
}

function getHistory() {
    const raw = localStorage.getItem('lifeInUKQuizHistory');
    if (!raw) {
        return { totalTests: 0, passedTests: 0, totalCorrect: 0 };
    }
    try {
        return JSON.parse(raw);
    } catch {
        return { totalTests: 0, passedTests: 0, totalCorrect: 0 };
    }
}

function updateHistory(currentScore) {
    const history = getHistory();
    history.totalTests += 1;
    history.totalCorrect += currentScore;
    if (currentScore >= PASS_MARK) {
        history.passedTests += 1;
    }
    localStorage.setItem('lifeInUKQuizHistory', JSON.stringify(history));
    return history;
}

function renderHistory(history) {
    const avgScore = history.totalTests ? (history.totalCorrect / history.totalTests).toFixed(1) : '0.0';
    const passRate = history.totalTests ? Math.round((history.passedTests / history.totalTests) * 100) : 0;
    historySummaryEl.textContent = `Total attempts: ${history.totalTests}. Passed: ${history.passedTests}. Average score: ${avgScore}/${TOTAL_QUESTIONS}.`;
    passLikelihoodEl.textContent = `Estimated pass likelihood: ${passRate}%`;
}

function formatTime(ms) {
    const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

function updateTimerDisplay() {
    timerEl.textContent = formatTime(timeLeftMs);
}

function clearQuizTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function startQuizTimer() {
    clearQuizTimer();
    timeLeftMs = QUIZ_DURATION_MS;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeftMs -= 1000;
        if (timeLeftMs <= 0) {
            timeLeftMs = 0;
            updateTimerDisplay();
            clearQuizTimer();
            // Auto-end quiz on timeout
            endQuiz();
            return;
        }
        updateTimerDisplay();
    }, 1000);
}

function updateProgress() {
    const progress = Math.round((currentIndex / TOTAL_QUESTIONS) * 100);
    progressFillEl.style.width = `${progress}%`;
}

function buildReviewItem(entry, index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'review-item';

    const status = entry.isCorrect ? 'Correct' : 'Incorrect';

    let optionsHtml = '<ol class="review-options">';
    entry.answers.forEach((answerText, optionIndex) => {
        const letter = String.fromCharCode(65 + optionIndex);
        const isCorrectOption = entry.correctAnswers.includes(answerText);
        const isSelectedOption = entry.selectedAnswers.includes(answerText);
        const symbol = isCorrectOption ? '✓' : '❌';

        const selectedMarker = isSelectedOption ? '<strong>(Your selection)</strong>' : '';
        const explanationText = entry.optionExplanations?.[answerText] || (isCorrectOption
            ? `${answerText} is correct. ${entry.explanation}`
            : `${answerText} is incorrect. The correct answer is ${entry.correctAnswers.join(', ')}. ${entry.explanation}`);

        optionsHtml += `
            <li>
                <div><strong>${letter}) ${answerText}</strong> — ${symbol} ${selectedMarker}</div>
                <div class="review-subtext">${explanationText}</div>
            </li>
        `;
    });
    optionsHtml += '</ol>';

    wrapper.innerHTML = `
        <div class="review-title ${entry.isCorrect ? 'correct' : 'incorrect'}">${index + 1}. ${status} - ${entry.question}</div>
        <div class="review-detail"><strong>Your answer:</strong> ${entry.selectedAnswers.join(', ') || '<em>No answer</em>'}</div>
        <div class="review-detail"><strong>Correct answer:</strong> ${entry.correctAnswers.join(', ')}</div>
        <div class="review-detail"><strong>Review:</strong></div>
        <div class="review-options-wrapper">${optionsHtml}</div>
    `;

    return wrapper;
}

function renderReviewPanel() {
    reviewPanel.innerHTML = '';
    const heading = document.createElement('h3');
    heading.textContent = 'Review: all 24 questions from this quiz';
    reviewPanel.appendChild(heading);

    answeredQuestions.forEach((entry, index) => {
        reviewPanel.appendChild(buildReviewItem(entry, index));
    });
}

function fireConfetti(duration = 2000) {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100vw';
    confettiContainer.style.height = '100vh';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.overflow = 'hidden';
    confettiContainer.style.zIndex = '9999';

    const totalPieces = 120;
    const pieces = [];

    for (let i = 0; i < totalPieces; i++) {
        const piece = document.createElement('div');
        piece.style.position = 'absolute';
        piece.style.top = '-8px';
        piece.style.transform = 'rotate(45deg)';
        piece.style.opacity = '0.9';
        piece.style.borderRadius = '3px';

        const size = Math.random() * 8 + 6;
        piece.style.width = `${size}px`;
        piece.style.height = `${size * 0.4}px`;
        piece.style.backgroundColor = ['#ff4b4b', '#ffe55a', '#7af2a7', '#5ec4ff', '#d68cff'][Math.floor(Math.random() * 5)];
        piece.style.left = `${Math.random() * 100}%`;

        const pieceData = {
            element: piece,
            x: parseFloat(piece.style.left),
            y: -8,
            rotation: 0,
            speedY: Math.random() * 2 + 1,
            speedRotation: Math.random() * 10 - 5,
            opacity: 0.9
        };

        pieces.push(pieceData);
        confettiContainer.appendChild(piece);
    }

    document.body.appendChild(confettiContainer);

    const startTime = Date.now();

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        if (progress >= 1) {
            confettiContainer.remove();
            return;
        }

        pieces.forEach(pieceData => {
            pieceData.y += pieceData.speedY;
            pieceData.rotation += pieceData.speedRotation;
            pieceData.opacity = Math.max(0.9 * (1 - progress), 0);

            pieceData.element.style.transform = `translate(${pieceData.x}%, ${pieceData.y}px) rotate(${pieceData.rotation}deg)`;
            pieceData.element.style.opacity = pieceData.opacity;
        });

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

function showPanel(panel) {
    [introPanel, quizPanel, resultPanel].forEach((el) => el.classList.add('hidden'));
    panel.classList.remove('hidden');
}

function startFromLanding() {
    showPanel(introPanel);
    startPageBtn.classList.add('hidden');
}

function beginQuiz() {
    console.log('beginQuiz called');
    console.log('window.quizQuestionsDataBase:', window.quizQuestionsDataBase);
    console.log('TOTAL_QUESTIONS:', TOTAL_QUESTIONS);
    
    if (!window.quizQuestionsDataBase) {
        console.error('window.quizQuestionsDataBase is not available!');
        return;
    }
    
    shuffledQuestions = randomSubset(window.quizQuestionsDataBase, TOTAL_QUESTIONS);
    console.log('shuffledQuestions length:', shuffledQuestions.length);
    currentIndex = 0;
    score = 0;
    selectedAnswers = new Set();
    answeredQuestions = [];
    reviewPanel.innerHTML = '';
    startQuizTimer();
    showPanel(quizPanel);
    updateProgress();
    renderQuestion();
}

function renderQuestion() {
    const q = shuffledQuestions[currentIndex];
    questionEl.textContent = q.question;
    questionCount.textContent = `${currentIndex + 1}/${TOTAL_QUESTIONS}`;
    answersEl.innerHTML = '';
    selectedAnswers = new Set();

    const multi = q.correctAnswers.length > 1;

    q.answers.forEach((item) => {
        const btn = document.createElement('button');
        btn.className = 'btn answer-btn';
        btn.textContent = item;
        btn.type = 'button';
        btn.addEventListener('click', () => {
            if (multi) {
                if (selectedAnswers.has(item)) {
                    selectedAnswers.delete(item);
                    btn.classList.remove('selected');
                } else {
                    selectedAnswers.add(item);
                    btn.classList.add('selected');
                }
            } else {
                selectedAnswers.clear();
                document.querySelectorAll('.answer-btn').forEach((b) => b.classList.remove('selected'));
                selectedAnswers.add(item);
                btn.classList.add('selected');
            }
        });
        answersEl.appendChild(btn);
    });

    updateProgress();
}

function endQuiz() {
    clearQuizTimer();
    updateProgress();
    showPanel(resultPanel);
    userScoreEl.textContent = score;

    if (score >= PASS_MARK) {
        messageEl.textContent = `Great job! You passed with ${score}/${TOTAL_QUESTIONS}.`;
        fireConfetti(2000);
    } else {
        messageEl.textContent = `Keep practicing — you scored ${score}/${TOTAL_QUESTIONS}.`;
    }

    const history = updateHistory(score);
    renderHistory(history);
    renderReviewPanel();
}

function submitCurrentAnswer() {
    if (selectedAnswers.size === 0) {
        alert('Please choose an answer first.');
        return;
    }

    const q = shuffledQuestions[currentIndex];
    const correctSet = new Set(q.correctAnswers);

    document.querySelectorAll('.answer-btn').forEach((btn) => {
        btn.disabled = true;
        const text = btn.textContent;
        if (correctSet.has(text)) {
            btn.classList.add('correct');
        } else if (btn.classList.contains('selected')) {
            btn.classList.add('incorrect');
        } else {
            btn.classList.add('muted');
        }
    });

    let isCorrect = selectedAnswers.size === correctSet.size;
    if (isCorrect) {
        selectedAnswers.forEach((answer) => {
            if (!correctSet.has(answer)) {
                isCorrect = false;
            }
        });
    }

    if (isCorrect) {
        score += 1;
    }

    answeredQuestions.push({
        question: q.question,
        answers: q.answers,
        selectedAnswers: Array.from(selectedAnswers),
        correctAnswers: q.correctAnswers,
        isCorrect,
        explanation: q.explanation || 'No explanation available.',
        optionExplanations: q.optionExplanations || {},
    });

    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.disabled = false;
        currentIndex += 1;
        if (currentIndex >= TOTAL_QUESTIONS) {
            endQuiz();
        } else {
            renderQuestion();
        }
    }, 500);
}

function resetApplication() {
    clearQuizTimer();
    timeLeftMs = QUIZ_DURATION_MS;
    updateTimerDisplay();
    progressFillEl.style.width = '0%';
    startPageBtn.classList.remove('hidden');
    showPanel(introPanel);
}

window.addEventListener('load', () => {
    console.log('Window loaded, attaching event listeners');
    startPageBtn.addEventListener('click', startFromLanding);
    beginQuizBtn.addEventListener('click', beginQuiz);
    console.log('Event listeners attached');
    console.log('beginQuizBtn for event listener:', beginQuizBtn);
    submitBtn.addEventListener('click', submitCurrentAnswer);
    retryBtn.addEventListener('click', resetApplication);
    
    const history = getHistory();
    renderHistory(history);
});
