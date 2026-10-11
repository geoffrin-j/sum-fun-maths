// The practice test: one question at a time, a timer per question, results and review.
(function (SF) {
  "use strict";
  const el = SF.el;
  const T = SF.test = { cur: null, raf: null, active: null };

  const CHEERS = ["Correct! 🎉", "Yes! ⭐", "Brilliant! 🌟", "Spot on! ✨", "Great thinking! 🧠", "You got it! 🙌"];

  T.start = function (g, ti, si) {
    const t = g.topics[ti], s = t.subtopics[si];
    const n = SF.data.testLength(s);
    T.cur = {
      grade: g, ti: ti, si: si, topic: t, sub: s,
      key: SF.data.key(g.id, t.id, s.id),
      items: SF.shuffle(s.questions).slice(0, n).map(function (q) {
        return { q: q, limit: SF.data.timeLimit(q, s), response: null, correct: null, time: null };
      }),
      idx: 0,
      qStart: null,
      result: null
    };
  };

  T.stop = function () {
    if (T.raf) cancelAnimationFrame(T.raf);
    T.raf = null;
    T.active = null;
  };

  // Called by the router for .../test
  T.show = function (root, g, ti, si) {
    const t = g.topics[ti];
    if (!T.cur || T.cur.key !== SF.data.key(g.id, t.id, t.subtopics[si].id)) T.start(g, ti, si);
    T.render(root);
  };

  T.render = function (root) {
    T.stop();
    if (T.cur.result) renderResults(root);
    else renderQuestion(root);
  };

  // Enter = Check / Next. < > = choose for compare questions.
  document.addEventListener("keydown", function (e) {
    if (!T.active) return;
    if (e.key === "Enter") { e.preventDefault(); T.active.primary(); return; }
    if (T.active.onKey && T.active.onKey(e.key)) e.preventDefault();
  });

  function lessonHref(c) { return SF.data.href.lesson(c.grade, c.topic, c.sub); }

  function quit(c) {
    if (!window.confirm("Leave this test? This try won't count.")) return;
    T.stop();
    T.cur = null;
    SF.go(lessonHref(c));
  }

  function renderQuestion(root) {
    const c = T.cur, item = c.items[c.idx], q = item.q;
    if (c.qStart === null) c.qStart = performance.now();

    const dots = el("ol", { class: "dots", "aria-label": "Progress" }, c.items.map(function (it, i) {
      return el("li", { class: "dot" + (i === c.idx ? " now" : it.correct === true ? " good" : it.correct === false ? " bad" : "") });
    }));
    const fill = el("div", { class: "timer-fill" });
    const label = el("span", { class: "timer-label" });
    const timer = el("div", { class: "timer ok", role: "timer", "aria-label": "Time for this question" },
      el("div", { class: "timer-track" }, fill), label);
    const input = SF.widgets.answerInput(q);
    const feedback = el("div", { class: "feedback", "aria-live": "polite" });
    const btn = el("button", { class: "btn primary big", type: "button" }, "Check");
    const card = el("div", { class: "qcard" },
      el("p", { class: "qtext" }, q.q),
      q.abacus ? SF.widgets.abacus(q.abacus) : null,
      input.node,
      feedback);

    const snapshot = c;
    root.replaceChildren(el("section", { class: "test" },
      el("div", { class: "test-head" },
        el("button", { class: "btn ghost small", type: "button", onclick: function () { quit(snapshot); } }, "Leave test"),
        el("p", { class: "qcount" }, "Question " + (c.idx + 1) + " of " + c.items.length),
        dots),
      timer,
      card,
      el("div", { class: "test-actions" }, btn)));

    function tick() {
      const elapsed = (performance.now() - c.qStart) / 1000;
      const remain = item.limit - elapsed;
      const frac = Math.max(0, remain / item.limit);
      fill.style.width = (frac * 100) + "%";
      timer.classList.toggle("ok", frac >= 0.34);
      timer.classList.toggle("hurry", remain > 0 && frac < 0.34);
      timer.classList.toggle("over", remain <= 0);
      label.textContent = remain > 0 ? Math.ceil(remain) + " s" : "+" + Math.floor(-remain) + " s";
      T.raf = requestAnimationFrame(tick);
    }

    function check() {
      const resp = input.value();
      if (!SF.checker.isComplete(q, resp)) {
        card.classList.remove("shake");
        void card.offsetWidth;
        card.classList.add("shake");
        SF.toast(q.type === "order" ? "Put all the numbers in order first." : "Answer the question first.");
        input.focus();
        return;
      }
      const t = (performance.now() - c.qStart) / 1000;
      T.stop();
      item.response = resp;
      item.time = t;
      item.correct = SF.checker.check(q, resp);
      input.lock(q.answer);
      dots.children[c.idx].classList.add(item.correct ? "good" : "bad");

      const slow = t > item.limit;
      if (item.correct) {
        SF.sound.correct();
        feedback.className = "feedback good";
        feedback.replaceChildren(el("div", null,
          el("strong", null, slow ? "Correct, but over time." : SF.pick(CHEERS)),
          slow ? el("span", null, " You took " + SF.fmtTime(t) + ". Aim for " + item.limit + " s.") : null));
      } else {
        SF.sound.wrong();
        feedback.className = "feedback bad";
        feedback.replaceChildren(el("div", null,
          el("strong", null, "Not quite."),
          el("span", null, " The answer is " + SF.checker.show(q, q.answer) + "."),
          q.explain ? el("span", { class: "explain" }, q.explain) : null));
      }

      const last = c.idx === c.items.length - 1;
      btn.textContent = last ? "See my score" : "Next question";
      btn.onclick = next;
      T.active = { primary: next };
      btn.focus();
    }

    function next() {
      T.stop();
      if (c.idx < c.items.length - 1) {
        c.idx++;
        c.qStart = null;
        T.render(root);
        window.scrollTo(0, 0);
      } else {
        finish(root);
      }
    }

    btn.onclick = check;
    tick();
    T.active = { primary: check, onKey: input.onKey };
    input.focus();
  }

  function finish(root) {
    const c = T.cur, n = c.items.length;
    const score = c.items.filter(function (i) { return i.correct; }).length;
    const totalTime = c.items.reduce(function (s, i) { return s + i.time; }, 0);
    const totalLimit = c.items.reduce(function (s, i) { return s + i.limit; }, 0);
    const allInTime = c.items.every(function (i) { return i.time <= i.limit; });
    const passed = score === n && allInTime;
    const result = {
      score: score, total: n, totalTime: totalTime, totalLimit: totalLimit,
      allInTime: allInTime, passed: passed, stars: SF.logic.starsFor(score, n, allInTime)
    };
    const rec = SF.logic.record(c.key, result);
    result.firstPass = rec.firstPass;
    result.newBadges = SF.badges.evaluate({ result: result, firstPass: rec.firstPass, prevAttempts: rec.prevAttempts });
    c.result = result;
    SF.store.save();
    if (passed) { SF.sound.fanfare(); SF.confetti(); }
    else if (score === n) SF.sound.correct();
    T.render(root);
    window.scrollTo(0, 0);
  }

  function questionLabel(q) {
    if (!q.abacus) return q.q;
    return q.q + " (" + q.abacus.map(function (d, i) { return SF.widgets.ABACUS_LABELS[i] + " " + d; }).join(", ") + ")";
  }

  function renderResults(root) {
    const c = T.cur, r = c.result, g = c.grade, href = SF.data.href;
    const next = SF.logic.after(g, c.ti, c.si);
    const nextOpen = !!(next && SF.logic.isSubUnlocked(g, next.ti, next.si));

    let emoji, title, msg;
    if (r.passed) {
      emoji = "🏆";
      title = "Lesson passed!";
      if (!next) msg = "You have passed every lesson in " + g.title + ". Amazing!";
      else if (next.ti !== c.ti) msg = "You finished " + SF.data.short(c.topic) + "! " + SF.data.short(next.topic) + " is now open.";
      else msg = "Next lesson unlocked: " + next.sub.title + ".";
    } else if (r.score === r.total) {
      emoji = "🐢";
      title = "All correct!";
      msg = "Some answers took longer than the time allowed. Try again a little faster to pass.";
    } else if (r.stars >= 1) {
      emoji = "👍";
      title = "Good try!";
      msg = "Get all " + r.total + " right, each within its time, to pass this lesson.";
    } else {
      emoji = "🌱";
      title = "Keep practising";
      msg = "Read the worked example again, then have another go.";
    }

    const stars = el("div", { class: "stars-row", role: "img", "aria-label": r.stars + " of 3 stars" },
      [0, 1, 2].map(function (i) { return el("span", { class: "star" + (i < r.stars ? " on" : "") }, "★"); }));

    const badges = r.newBadges.length ? el("section", { class: "new-badges" },
      el("h2", null, r.newBadges.length > 1 ? "New badges!" : "New badge!"),
      el("div", { class: "badge-row" }, r.newBadges.map(function (b) { return SF.screens.sticker(b, SF.today()); }))) : null;

    const actions = el("div", { class: "result-actions" },
      r.passed && nextOpen ? el("a", { class: "btn success big", href: href.lesson(g, next.topic, next.sub) }, "Next lesson") : null,
      el("button", {
        class: "btn " + (r.passed ? "" : "primary big"), type: "button",
        onclick: function () { T.start(g, c.ti, c.si); T.render(root); window.scrollTo(0, 0); }
      }, "Try again"),
      el("a", { class: "btn ghost", href: href.lesson(g, c.topic, c.sub) }, "Back to lesson"));

    const review = el("ol", { class: "review" }, c.items.map(function (it) {
      const slow = it.time > it.limit;
      return el("li", { class: "review-item " + (it.correct ? "good" : "bad") },
        el("span", { class: "mark", "aria-label": it.correct ? "Correct" : "Wrong" }, it.correct ? "✓" : "✗"),
        el("div", { class: "review-body" },
          el("p", { class: "review-q" }, questionLabel(it.q)),
          el("p", { class: "review-a" },
            "Your answer: ", el("b", null, SF.checker.show(it.q, it.response)),
            it.correct ? null : [el("br"), "Correct answer: ", el("b", null, SF.checker.show(it.q, it.q.answer))]),
          !it.correct && it.q.explain ? el("p", { class: "review-explain" }, it.q.explain) : null),
        el("span", { class: "review-time" + (slow ? " slow" : ""), title: slow ? "Over the time limit" : "Within the time limit" },
          SF.fmtTime(it.time) + " of " + it.limit + " s"));
    }));

    root.replaceChildren(el("section", { class: "results" },
      el("div", { class: "card result-hero" + (r.passed ? " pass" : "") },
        el("span", { class: "result-emoji", "aria-hidden": "true" }, emoji),
        el("h1", null, title),
        el("p", { class: "result-score" }, r.score + " out of " + r.total + " correct"),
        el("p", { class: "result-time" }, "Total time " + SF.fmtTime(r.totalTime)),
        stars,
        el("p", { class: "result-msg" }, msg)),
      badges,
      actions,
      el("h2", null, "Your answers"),
      review));
  }
})(window.SF);
