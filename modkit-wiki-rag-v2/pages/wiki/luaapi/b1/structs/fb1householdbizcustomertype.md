---
document_id: "91c902dd154a411da4e3a3925008a91baec86c68e78e2dfef4554a14b5457343"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbizcustomertype"
title: "FB1HouseholdBizCustomerType"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:08+00:00"
content_sha256: "053e1ebf19004913cc5b116c5a0d1f9064cbc5ed905dda6a170bc19bfed9426d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbizcustomertype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the customer type filter for a business, allowing restriction to specific growth steps or other ZOI filter conditions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AllowedName``string`FName-based allowed value (e.g. JobId). NAME_None = allow all.`AllowedValue``integer`Bitmask of allowed values for the specified filter condition type. 0 means allow all.`CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type (used for numeric comparisons like JobRank). None = no comparison (keeps the legacy behavior).`ZoiFilterConditionType`[`EB1ZoiFilterConditionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoifilterconditiontype)The type of ZOI filter condition applied (e.g., GrowthStep). |
| --- |
| `AllowedName``string`FName-based allowed value (e.g. JobId). NAME_None = allow all.`AllowedValue``integer`Bitmask of allowed values for the specified filter condition type. 0 means allow all.`CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type (used for numeric comparisons like JobRank). None = no comparison (keeps the legacy behavior).`ZoiFilterConditionType`[`EB1ZoiFilterConditionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoifilterconditiontype)The type of ZOI filter condition applied (e.g., GrowthStep). |
| `AllowedValue``integer`Bitmask of allowed values for the specified filter condition type. 0 means allow all.`CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type (used for numeric comparisons like JobRank). None = no comparison (keeps the legacy behavior).`ZoiFilterConditionType`[`EB1ZoiFilterConditionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoifilterconditiontype)The type of ZOI filter condition applied (e.g., GrowthStep). |
| `CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type (used for numeric comparisons like JobRank). None = no comparison (keeps the legacy behavior).`ZoiFilterConditionType`[`EB1ZoiFilterConditionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoifilterconditiontype)The type of ZOI filter condition applied (e.g., GrowthStep). |
| `ZoiFilterConditionType`[`EB1ZoiFilterConditionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1zoifilterconditiontype)The type of ZOI filter condition applied (e.g., GrowthStep). |
