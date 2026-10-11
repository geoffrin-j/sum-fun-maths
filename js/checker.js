// Checks answers and formats them for display.
(function (SF) {
  "use strict";

  // "8,000" -> 8000, "₹ 21.25" -> 21.25, "300 paise" -> 300. Returns NaN if not a number.
  function toNum(raw) {
    if (raw === null || raw === undefined) return NaN;
    const s = String(raw).toLowerCase().trim()
      .replace(/paise|rupees?|rs\.?|₹/g, "")
      .replace(/[−–—]/g, "-")
      .replace(/[,\s]/g, "");
    if (!/^-?(\d+(\.\d*)?|\.\d+)$/.test(s)) return NaN;
    return parseFloat(s);
  }

  // Lowercase; drop the word "and"; ignore spaces, commas, hyphens and a final full stop.
  // "Thirty six thousand two hundred and four" == "Thirty-six thousand two hundred four"
  function normText(s) {
    return String(s === null || s === undefined ? "" : s).toLowerCase()
      .replace(/[−–—]/g, "-")
      .replace(/\band\b/g, " ")
      .replace(/\.+\s*$/, "")
      .replace(/[\s,\-]+/g, "");
  }

  function sameSet(a, b) {
    return a.length === b.length && a.every(function (x) { return b.indexOf(x) >= 0; });
  }

  function check(q, resp) {
    switch (q.type) {
      case "number": {
        const n = toNum(resp);
        return !isNaN(n) && Math.abs(n - Number(q.answer)) < 1e-9;
      }
      case "money": {
        const n = toNum(resp);
        return !isNaN(n) && Math.round(n * 100) === Math.round(Number(q.answer) * 100);
      }
      case "compare":
      case "mcq":
        return resp === q.answer;
      case "order":
        return Array.isArray(resp) && resp.length === q.answer.length &&
          resp.every(function (x, i) { return x === q.answer[i]; });
      case "multi":
        return Array.isArray(resp) && sameSet(resp, q.answer);
      case "text": {
        const r = normText(resp);
        return [q.answer].concat(q.accept || []).some(function (a) { return normText(a) === r; });
      }
      default:
        return false;
    }
  }

  function isComplete(q, resp) {
    switch (q.type) {
      case "number":
      case "money": return !isNaN(toNum(resp));
      case "text": return normText(resp).length > 0;
      case "compare":
      case "mcq": return !!resp;
      case "order": return Array.isArray(resp) && resp.length === q.answer.length;
      case "multi": return Array.isArray(resp) && resp.length > 0;
      default: return false;
    }
  }

  // Human-friendly display of an answer or a response.
  function show(q, value) {
    if (value === null || value === undefined || value === "" || (Array.isArray(value) && !value.length)) return "—";
    switch (q.type) {
      case "number": {
        const n = typeof value === "number" ? value : toNum(value);
        return isNaN(n) ? String(value) : SF.fmtNum(n) + (q.unit ? " " + q.unit : "");
      }
      case "money": {
        const n = typeof value === "number" ? value : toNum(value);
        return isNaN(n) ? String(value) : SF.fmtMoney(n);
      }
      case "order": return value.join(", ");
      case "multi": return value.join(" and ");
      default: return String(value);
    }
  }

  SF.checker = { toNum: toNum, normText: normText, check: check, isComplete: isComplete, show: show };
})(window.SF);
