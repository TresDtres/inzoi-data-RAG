---
document_id: "9c62d62b64953af4e79312ca29b523d9e2bf90aa9c2c51686a933727cf726e69"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/uimod/03-workspace"
title: "Workspace"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "UI"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:39+00:00"
content_sha256: "28f0ef80dc65e9871a037e955cc0e55d93cff3b13fef93777993e5aa3633ddd6"
chunk: 1
chunk_count: 2
page_type: "article"
route: "modkit/project/uimod/03-workspace"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

The workspace is where you actually build a UI. It bundles a file tree, a live preview, an editor, a manifest form, and a way to test triggers — so you can change a file, see the result, and even fire events at your script without ever launching the game.

![ModKit UI workspace, labelled](https://mod-docs.playinzoi.com/media/Modkit/UIMod_01.png)

---

### 01. The toolbar

Across the top of the workspace.

| ButtonWhat it doesWhen you reach for it**Save Manifest**Writes the current manifest form back to `uimod_manifest.json`. The preview also reloads.After tweaking fields in the **Manifest** panel.**Open Folder**Opens the mod's `ui/` folder in your OS file explorer.When you want to use Git, drop in assets, or share the folder.**Open in External Editor**Opens the mod folder in whichever editor you picked from the dropdown next to this button (VS Code, Sublime, etc.).For real coding work — the inline editor is for quick edits only.**Editor: (Auto)**Picks which external editor opens. **Auto** finds the first one installed on your system.One-time setup.**API Catalog**Opens the [CLI command reference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/) in your browser.Any time you forget what a command is called or what parameters it takes.**Live Preview**Copies your `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` (kept apart from your installed mods), then asks the running game to (re)load the mod. Safe to press repeatedly while iterating.When you want to see your mod inside inZOI instead of just the preview.**End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |
| --- |
| **Save Manifest**Writes the current manifest form back to `uimod_manifest.json`. The preview also reloads.After tweaking fields in the **Manifest** panel.**Open Folder**Opens the mod's `ui/` folder in your OS file explorer.When you want to use Git, drop in assets, or share the folder.**Open in External Editor**Opens the mod folder in whichever editor you picked from the dropdown next to this button (VS Code, Sublime, etc.).For real coding work — the inline editor is for quick edits only.**Editor: (Auto)**Picks which external editor opens. **Auto** finds the first one installed on your system.One-time setup.**API Catalog**Opens the [CLI command reference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/) in your browser.Any time you forget what a command is called or what parameters it takes.**Live Preview**Copies your `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` (kept apart from your installed mods), then asks the running game to (re)load the mod. Safe to press repeatedly while iterating.When you want to see your mod inside inZOI instead of just the preview.**End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |
| **Open Folder**Opens the mod's `ui/` folder in your OS file explorer.When you want to use Git, drop in assets, or share the folder.**Open in External Editor**Opens the mod folder in whichever editor you picked from the dropdown next to this button (VS Code, Sublime, etc.).For real coding work — the inline editor is for quick edits only.**Editor: (Auto)**Picks which external editor opens. **Auto** finds the first one installed on your system.One-time setup.**API Catalog**Opens the [CLI command reference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/) in your browser.Any time you forget what a command is called or what parameters it takes.**Live Preview**Copies your `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` (kept apart from your installed mods), then asks the running game to (re)load the mod. Safe to press repeatedly while iterating.When you want to see your mod inside inZOI instead of just the preview.**End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |
| **Open in External Editor**Opens the mod folder in whichever editor you picked from the dropdown next to this button (VS Code, Sublime, etc.).For real coding work — the inline editor is for quick edits only.**Editor: (Auto)**Picks which external editor opens. **Auto** finds the first one installed on your system.One-time setup.**API Catalog**Opens the [CLI command reference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/) in your browser.Any time you forget what a command is called or what parameters it takes.**Live Preview**Copies your `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` (kept apart from your installed mods), then asks the running game to (re)load the mod. Safe to press repeatedly while iterating.When you want to see your mod inside inZOI instead of just the preview.**End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |
| **Editor: (Auto)**Picks which external editor opens. **Auto** finds the first one installed on your system.One-time setup.**API Catalog**Opens the [CLI command reference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/) in your browser.Any time you forget what a command is called or what parameters it takes.**Live Preview**Copies your `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` (kept apart from your installed mods), then asks the running game to (re)load the mod. Safe to press repeatedly while iterating.When you want to see your mod inside inZOI instead of just the preview.**End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |
| **API Catalog**Opens the [CLI command reference](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/) in your browser.Any time you forget what a command is called or what parameters it takes.**Live Preview**Copies your `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` (kept apart from your installed mods), then asks the running game to (re)load the mod. Safe to press repeatedly while iterating.When you want to see your mod inside inZOI instead of just the preview.**End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |
| **Live Preview**Copies your `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` (kept apart from your installed mods), then asks the running game to (re)load the mod. Safe to press repeatedly while iterating.When you want to see your mod inside inZOI instead of just the preview.**End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |
| **End Preview**Tells the game to unload this mod and deletes its `ModKitPreview/<mod_id>/` folder.When you are done iterating. Closing the workspace also runs this automatically; closing the editor deletes the folder. |

---

### 02. (2) File Tree

A list of every app folder under your mod's `ui/`, with the files inside each one. Click a file to open it in the **Inline Editor** to the right.

What it shows you:

- Which app is currently active for the **Preview** and **Manifest** panels.
- The exact filenames you would see in your file explorer — no abstraction over the real folder structure.

You do not need to use this panel to edit files — you can also open the folder in your external editor and work from there. ModKit watches the folder either way.

---

### 03. (3) Preview

A live in-editor browser, running the same UI engine the game uses. It renders your `index.html` exactly as the game will.

- It reloads automatically when you save a file.
- `console.log` and friends go to the **JS Console** panel, not your browser's devtools.
- The dotted boundary represents the **1920x1080 logical canvas**. Lay your CSS out against that size.

> **Term: "logical canvas"**
>
> The game always thinks your UI is 1920x1080, regardless of the player's monitor. The game UI engine then scales the whole thing to the real screen for you. If something looks tiny at 4K, that's expected — design for 1920x1080.

---

### 04. (4) Inline Editor

A built-in text editor for the file you selected in the tree.

This is for **quick edits** — a typo, a one-line tweak, a CSS color change. For anything bigger:
