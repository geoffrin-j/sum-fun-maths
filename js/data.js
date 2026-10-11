// Access to lesson content (window.SUM_FUN_DATA) plus a content checker.
(function (SF) {
  "use strict";
  const TYPES = ["number", "money", "compare", "mcq", "order", "multi", "text"];
  function raw() { return window.SUM_FUN_DATA || {}; }

  const D = {
    TYPES: TYPES,

    // Fill in ids and defaults once at startup.
    prepare: function () {
      const all = raw();
      Object.keys(all).forEach(function (id) {
        const g = all[id];
        g.id = id;
        g.title = g.title || "Class " + g.grade;
        g.topics = g.topics || [];
        g.topics.forEach(function (t) {
          t.subtopics = t.subtopics || [];
          t.subtopics.forEach(function (s) { s.questions = s.questions || []; s.tips = s.tips || []; });
        });
      });
    },

    grades: function () {
      const all = raw();
      return Object.keys(all).map(function (id) { return all[id]; })
        .sort(function (a, b) { return (a.grade || 0) - (b.grade || 0); });
    },

    grade: function (id) { return raw()[id] || null; },

    key: function (gid, tid, sid) { return gid + "/" + tid + "/" + sid; },

    // "Chapter 1: Numbers" -> "Numbers"
    short: function (topic) { return topic.title.replace(/^Chapter\s*\d+\s*[:.\-–]\s*/i, ""); },

    timeLimit: function (q, sub) {
      return Number(q.time || sub.timeLimit || SF.config.defaultTimeLimit || 20);
    },

    limitRange: function (sub) {
      const ls = sub.questions.map(function (q) { return D.timeLimit(q, sub); });
      return [Math.min.apply(null, ls), Math.max.apply(null, ls)];
    },

    testLength: function (sub) {
      return Math.min(SF.config.questionsPerTest || 10, sub.questions.length);
    },

    countLessons: function (g) {
      return g.topics.reduce(function (n, t) { return n + t.subtopics.length; }, 0);
    },

    href: {
      grade: function (g) { return "#/g/" + g.id; },
      topic: function (g, t) { return "#/g/" + g.id + "/t/" + t.id; },
      lesson: function (g, t, s) { return "#/g/" + g.id + "/t/" + t.id + "/s/" + s.id; },
      test: function (g, t, s) { return "#/g/" + g.id + "/t/" + t.id + "/s/" + s.id + "/test"; }
    },

    // Returns { issues: [...], lessons, questions } for the Parent corner and tests.
    validate: function () {
      const issues = [];
      let lessons = 0, questions = 0;
      const perTest = SF.config.questionsPerTest || 10;
      D.grades().forEach(function (g) {
        const tids = {};
        g.topics.forEach(function (t) {
          if (tids[t.id]) issues.push(g.id + ": duplicate chapter id \"" + t.id + "\"");
          tids[t.id] = true;
          const sids = {};
          t.subtopics.forEach(function (s) {
            lessons++;
            const where = D.key(g.id, t.id, s.id);
            if (sids[s.id]) issues.push(where + ": duplicate lesson id");
            sids[s.id] = true;
            if (!s.title) issues.push(where + ": missing title");
            if (!s.workedExample || !Array.isArray(s.workedExample.steps)) issues.push(where + ": workedExample needs problem, steps[] and answer");
            if (!s.questions.length) issues.push(where + ": no questions");
            else if (s.questions.length < perTest) issues.push(where + ": only " + s.questions.length + " questions, so tests will be shorter than " + perTest);
            s.questions.forEach(function (q, i) {
              questions++;
              const qn = where + " Q" + (i + 1);
              if (!q.q) issues.push(qn + ": missing question text");
              if (TYPES.indexOf(q.type) < 0) issues.push(qn + ": unknown type \"" + q.type + "\"");
              if (q.answer === undefined || q.answer === null || q.answer === "") { issues.push(qn + ": missing answer"); return; }
              if ((q.type === "number" || q.type === "money") && isNaN(Number(q.answer))) issues.push(qn + ": answer must be a number");
              if (q.type === "compare" && ["<", ">", "="].indexOf(q.answer) < 0) issues.push(qn + ": compare answer must be <, > or =");
              if (q.type === "mcq") {
                if (!Array.isArray(q.options)) issues.push(qn + ": mcq needs options");
                else if (q.options.indexOf(q.answer) < 0) issues.push(qn + ": answer is not one of the options");
              }
              if (q.type === "multi") {
                if (!Array.isArray(q.options) || !Array.isArray(q.answer)) issues.push(qn + ": multi needs options[] and answer[]");
                else if (!q.answer.every(function (a) { return q.options.indexOf(a) >= 0; })) issues.push(qn + ": some answers are not in options");
              }
              if (q.type === "order") {
                if (!Array.isArray(q.answer) || q.answer.length < 2) issues.push(qn + ": order answer must be a list of 2 or more");
                else if (new Set(q.answer).size !== q.answer.length) issues.push(qn + ": order items must all be different");
              }
              if (q.abacus && (!Array.isArray(q.abacus) || q.abacus.length !== 5 ||
                  q.abacus.some(function (d) { return d < 0 || d > 9 || d !== Math.floor(d); }))) {
                issues.push(qn + ": abacus must be 5 digits [TTh, Th, H, T, O]");
              }
              if (q.time !== undefined && !(Number(q.time) > 0)) issues.push(qn + ": time must be a positive number of seconds");
            });
          });
        });
      });
      return { issues: issues, lessons: lessons, questions: questions };
    }
  };

  SF.data = D;
})(window.SF);
