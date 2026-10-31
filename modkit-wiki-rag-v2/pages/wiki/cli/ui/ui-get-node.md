---
document_id: "922edfe501481e0375225dcad40967f1c8e0b9f1be545ffd566739ed45b95331"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-get-node"
title: "ui.get_node"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:20+00:00"
content_sha256: "696c59d070fcb7a415b904ee6c408c24227223c2539707ee873bd16b83ef504d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-get-node"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Expands one node of the UI tree, identified by the ref that ui.get_tree or ui.find gave you. Use this for the parts ui.get_tree folded away ({role:'more'}) or cut with the node budget, instead of re-fetching the whole screen with a bigger budget. Unlike ui.get_tree this defaults to showing non-interactive structure too, since the point is to look closer. Fails when the ref no longer resolves - a window may have closed, or a list entry may have been recycled by scrolling, in which case re-query ui.get_tree for a fresh ref.

# Metadata

| FieldValueDisplayGet UI NodeCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet UI NodeCategory`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionrefstringno—Node ref from ui.get_tree / ui.find.depthintno2Maximum depth below the node. 0 = unlimited.max_nodesintno150Node budget for the response [1-5000].include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers). |
| --- |
| refstringno—Node ref from ui.get_tree / ui.find.depthintno2Maximum depth below the node. 0 = unlimited.max_nodesintno150Node budget for the response [1-5000].include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers). |
| depthintno2Maximum depth below the node. 0 = unlimited.max_nodesintno150Node budget for the response [1-5000].include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers). |
| max_nodesintno150Node budget for the response [1-5000].include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers). |
| include_offscreenboolnofalseInclude nodes whose rect lies outside the viewport.show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers). |
| show_decorboolnofalseInclude decoration nodes (images, spacers, throbbers). |

# Usage

```
await inzoi.cli.execute('ui.get_node', {  ref: '', // optional  depth: 2, // optional  max_nodes: 150, // optional  include_offscreen: false, // optional  show_decor: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
