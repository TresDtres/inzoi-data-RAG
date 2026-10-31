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
chunk: 1
chunk_count: 4
page_type: "article"
route: "modkit/project/uimod/04-scripting"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

This page is about `app.js`: what you can do, how the game talks to your code, and how your code talks back to the game.

If you are brand new to UIs, do the **Hello inZOI** walkthrough first — it gets you a working panel in five short edits. The reference sections after it explain why each piece works.

---

### 01. Walkthrough — "Hello inZOI" in five steps

You will end up with a small panel that opens on **F1**, asks the game what time it is, and prints the result.

#### Step 1 — Create the app

In ModKit, add a new UI app called `hello_inzoi`. ModKit creates a folder with four starter files. Open them in the **Inline Editor** or your external editor.

#### Step 2 — Set the trigger in the manifest

Replace the contents of `uimod_manifest.json` with:

```
{    "name": "Hello inZOI",    "entry": "index.html",    "display": {        "width": 1920,        "height": 1080,        "transparent": true,        "input_policy": "overlay"    },    "triggers": [        { "type": "keybind", "key": "F1" }    ]}
```

Click **Save Manifest**.

#### Step 3 — Lay out the page

Replace `index.html`:

```
<!DOCTYPE html><html><head>    <meta charset="utf-8">    <title>Hello inZOI</title>    <link rel="stylesheet" href="styles.css">    <script src="coui://inzoi/cohtml.js"></script>    <script src="coui://inzoi/mod/inzoi-sdk.js"></script></head><body>    <div id="panel">        <h1>Hello, inZOI</h1>        <p id="time">Press F1 to ask the game what time it is.</p>    </div>    <script src="app.js"></script></body></html>
```

> Load `cohtml.js` **before** `inzoi-sdk.js`. The first boots the engine binding, the second exposes `window.inzoi`. Skipping `cohtml.js` is a common cause of the view never receiving clicks (see [Troubleshooting](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/uimod/04-scripting#06-troubleshooting)).

#### Step 4 — Style it

Replace `styles.css`:

```
body { background: transparent; color: #fff; font-family: sans-serif; }#panel {    width: 360px;    margin: 80px auto;    padding: 24px;    background: rgba(20, 20, 20, 0.85);    border-radius: 8px;}h1 { margin: 0 0 12px; font-size: 24px; }
```

#### Step 5 — Write the script

Replace `app.js`:

```
(function () {    const timeEl = document.getElementById("time");    inzoi.trigger.onActivated(function (t) {        if (t.type !== "keybind" || t.key !== "F1") return;        inzoi.cli.execute("environment.get_time")            .then(function (result) {                timeEl.textContent = "Game time: " + JSON.stringify(result);            })            .catch(function (err) {                timeEl.textContent = "Failed: " + err.message;            });    });    console.log("[hello_inzoi] ready");})();
```

#### Step 6 — Try it

- In the **Trigger Simulator** panel, click **Fire** next to the `keybind` row. The **Preview** should update to show the result.
- In the **JS Console**, you should see `[info] [hello_inzoi] ready`.

When you are happy, click **Live Preview** and press F1 in inZOI.

---

### 02. The trigger flow

Here is what happens between you clicking **Fire** in the simulator (or pressing F1 in the game) and your function running:

![Trigger flow, from simulator to your callback](https://mod-docs.playinzoi.com/media/Modkit/UIMod_03.png)

1. The **Trigger Simulator** (or the running game) decides one of your declared triggers has been satisfied and assembles a payload like `{ type: "keybind", key: "F1" }`.
2. ModKit sends that payload into the **Preview Surface** (the embedded browser).
3. The SDK dispatches it to every callback registered via `inzoi.trigger.onActivated`.
4. Your callback runs. Anything you `console.log` ends up in the **JS Console**.

That is why the standard pattern is *"register one callback, then switch on `t.type` and `t.key` / `t.command` / ..."* — your single callback is the entry point for everything the game tells you.

> **Term: "callback"**
>
> A function you hand to someone else so they can call you later. `inzoi.trigger.onActivated(fn)` is you saying: *"Game, here is my phone number. Ring me whenever a trigger fires."*

---

### 03. The `window.inzoi` SDK

The SDK is exposed as a single global `inzoi` (also `window.inzoi`). It has these areas:

| AreaPurposeHighlights`inzoi.trigger`React to UI triggers.`onActivated(cb)``inzoi.cli`Run game commands from JS.`execute(command, params?)`, `list(category?)`, `help(command?)``inzoi.data`Read game state.`query(domain, method, params?)`, `subscribe(domain, params, cb)`, `onPush(domain, cb)``inzoi.event`Fire UI/game events.`fire(eventName, params?)``inzoi.view`Control your panel.`show()`, `hide()`, `reload()`, `resize(w, h)`, `hover(bool)``inzoi.debug`Logging without `console`.`log(message)`, `echo(message?)``inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| --- |
| `inzoi.trigger`React to UI triggers.`onActivated(cb)``inzoi.cli`Run game commands from JS.`execute(command, params?)`, `list(category?)`, `help(command?)``inzoi.data`Read game state.`query(domain, method, params?)`, `subscribe(domain, params, cb)`, `onPush(domain, cb)``inzoi.event`Fire UI/game events.`fire(eventName, params?)``inzoi.view`Control your panel.`show()`, `hide()`, `reload()`, `resize(w, h)`, `hover(bool)``inzoi.debug`Logging without `console`.`log(message)`, `echo(message?)``inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| `inzoi.cli`Run game commands from JS.`execute(command, params?)`, `list(category?)`, `help(command?)``inzoi.data`Read game state.`query(domain, method, params?)`, `subscribe(domain, params, cb)`, `onPush(domain, cb)``inzoi.event`Fire UI/game events.`fire(eventName, params?)``inzoi.view`Control your panel.`show()`, `hide()`, `reload()`, `resize(w, h)`, `hover(bool)``inzoi.debug`Logging without `console`.`log(message)`, `echo(message?)``inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| `inzoi.data`Read game state.`query(domain, method, params?)`, `subscribe(domain, params, cb)`, `onPush(domain, cb)``inzoi.event`Fire UI/game events.`fire(eventName, params?)``inzoi.view`Control your panel.`show()`, `hide()`, `reload()`, `resize(w, h)`, `hover(bool)``inzoi.debug`Logging without `console`.`log(message)`, `echo(message?)``inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| `inzoi.event`Fire UI/game events.`fire(eventName, params?)``inzoi.view`Control your panel.`show()`, `hide()`, `reload()`, `resize(w, h)`, `hover(bool)``inzoi.debug`Logging without `console`.`log(message)`, `echo(message?)``inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| `inzoi.view`Control your panel.`show()`, `hide()`, `reload()`, `resize(w, h)`, `hover(bool)``inzoi.debug`Logging without `console`.`log(message)`, `echo(message?)``inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| `inzoi.debug`Logging without `console`.`log(message)`, `echo(message?)``inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| `inzoi.types`Enum-style string constants for inZOI domains (Emotion, Season, etc.).constants only`inzoi.config`SDK-level config.`setTimeout(ms)` |
| `inzoi.config`SDK-level config.`setTimeout(ms)` |

Most calls return a **Promise** unless noted otherwise. Use `.then()` / `.catch()` or `async`/`await`.

#### 03-1. Triggers (`inzoi.trigger`)

```
inzoi.trigger.onActivated(function (t) {    // t.type is always present.    // Extra fields depend on the trigger type. See "Files".});
```

Most apps use one callback and branch by trigger type:

```
inzoi.trigger.onActivated(function (t) {    if (t.type === "keybind" && t.key === "F1") {        togglePanel();        return;    }    if (t.type === "command" && t.command === "mood_panel.toggle") {        togglePanel();        return;    }    if (t.type === "game_event" && t.event === "zoi.mood_changed") {        refreshMood();        return;    }});
```

Buttons inside your panel are normal DOM buttons. They do not need a manifest trigger; wire them with `addEventListener`:

```
document.getElementById("close").addEventListener("click", function () {    inzoi.view.hide();});document.getElementById("refresh").addEventListener("click", function () {    refreshMood();});
```

So the split is:

- Manifest triggers decide **when the panel appears or receives an external event**.
- DOM button handlers decide **what happens after the player clicks inside your panel**.

#### 03-2. Game commands (`inzoi.cli`)
