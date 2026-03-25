import { quizQuestionsDataBase } from './questionnaire.js';

const TOTAL_QUESTIONS = 24;
const PASS_MARK = Math.ceil(TOTAL_QUESTIONS * 0.65);

const startPageBtn = document.getElementById('start-page-btn');
const introPanel = document.getElementById('intro-panel');
const beginQuizBtn = document.getElementById('begin-quiz-btn');
const quizPanel = document.getElementById('quiz-panel');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const questionCount = document.getElementById('question-count');
const submitBtn = document.getElementById('submit-btn');
const resultPanel = document.getElementById('result-panel');
const userScoreEl = document.getElementById('user-score');
const messageEl = document.getElementById('message');
const historySummaryEl = document.getElementById('history-summary');
const passLikelihoodEl = document.getElementById('pass-likelihood');
const retryBtn = document.getElementById('retry-btn');

let shuffledQuestions = [];
let currentIndex = 0;
let selectedAnswers = new Set();
let score = 0;

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

function showPanel(panel) {
    [introPanel, quizPanel, resultPanel].forEach((el) => el.classList.add('hidden'));
    panel.classList.remove('hidden');
}

function startFromLanding() {
    showPanel(introPanel);
    startPageBtn.classList.add('hidden');
}

function beginQuiz() {
    shuffledQuestions = randomSubset(quizQuestionsDataBase, TOTAL_QUESTIONS);
    currentIndex = 0;
    score = 0;
    selectedAnswers = new Set();
    showPanel(quizPanel);
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
}

function endQuiz() {
    showPanel(resultPanel);
    userScoreEl.textContent = score;

    if (score >= PASS_MARK) {
        messageEl.textContent = `Great job! You passed with ${score}/${TOTAL_QUESTIONS}.`;
    } else {
        messageEl.textContent = `Keep practicing — you scored ${score}/${TOTAL_QUESTIONS}.`;
    }

    const history = updateHistory(score);
    renderHistory(history);
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

    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.disabled = false;
        currentIndex += 1;
        if (currentIndex >= TOTAL_QUESTIONS) {
            endQuiz();
        } else {
            renderQuestion();
        }
    }, 1500);
}

function resetApplication() {
    startPageBtn.classList.remove('hidden');
    showPanel(introPanel);
}

startPageBtn.addEventListener('click', startFromLanding);
beginQuizBtn.addEventListener('click', beginQuiz);
submitBtn.addEventListener('click', submitCurrentAnswer);
retryBtn.addEventListener('click', resetApplication);

window.addEventListener('load', () => {
    const history = getHistory();
    renderHistory(history);
});
