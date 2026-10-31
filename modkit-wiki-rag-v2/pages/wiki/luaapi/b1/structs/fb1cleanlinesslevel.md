---
document_id: "46d0d221a76af511130bdbb9039217c9108e66a15827a3e17b83c5e3ba84ab9f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cleanlinesslevel"
title: "FB1CleanlinessLevel"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:30+00:00"
content_sha256: "3b4576727dd706e8cdebbc23f1d2abcd83a89689e924ddc449a533b082974c17"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cleanlinesslevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single cleanliness level with its display text and the condition (range or single) that maps to this level.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`ConditionType`[`EB1CleanlinessLevelConditionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanlinesslevelconditiontype)Whether this level uses a range condition or a single value condition.`DisplayText``string`Display text shown to the player for this cleanliness level.`RangeBeginCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)range. Comparison type for the lower bound of the range condition.`RangeBeginCompareValue``number`Cleanliness value used for the lower bound of the range condition.`RangeEndCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type for the upper bound of the range condition.`RangeEndCompareValue``number`Cleanliness value used for the upper bound of the range condition.`SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| --- |
| `ConditionType`[`EB1CleanlinessLevelConditionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanlinesslevelconditiontype)Whether this level uses a range condition or a single value condition.`DisplayText``string`Display text shown to the player for this cleanliness level.`RangeBeginCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)range. Comparison type for the lower bound of the range condition.`RangeBeginCompareValue``number`Cleanliness value used for the lower bound of the range condition.`RangeEndCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type for the upper bound of the range condition.`RangeEndCompareValue``number`Cleanliness value used for the upper bound of the range condition.`SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| `DisplayText``string`Display text shown to the player for this cleanliness level.`RangeBeginCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)range. Comparison type for the lower bound of the range condition.`RangeBeginCompareValue``number`Cleanliness value used for the lower bound of the range condition.`RangeEndCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type for the upper bound of the range condition.`RangeEndCompareValue``number`Cleanliness value used for the upper bound of the range condition.`SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| `RangeBeginCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)range. Comparison type for the lower bound of the range condition.`RangeBeginCompareValue``number`Cleanliness value used for the lower bound of the range condition.`RangeEndCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type for the upper bound of the range condition.`RangeEndCompareValue``number`Cleanliness value used for the upper bound of the range condition.`SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| `RangeBeginCompareValue``number`Cleanliness value used for the lower bound of the range condition.`RangeEndCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type for the upper bound of the range condition.`RangeEndCompareValue``number`Cleanliness value used for the upper bound of the range condition.`SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| `RangeEndCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type for the upper bound of the range condition.`RangeEndCompareValue``number`Cleanliness value used for the upper bound of the range condition.`SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| `RangeEndCompareValue``number`Cleanliness value used for the upper bound of the range condition.`SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| `SingleCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)single. Comparison type used for the single value condition.`SingleCompareValue``number`Cleanliness value used for the single value condition. |
| `SingleCompareValue``number`Cleanliness value used for the single value condition. |
