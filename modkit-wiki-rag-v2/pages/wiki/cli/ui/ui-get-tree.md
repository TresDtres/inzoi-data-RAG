---
document_id: "33e70190abdc56fa5eaaec72cd0c6f07859f6fca3e2705df1458164aaca5c531"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-get-tree"
title: "ui.get_tree"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:20+00:00"
content_sha256: "8a0714c2ad6e58b8edd0a831ab87dbf3ab4fef9b3231d0139afe0e53c9af9ce0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-get-tree"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the visible UMG widget tree as JSON - a text substitute for looking at a screenshot. Prefer scoping it: 'ui.get_tree GameOption' returns only that window and is far smaller than the whole screen. 'top' selects the top-most window, which is what you usually want right after a popup appears. Without --window the entire screen is returned, grouped by UI layer. Layout-only containers (CanvasPanel, Overlay, SizeBox, boxes) are folded away and their children lifted, label text is absorbed into the button/tab that owns it, collapsed or unpainted or off-screen subtrees are dropped, and more than 12 identical siblings collapse into a {role:'more', count:N} entry. Only interactive nodes get a 'ref' and a 'rect' - everything else is there to be read, not clicked. Scroll containers report offset/max/pos, and list views additionally report the total item count plus the index range that currently has entry widgets (items outside that range are virtualized away and have no widget at all, so you must scroll to reach them). When the max_nodes budget is hit the response carries a 'truncated' field - it never drops nodes silently. Fails if --window matches no visible window. This command never creates a widget, so it is safe to poll; widgets opened this very frame appear one poll later.

# Metadata

| FieldValueDisplayGet UI TreeCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet UI TreeCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionwindowstringno—Restrict to one window: a UIType name (GameOption), a window instance name (WBP_GameOption_C_0), or 'top' for the top-most window. Omit for the whole screen.modestringnointeractiveinteractive = clickable nodes plus readable text (default). full = everything except decoration.max_nodesintno150Node budget for the response [1-5000]. Interactive nodes are kept first.depthintno0Maximum tree depth. 0 = unlimited.include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers).verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |
| --- |
| windowstringno—Restrict to one window: a UIType name (GameOption), a window instance name (WBP_GameOption_C_0), or 'top' for the top-most window. Omit for the whole screen.modestringnointeractiveinteractive = clickable nodes plus readable text (default). full = everything except decoration.max_nodesintno150Node budget for the response [1-5000]. Interactive nodes are kept first.depthintno0Maximum tree depth. 0 = unlimited.include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers).verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |
| modestringnointeractiveinteractive = clickable nodes plus readable text (default). full = everything except decoration.max_nodesintno150Node budget for the response [1-5000]. Interactive nodes are kept first.depthintno0Maximum tree depth. 0 = unlimited.include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers).verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |
| max_nodesintno150Node budget for the response [1-5000]. Interactive nodes are kept first.depthintno0Maximum tree depth. 0 = unlimited.include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers).verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |
| depthintno0Maximum tree depth. 0 = unlimited.include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers).verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |
| include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers).verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |
| show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers).verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |
| verify_hitboolnofalseHit-test every interactive node at its centre and mark the unreachable ones with state 'unreachable'. Accurate but costly - leave off for routine polling. |

# Usage

```
await inzoi.cli.execute('ui.get_tree', {  window: '', // optional  mode: 'interactive', // optional  max_nodes: 150, // optional  depth: 0, // optional  include_offscreen: false, // optional  show_decor: false, // optional  verify_hit: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
