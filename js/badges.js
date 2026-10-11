// Badge definitions. Add new badges to FIXED, or generate them like chapter badges.
// test(ctx) runs after every finished test; ctx = { result, firstPass, prevAttempts }.
(function (SF) {
  "use strict";
  const P = function () { return SF.store.progress; };
  const L = function () { return SF.logic; };

  const FIXED = [
    { id: "first-steps", icon: "🐣", name: "First Steps", desc: "Finish your first test.",
      test: function () { return L().totalAttempts() >= 1; } },
    { id: "perfect-10", icon: "💯", name: "Perfect 10", desc: "Get every answer right, each in time.",
      test: function () { const s = P().subtopics; return Object.keys(s).some(function (k) { return s[k].passed; }); } },
    { id: "lightning", icon: "⚡", name: "Lightning", desc: "Pass a test using less than half the time allowed.",
      test: function (ctx) { return !!(ctx && ctx.result && ctx.result.passed && ctx.result.totalTime <= ctx.result.totalLimit / 2); } },
    { id: "keep-going", icon: "💪", name: "Keep Going", desc: "Pass a lesson after trying again.",
      test: function (ctx) { return !!(ctx && ctx.firstPass && ctx.prevAttempts > 0); } },
    { id: "streak-3", icon: "🔥", name: "On Fire", desc: "Practise 3 days in a row.",
      test: function () { return P().streak.best >= 3; } },
    { id: "streak-7", icon: "🌈", name: "Week Warrior", desc: "Practise 7 days in a row.",
      test: function () { return P().streak.best >= 7; } },
    { id: "streak-30", icon: "🏆", name: "Month Master", desc: "Practise 30 days in a row.",
      test: function () { return P().streak.best >= 30; } },
    { id: "stars-25", icon: "⭐", name: "Star Collector", desc: "Collect 25 stars.",
      test: function () { return L().totalStars() >= 25; } },
    { id: "stars-50", icon: "🌟", name: "Super Star", desc: "Collect 50 stars.",
      test: function () { return L().totalStars() >= 50; } },
    { id: "stars-100", icon: "🌠", name: "Star Galaxy", desc: "Collect 100 stars.",
      test: function () { return L().totalStars() >= 100; } }
  ];

  function chapterBadges() {
    const out = [];
    SF.data.grades().forEach(function (g) {
      g.topics.forEach(function (t) {
        if (!t.subtopics.length) return;
        out.push({
          id: "chapter:" + g.id + ":" + t.id,
          icon: "🏅",
          name: SF.data.short(t) + " Champion",
          desc: "Pass every lesson in " + SF.data.short(t) + " (" + g.title + ").",
          test: function () { return L().isTopicDone(g, t); }
        });
      });
    });
    return out;
  }

  SF.badges = {
    all: function () { return FIXED.concat(chapterBadges()); },
    byId: function (id) { return this.all().filter(function (b) { return b.id === id; })[0] || null; },
    earnedCount: function () { return Object.keys(P().badges).length; },
    // Awards any newly earned badges and returns them.
    evaluate: function (ctx) {
      const p = P(), fresh = [];
      this.all().forEach(function (b) {
        if (!p.badges[b.id] && b.test(ctx)) { p.badges[b.id] = SF.today(); fresh.push(b); }
      });
      return fresh;
    }
  };
})(window.SF);
