// Progress storage.
// 1. Always cached in localStorage.
// 2. When a progress file is connected (Chrome/Edge File System Access API),
//    it is written after every save, so progress travels with the file.
//    The file handle is remembered in IndexedDB.
// 3. Export/Import works in every browser as a fallback.
(function (SF) {
  "use strict";
  const LS_KEY = "sumfun-progress-v1";
  const IDB_NAME = "sumfun", IDB_STORE = "kv", HANDLE_KEY = "progressFile";
  const FILE_TYPES = [{ description: "Sum Fun Maths progress", accept: { "application/json": [".json"] } }];

  function blank() {
    return {
      app: "Sum Fun Maths",
      version: 1,
      learner: SF.config.learner || "",
      createdAt: new Date().toISOString(),
      updatedAt: null,
      streak: { current: 0, best: 0, lastDay: null },
      practiceDays: [],
      subtopics: {},
      badges: {},
      manualUnlocks: {},
      lastLesson: null,
      settings: { sound: true }
    };
  }

  function normalize(p) {
    const b = blank();
    p = p || {};
    return Object.assign(b, p, {
      streak: Object.assign({}, b.streak, p.streak || {}),
      settings: Object.assign({}, b.settings, p.settings || {}),
      practiceDays: Array.isArray(p.practiceDays) ? p.practiceDays : [],
      subtopics: p.subtopics || {},
      badges: p.badges || {},
      manualUnlocks: p.manualUnlocks || {}
    });
  }

  // --- tiny IndexedDB key-value store (for the file handle) ---
  function idb() {
    return new Promise(function (res, rej) {
      const r = indexedDB.open(IDB_NAME, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore(IDB_STORE); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
  }
  function idbReq(mode, fn) {
    return idb().then(function (db) {
      return new Promise(function (res, rej) {
        const tx = db.transaction(IDB_STORE, mode);
        const rq = fn(tx.objectStore(IDB_STORE));
        tx.oncomplete = function () { res(rq && rq.result); };
        tx.onerror = function () { rej(tx.error); };
      });
    });
  }
  const idbGet = function (k) { return idbReq("readonly", function (s) { return s.get(k); }); };
  const idbSet = function (k, v) { return idbReq("readwrite", function (s) { return s.put(v, k); }); };
  const idbDel = function (k) { return idbReq("readwrite", function (s) { return s.delete(k); }); };

  const S = {
    progress: blank(),
    handle: null,
    fileName: null,
    // none | unsupported | needs-permission | connected | error
    status: "none",
    supported: typeof window.showSaveFilePicker === "function" &&
      typeof window.showOpenFilePicker === "function" && "indexedDB" in window,
    _listeners: [],

    onChange: function (fn) { this._listeners.push(fn); },
    _emit: function () {
      this._listeners.forEach(function (f) { try { f(); } catch (e) { console.error(e); } });
    },

    loadLocal: function () {
      try {
        const t = localStorage.getItem(LS_KEY);
        if (t) this.progress = normalize(JSON.parse(t));
      } catch (e) { console.warn("Could not read saved progress", e); }
    },
    saveLocal: function () {
      try { localStorage.setItem(LS_KEY, JSON.stringify(this.progress)); }
      catch (e) { console.warn("Could not save progress in the browser", e); }
    },

    init: async function () {
      this.loadLocal();
      if (!this.supported) { this.status = "unsupported"; return; }
      try {
        const h = await idbGet(HANDLE_KEY);
        if (!h) { this.status = "none"; return; }
        this.handle = h;
        this.fileName = h.name;
        const perm = await h.queryPermission({ mode: "readwrite" });
        if (perm === "granted") { await this._syncFromFile(); this.status = "connected"; }
        else this.status = "needs-permission";
      } catch (e) {
        console.warn("Progress file problem", e);
        this.status = "error";
      }
    },

    // Must be called from a click (browser rule).
    reconnect: async function () {
      if (!this.handle) return;
      const perm = await this.handle.requestPermission({ mode: "readwrite" });
      if (perm !== "granted") throw new Error("Saving to the progress file was not allowed.");
      await this._syncFromFile();
      this.status = "connected";
      this._emit();
    },

    createFile: async function () {
      const h = await window.showSaveFilePicker({
        suggestedName: SF.config.progressFileName || "progress.json",
        types: FILE_TYPES
      });
      this.handle = h;
      this.fileName = h.name;
      await idbSet(HANDLE_KEY, h);
      this.status = "connected";
      await this._write();
      this._emit();
    },

    openFile: async function () {
      const picked = await window.showOpenFilePicker({ multiple: false, types: FILE_TYPES });
      const h = picked[0];
      const perm = await h.requestPermission({ mode: "readwrite" });
      if (perm !== "granted") throw new Error("Saving to the progress file was not allowed.");
      this.handle = h;
      this.fileName = h.name;
      await this._syncFromFile();
      await idbSet(HANDLE_KEY, h);
      this.status = "connected";
      this._emit();
    },

    forgetFile: async function () {
      try { await idbDel(HANDLE_KEY); } catch (e) { console.warn(e); }
      this.handle = null;
      this.fileName = null;
      this.status = this.supported ? "none" : "unsupported";
      this._emit();
    },

    // The newer copy wins: the file, or what this browser has.
    _syncFromFile: async function () {
      const f = await this.handle.getFile();
      const text = (await f.text()).trim();
      if (!text) { await this._write(); return; }
      let data;
      try { data = normalize(JSON.parse(text)); }
      catch (e) { throw new Error(this.handle.name + " is not a valid progress file."); }
      if ((this.progress.updatedAt || "") > (data.updatedAt || "")) await this._write();
      else { this.progress = data; this.saveLocal(); }
    },

    _write: async function () {
      const w = await this.handle.createWritable();
      await w.write(JSON.stringify(this.progress, null, 2));
      await w.close();
    },

    save: async function () {
      this.progress.updatedAt = new Date().toISOString();
      this.saveLocal();
      if (this.status === "connected" && this.handle) {
        try { await this._write(); }
        catch (e) { console.warn("Could not write progress file", e); this.status = "needs-permission"; }
      }
      this._emit();
    },

    exportDownload: function () {
      const blob = new Blob([JSON.stringify(this.progress, null, 2)], { type: "application/json" });
      const base = (SF.config.progressFileName || "progress.json").replace(/\.json$/i, "");
      const a = SF.el("a", { href: URL.createObjectURL(blob), download: base + "-" + SF.today() + ".json" });
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    },

    importText: async function (text) {
      let data;
      try { data = JSON.parse(text); } catch (e) { throw new Error("That file is not valid JSON."); }
      if (!data || typeof data !== "object" || !data.subtopics) throw new Error("That file is not a Sum Fun Maths progress file.");
      this.progress = normalize(data);
      await this.save();
    },

    resetAll: async function () {
      const settings = this.progress.settings;
      this.progress = blank();
      this.progress.settings = settings;
      await this.save();
    }
  };

  SF.store = S;
})(window.SF);
