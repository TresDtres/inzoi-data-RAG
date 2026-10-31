---
document_id: "a79e9e30cd4000a59ed4cd56226dd7537f5a4eff7eb241bedaaa3280c4d538a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1checkboxtreemidnode"
title: "FB1CheckBoxTreeMidNode"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:24+00:00"
content_sha256: "9c0f7385a964d7277c0579faaa02dc79f8b87c23643ca5fe9c97dde72aba18fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1checkboxtreemidnode"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data definition for a mid-level node in a checkbox tree, specifying its identity, label, default states, icon rule, sub-info, and a list of child leaf nodes.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`Children``FB1CheckBoxTreeLeafNode[]`List of leaf node children belonging to this mid node.`IconDisplayRule`[`EB1CheckBoxIconDisplayRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1checkboxicondisplayrule)Rule controlling when the icon is displayed for this mid node.`Id``string`Unique identifier for this mid node.`Label``string`Display label text for this mid node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this mid node is checked by default.`bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| --- |
| `Children``FB1CheckBoxTreeLeafNode[]`List of leaf node children belonging to this mid node.`IconDisplayRule`[`EB1CheckBoxIconDisplayRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1checkboxicondisplayrule)Rule controlling when the icon is displayed for this mid node.`Id``string`Unique identifier for this mid node.`Label``string`Display label text for this mid node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this mid node is checked by default.`bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| `IconDisplayRule`[`EB1CheckBoxIconDisplayRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1checkboxicondisplayrule)Rule controlling when the icon is displayed for this mid node.`Id``string`Unique identifier for this mid node.`Label``string`Display label text for this mid node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this mid node is checked by default.`bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| `Id``string`Unique identifier for this mid node.`Label``string`Display label text for this mid node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this mid node is checked by default.`bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| `Label``string`Display label text for this mid node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this mid node is checked by default.`bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| `SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this mid node is checked by default.`bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| `bDefaultChecked``boolean`Whether this mid node is checked by default.`bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| `bDefaultExpanded``boolean`Whether this mid node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
| `bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this mid node. |
