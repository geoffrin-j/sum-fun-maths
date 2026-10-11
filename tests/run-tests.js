// Checks every lesson file and every answer.  Run:  node tests/run-tests.js
// Loads the same data files index.html loads, so new classes are tested automatically.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const dataFiles = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map(m => m[1]);
const files = ["js/config.js", ...dataFiles, "js/util.js", "js/data.js", "js/checker.js"];

const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
files.forEach(f => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }));

const SF = ctx.SF;
SF.data.prepare();

let failures = 0, checks = 0;
const fail = msg => { failures++; console.log("FAIL  " + msg); };
const expect = (cond, msg) => { checks++; if (!cond) fail(msg); };

// 1. Content problems
const v = SF.data.validate();
v.issues.forEach(i => fail("content: " + i));

// 2. Every stored answer is accepted in the ways a child might type it
function rightAnswers(q) {
  const a = q.answer;
  switch (q.type) {
    case "number": {
      const out = [String(a), SF.fmtNum(a), " " + a + " "];
      if (q.unit) out.push(a + " " + q.unit);
      return out;
    }
    case "money": return [String(a), Number(a).toFixed(2), "₹" + Number(a).toFixed(2), "₹ " + a];
    case "compare": case "mcq": return [a];
    case "order": return [a.slice()];
    case "multi": return [a.slice().reverse()];
    case "text": return [a, a.toLowerCase(), a.replace(/-/g, " "), a.toUpperCase() + "."].concat(q.accept || []);
    default: return [];
  }
}
function wrongAnswers(q) {
  const a = q.answer;
  switch (q.type) {
    case "number": case "money": return [String(Number(a) + 1), "", "abc"];
    case "compare": return ["<", ">", "="].filter(x => x !== a);
    case "mcq": return q.options.filter(o => o !== a);
    case "order": return [a.slice().reverse()];
    case "multi": return [q.options.filter(o => !a.includes(o)).slice(0, 1)];
    case "text": return ["something else"];
    default: return [];
  }
}

SF.data.grades().forEach(g => g.topics.forEach(t => t.subtopics.forEach(s => s.questions.forEach((q, i) => {
  const where = `${g.id}/${t.id}/${s.id} Q${i + 1} (${q.q})`;
  rightAnswers(q).forEach(r => expect(SF.checker.check(q, r), `${where}: should accept ${JSON.stringify(r)}`));
  wrongAnswers(q).forEach(r => expect(!SF.checker.check(q, r), `${where}: should reject ${JSON.stringify(r)}`));
}))));

// 3. Checker rules
const T = (q, r, want, why) => expect(SF.checker.check(q, r) === want, why);
T({ type: "number", answer: 8000 }, "8,000", true, "commas allowed");
T({ type: "number", answer: 8000 }, "80 00", true, "spaces ignored");
T({ type: "number", answer: 300, unit: "paise" }, "300 paise", true, "unit word ignored");
T({ type: "money", answer: 10 }, "10.00", true, "money 10.00 == 10");
T({ type: "money", answer: 2.5 }, "2.5", true, "money 2.5 == 2.50");
T({ type: "money", answer: 21.25 }, "21.2", false, "money 21.2 != 21.25");
T({ type: "text", answer: "Thirty-six thousand two hundred four" }, "thirty six thousand two hundred and four", true, "'and' ignored in words");
T({ type: "text", answer: "30,000 + 6,000 + 200 + 4" }, "30000+6000+200+4", true, "expanded form without commas/spaces");
T({ type: "text", answer: "30,000 + 6,000 + 200 + 4" }, "30000 + 6000 + 204", false, "expanded form must match");

console.log(`\n${v.lessons} lessons, ${v.questions} questions, ${checks} checks.`);
if (failures) { console.log(`${failures} FAILED`); process.exit(1); }
console.log("All passed.");
