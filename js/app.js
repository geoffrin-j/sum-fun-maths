// Router and startup.
// Routes:
//   #/                                 home
//   #/g/<grade>                        class: chapters
//   #/g/<grade>/t/<topic>              chapter: lessons path
//   #/g/<grade>/t/<topic>/s/<sub>      lesson
//   #/g/<grade>/t/<topic>/s/<sub>/test practice test
//   #/badges                           badges and streak
//   #/parent                           parent corner (PIN)
(function (SF) {
  "use strict";
  const app = SF.app = {};

  function parts() {
    return location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
  }
  function redirect(h) { location.replace(h); }
  function onTestRoute() { return /\/test$/.test(location.hash); }

  app.render = function () {
    SF.test.stop();
    const root = document.getElementById("app");
    const p = parts(), S = SF.screens, L = SF.logic, D = SF.data;
    let testing = false;

    if (!p.length) S.home(root);
    else if (p[0] === "badges") S.badges(root);
    else if (p[0] === "parent") S.parent(root);
    else if (p[0] === "g" && p[1]) {
      const g = D.grade(p[1]);
      if (!g) return redirect("#/");
      if (p.length === 2) S.grade(root, g);
      else {
        const ti = g.topics.findIndex(function (t) { return t.id === p[3]; });
        if (p[2] !== "t" || ti < 0) return redirect(D.href.grade(g));
        const t = g.topics[ti];
        if (!L.isTopicAccessible(g, ti)) {
          SF.toast("Finish the chapter before this one first.");
          return redirect(D.href.grade(g));
        }
        if (p.length === 4) S.topic(root, g, ti);
        else {
          const si = t.subtopics.findIndex(function (s) { return s.id === p[5]; });
          if (p[4] !== "s" || si < 0) return redirect(D.href.topic(g, t));
          if (!L.isSubUnlocked(g, ti, si)) {
            SF.toast("Pass the lesson before this one to unlock it.");
            return redirect(D.href.topic(g, t));
          }
          if (p[6] === "test") { testing = true; SF.test.show(root, g, ti, si); }
          else S.lesson(root, g, ti, si);
        }
      }
    } else return redirect("#/");

    if (!testing) SF.test.cur = null;
    S.header();
    S.banner(testing);
    window.scrollTo(0, 0);
  };

  async function init() {
    SF.data.prepare();
    const check = SF.data.validate();
    if (check.issues.length) console.warn("Sum Fun Maths content problems:\n" + check.issues.join("\n"));
    try { await SF.store.init(); } catch (e) { console.warn(e); }
    SF.store.onChange(function () { SF.screens.header(); SF.screens.banner(onTestRoute()); });
    window.addEventListener("hashchange", app.render);
    app.render();
  }

  init();
})(window.SF);
