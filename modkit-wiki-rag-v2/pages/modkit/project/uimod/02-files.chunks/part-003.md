---
document_id: "07451c56672bdb46e12a858c47c7dbae52ab410e7c03d5e6c5725b617016f0c4"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/uimod/02-files"
title: "Files"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "UI"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:39+00:00"
content_sha256: "def9f6f6edc96b8700ac3c62a9d0711a256421959a1aca88d45d49212cc7c812"
chunk: 3
chunk_count: 3
page_type: "article"
route: "modkit/project/uimod/02-files"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

```
{ "type": "command", "command": "mood_panel.toggle" }
```

Use `game_event` / `ui_event` only when you know the event name emitted by the game or another UI:

```
{ "type": "game_event", "event": "zoi.mood_changed" }
```

Use `interaction_menu` for advanced menu injection. The label field is `label_key`, not `label`:

```
{ "type": "interaction_menu", "target": "character", "label_key": "My Action" }
```

Your JavaScript receives the trigger through one callback:

```
inzoi.trigger.onActivated(function (t) {    if (t.type === "keybind" && t.key === "F1") {        // Open, close, or run your UI action here.    }});
```

You can declare *multiple* triggers in the same manifest. `Mood Panel` uses both `keybind` and `command` so the player can choose how to open it.

---

### 03. `index.html` — the page

A UI's `index.html` is a regular HTML page. The only conventions:

- It should load the SDK so `window.inzoi.*` is available in your scripts.
- It usually ends with `<script src="app.js"></script>` so your code runs after the DOM is ready.

Minimal example (this is exactly what ModKit scaffolds):

```
<!DOCTYPE html><html><head>    <meta charset="utf-8">    <title>My App</title>    <link rel="stylesheet" href="styles.css">    <script src="coui://inzoi/cohtml.js"></script>    <script src="coui://inzoi/mod/inzoi-sdk.js"></script></head><body>    <div id="root">Hello, inZOI</div>    <script src="app.js"></script></body></html>
```

> **Why these two `coui://` scripts?**
>
> `coui://` is the in-game UI engine's equivalent of `https://`. Both files live next to the game — you do not bundle them, you just reference them.
>
> - `cohtml.js` boots the engine binding (`engine` global, view lifecycle callbacks). **Required**: without it the view stays in `Loading` state and never receives input.
> - `inzoi-sdk.js` exposes the high-level `window.inzoi` API (`inzoi.cli`, `inzoi.trigger`, `inzoi.view`, …) on top of `engine`.
>
> Always load them in this order, before your own scripts. In the editor preview, ModKit injects equivalent mocks so your code behaves identically.

---

### 04. `app.js` — your code

`app.js` is where you actually *do* things. The pattern in every shipped sample is the same:

1. Get references to your DOM elements.
2. Wire up DOM events (button clicks, mouseenter, etc.).
3. Subscribe to UI triggers with `inzoi.trigger.onActivated`.
4. Call game commands with `inzoi.cli.execute`.

You will see this pattern in detail on the [Scripting](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/uimod/04-scripting) page.

---

### 05. `styles.css` — appearance

This is plain CSS. The in-game UI engine renders it natively, so all the usual properties work — flexbox, transitions, custom properties, etc.

Two things to keep in mind:

- The canvas is treated as 1920x1080. If you want pixel-perfect results, design your CSS against that size.
- If `display.transparent` is `true`, the body background should also be transparent (`background: transparent;` or just no background) so the game shows through.

---

### 06. Multiple apps in one mod

If your mod ships more than one app, ModKit also creates a small **`uimod_apps.json`** at the `ui/` root that lists them:

```
{    "apps": [        { "name": "clock_widget", "default": true,  "enabled": true },        { "name": "mood_panel",   "default": false, "enabled": true }    ]}
```

You almost never edit this by hand. ModKit updates it when you add or remove apps from the workspace.
