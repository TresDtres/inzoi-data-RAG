---
document_id: "bcd761e417dd06d635d6542006bb31e1d43d74b02ef31527ed1524bd1834630d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-dismiss"
title: "ui.dismiss"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:19+00:00"
content_sha256: "f03c81000ef6d2aab331306682bce9a70a0a3de19bb77880eacf06c3d62adbb3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-dismiss"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Closes the top-most blocking UI, up to max_steps elements in one call. Priority: coach mark -> cat talk -> popup -> ESC stack -> cutscene. For a popup it clicks the CANCEL button, never the action button: with two or more buttons it only clicks a non-dimmed Secondary/SecondaryNegative button and only when exactly one exists; a single-button popup is treated as an acknowledgement and is clicked. Clicking runs that button's bound script and delegate for real. Popup enumeration order is UObject creation order, NOT z-order, so the popup acted on is a best guess. Destructive confirmations (quit game, leave to lobby, delete, overwrite, discard, reset - matched as whole words, so 'Preset' is not read as 'Reset') are additionally on a deny-list and are NEVER auto-clicked; neither are popups with an empty popup_id, which are opened directly by a handler and cannot be verified as safe. A popup is closed outright (without clicking) only when its widget tree contains no button at all, so a popup that shows buttons never loses its decision delegates. When a popup is left untouched the call fails with stop_reason 'blocked_by:<popup_id> ...' (decide yourself and use ui.click_popup_button) or 'stuck:<popup_id> - all buttons dimmed' (nothing can be clicked at all). Loading screens are NEVER dismissed - poll ui.get_blocking and wait them out. Fails when there is no world. Safe to call repeatedly; within one call a target is never attempted twice.

# Metadata

| FieldValueDisplayDismiss Blocking UICategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayDismiss Blocking UICategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmax_stepsintno1Maximum number of UI elements to close in this call [1-32] |
| --- |
| max_stepsintno1Maximum number of UI elements to close in this call [1-32] |

# Usage

```
await inzoi.cli.execute('ui.dismiss', {  max_steps: 1, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
