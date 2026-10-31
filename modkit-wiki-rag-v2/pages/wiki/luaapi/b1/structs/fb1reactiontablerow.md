---
document_id: "70c7c1491dffa7a01ef7208bc3d87ce8434d6b08b33ead71403334795eec2da5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1reactiontablerow"
title: "FB1ReactionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:11+00:00"
content_sha256: "e45ab396024370c0fe87f44dc4e47086b5b8f8048bfa67b05a3a04495be28edd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1reactiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a reaction event, including its priority, condition, animation info, and start scripts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`ConditionId``string`The condition ID that must be satisfied for this reaction to trigger.`Priority``integer`The priority level used to resolve conflicts when multiple reactions could trigger simultaneously.`ReactionAnimInfo`[`FB1ReactionAnimInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1reactionaniminfo)The animation info played when this reaction is triggered.`StartScriptIds``string[]`The list of script IDs executed when this reaction starts. |
| --- |
| `ConditionId``string`The condition ID that must be satisfied for this reaction to trigger.`Priority``integer`The priority level used to resolve conflicts when multiple reactions could trigger simultaneously.`ReactionAnimInfo`[`FB1ReactionAnimInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1reactionaniminfo)The animation info played when this reaction is triggered.`StartScriptIds``string[]`The list of script IDs executed when this reaction starts. |
| `Priority``integer`The priority level used to resolve conflicts when multiple reactions could trigger simultaneously.`ReactionAnimInfo`[`FB1ReactionAnimInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1reactionaniminfo)The animation info played when this reaction is triggered.`StartScriptIds``string[]`The list of script IDs executed when this reaction starts. |
| `ReactionAnimInfo`[`FB1ReactionAnimInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1reactionaniminfo)The animation info played when this reaction is triggered.`StartScriptIds``string[]`The list of script IDs executed when this reaction starts. |
| `StartScriptIds``string[]`The list of script IDs executed when this reaction starts. |
