---
document_id: "f3fbb458cb05236615fcab6f6d0c5893d93e635acba2b0e1e115d9528fe54a91"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1checkboxtreerootnode"
title: "FB1CheckBoxTreeRootNode"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:24+00:00"
content_sha256: "653ec9b312b8e9b3adcfbc54c59221eaf0046d460bf9abee6c6088584a8e5aef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1checkboxtreerootnode"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data definition for a root node in a checkbox tree, specifying its identity, label, default states, icon rule, sub-info, and a list of child mid nodes.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (9)

| NameTypeDescription`Children``FB1CheckBoxTreeMidNode[]`List of mid node children belonging to this root node.`IconDisplayRule`[`EB1CheckBoxIconDisplayRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1checkboxicondisplayrule)Rule controlling when the icon is displayed for this root node.`Id``string`Unique identifier for this root node.`Indicators``FB1CheckBoxTreeIndicator[]`Colored indicator icons shown next to this root node.`Label``string`Display label text for this root node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| --- |
| `Children``FB1CheckBoxTreeMidNode[]`List of mid node children belonging to this root node.`IconDisplayRule`[`EB1CheckBoxIconDisplayRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1checkboxicondisplayrule)Rule controlling when the icon is displayed for this root node.`Id``string`Unique identifier for this root node.`Indicators``FB1CheckBoxTreeIndicator[]`Colored indicator icons shown next to this root node.`Label``string`Display label text for this root node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `IconDisplayRule`[`EB1CheckBoxIconDisplayRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1checkboxicondisplayrule)Rule controlling when the icon is displayed for this root node.`Id``string`Unique identifier for this root node.`Indicators``FB1CheckBoxTreeIndicator[]`Colored indicator icons shown next to this root node.`Label``string`Display label text for this root node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `Id``string`Unique identifier for this root node.`Indicators``FB1CheckBoxTreeIndicator[]`Colored indicator icons shown next to this root node.`Label``string`Display label text for this root node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `Indicators``FB1CheckBoxTreeIndicator[]`Colored indicator icons shown next to this root node.`Label``string`Display label text for this root node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `Label``string`Display label text for this root node.`SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `SubInfoText``string`Optional sub-info text shown when bUseSubInfo is true.`bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `bDefaultChecked``boolean`Whether this root node is checked by default.`bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `bDefaultExpanded``boolean`Whether this root node is expanded by default.`bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
| `bUseSubInfo``boolean`Whether a sub-info text is displayed alongside this root node. |
