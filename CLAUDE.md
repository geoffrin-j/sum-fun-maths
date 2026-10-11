# Sum Fun Maths — notes for Claude Code

A local, single-learner maths practice site for Hannah Jasar (Class 3 now, growing to Class 10).
It is opened by double-clicking `index.html`. No server, no build step, no frameworks.

## Hard constraints

- **Must work from `file://`.** That means:
  - No ES modules (`type="module"` is blocked on file://). Use classic `<script>` tags; everything hangs off `window.SF`.
  - No `fetch()` of local files. Content lives in `.js` files that assign to `window.SUM_FUN_DATA`.
- No npm dependencies in the app. The only external resource is the Google Font (falls back to system fonts offline).
- Script order in `index.html` matters: config → data → util → data.js → checker → storage → logic → badges → effects → widgets → test → screens → app.
- One learner only. No accounts.

## Files

| File | What it does |
|---|---|
| `js/config.js` | Learner name, PIN, questions per test, default time limit, number locale |
| `data/gradeN.js` | Lesson content for one class. Add a `<script>` tag in `index.html` for each new class |
| `js/util.js` | `SF.el` DOM builder, shuffle, dates, number/money/time formatting, toast |
| `js/data.js` | Content access, hrefs, time limits, `validate()` content checker |
| `js/checker.js` | Answer checking and display per question type |
| `js/storage.js` | Progress: localStorage cache + progress file (File System Access API) + export/import |
| `js/logic.js` | Unlock rules, stars, streak, `record()` of a finished test |
| `js/badges.js` | Badge definitions and awarding |
| `js/effects.js` | Generated sounds (Web Audio) and confetti |
| `js/widgets.js` | Abacus SVG and answer inputs for each question type |
| `js/test.js` | Test runner: timer, feedback, results, review |
| `js/screens.js` | Header, file banner, home, class, chapter, lesson, badges, parent corner |
| `js/app.js` | Hash router and startup |
| `tests/run-tests.js` | `node tests/run-tests.js` — validates all content and checks every answer |

## Content schema (`data/gradeN.js`)

```js
window.SUM_FUN_DATA = window.SUM_FUN_DATA || {};
window.SUM_FUN_DATA.grade5 = {
  grade: 5,
  title: "Class 5",
  topics: [                         // "chapters" in the UI, in teaching order
    {
      id: "fractions",              // unique within the class, used in URLs and progress keys
      title: "Chapter 1: Fractions",// "Chapter N:" prefix is stripped in most of the UI
      subtopics: [                  // "lessons" in the UI, in teaching order
        {
          id: "equivalent-fractions",
          title: "Equivalent Fractions",
          explanation: "Paragraph one.\n\nParagraph two.",   // blank line = new paragraph
          workedExample: { problem: "...", steps: ["...", "..."], answer: "..." },
          tips: ["...", "..."],      // 1–3
          targetTime: "15–20 seconds",// shown as a goal only
          timeLimit: 20,             // default seconds per question for this lesson
          questions: [ /* bank; a test picks questionsPerTest (10) at random */ ]
        }
      ]
    }
  ]
};
```

Never change an existing `id` once Hannah has progress: progress keys are `gradeId/topicId/subId`.

### Question types

Every question has `q` (text), `type`, `answer`. Optional on any type: `time` (seconds, overrides the lesson's `timeLimit`), `explain` (shown when wrong), `abacus: [TTh, Th, H, T, O]` (draws an abacus above the input).

| type | answer | extra fields | checking |
|---|---|---|---|
| `number` | number | `unit` (label after the box, e.g. "paise") | ignores commas, spaces, ₹, unit words |
| `money` | number | — | ₹ prefix shown; compared to 2 decimals (10 = 10.00) |
| `compare` | `"<"`, `">"` or `"="` | — | three buttons; keyboard < > = works |
| `mcq` | one option string | `options[]`, `shuffle: false` to keep order | exact match |
| `order` | items in correct order | — | tap to sequence; items are shuffled from `answer` |
| `multi` | array of options | `options[]` | same set, any order |
| `text` | string | `accept[]` alternatives, `placeholder` | case-insensitive; drops the word "and"; ignores spaces, commas, hyphens, final full stop |

### Time limits

Set per question by difficulty: quick recall ~15 s, single-step ~20–25 s, multi-step or word problems 40–60 s, writing number names ~45 s. `timeLimit` on the lesson is the default; `time` on a question overrides it; `defaultTimeLimit` in config is the last fallback.

## Rules

- **Pass** = every answer correct AND every answer within its own time limit. The timer never auto-advances; going over just turns it red.
- **Stars** (best kept per lesson): 3 = pass, 2 = all correct but some slow, 1 = at least 70% correct.
- **Unlocking:** lesson N opens when lesson N−1 in the same chapter is passed. Chapter N opens when every lesson in chapter N−1 is passed. Classes are always selectable. A parent can manually unlock a lesson in the Parent corner (`manualUnlocks`).
- **Streak:** a day counts when at least one test is finished (local date). Missing a day resets to 1 on the next practice day.
- **Badges:** see `js/badges.js`. Fixed badges plus one "Champion" badge per chapter, generated from the data.

## Progress storage

`SF.store.progress` (also the JSON in the progress file):

```json
{ "app": "Sum Fun Maths", "version": 1, "learner": "Hannah Jasar",
  "createdAt": "...", "updatedAt": "...",
  "streak": { "current": 3, "best": 7, "lastDay": "2026-10-11" },
  "practiceDays": ["2026-10-09", "2026-10-10", "2026-10-11"],
  "subtopics": { "grade3/numbers/place-face-value": {
      "attempts": 2, "bestScore": 10, "bestTime": 142.3, "passed": true, "passedOn": "2026-10-11",
      "stars": 3, "lastAttempt": "...", "history": [ { "date": "...", "score": 10, "total": 10, "time": 142.3, "passed": true } ] } },
  "badges": { "first-steps": "2026-10-09" },
  "manualUnlocks": {},
  "lastLesson": "grade3/numbers/place-face-value",
  "settings": { "sound": true } }
```

- Always cached in localStorage (`sumfun-progress-v1`).
- If a progress file is connected (Chrome/Edge), it is rewritten after every `SF.store.save()`. The file handle is kept in IndexedDB. Browsers ask for permission again in new sessions; the banner shows an "Allow saving" button for that.
- On connect, the copy with the newer `updatedAt` wins.
- Firefox/Safari: Export/Import in the Parent corner.
- If you change the shape, bump `version` and migrate in `normalize()` in `storage.js`.

## Conventions

- Build DOM with `SF.el(tag, attrs, ...children)`; never set `innerHTML` from content.
- UI copy: plain, short, sentence case, written for an 8-year-old. Errors say what to do next.
- Design tokens are CSS variables at the top of `css/style.css` (graph-paper exercise book, ink outlines, chunky offset shadows). Keep new UI in that style.
- After any content or checker change, run `node tests/run-tests.js` and make sure it passes.
- After UI changes, open `index.html` in Chrome and click through: home → class → chapter → lesson → test → results.
