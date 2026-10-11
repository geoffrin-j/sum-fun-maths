# Sum Fun Maths

Maths lessons and timed practice tests for Hannah, running entirely on your computer.

## Open it

Double-click `index.html`. Chrome or Edge is recommended, because they can save progress to a file.

## First-time setup (once per computer)

1. A yellow banner asks you to set up a progress file. Click **Create progress file**.
2. Save it as `hannah-progress.json` **inside this `sum-fun-maths` folder**.
3. From now on, every finished test saves the streak, stars, badges and results to that file.

When Chrome opens the site in a new session, it may show **Allow saving** in the banner. One click and it carries on saving to the same file.

## Moving to another folder or computer

Copy the whole `sum-fun-maths` folder (the progress file goes with it). On the new machine, open `index.html`, click **Open existing file** in the banner and choose `hannah-progress.json`.

Tip: keep the folder inside Google Drive or OneDrive for automatic backup.

On Firefox or Safari, use **Export a copy** and **Import from a copy** in the Parent corner instead.

## Parent corner

Click ⚙️ at the top right. The PIN is `1234`; change it in `js/config.js`.

There you can unlock a lesson by hand, clear a lesson's results, export or import progress, see the practice record, and check the lesson files for mistakes.

## Adding lessons

Edit `data/grade3.js`, or `data/grade4.js` for Class 4. For a new class (say Class 5), create `data/grade5.js` and add this line to `index.html` next to the other data files:

```html
<script src="data/grade5.js"></script>
```

The format is described in `CLAUDE.md`. After editing, check everything with:

```
node tests/run-tests.js
```

Or open the Parent corner and look at **Content check**.

## Rules

- A test has 10 questions picked at random from the lesson's question bank.
- Each question has its own time limit, set by how hard it is.
- To pass a lesson: all answers right, each within its time.
- Passing a lesson unlocks the next one. Finishing every lesson in a chapter unlocks the next chapter.
- The streak counts days on which at least one test was finished.
