# Life in the UK Test (Personal Project)

## 🔧 Project Overview (Technical)

This is a vanilla HTML/CSS/JavaScript client app focused on mimicking a UK citizenship-style quiz. It's built to run as a static website with zero server backend or database.

### Stack & Files

- **Frontend**: `index.html` + `assets/css/style.css` (dark posh styling, responsive cards/panels)
- **Logic and state**: `assets/js/script.js` (~230 lines)
- **Question data**: `assets/js/questionnaire.js` (~1050 lines)
- **No build step**: 100% vanilla ES modules + DOM manipulation

### Project structure

```
Life-In-UK-Test/
├── index.html                    # Main HTML entry point
├── README.md                     # This file
├── 404.html                      # GitHub Pages fallback (single-page app)
├── assets/
│   ├── css/
│   │   └── style.css             # Dark theme, responsive grid, panels
│   ├── images/
│   │   └── browserconfig.xml     # (Meta config)
│   └── js/
│       ├── script.js             # Game logic, state, event handlers
│       └── questionnaire.js      # 200+ questions, parser
```

### Architecture

- **Single-page flow** with three DOM panels:
  1. **Landing panel** (`hero` section) — "Start" button
  2. **Intro panel** — welcomes user, "Begin Quiz" button
  3. **Quiz panel** — question + multi-choice buttons + submit
  4. **Result panel** — score, pass/fail, stats, "Try again"

- **State machine** via `showPanel()` to hide/show panels.
- **Question lifecycle**:
  1. Load all questions from `quizQuestionsDataBase` (200 questions).
  2. Randomize with `randomSubset(..., TOTAL_QUESTIONS)` using Fisher–Yates shuffle.
  3. Present one per screen via `renderQuestion()`.
  4. Accept single or multi-answer selection via toggle buttons.
  5. Auto-advance after 1.5s feedback overlay.

### Automation and persistence

- **Randomization**: Fisher–Yates shuffle on a copy + slice to exactly `TOTAL_QUESTIONS` (e.g., 24).
- **Answer detection**: 
  - Single-answer question: user picks one option.
  - Multi-answer (when `q.correctAnswers.length > 1`): user toggles multiple, must match exact set.
- **Score tracking**: 1 point per correct answer (no partial credit).
- **Pass threshold**: `PASS_MARK = Math.ceil(TOTAL_QUESTIONS * 0.65)` (currently 16/24 to pass).
- **Visual feedback**:
  - `.correct` — green highlight for right answers.
  - `.incorrect` — red highlight for wrong user choice.
  - `.muted` — gray for unselected, unrelated options.
  - `.selected` — highlight user's active choice(s).
- **Browser storage** (`localStorage`):
  - Key: `lifeInUKQuizHistory`
  - Value: JSON with `{ totalTests, passedTests, totalCorrect }`.
  - Persists across browser sessions (no expiry).
  - Used to calculate **pass rate %** and **average score**.

### Question data format

Each question object:
```javascript
{
  question: "What is the official home of the Prime Minister?",
  answers: ["Buckingham Palace", "Windsor Castle", "21 Oxford Street", "10 Downing Street"],
  correctAnswers: ["10 Downing Street"]  // array for multi-answer support
}
```

Multi-answer example:
```javascript
{
  question: "Which two families fought in the Wars of the Roses?",
  answers: ["House of Lancaster", "House of York", "House of Tudor", "House of Stuart"],
  correctAnswers: ["House of Lancaster", "House of York"]  // user must select both
}
```

### Key functions in script.js

| Function | Purpose |
|----------|---------|
| `randomSubset(list, size)` | Fisher-Yates shuffle + slice |
| `beginQuiz()` | Randomize questions, init state, move to quiz panel |
| `renderQuestion()` | Display current question + create answer buttons |
| `submitCurrentAnswer()` | Check answer correctness, apply styles, auto-advance |
| `endQuiz()` | Show results, update history, render stats |
| `updateHistory(score)` | Persist new attempt to localStorage |
| `renderHistory(history)` | Display cumulative stats |
| `resetApplication()` | Clear state, return to landing |

### Question import & parsing

`questionnaire.js` contains:
- **24 hand-written** initial questions in JavaScript objects.
- **176 imported** questions from a text block (`extraQuestionsRaw`).
- **Parser** `parseExtraQuestions(raw)` that:
  - Splits by newlines.
  - Extracts question number and text.
  - Matches options A–D.
  - Flags correct answers with `✓` symbol.
  - Returns array of question objects.
- **Export**: `quizQuestionsDataBase = [...initialQuestions, ...extraQuestions]` (200 total).

## 🎨 UI & UX flow

1. **Hero landing** — User sees app title and "Start" button on dark gradient background.
2. **Introduction** — Brief welcome text and "Begin Quiz" button.
3. **Quiz flow**:
   - Question number indicator (e.g., "3/24").
   - Question text displayed prominently.
   - 4 answer buttons (single or multi-select based on question type).
   - Submit button (auto-disabled after click).
4. **Immediate feedback** (1.5s duration):
   - Correct answers highlighted in green.
   - User's incorrect picks highlighted in red.
   - Unselected correct options shown in gray (learning aid).
   - All buttons disabled while reviewing.
5. **Auto-advance** — Without user action, moves to next question after feedback.
6. **Result screen**:
   - Score display (e.g., "18/24").
   - Pass/fail emoji message.
   - Session stats: total attempts, passed count, average score, pass rate %.
   - "Try again" button to restart.

### Styling notes

- **Dark theme**: `#1a1a1a` background with gradient accent.
- **Posh aesthetic**: serif fonts, card-based layout, subtle shadows.
- **Responsive**: mobile-first design with flexible grid for buttons.
- **Color coding**:
  - Green (#4ade80) for correct.
  - Red (#ff4444) for incorrect.
  - Gray (#999) for muted/unchosen.
  - Accent blue/teal for buttons.

## 🐞 Known blockers & potential issues

### Current limitations

- **Question pool edge case**: If `TOTAL_QUESTIONS` > available questions, `randomSubset()` still returns a slice (may be shorter than requested). Safe for now (24 < 200), but should add validation if scaled.
- **No time limit**: Users can think indefinitely. A future timer feature would add challenge.
- **Multi-answer exact match only**: If a question has 2 correct answers and user picks 1, they get 0 points (no partial credit).
- **Hardcoded element IDs**: UI depends on specific `id` attributes; refactoring HTML requires script updates.
- **localStorage collision**: If another script uses `lifeInUKQuizHistory` key, data could be lost or corrupted. Namespace it (e.g., `app_v1_history`) to prevent collisions.
- **No error boundary**: JavaScript errors crash silently; no user-facing error messages.
- **Mobile touch delays**: Multi-select on mobile may feel sluggish due to no touch optimizations.

### Potential bugs to watch

- Clearing localStorage manually in DevTools resets history (by design, but can confuse users).
- If question data malformed (bad `correctAnswers` format), grading logic may fail.
- Rapid double-clicks on submit can race conditions (mitigated by disabling button, but not foolproof).
- CSS specificity conflicts if external styles imported.

## ⚙️ Customization guide

### Change quiz difficulty

Edit `assets/js/script.js`:
```javascript
const TOTAL_QUESTIONS = 24;  // Change to any number
const PASS_MARK = Math.ceil(TOTAL_QUESTIONS * 0.65);  // Adjust threshold
```

### Add / edit questions

Edit `assets/js/questionnaire.js`:

**For hand-written questions**, update `initialQuestions` array:
```javascript
const initialQuestions = [
  {
    question: "New question here?",
    answers: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswers: ["Option 1"]
  },
  // ... more
];
```

**For bulk import**, add raw text to `extraQuestionsRaw` and the parser will extract it (format: `123. Question text\nA) Option\nB) Option ✓\nC)...`).

### Adjust pass mark logic

In `script.js`, change percentage or use absolute threshold:
```javascript
const PASS_MARK = 20;  // Absolute: pass if 20+ correct
// OR
const PASS_MARK = Math.ceil(TOTAL_QUESTIONS * 0.70);  // 70% threshold
```

### Change color scheme

Edit `assets/css/style.css`:
```css
:root {
  --color-correct: #4ade80;   /* Green */
  --color-incorrect: #ff4444; /* Red */
  --color-bg: #1a1a1a;        /* Dark bg */
  --color-accent: #00d9ff;    /* Teal accent */
}
```

## 🚀 Future improvements (roadmap)

- [ ] **Question categories** — filter by topic (history, law, society, etc.).
- [ ] **Difficulty levels** — easy/medium/hard subsets.
- [ ] **Timer mode** — 30–60 seconds per question for practice under pressure.
- [ ] **Explanations** — show why answer is correct (requires data expansion).
- [ ] **Dark mode toggle** — switch to light theme.
- [ ] **Export results** — download PDF of scores.
- [ ] **Question replay** — revisit specific questions you got wrong.
- [ ] **Leaderboard** (if shared) — compare pass rates with others (privacy caveat).
- [ ] **Progressive Web App (PWA)** — offline mode, home screen install.
- [ ] **TypeScript migration** — type safety for maintainability.
- [ ] **Accessibility audit** — WCAG compliance (focus management, ARIA labels, keyboard nav).
- [ ] **Unit tests** — Jest for randomization, scoring, history logic.

## 🔐 Privacy & security

- **No backend**: All logic runs client-side.
- **No tracking**: No analytics, no external API calls.
- **localStorage only**: Quiz history stored locally in user's browser, never sent anywhere.
- **Static hosting**: Deployed via GitHub Pages (HTTPS enforced).
- **Safe to share**: No personal data collected or stored server-side.

## 📖 Browser compatibility

- **Modern browsers** (Chrome, Firefox, Safari, Edge): ✅ Full support (ES6 modules, localStorage).
- **IE 11**: ❌ Not supported (ES6 modules not available).
- **Older Safari (<14)**: ⚠️ Partial support (may lack some CSS grid features).

Recommended: Update to latest browser version for best experience.

## 👤 Non-technical explanation (For everyone)

### What is this?

This is a **free, personal practice quiz app** designed to help you prepare for the UK "Life in the UK" citizenship test. If you're planning to apply for British citizenship or just want to test your knowledge of UK history, government, and culture — this app is here to help.

### Why does it exist?

- Created purely for **personal study and practice**.
- Built to be quick, distraction-free, and visually pleasant.
- No sign-up, no ads, no tracking — just quiz and learn.
- Includes a sleek dark theme for comfortable marathon studying sessions.

### How it works

1. **Open the app** and click "Start".
2. **Read the introduction** — get a brief overview.
3. **Begin the quiz** — you'll face 24 random questions.
4. **Choose your answer(s)** — some questions ask for one answer, others ask for multiple. Click to select your choice(s), then hit "Submit".
5. **Get instant feedback**:
   - Green highlights the correct answer.
   - Red shows what you got wrong.
   - Gray shows options you didn't pick.
6. **Auto-advance** — the app automatically moves to the next question after a short pause.
7. **See your results** — after 24 questions, view your score, pass/fail status, and overall progress stats.
8. **Try again** — restart with a new random set of 24 questions.

### Key features

- **200+ questions** — every quiz is different because questions are randomized.
- **Smart tracking** — the app remembers how many quizzes you've taken, how many you passed, and your average score (stored in your browser).
- **Pass estimate** — based on your history, you'll see a percentage likelihood of passing on your next attempt.
- **No pressure** — take your time answering; there's no countdown timer.
- **Mobile-friendly** — works on phone, tablet, or desktop.

### Who can use it?

- UK citizenship test candidates preparing for their exam.
- Anyone curious about British history, government, and society.
- Students revising for related qualifications.

**Important**: This app is built for personal use. While anyone can visit and practice, it's not an official UK government tool — just a study aid.

## 🌐 Live demo

This project is live and ready to use:

**📱 Visit now: https://vasi012.github.io/Life-In-UK-Test/**

Just open the link in your browser and start practicing — no installation required!

---

## 🛠️ Run locally

### Option 1: Direct file open (simplest)

1. Clone the repo or download as ZIP:
   ```bash
   git clone https://github.com/vasi012/Life-In-UK-Test.git
   cd Life-In-UK-Test
   ```

2. Open `index.html` directly in your browser:
   - Double-click `index.html`, or
   - Drag onto browser window.

### Option 2: Local server (recommended for ES6 modules)

Some browsers restrict ES6 modules when opened via `file://`. Use a local server:

**Python 3:**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
# Visit: http://localhost:8000
```

**Node.js:**
```bash
npx http-server
# Visit: http://localhost:8080 (or shown in terminal)
```

**Ruby:**
```bash
ruby -run -ehttpd . -p 8000
# Visit: http://localhost:8000
```

### Option 3: VS Code Live Server extension

1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
2. Right-click `index.html` → "Open with Live Server".
3. Browser auto-opens at `http://localhost:5500`.

## 📦 Installation for developers

If you want to modify or contribute:

```bash
git clone https://github.com/vasi012/Life-In-UK-Test.git
cd Life-In-UK-Test

# No npm install needed — it's vanilla JS!
# Just edit files and refresh browser
```

### Recommended editor setup

- **VS Code** with extensions:
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — code formatting
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) — linting (optional)
  - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) — local preview

## 🔍 How the app works (simplified)

1. **You visit the site** → browser loads `index.html`.
2. **HTML loads JS files** → `script.js` and `questionnaire.js` run immediately.
3. **You start a quiz** → the app picks 24 random questions from 200 available.
4. **You answer questions** → app checks if you match the correct answers.
5. **Results saved** → your quiz history (score, pass/fail) is saved to browser storage.
6. **Next quiz** → new random 24-question set, history grows.

No server needed — everything happens in your browser!

## 📚 Question data format

Questions live in `assets/js/questionnaire.js`. Two formats:

### Single-answer question (most common)
```javascript
{
  question: "What is the capital of Scotland?",
  answers: ["London", "Glasgow", "Edinburgh", "Aberdeen"],
  correctAnswers: ["Edinburgh"]
}
```

### Multi-answer question
```javascript
{
  question: "Which of these are parts of the UK?",
  answers: ["England", "France", "Scotland", "Wales"],
  correctAnswers: ["England", "Scotland", "Wales"]  // User must select all 3
}
```

The parser automatically detects multi-answer questions by checking the length of `correctAnswers` array.

## 🧪 Testing your changes

No complex build process — just:

1. Edit a `.js` or `.css` file.
2. Save the file.
3. Refresh the browser.
4. Changes appear instantly.

### Quick test checklist

- [ ] Can I start a quiz?
- [ ] Do question/answer buttons appear?
- [ ] Does feedback show (green/red highlighting)?
- [ ] Does the app auto-advance after feedback?
- [ ] Are scores calculated correctly?
- [ ] Does localStorage persist after refresh?
- [ ] Does "Try again" reset the app?

## 📊 Data file sizes

- `index.html` — ~2 KB
- `assets/css/style.css` — ~3 KB
- `assets/js/script.js` — ~7 KB
- `assets/js/questionnaire.js` — ~40 KB (200 questions)
- **Total**: ~52 KB (uncompressed)

All files combined fit in a single HTTP request on most servers.

---

## ❔ FAQ

### Q: Is this an official government tool?
**A:** No. This is a personal practice app created for self-study. For the official UK Life in the UK test, visit the [UK government website](https://www.gov.uk/life-in-the-uk-test).

### Q: Are the questions accurate?
**A:** The questions are sourced from common UK citizenship study materials and are reviewed for accuracy. However, always cross-reference with official materials before your real exam.

### Q: Does it work offline?
**A:** Not currently. You need internet to load the app from GitHub Pages. An offline PWA version is on the roadmap.

### Q: Can I see my answers after I finish?
**A:** Not yet. The app shows right/wrong during the quiz but doesn't store detailed per-question history. This is a future feature.

### Q: Can I clear my progress?
**A:** Yes! Open Browser DevTools (F12) → Application/Storage tab → localStorage → delete `lifeInUKQuizHistory` key. Your next quiz will start fresh tracking.

### Q: Can I change the number of questions per quiz?
**A:** Yes, edit `TOTAL_QUESTIONS` in `assets/js/script.js`. Change `24` to any number between `1` and `200`.

### Q: Is my data safe?
**A:** Your quiz data never leaves your browser. It's only stored locally in your browser's localStorage. No server involved.

### Q: Can multiple people use this on the same device?
**A:** Currently, there's only one shared history per browser/device. If you want isolated progress, use different browsers or devices.

### Q: Why am I getting different questions each time?
**A:** The app uses a randomizer (Fisher–Yates shuffle) to ensure each quiz is unique. With 200 questions and 24 picked per quiz, you'd need many attempts before seeing repeats!

### Q: How are scores calculated?
**A:** 1 point per question (pass-/fail). You must get all correct answers for multi-answer questions to score a point. Average score = `total points / total attempts`.

## 🐛 Found a bug?

If something isn't working as expected:

1. **Check browser console** (F12 → Console tab) for error messages.
2. **Try a different browser** to rule out browser-specific issues.
3. **Clear localStorage** (see FAQ) and restart.
4. **Report on GitHub Issues** with:
   - Browser and OS version.
   - Steps to reproduce.
   - Expected vs. actual behavior.
   - Screenshot (if helpful).

## 💡 Have feature ideas?

Open a [GitHub issue](https://github.com/vasi012/Life-In-UK-Test/issues) with the `enhancement` label:

Popular requests on the roadmap:
- [x] Multi-answer questions (done ✓)
- [x] Random shuffling (done ✓)
- [x] localStorage history (done ✓)
- [ ] Category filters (planned)
- [ ] Timed mode (planned)
- [ ] Question explanations (planned)

## 🤝 Contributing

This is a **personal project**, so PRs aren't actively reviewed. However:

- **Found a bug?** Open an issue.
- **Want to fork it?** Feel free! It's open source.
- **Want to reuse code?** Go ahead — MIT licensed.
- **Want to adapt it?** Modify for your own study needs.

If you create your own version, consider crediting this project.

## 📜 License

This project is **open source** and available under the **MIT License**. You're free to:

- ✅ Use for personal or educational purposes
- ✅ Modify the code
- ✅ Distribute your own version
- ℹ️ Include a copy of the license in your version

See [LICENSE](LICENSE) file or assume MIT.

## 🙏 Acknowledgments

- Inspired by UK citizenship test preparation needs.
- Built with vanilla HTML/CSS/JavaScript (no frameworks).
- Thanks to everyone who uses it to practice and improve!

---

## 📞 Contact & links

- **GitHub repo**: https://github.com/vasi012/Life-In-UK-Test
- **Live app**: https://vasi012.github.io/Life-In-UK-Test/
- **Report issues**: https://github.com/vasi012/Life-In-UK-Test/issues

---

**Project status**: ✅ Active (personal use)  
**Last updated**: March 2026  
**Built with**: HTML5 + CSS3 + Vanilla JavaScript (ES6 modules)
