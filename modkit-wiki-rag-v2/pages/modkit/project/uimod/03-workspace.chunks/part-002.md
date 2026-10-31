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
chunk: 2
chunk_count: 2
page_type: "article"
route: "modkit/project/uimod/03-workspace"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

1. Pick your editor in the toolbar dropdown.
2. Click **Open in External Editor**.
3. Edit there — ModKit will pick up the changes.

---

### 05. (5) Manifest

A form view of `uimod_manifest.json` for the currently selected app. Edit fields here, click **Save Manifest**, and ModKit writes them back to the JSON file.

You can also edit `uimod_manifest.json` directly in any editor — both views stay in sync.

The fields you see in this panel match the manifest schema described on the [Files](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/uimod/02-files) page.

---

### 06. (6) Trigger Simulator and JS Console

Both panels live in the right-hand column.

#### 06-1. Trigger Simulator

A small table with one row per trigger declared in your manifest. Each row has a **Fire** button.

When you click **Fire**, ModKit pretends the game just satisfied that trigger:

- `keybind` → fires as if the player pressed that key.
- `command` → fires as if the player typed the command.
- `game_mode` → fires only when it matches the preview's current mode.
- `game_event` → fires as if the game emitted that event.
- `ui_event` → fires as if another UI emitted that event.
- `interaction_menu` → fires as if the menu item was selected.
- `always_on` → fires once on demand (in practice, `always_on` is already active and you rarely need to simulate it).

The simulator follows the game-like preview rules. For example, a `game_mode` trigger for `Vehicle` will not show the panel while the preview mode is `TopView`; the JS Console logs a warning instead. This helps catch "it appears in ModKit but not in game" mistakes before Live Preview.

This is how you iterate without launching inZOI: declare the trigger in the manifest, click **Fire**, then watch your `inzoi.trigger.onActivated(...)` callback and JS Console output.

#### 06-2. JS Console

Anything your script writes via `console.log`, `console.warn`, `console.error`, or `inzoi.debug.log` shows up here, color-coded by severity.

If your panel does not behave the way you expect, this is the first place to look.

---

### 07. Live Preview

The **Live Preview** button is what takes your work-in-progress out of the editor and into the running game. Think of it as a hot-reload — not an install.

![What Live Preview does](https://mod-docs.playinzoi.com/media/Modkit/UIMod_04.png)

What it actually does, step by step:

1. **Unloads the previous preview** if one is already in place. The game is asked to `uimod.unmount` the mod first so it lets go of the files it has open.
2. **Copies** every file under your mod's `ui/` folder into `Documents/inZOI/Mods/ModKitPreview/<mod_id>/ui/`, together with the `mod_manifest.json` and `.uplugin` the game scans for. This folder is kept apart from `Mods/InGame/`, so the mods you have installed are never touched.
3. **Sends a remount request** to the running game over a local connection (`http://127.0.0.1:11212`). The game re-mounts the mod from the freshly copied folder.
4. **Confirms** with a dialog. The JS Console also gets `[info] [mount]` lines showing how many files were copied and whether the game accepted the remount.

> **Game not running?**
>
> The copy still succeeds. The remount call fails, and the next time you launch the game, the new files will be picked up automatically.

You can press Live Preview as often as you want — each call replaces the copy with a fresh one.

#### Ending the preview

- **End Preview button.** Asks for confirmation, calls `uimod.unmount` on the game so the in-game UI disappears cleanly, then deletes the `ModKitPreview/<mod_id>/` folder.
- **Closing the workspace tab.** Same cleanup, run automatically and without prompting. Live Preview is an iteration affordance, not a persistent install, so it does not survive past the workspace that started it.
- **Closing the editor.** The preview folder is deleted, but the game is not told to unload the mod, so a preview that is already loaded stays in the running game until it restarts.

If ModKit ever crashes before it can clean up, delete `Documents/inZOI/Mods/ModKitPreview/<mod_id>/` by hand.
