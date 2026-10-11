// Small helpers shared by every other file. Everything hangs off window.SF.
window.SF = window.SF || {};
(function (SF) {
  "use strict";
  SF.config = window.SUM_FUN_CONFIG || {};

  function append(node, c) {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { append(node, x); }); return; }
    node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
  }

  // el("button", { class: "btn", onclick: fn }, "Label", childNode, [more])
  SF.el = function (tag, attrs) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        const v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else if (k.slice(0, 2) === "on" && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else node.setAttribute(k, v === true ? "" : String(v));
      });
    }
    for (let i = 2; i < arguments.length; i++) append(node, arguments[i]);
    return node;
  };

  SF.svg = function (tag, attrs) {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, String(attrs[k])); });
    for (let i = 2; i < arguments.length; i++) {
      const c = arguments[i];
      if (c === null || c === undefined) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  };

  SF.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  SF.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  function pad(n) { return String(n).padStart(2, "0"); }

  // Local calendar date as "YYYY-MM-DD".
  SF.today = function (d) {
    d = d || new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  };

  // Whole days from date string a to date string b.
  SF.dayDiff = function (a, b) {
    const pa = a.split("-").map(Number), pb = b.split("-").map(Number);
    return Math.round((Date.UTC(pb[0], pb[1] - 1, pb[2]) - Date.UTC(pa[0], pa[1] - 1, pa[2])) / 86400000);
  };

  function locale() { return SF.config.numberLocale || "en-IN"; }

  SF.fmtNum = function (n) {
    return Number(n).toLocaleString(locale(), { maximumFractionDigits: 2 });
  };

  SF.fmtMoney = function (n) {
    const x = Number(n);
    return "₹" + x.toLocaleString(locale(), {
      minimumFractionDigits: Number.isInteger(x) ? 0 : 2,
      maximumFractionDigits: 2
    });
  };

  SF.fmtTime = function (s) {
    if (s === null || s === undefined) return "—";
    if (s < 60) return (Math.round(s * 10) / 10) + " s";
    const m = Math.floor(s / 60), r = Math.round(s % 60);
    return m + " min " + r + " s";
  };

  SF.fmtDate = function (str) {
    if (!str) return "—";
    const d = new Date(str.length === 10 ? str + "T00:00:00" : str);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  };

  SF.toast = function (msg) {
    const t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(SF._toastTimer);
    SF._toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2800);
  };

  SF.go = function (hash) {
    if (location.hash === hash) SF.app.render();
    else location.hash = hash;
  };
})(window.SF);
