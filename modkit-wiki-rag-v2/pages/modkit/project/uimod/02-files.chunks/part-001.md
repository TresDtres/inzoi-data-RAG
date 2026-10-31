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
chunk: 1
chunk_count: 3
page_type: "article"
route: "modkit/project/uimod/02-files"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

A UI is just four files in a folder. ModKit creates them for you the first time you add an app to your project.

![UI files and their roles](https://mod-docs.playinzoi.com/media/Modkit/UIMod_02.png)

---

### 01. The four files at a glance

| FileOne-line role`uimod_manifest.json`The "settings card" — when does this UI open, how big is it, can it click through to the game?`index.html`The HTML page the game renders. The visible structure of your panel.`app.js`Your JavaScript. Reacts to triggers and talks to the game.`styles.css`Plain CSS. Controls how your panel looks. |
| --- |
| `uimod_manifest.json`The "settings card" — when does this UI open, how big is it, can it click through to the game?`index.html`The HTML page the game renders. The visible structure of your panel.`app.js`Your JavaScript. Reacts to triggers and talks to the game.`styles.css`Plain CSS. Controls how your panel looks. |
| `index.html`The HTML page the game renders. The visible structure of your panel.`app.js`Your JavaScript. Reacts to triggers and talks to the game.`styles.css`Plain CSS. Controls how your panel looks. |
| `app.js`Your JavaScript. Reacts to triggers and talks to the game.`styles.css`Plain CSS. Controls how your panel looks. |
| `styles.css`Plain CSS. Controls how your panel looks. |

> **Term: "app"**
>
> One mod can contain *multiple* UI apps (e.g. a `clock_widget` and a `mood_panel`). Each app is its own folder with its own four files. Picking which app is active is what the **File Tree** in the workspace does.

---

### 02. `uimod_manifest.json` — the settings card

This is the only file the game *requires* in order to load your panel. It is tiny. Here is the manifest from the shipped `Clock Widget` sample:

```
{    "name": "Clock Widget",    "entry": "index.html",    "display": {        "width": 1920,        "height": 1080,        "transparent": true,        "input_policy": "passthrough"    },    "triggers": [        { "type": "always_on" }    ]}
```

And here is `Mood Panel`, which is opened on a keybind and also through a chat command:

```
{    "name": "Mood Panel",    "entry": "index.html",    "display": {        "width": 1920,        "height": 1080,        "transparent": true,        "input_policy": "overlay"    },    "triggers": [        { "type": "keybind", "key": "M", "modifiers": ["Ctrl"] },        { "type": "command", "command": "mood_panel.toggle" }    ]}
```

#### 02-1. Top-level fields

| FieldMeaningDefault`name`Human-readable name of the app. Shown in lists.required`entry`The HTML file the game opens first.`"index.html"``display`How the panel is sized and how it handles input.see below`triggers`When your panel wakes up. At least one entry.required |
| --- |
| `name`Human-readable name of the app. Shown in lists.required`entry`The HTML file the game opens first.`"index.html"``display`How the panel is sized and how it handles input.see below`triggers`When your panel wakes up. At least one entry.required |
| `entry`The HTML file the game opens first.`"index.html"``display`How the panel is sized and how it handles input.see below`triggers`When your panel wakes up. At least one entry.required |
| `display`How the panel is sized and how it handles input.see below`triggers`When your panel wakes up. At least one entry.required |
| `triggers`When your panel wakes up. At least one entry.required |

#### 02-2. `display`

| Sub-fieldWhat it does`width`, `height`The *logical* size of your panel in pixels. Internally always treated as a 1920x1080 canvas — scale your CSS accordingly.`transparent``true` lets the game show through anywhere you don't draw.`input_policy`How your panel handles mouse/keyboard. See the term box below. |
| --- |
| `width`, `height`The *logical* size of your panel in pixels. Internally always treated as a 1920x1080 canvas — scale your CSS accordingly.`transparent``true` lets the game show through anywhere you don't draw.`input_policy`How your panel handles mouse/keyboard. See the term box below. |
| `transparent``true` lets the game show through anywhere you don't draw.`input_policy`How your panel handles mouse/keyboard. See the term box below. |
| `input_policy`How your panel handles mouse/keyboard. See the term box below. |

> **Term: `input_policy`**
>
> - **`overlay`** — *I want clicks on me, but the game keeps running.* Best default for panels with buttons, drag handles, sliders, or scroll areas (e.g. `Mood Panel`).
> - **`modal`** — *I want clicks on me, and the game should pause behind me.* For full-screen dialogs.
> - **`passthrough`** — *I never want clicks. Anything the user clicks should hit the game.* For passive HUDs and decoration like `Clock Widget`. Do not use this for interactive panels.

#### 02-3. `triggers`

A trigger is the condition that opens your panel. Each entry is `{ "type": "...", ...extra fields... }`.
