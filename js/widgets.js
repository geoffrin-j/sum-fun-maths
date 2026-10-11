// Question widgets: the abacus picture and one answer input per question type.
// Every answer input returns { node, value(), focus(), lock(correctAnswer), onKey(key) }.
(function (SF) {
  "use strict";
  const el = SF.el, svg = SF.svg;
  const W = SF.widgets = {};

  W.ABACUS_LABELS = ["TTh", "Th", "H", "T", "O"];

  // rods = [TTh, Th, H, T, O], each 0-9
  W.abacus = function (rods) {
    const colors = ["#EE4B57", "#FF9F1C", "#FFC531", "#17A673", "#3A6FF8"];
    const width = 360, height = 262, left = 52, gap = 64, baseY = 218, beadStep = 19;
    const root = svg("svg", { viewBox: "0 0 " + width + " " + height, class: "abacus", role: "img", "aria-label": "Abacus" });
    rods.forEach(function (count, i) {
      const x = left + i * gap;
      root.appendChild(svg("line", { x1: x, y1: 26, x2: x, y2: baseY, stroke: "#1E2A5A", "stroke-width": 4, "stroke-linecap": "round" }));
      for (let b = 0; b < count; b++) {
        root.appendChild(svg("ellipse", {
          cx: x, cy: baseY - 12 - b * beadStep, rx: 22, ry: 9,
          fill: colors[i], stroke: "#1E2A5A", "stroke-width": 2
        }));
      }
    });
    root.appendChild(svg("rect", { x: 12, y: baseY, width: width - 24, height: 16, rx: 6, fill: "#B9783F", stroke: "#1E2A5A", "stroke-width": 2.5 }));
    rods.forEach(function (_, i) {
      root.appendChild(svg("text", {
        x: left + i * gap, y: baseY + 40, "text-anchor": "middle",
        "font-size": 18, "font-weight": 800, fill: "#1E2A5A", "font-family": "inherit"
      }, W.ABACUS_LABELS[i]));
    });
    return root;
  };

  W.answerInput = function (q) {
    switch (q.type) {
      case "compare": return choice(q, ["<", ">", "="], "compare");
      case "mcq": return choice(q, q.shuffle === false ? q.options.slice() : SF.shuffle(q.options), "mcq");
      case "order": return order(q);
      case "multi": return multi(q);
      default: return field(q);
    }
  };

  // number, money, text
  function field(q) {
    const isText = q.type === "text";
    const input = el("input", {
      class: "answer-input",
      type: "text",
      inputmode: isText ? "text" : q.type === "money" ? "decimal" : "numeric",
      autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false",
      placeholder: q.placeholder || (q.type === "money" ? "0.00" : isText ? "Type your answer" : "?"),
      "aria-label": "Your answer"
    });
    const node = el("div", { class: "answer-field" + (isText ? " wide" : "") },
      q.type === "money" ? el("span", { class: "affix" }, "₹") : null,
      input,
      q.unit ? el("span", { class: "affix" }, q.unit) : null);
    return {
      node: node,
      value: function () { return input.value; },
      focus: function () { input.focus(); },
      lock: function () { input.readOnly = true; },
      onKey: function () { return false; }
    };
  }

  // compare and mcq: pick one button
  function choice(q, options, kind) {
    let selected = null, locked = false;
    const buttons = options.map(function (opt) {
      return el("button", {
        class: "choice", type: "button", role: "radio", "aria-checked": "false",
        onclick: function () { select(opt); }
      }, opt);
    });
    function select(opt) {
      if (locked) return;
      selected = opt;
      buttons.forEach(function (b, i) {
        const on = options[i] === opt;
        b.classList.toggle("on", on);
        b.setAttribute("aria-checked", on ? "true" : "false");
      });
    }
    return {
      node: el("div", { class: "choices " + kind, role: "radiogroup", "aria-label": "Choose an answer" }, buttons),
      value: function () { return selected; },
      focus: function () { buttons[0].focus(); },
      lock: function (answer) {
        locked = true;
        buttons.forEach(function (b, i) {
          b.disabled = true;
          if (options[i] === answer) b.classList.add("right");
          else if (options[i] === selected) b.classList.add("wrong");
        });
      },
      // Lets her type < > = on the keyboard for compare questions.
      onKey: function (key) {
        if (kind === "compare" && options.indexOf(key) >= 0) { select(key); return true; }
        return false;
      }
    };
  }

  // order: tap items in sequence
  function order(q) {
    let pool = SF.shuffle(q.answer), tries = 0, locked = false;
    while (pool.join("|") === q.answer.join("|") && tries++ < 10) pool = SF.shuffle(q.answer);
    const picked = [];
    const slots = el("div", { class: "order-slots", "aria-label": "Your order" });
    const poolBox = el("div", { class: "order-pool", "aria-label": "Numbers to place" });

    function draw() {
      slots.replaceChildren.apply(slots, q.answer.map(function (_, i) {
        if (picked[i] === undefined) return el("span", { class: "slot" }, String(i + 1));
        return el("button", {
          class: "chip-num placed", type: "button", "aria-label": "Take back " + picked[i],
          disabled: locked,
          onclick: function () { if (!locked) { picked.splice(i, 1); draw(); } }
        }, picked[i]);
      }));
      poolBox.replaceChildren.apply(poolBox, pool.filter(function (v) { return picked.indexOf(v) < 0; }).map(function (v) {
        return el("button", {
          class: "chip-num", type: "button", disabled: locked,
          onclick: function () { if (!locked) { picked.push(v); draw(); } }
        }, v);
      }));
    }
    draw();
    return {
      node: el("div", { class: "order" },
        slots, poolBox,
        el("p", { class: "hint" }, "Tap the numbers in order. Tap a placed number to take it back.")),
      value: function () { return picked.slice(); },
      focus: function () { const b = poolBox.querySelector("button"); if (b) b.focus(); },
      lock: function () { locked = true; draw(); },
      onKey: function () { return false; }
    };
  }

  // multi: pick all that apply
  function multi(q) {
    const sel = new Set();
    let locked = false;
    const buttons = q.options.map(function (opt) {
      return el("button", {
        class: "choice", type: "button", "aria-pressed": "false",
        onclick: function (e) {
          if (locked) return;
          if (sel.has(opt)) sel.delete(opt); else sel.add(opt);
          e.currentTarget.setAttribute("aria-pressed", sel.has(opt) ? "true" : "false");
          e.currentTarget.classList.toggle("on", sel.has(opt));
        }
      }, opt);
    });
    return {
      node: el("div", null,
        el("p", { class: "hint" }, "Choose all the right answers."),
        el("div", { class: "choices multi" }, buttons)),
      value: function () { return q.options.filter(function (o) { return sel.has(o); }); },
      focus: function () { buttons[0].focus(); },
      lock: function (answer) {
        locked = true;
        buttons.forEach(function (b, i) {
          const opt = q.options[i];
          b.disabled = true;
          if (answer.indexOf(opt) >= 0) b.classList.add("right");
          else if (sel.has(opt)) b.classList.add("wrong");
        });
      },
      onKey: function () { return false; }
    };
  }
})(window.SF);
