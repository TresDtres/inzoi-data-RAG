---
document_id: "690aa19d96daa8211ba3a2f822512b49a39a057fbc5ce7f45aa65dbf9e5e973f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1milestonetablerow"
title: "FB1MilestoneTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:27+00:00"
content_sha256: "d5f791d88697e459da73e868c032cf195a2391f05acc57f9cef6c23f8f1ae706"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1milestonetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a milestone data table row. Contains category, target type, reward script, triggering quest ID, and display data for a milestone.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`Category`[`EB1MilestoneCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonecategory)Category this milestone belongs to (e.g., Growth, Career, Romance).`ConditionId``string`Condition ID that determines whether this milestone is visible in the UI. If None, always visible.`DisplayData`[`FB1MilestoneDisplayData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1milestonedisplaydata)Display data used to render this milestone in the UI.`QuestIdList``string[]`Quest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.`RewardScriptId``string`Script ID executed as a reward when this milestone is achieved.`Target`[`EB1MilestoneTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonetargettype)Target type for this milestone (None, Character, or Company). |
| --- |
| `Category`[`EB1MilestoneCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonecategory)Category this milestone belongs to (e.g., Growth, Career, Romance).`ConditionId``string`Condition ID that determines whether this milestone is visible in the UI. If None, always visible.`DisplayData`[`FB1MilestoneDisplayData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1milestonedisplaydata)Display data used to render this milestone in the UI.`QuestIdList``string[]`Quest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.`RewardScriptId``string`Script ID executed as a reward when this milestone is achieved.`Target`[`EB1MilestoneTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonetargettype)Target type for this milestone (None, Character, or Company). |
| `ConditionId``string`Condition ID that determines whether this milestone is visible in the UI. If None, always visible.`DisplayData`[`FB1MilestoneDisplayData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1milestonedisplaydata)Display data used to render this milestone in the UI.`QuestIdList``string[]`Quest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.`RewardScriptId``string`Script ID executed as a reward when this milestone is achieved.`Target`[`EB1MilestoneTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonetargettype)Target type for this milestone (None, Character, or Company). |
| `DisplayData`[`FB1MilestoneDisplayData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1milestonedisplaydata)Display data used to render this milestone in the UI.`QuestIdList``string[]`Quest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.`RewardScriptId``string`Script ID executed as a reward when this milestone is achieved.`Target`[`EB1MilestoneTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonetargettype)Target type for this milestone (None, Character, or Company). |
| `QuestIdList``string[]`Quest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.`RewardScriptId``string`Script ID executed as a reward when this milestone is achieved.`Target`[`EB1MilestoneTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonetargettype)Target type for this milestone (None, Character, or Company). |
| `RewardScriptId``string`Script ID executed as a reward when this milestone is achieved.`Target`[`EB1MilestoneTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonetargettype)Target type for this milestone (None, Character, or Company). |
| `Target`[`EB1MilestoneTargetType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1milestonetargettype)Target type for this milestone (None, Character, or Company). |
