// All screens except the test itself (see test.js).
(function (SF) {
  "use strict";
  const el = SF.el;
  const S = SF.screens = {};
  const D = function () { return SF.data; };
  const L = function () { return SF.logic; };

  // ---------- shared bits ----------

  function crumbs(links, current) {
    return el("nav", { class: "crumbs", "aria-label": "Breadcrumb" },
      links.map(function (l) { return [el("a", { href: l[1] }, l[0]), el("span", { "aria-hidden": "true" }, "›")]; }),
      el("span", { "aria-current": "page" }, current));
  }

  function bar(frac) {
    return el("span", { class: "bar", role: "img", "aria-label": Math.round(frac * 100) + "% done" },
      el("span", { style: "width:" + Math.round(frac * 100) + "%" }));
  }

  function miniStars(n) {
    return el("span", { class: "mini-stars", role: "img", "aria-label": n + " of 3 stars" },
      [0, 1, 2].map(function (i) { return el("span", { class: i < n ? "" : "off" }, "★"); }));
  }

  function paragraphs(text) {
    return String(text || "").split(/\n\s*\n/).map(function (p) { return el("p", null, p.trim()); });
  }

  S.sticker = function (b, earnedOn) {
    return el("div", { class: "sticker" + (earnedOn ? "" : " locked") },
      el("span", { class: "sticker-icon", "aria-hidden": "true" }, b.icon),
      el("span", { class: "sticker-name" }, b.name),
      el("span", { class: "sticker-desc" }, earnedOn ? "Earned " + SF.fmtDate(earnedOn) : b.desc));
  };

  // Runs an async action from a button, ignoring "cancelled" file pickers.
  function action(fn, after) {
    return async function () {
      try { await fn(); }
      catch (e) {
        if (e && e.name === "AbortError") return;
        console.warn(e);
        SF.toast((e && e.message) || "That didn't work. Please try again.");
      }
      if (after) after();
    };
  }

  // ---------- header and file banner ----------

  S.header = function () {
    const p = SF.store.progress, soundOn = p.settings.sound !== false;
    const streak = L().currentStreak();
    document.getElementById("topbar").replaceChildren(
      el("a", { class: "brand", href: "#/" },
        el("span", { class: "brand-mark", "aria-hidden": "true" }, "+"),
        el("span", { class: "brand-name" }, SF.config.appName || "Sum Fun Maths")),
      el("nav", { class: "top-stats", "aria-label": "Your stats" },
        el("a", { class: "chip" + (L().practisedToday() ? " lit" : ""), href: "#/badges", title: "Days in a row" },
          el("span", { "aria-hidden": "true" }, "🔥"), " ", streak, el("span", { class: "sr" }, " day streak")),
        el("a", { class: "chip", href: "#/badges", title: "Stars" },
          el("span", { "aria-hidden": "true" }, "⭐"), " ", L().totalStars(), el("span", { class: "sr" }, " stars")),
        el("button", {
          class: "chip icon", type: "button", "aria-label": soundOn ? "Turn sound off" : "Turn sound on",
          onclick: function () { p.settings.sound = !soundOn; SF.store.save(); }
        }, soundOn ? "🔊" : "🔇"),
        el("a", { class: "chip icon", href: "#/parent", "aria-label": "Parent corner", title: "Parent corner" }, "⚙️")));
  };

  S.banner = function (hide) {
    const b = document.getElementById("banner"), s = SF.store;
    const done = function () { SF.app.render(); };
    let content = null;
    if (hide) content = null;
    else if (s.status === "none") {
      content = [
        el("p", null, "Progress is only saved in this browser. Set up a progress file so the streak and badges stay safe and move with the folder."),
        el("div", { class: "btn-row" },
          el("button", { class: "btn small primary", type: "button", onclick: action(function () { return s.createFile(); }, done) }, "Create progress file"),
          el("button", { class: "btn small", type: "button", onclick: action(function () { return s.openFile(); }, done) }, "Open existing file"))
      ];
    } else if (s.status === "needs-permission") {
      content = [
        el("p", null, "Allow saving to " + s.fileName + " so today's progress is kept."),
        el("button", { class: "btn small primary", type: "button", onclick: action(function () { return s.reconnect(); }, done) }, "Allow saving")
      ];
    } else if (s.status === "error") {
      content = [
        el("p", null, "The progress file could not be opened."),
        el("a", { class: "btn small", href: "#/parent" }, "Fix in Parent corner")
      ];
    }
    if (content) b.replaceChildren(el("div", { class: "banner" }, content));
    else b.replaceChildren();
  };

  // ---------- home ----------

  S.home = function (root) {
    const p = SF.store.progress, name = SF.config.firstName || "there";
    const streak = L().currentStreak();
    const grades = D().grades();

    let g = p.lastLesson ? D().grade(p.lastLesson.split("/")[0]) : null;
    if (!g || !D().countLessons(g)) g = grades.filter(function (x) { return D().countLessons(x) > 0; })[0] || null;
    const next = g ? L().nextLesson(g) : null;

    const line = L().practisedToday() ? "You practised today. Brilliant work!"
      : streak > 0 ? "Practise today to keep your " + streak + "-day streak going."
      : "Ready for some maths? Pick up where you left off.";

    let cont = null;
    if (next) {
      cont = el("a", { class: "card continue", href: D().href.lesson(g, next.topic, next.sub) },
        el("span", { class: "continue-label" }, "Up next in " + g.title + ", " + D().short(next.topic)),
        el("span", { class: "continue-title" }, next.sub.title),
        el("span", { class: "btn primary big" }, "Continue"));
    } else if (g) {
      cont = el("p", { class: "card" }, "You have passed every lesson in " + g.title + "! 🎉");
    }

    function stat(icon, num, label, href) {
      return el("a", { class: "stat", href: href || "#/badges" },
        el("span", { class: "stat-icon", "aria-hidden": "true" }, icon),
        el("span", null, el("span", { class: "stat-num" }, num), el("span", { class: "stat-label" }, label)));
    }

    root.replaceChildren(
      el("section", { class: "hero" },
        el("h1", { class: "hello" }, "Hi " + name + "!"),
        el("p", { class: "lede" }, line),
        cont),
      el("section", { class: "stat-row", "aria-label": "Your progress" },
        stat("🔥", streak, streak === 1 ? "day in a row" : "days in a row"),
        stat("⭐", L().totalStars(), "stars"),
        stat("🏅", SF.badges.earnedCount(), "badges")),
      el("section", null,
        el("h2", null, "Choose your class"),
        el("div", { class: "grade-grid" }, grades.map(function (gr) {
          const total = D().countLessons(gr);
          const parts = [el("span", { class: "grade-num", "aria-hidden": "true" }, gr.grade), el("span", { class: "grade-title" }, gr.title)];
          if (!total) {
            return el("div", { class: "grade-tile soon", "aria-disabled": "true" }, parts, el("span", { class: "grade-meta" }, "Coming soon"));
          }
          const st = L().gradeStats(gr);
          return el("a", { class: "grade-tile", href: D().href.grade(gr) }, parts,
            el("span", { class: "grade-meta" }, st.passed + " of " + total + " lessons passed"),
            bar(st.passed / total));
        }))));
  };

  // ---------- class (list of chapters) ----------

  S.grade = function (root, g) {
    const list = g.topics.length ? el("ol", { class: "chapter-list" }, g.topics.map(function (t, ti) {
      const open = L().isTopicAccessible(g, ti), done = t.subtopics.length && L().isTopicDone(g, t);
      const passed = t.subtopics.filter(function (s) { return L().isPassed(D().key(g.id, t.id, s.id)); }).length;
      const meta = done ? "All " + t.subtopics.length + " lessons passed"
        : open ? passed + " of " + t.subtopics.length + " lessons passed"
        : "Pass every lesson in " + D().short(g.topics[ti - 1]) + " to open";
      const inner = [
        el("span", { class: "chapter-num" }, ti + 1),
        el("span", { class: "chapter-text" },
          el("span", { class: "chapter-title" }, D().short(t)),
          el("span", { class: "chapter-meta" }, meta)),
        el("span", { class: "chapter-state", "aria-hidden": "true" }, done ? "🏅" : open ? "▶" : "🔒")
      ];
      return el("li", null, open
        ? el("a", { class: "chapter" + (done ? " done" : ""), href: D().href.topic(g, t) }, inner)
        : el("div", { class: "chapter locked", "aria-disabled": "true" }, inner));
    })) : el("p", { class: "card" }, "Lessons for " + g.title + " are coming soon.");

    root.replaceChildren(el("section", { class: "page" },
      crumbs([["Home", "#/"]], g.title),
      el("h1", null, g.title),
      el("p", { class: "lede" }, "Finish each chapter to open the next one."),
      list));
  };

  // ---------- chapter (path of lessons) ----------

  S.topic = function (root, g, ti) {
    const t = g.topics[ti];
    const steps = t.subtopics.map(function (s, si) {
      const key = D().key(g.id, t.id, s.id), rec = L().rec(key);
      const passed = L().isPassed(key), open = L().isSubUnlocked(g, ti, si);
      const n = D().testLength(s);
      const state = passed ? "passed" : open ? "current" : "locked";
      const meta = passed ? "Passed on " + SF.fmtDate(rec.passedOn)
        : open ? (rec && rec.attempts ? rec.attempts + (rec.attempts === 1 ? " try" : " tries") + " so far, best " + rec.bestScore + " of " + n : "Start here")
        : "Pass lesson " + si + " to unlock";
      const body = [
        el("span", { class: "step-num" }, si + 1),
        el("span", { class: "step-text" },
          el("span", { class: "step-title" }, s.title),
          el("span", { class: "step-meta" }, meta),
          el("span", { class: "step-end" }, passed ? miniStars(rec.stars || 0) : el("span", { "aria-hidden": "true" }, open ? "▶" : "🔒")))
      ];
      return el("li", { class: "step " + state }, open
        ? el("a", { class: "step-link", href: D().href.lesson(g, t, s) }, body)
        : el("div", { class: "step-link", "aria-disabled": "true" }, body));
    });

    root.replaceChildren(el("section", { class: "page" },
      crumbs([["Home", "#/"], [g.title, D().href.grade(g)]], D().short(t)),
      el("p", { class: "kicker" }, "Chapter " + (ti + 1)),
      el("h1", null, D().short(t)),
      el("ol", { class: "path" }, steps)));
  };

  // ---------- lesson ----------

  S.lesson = function (root, g, ti, si) {
    const t = g.topics[ti], s = t.subtopics[si];
    const key = D().key(g.id, t.id, s.id), rec = L().rec(key);
    const ex = s.workedExample || { problem: "", steps: [], answer: "" };
    const n = D().testLength(s);
    const range = D().limitRange(s);

    // Worked example: reveal one step at a time.
    let shown = 0;
    const stepList = el("ol", { class: "ex-steps" });
    const answer = el("p", { class: "ex-answer", hidden: true }, "Answer: ", el("b", null, ex.answer));
    const stepBtn = el("button", { class: "btn small", type: "button" }, "Show the first step");
    stepBtn.onclick = function () {
      if (shown < ex.steps.length) stepList.appendChild(el("li", { class: "ex-step" }, ex.steps[shown++]));
      if (shown >= ex.steps.length) { answer.hidden = false; stepBtn.remove(); }
      else stepBtn.textContent = "Show the next step";
    };
    if (!ex.steps.length) { answer.hidden = false; stepBtn.remove(); }

    const timeText = range[0] === range[1]
      ? range[0] + " seconds for each question"
      : range[0] + " to " + range[1] + " seconds per question, depending on how hard it is";

    let record = null;
    if (rec && rec.passed) record = "Passed on " + SF.fmtDate(rec.passedOn) + ". Best time " + SF.fmtTime(rec.bestTime) + ".";
    else if (rec) record = "Tries so far: " + rec.attempts + ". Best score: " + rec.bestScore + " of " + n + ".";

    root.replaceChildren(el("article", { class: "page lesson" },
      crumbs([["Home", "#/"], [g.title, D().href.grade(g)], [D().short(t), D().href.topic(g, t)]], s.title),
      el("p", { class: "kicker" }, "Lesson " + (si + 1) + " of " + t.subtopics.length),
      el("h1", null, s.title),

      el("section", { class: "card learn" },
        el("h2", null, "📖 Learn it"),
        paragraphs(s.explanation)),

      el("section", { class: "card example" },
        el("h2", null, "🧠 Worked example"),
        el("p", { class: "ex-problem" }, ex.problem),
        stepList, answer, stepBtn),

      s.tips.length ? el("section", { class: "tips-block" },
        el("h2", null, s.tips.length > 1 ? "💡 Tips" : "💡 Tip"),
        el("ul", { class: "tips" }, s.tips.map(function (tip) { return el("li", { class: "tip" }, tip); }))) : null,

      el("section", { class: "card test-card" },
        el("h2", null, "🎯 Practice test"),
        el("ul", { class: "test-facts" },
          el("li", null, n + " questions, picked from " + s.questions.length),
          el("li", null, timeText),
          el("li", null, "Get every answer right, each within its time, to pass")),
        s.targetTime ? el("p", { class: "target" }, "Goal: " + s.targetTime + " per question.") : null,
        record ? el("p", { class: "record" }, record) : null,
        el("button", {
          class: "btn primary big", type: "button",
          onclick: function () { SF.test.start(g, ti, si); SF.go(D().href.test(g, t, s)); }
        }, rec && rec.passed ? "Practise again" : "Start the test"))));
  };

  // ---------- badges ----------

  S.badges = function (root) {
    const p = SF.store.progress, all = SF.badges.all();
    const earned = all.filter(function (b) { return p.badges[b.id]; }).length;
    const days = [];
    for (let i = 27; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push(SF.today(d)); }
    const streak = L().currentStreak();

    root.replaceChildren(el("section", { class: "page" },
      crumbs([["Home", "#/"]], "Badges"),
      el("h1", null, "Badges and streak"),
      el("section", { class: "card streak-card" },
        el("h2", null, "🔥 " + streak + (streak === 1 ? " day" : " days") + " in a row"),
        el("p", { class: "muted" }, "Best streak: " + (p.streak.best || 0) + (p.streak.best === 1 ? " day" : " days") + ". Finish one test a day to keep it going."),
        el("div", { class: "cal", role: "img", "aria-label": "Practice days in the last 4 weeks" },
          days.map(function (d) {
            return el("span", { class: "cal-day" + (p.practiceDays.indexOf(d) >= 0 ? " on" : "") + (d === SF.today() ? " today" : ""), title: SF.fmtDate(d) });
          }))),
      el("p", { class: "lede" }, "You have earned " + earned + " of " + all.length + " badges."),
      el("div", { class: "badge-grid" }, all.map(function (b) { return S.sticker(b, p.badges[b.id]); }))));
  };

  // ---------- parent corner ----------

  S.parent = function (root) {
    if (!SF.parentOK) {
      const pin = el("input", { class: "answer-input pin", type: "password", inputmode: "numeric", autocomplete: "off", "aria-label": "Parent PIN" });
      const msg = el("p", { class: "form-msg", "aria-live": "polite" });
      const open = function () {
        if (pin.value === String(SF.config.parentPin)) { SF.parentOK = true; S.parent(root); }
        else { msg.textContent = "That PIN is not right."; pin.value = ""; pin.focus(); }
      };
      pin.addEventListener("keydown", function (e) { if (e.key === "Enter") open(); });
      root.replaceChildren(el("section", { class: "page narrow" },
        crumbs([["Home", "#/"]], "Parent corner"),
        el("h1", null, "Parent corner"),
        el("p", null, "Enter the parent PIN to manage progress."),
        el("div", { class: "pin-row" }, pin, el("button", { class: "btn primary", type: "button", onclick: open }, "Open")),
        msg));
      pin.focus();
      return;
    }

    const s = SF.store, p = s.progress;
    const rerender = function () { S.parent(root); S.header(); S.banner(false); };

    // Progress file
    const statusText = {
      connected: "Saving to " + s.fileName + " after every test.",
      "needs-permission": "Linked to " + s.fileName + ", but the browser needs permission to save again.",
      none: "Not set up. Progress is only saved in this browser.",
      unsupported: "This browser can't save to a file by itself. Use Chrome or Edge, or use Export and Import.",
      error: "The progress file could not be read. Open it again or choose another file."
    }[s.status];
    const importInput = el("input", {
      type: "file", accept: ".json,application/json", hidden: true,
      onchange: async function (e) {
        const f = e.target.files[0];
        e.target.value = "";
        if (!f) return;
        if (!window.confirm("Replace the current progress with " + f.name + "?")) return;
        try { await s.importText(await f.text()); SF.toast("Progress imported."); rerender(); }
        catch (err) { SF.toast(err.message); }
      }
    });
    const fileButtons = [];
    if (s.supported) {
      if (s.status === "needs-permission") fileButtons.push(el("button", { class: "btn small primary", type: "button", onclick: action(function () { return s.reconnect(); }, rerender) }, "Allow saving"));
      if (s.status !== "connected") fileButtons.push(el("button", { class: "btn small", type: "button", onclick: action(function () { return s.createFile(); }, rerender) }, "Create progress file"));
      fileButtons.push(el("button", { class: "btn small", type: "button", onclick: action(function () { return s.openFile(); }, rerender) }, s.status === "connected" ? "Switch to another file" : "Open existing file"));
      if (s.handle) fileButtons.push(el("button", { class: "btn small", type: "button", onclick: action(function () { return s.forgetFile(); }, rerender) }, "Stop using this file"));
    }
    fileButtons.push(el("button", { class: "btn small", type: "button", onclick: function () { s.exportDownload(); } }, "Export a copy"));
    fileButtons.push(el("button", { class: "btn small", type: "button", onclick: function () { importInput.click(); } }, "Import from a copy"));

    // Lessons table
    const tables = D().grades().filter(function (g) { return D().countLessons(g) > 0; }).map(function (g) {
      const rows = [];
      g.topics.forEach(function (t, ti) {
        rows.push(el("tr", { class: "row-chapter" }, el("th", { colspan: 7, scope: "colgroup" }, "Chapter " + (ti + 1) + ": " + D().short(t))));
        t.subtopics.forEach(function (sub, si) {
          const key = D().key(g.id, t.id, sub.id), rec = L().rec(key);
          const passed = L().isPassed(key), manual = L().isManual(key), open = L().isSubUnlocked(g, ti, si);
          const status = passed ? "Passed" : manual ? "Unlocked by you" : open ? "Open" : "Locked";
          const acts = [];
          if (!open) acts.push(el("button", { class: "btn small", type: "button", onclick: function () { p.manualUnlocks[key] = true; s.save(); rerender(); } }, "Unlock"));
          if (manual) acts.push(el("button", { class: "btn small", type: "button", onclick: function () { delete p.manualUnlocks[key]; s.save(); rerender(); } }, "Lock again"));
          if (rec) acts.push(el("button", {
            class: "btn small", type: "button",
            onclick: function () {
              if (!window.confirm("Clear all results for \"" + sub.title + "\"?")) return;
              delete p.subtopics[key]; s.save(); rerender();
            }
          }, "Clear results"));
          rows.push(el("tr", null,
            el("td", null, (si + 1) + ". " + sub.title),
            el("td", null, rec ? rec.attempts : 0),
            el("td", null, rec ? rec.bestScore + "/" + D().testLength(sub) : "—"),
            el("td", null, rec ? SF.fmtTime(rec.bestTime) : "—"),
            el("td", null, rec ? miniStars(rec.stars || 0) : "—"),
            el("td", null, status),
            el("td", { class: "actions" }, el("div", { class: "btn-row" }, acts))));
        });
      });
      return el("div", { class: "table-block" },
        el("h3", null, g.title),
        el("div", { class: "table-wrap" }, el("table", null,
          el("thead", null, el("tr", null, ["Lesson", "Tries", "Best", "Best time", "Stars", "Status", ""].map(function (h) { return el("th", { scope: "col" }, h); }))),
          el("tbody", null, rows))));
    });

    const check = D().validate();

    root.replaceChildren(el("section", { class: "page" },
      crumbs([["Home", "#/"]], "Parent corner"),
      el("h1", null, "Parent corner"),
      el("p", { class: "lede" }, "Learner: " + (SF.config.learner || "")),

      el("section", { class: "card" },
        el("h2", null, "Progress file"),
        el("p", null, statusText),
        el("div", { class: "btn-row" }, fileButtons),
        importInput),

      el("section", { class: "card" },
        el("h2", null, "Practice"),
        el("dl", { class: "facts" },
          fact("Current streak", dayCount(L().currentStreak())),
          fact("Best streak", dayCount(p.streak.best || 0)),
          fact("Last practice", SF.fmtDate(p.streak.lastDay)),
          fact("Days practised", p.practiceDays.length),
          fact("Tests taken", L().totalAttempts()),
          fact("Stars", L().totalStars()),
          fact("Badges", SF.badges.earnedCount() + " of " + SF.badges.all().length))),

      el("section", { class: "card" },
        el("h2", null, "Lessons"),
        tables.length ? tables : el("p", null, "No lessons yet.")),

      el("section", { class: "card" },
        el("h2", null, "Content check"),
        check.issues.length
          ? [el("p", null, check.issues.length + " problem" + (check.issues.length > 1 ? "s" : "") + " found in the lesson files:"),
             el("ul", { class: "issues" }, check.issues.map(function (i) { return el("li", null, i); }))]
          : el("p", null, "All good: " + check.lessons + " lessons and " + check.questions + " questions.")),

      el("section", { class: "card danger" },
        el("h2", null, "Start over"),
        el("p", null, "Clears every result, the streak and all badges. Export a copy first if you might want it back."),
        el("div", { class: "btn-row" },
          el("button", {
            class: "btn small danger", type: "button",
            onclick: action(async function () {
              if (!window.confirm("Clear ALL progress for " + (SF.config.learner || "this learner") + "?")) return;
              if (!window.confirm("Are you sure? This cannot be undone.")) return;
              await s.resetAll();
              SF.toast("All progress cleared.");
            }, rerender)
          }, "Clear all progress"),
          el("button", { class: "btn small", type: "button", onclick: function () { SF.parentOK = false; SF.go("#/"); } }, "Close Parent corner")))));

    function dayCount(n) { return n + (n === 1 ? " day" : " days"); }
    function fact(label, value) {
      return el("div", null, el("dt", null, label), el("dd", null, String(value)));
    }
  };
})(window.SF);
