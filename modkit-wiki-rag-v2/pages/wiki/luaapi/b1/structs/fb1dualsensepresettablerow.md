---
document_id: "33b665f46fc6df5503490ad2eaba44ad4728290ee89dd1c3a208c9b8b380b0d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1dualsensepresettablerow"
title: "FB1DualSensePresetTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:44+00:00"
content_sha256: "9f1732056b10e0b56c6fe65df14297f892cd7df1efea9252e18175cdba396656"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1dualsensepresettablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that maps a preset ID to its DualSense preset data asset (trigger + LED + force feedback).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`ForceFeedbackEffects``FB1ForceFeedbackEntry[]`ForceFeedback assets — support several FF play per preset`Preset`[`UB1DualSensePresetDataAsset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1dualsensepresetdataasset)Soft reference to the DualSense preset data asset this row points to. DataAsset (Trigger+LED) — no exist no trigger |
| --- |
| `ForceFeedbackEffects``FB1ForceFeedbackEntry[]`ForceFeedback assets — support several FF play per preset`Preset`[`UB1DualSensePresetDataAsset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1dualsensepresetdataasset)Soft reference to the DualSense preset data asset this row points to. DataAsset (Trigger+LED) — no exist no trigger |
| `Preset`[`UB1DualSensePresetDataAsset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1dualsensepresetdataasset)Soft reference to the DualSense preset data asset this row points to. DataAsset (Trigger+LED) — no exist no trigger |
