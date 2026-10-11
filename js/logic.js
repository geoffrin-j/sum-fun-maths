// Learning rules: unlocking, stars, streaks and recording test results.
(function (SF) {
  "use strict";
  const P = function () { return SF.store.progress; };
  const K = function (g, t, s) { return SF.data.key(g.id, t.id, s.id); };

  const L = {
    rec: function (key) { return P().subtopics[key] || null; },
    isPassed: function (key) { const r = L.rec(key); return !!(r && r.passed); },
    isManual: function (key) { return !!P().manualUnlocks[key]; },

    // A chapter is done when every lesson in it is passed.
    isTopicDone: function (g, t) {
      return t.subtopics.every(function (s) { return L.isPassed(K(g, t, s)); });
    },

    // Chapter N opens when chapter N-1 is done.
    topicOpenByRule: function (g, ti) {
      return ti === 0 || L.isTopicDone(g, g.topics[ti - 1]);
    },

    // Can the chapter page be visited? (Also true if a parent unlocked a lesson in it.)
    isTopicAccessible: function (g, ti) {
      const t = g.topics[ti];
      return L.topicOpenByRule(g, ti) || t.subtopics.some(function (s) { return L.isManual(K(g, t, s)); });
    },

    // Lesson N opens when lesson N-1 in the same chapter is passed.
    isSubUnlocked: function (g, ti, si) {
      const t = g.topics[ti];
      if (L.isManual(K(g, t, t.subtopics[si]))) return true;
      if (!L.topicOpenByRule(g, ti)) return false;
      if (si === 0) return true;
      return L.isPassed(K(g, t, t.subtopics[si - 1]));
    },

    // First lesson that is open but not passed yet.
    nextLesson: function (g) {
      for (let ti = 0; ti < g.topics.length; ti++) {
        const t = g.topics[ti];
        for (let si = 0; si < t.subtopics.length; si++) {
          if (L.isSubUnlocked(g, ti, si) && !L.isPassed(K(g, t, t.subtopics[si]))) {
            return { topic: t, sub: t.subtopics[si], ti: ti, si: si };
          }
        }
      }
      return null;
    },

    // Lesson after (ti, si), possibly in the next chapter.
    after: function (g, ti, si) {
      if (si + 1 < g.topics[ti].subtopics.length) {
        return { ti: ti, si: si + 1, topic: g.topics[ti], sub: g.topics[ti].subtopics[si + 1] };
      }
      for (let n = ti + 1; n < g.topics.length; n++) {
        if (g.topics[n].subtopics.length) return { ti: n, si: 0, topic: g.topics[n], sub: g.topics[n].subtopics[0] };
      }
      return null;
    },

    gradeStats: function (g) {
      let passed = 0, total = 0, stars = 0;
      g.topics.forEach(function (t) {
        t.subtopics.forEach(function (s) {
          total++;
          const r = L.rec(K(g, t, s));
          if (r && r.passed) passed++;
          if (r) stars += r.stars || 0;
        });
      });
      return { passed: passed, total: total, stars: stars };
    },

    totalStars: function () {
      const subs = P().subtopics;
      return Object.keys(subs).reduce(function (n, k) { return n + (subs[k].stars || 0); }, 0);
    },

    totalAttempts: function () {
      const subs = P().subtopics;
      return Object.keys(subs).reduce(function (n, k) { return n + (subs[k].attempts || 0); }, 0);
    },

    // Streak as it stands today (0 if a day was missed).
    currentStreak: function () {
      const st = P().streak;
      if (!st.lastDay) return 0;
      return SF.dayDiff(st.lastDay, SF.today()) <= 1 ? st.current : 0;
    },

    practisedToday: function () { return P().streak.lastDay === SF.today(); },

    // 3 = all right and all in time (a pass), 2 = all right, 1 = 70% or more.
    starsFor: function (score, total, allInTime) {
      if (score === total && allInTime) return 3;
      if (score === total) return 2;
      if (score >= Math.ceil(total * 0.7)) return 1;
      return 0;
    },

    // Updates the lesson record and the daily streak. Does not save.
    record: function (key, result) {
      const p = P(), today = SF.today();
      const r = p.subtopics[key] || { attempts: 0, bestScore: 0, bestTime: null, passed: false, passedOn: null, stars: 0, history: [] };
      const wasPassed = r.passed, prevAttempts = r.attempts;
      const time = Math.round(result.totalTime * 10) / 10;

      r.attempts += 1;
      r.bestScore = Math.max(r.bestScore, result.score);
      if (result.score === result.total && (r.bestTime === null || time < r.bestTime)) r.bestTime = time;
      r.stars = Math.max(r.stars || 0, result.stars);
      if (result.passed && !r.passed) { r.passed = true; r.passedOn = today; }
      r.lastAttempt = new Date().toISOString();
      r.history = (r.history || []).concat([{ date: today, score: result.score, total: result.total, time: time, passed: result.passed }]).slice(-20);
      p.subtopics[key] = r;

      // Streak: a day counts when at least one test is finished.
      const st = p.streak;
      if (st.lastDay !== today) {
        st.current = (st.lastDay && SF.dayDiff(st.lastDay, today) === 1) ? st.current + 1 : 1;
        st.lastDay = today;
        st.best = Math.max(st.best || 0, st.current);
      }
      if (p.practiceDays.indexOf(today) < 0) p.practiceDays.push(today);
      p.lastLesson = key;

      return { firstPass: result.passed && !wasPassed, prevAttempts: prevAttempts };
    }
  };

  SF.logic = L;
})(window.SF);
