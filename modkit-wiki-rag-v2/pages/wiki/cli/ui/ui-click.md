---
document_id: "402a62bf2138735ae12e64271349e5cab1a6b334a51ac16fbf9cfc91200af859"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-click"
title: "ui.click"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:19+00:00"
content_sha256: "208a576d871cfd67bfddc46adc3b1ed3f45f81aee2b72e61cf765e9fd7af75b3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-click"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Clicks a UMG widget identified by a ref from ui.get_tree / ui.find. By default this synthesizes real mouse input at the widget's centre - it moves the cursor there, presses, and sends the RELEASE ON A LATER TICK, because the engine does not treat a press and release delivered in the same tick as a click. That means the click has NOT completed when this command returns: re-query ui.get_tree / ui.list_windows to see the result. Use hold_ticks if one tick is not enough. Because it goes through the real input path, hit testing, modality and input blocking all apply exactly as they do for a player - if something covers the widget the call FAILS instead of clicking. The Slate application is activated first, so this works with the game window in the background. force=true skips input synthesis entirely and invokes the widget's click delegate directly (buttons only), which bypasses hit testing and input blocking and can drive the game into a state a player cannot reach - it is synchronous, so unlike the default path the effect has already happened when the command returns. 'method' always reports which path ran (synth_input or delegate). Dimmed, disabled and non-hit-testable widgets are rejected outright. For a list entry, note the ref is only valid until the list scrolls - entry widgets are recycled, so scroll first (ui.scroll --to=index), re-query, then click. Passing x and y instead of ref clicks a raw viewport position; nothing verifies what it lands on, so prefer a ref. Fails when there is no world.

# Metadata

| FieldValueDisplayClick UI WidgetCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayClick UI WidgetCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionrefstringno—Widget ref from ui.get_tree / ui.find (e.g. WBP_GameOption_C_0/BW_Btn_Apply).buttonstringnoleftMouse button to synthesize.doubleboolnofalseSend a double click instead of a single click. Note that the engine's double-click path releases the OS mouse capture, so avoid it while a human is mid-drag in the game window.forceboolnofalseSkip input synthesis and invoke the widget's click delegate directly (buttons only). Synchronous, but bypasses hit testing and input blocking.hold_ticksintno1How many ticks to hold the button down before releasing [1-10]. 1 is enough for normal buttons; raise it for widgets that need a longer press.xfloatno—Viewport pixel X. Only used when ref is omitted.yfloatno—Viewport pixel Y. Only used when ref is omitted. |
| --- |
| refstringno—Widget ref from ui.get_tree / ui.find (e.g. WBP_GameOption_C_0/BW_Btn_Apply).buttonstringnoleftMouse button to synthesize.doubleboolnofalseSend a double click instead of a single click. Note that the engine's double-click path releases the OS mouse capture, so avoid it while a human is mid-drag in the game window.forceboolnofalseSkip input synthesis and invoke the widget's click delegate directly (buttons only). Synchronous, but bypasses hit testing and input blocking.hold_ticksintno1How many ticks to hold the button down before releasing [1-10]. 1 is enough for normal buttons; raise it for widgets that need a longer press.xfloatno—Viewport pixel X. Only used when ref is omitted.yfloatno—Viewport pixel Y. Only used when ref is omitted. |
| buttonstringnoleftMouse button to synthesize.doubleboolnofalseSend a double click instead of a single click. Note that the engine's double-click path releases the OS mouse capture, so avoid it while a human is mid-drag in the game window.forceboolnofalseSkip input synthesis and invoke the widget's click delegate directly (buttons only). Synchronous, but bypasses hit testing and input blocking.hold_ticksintno1How many ticks to hold the button down before releasing [1-10]. 1 is enough for normal buttons; raise it for widgets that need a longer press.xfloatno—Viewport pixel X. Only used when ref is omitted.yfloatno—Viewport pixel Y. Only used when ref is omitted. |
| doubleboolnofalseSend a double click instead of a single click. Note that the engine's double-click path releases the OS mouse capture, so avoid it while a human is mid-drag in the game window.forceboolnofalseSkip input synthesis and invoke the widget's click delegate directly (buttons only). Synchronous, but bypasses hit testing and input blocking.hold_ticksintno1How many ticks to hold the button down before releasing [1-10]. 1 is enough for normal buttons; raise it for widgets that need a longer press.xfloatno—Viewport pixel X. Only used when ref is omitted.yfloatno—Viewport pixel Y. Only used when ref is omitted. |
| forceboolnofalseSkip input synthesis and invoke the widget's click delegate directly (buttons only). Synchronous, but bypasses hit testing and input blocking.hold_ticksintno1How many ticks to hold the button down before releasing [1-10]. 1 is enough for normal buttons; raise it for widgets that need a longer press.xfloatno—Viewport pixel X. Only used when ref is omitted.yfloatno—Viewport pixel Y. Only used when ref is omitted. |
| hold_ticksintno1How many ticks to hold the button down before releasing [1-10]. 1 is enough for normal buttons; raise it for widgets that need a longer press.xfloatno—Viewport pixel X. Only used when ref is omitted.yfloatno—Viewport pixel Y. Only used when ref is omitted. |
| xfloatno—Viewport pixel X. Only used when ref is omitted.yfloatno—Viewport pixel Y. Only used when ref is omitted. |
| yfloatno—Viewport pixel Y. Only used when ref is omitted. |

# Usage

```
await inzoi.cli.execute('ui.click', {  ref: '', // optional  button: 'left', // optional  double: false, // optional  force: false, // optional  hold_ticks: 1, // optional  x: 0.0, // optional  y: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
