---
document_id: "d0bc01eae1d244ea30b32807aad2abd03ce9d061f4701788af9a1faaf707a695"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/uimod/04-scripting"
title: "Scripting"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "UI"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:41+00:00"
content_sha256: "17d8c3891897be4a40681253b55d45cc53312309eccbeb13e7e4f85ea3377253"
chunk: 2
chunk_count: 4
page_type: "article"
route: "modkit/project/uimod/04-scripting"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

The full command catalog is published at [**API Catalog**](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/).

```
// Fire-and-forget: change the current Zoi's mood.inzoi.cli.execute("zoi.setMood", { mood: "happy" });// With result handling: ask the game for the in-game time.inzoi.cli.execute("environment.get_time")    .then(function (result) { console.log("now", result); })    .catch(function (err)   { console.warn("failed", err); });// List every command in a category.inzoi.cli.list("zoi").then(function (commands) { console.log(commands); });
```

#### 03-3. Game state (`inzoi.data`)

```
// One-shot query.inzoi.data.query("zoi", "getCurrent")    .then(function (zoi) { console.log("current zoi", zoi); });// Live subscription. Returns an object with .unsubscribe().const sub = inzoi.data.subscribe("zoi", { id: "self" }, function (state) {    console.log("zoi state changed", state);});// Stop listening:sub.unsubscribe();
```

#### 03-4. Your panel (`inzoi.view`)

```
inzoi.view.hide();             // close the panelinzoi.view.show();             // open it againinzoi.view.reload();           // re-run index.htmlinzoi.view.resize(800, 600);   // logical pixelsinzoi.view.hover(true);        // tell the game we want clicks now
```

For interactive panels, use `input_policy: "overlay"` and call `inzoi.view.hover(true)` on `mouseenter`, then `inzoi.view.hover(false)` on `mouseleave`. This tells the game when the cursor is over your panel so clicks should go to the UI instead of the world.

---

### 04. A real example — `mood_panel`

This is the actual `app.js` from the shipped **Mood Panel** sample. It demonstrates four of the patterns above: DOM events, `inzoi.cli`, `inzoi.view.hover`, and `console.log`.

```
(function () {    const currentEl = document.getElementById("current");    function setMood(mood) {        currentEl.textContent = mood;        if (window.inzoi && window.inzoi.cli) {            window.inzoi.cli.execute("zoi.setMood", { mood: mood })                .then(function (result) {                    console.log("[mood_panel] zoi.setMood ok:", result);                })                .catch(function (err) {                    console.warn("[mood_panel] zoi.setMood failed:", err);                });        }    }    document.querySelectorAll("button[data-mood]").forEach(function (btn) {        btn.addEventListener("click", function () {            setMood(btn.getAttribute("data-mood"));        });    });    // Capture pointer so the game knows we are interactive.    const panel = document.getElementById("panel");    panel.addEventListener("mouseenter", function () { window.inzoi && window.inzoi.view.hover(true); });    panel.addEventListener("mouseleave", function () { window.inzoi && window.inzoi.view.hover(false); });    console.log("[mood_panel] ready");})();
```

The matching `uimod_manifest.json` (also shipped) opens this panel on `Ctrl+M` or on the chat command `mood_panel.toggle`. The combination is a complete, runnable UI in under 40 lines of script.

---

### 05. Troubleshooting
