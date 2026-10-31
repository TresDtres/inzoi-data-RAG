---
document_id: "1ca27f05e29307406df2777df30dace5257c0ef069f1569820648cce549a8dad"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1relationshipprofiledataasset"
title: "UB1RelationshipProfileDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:10+00:00"
content_sha256: "a55c74dfce440242ee8b4146b93507bea1c87b10aaf9e25917cba356851c8272"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1relationshipprofiledataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset containing configuration for the relationship profile UI, including HUD profile data, record limits, and icon maps.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (8)

| NameTypeDescription`GenderIconMap``table<EB1GenderType, UTexture2D>`A map from gender type to its corresponding icon texture asset.`GrowthStepIconMap``table<EB1GrowthStep, UTexture2D>`A map from growth step to its corresponding icon texture asset.`HighlightRecordTextStyle``string`The rich text style tag name used to highlight the most recent relationship record text.`ImportantRecordWithIcon``FB1TableRowName[]`Debug data: list of records added with an icon via the B2AddRelationshipImportantRecordWithIcon cheat.`ImportantRecordWithoutIcon``FB1TableRowName[]`Debug data: list of records added without an icon via the B2AddRelationshipImportantRecordWithoutIcon cheat.`MaxImportantRecordSlotNum``integer`The maximum number of important memory record slots shown in the relationship profile UI.`MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| --- |
| `GenderIconMap``table<EB1GenderType, UTexture2D>`A map from gender type to its corresponding icon texture asset.`GrowthStepIconMap``table<EB1GrowthStep, UTexture2D>`A map from growth step to its corresponding icon texture asset.`HighlightRecordTextStyle``string`The rich text style tag name used to highlight the most recent relationship record text.`ImportantRecordWithIcon``FB1TableRowName[]`Debug data: list of records added with an icon via the B2AddRelationshipImportantRecordWithIcon cheat.`ImportantRecordWithoutIcon``FB1TableRowName[]`Debug data: list of records added without an icon via the B2AddRelationshipImportantRecordWithoutIcon cheat.`MaxImportantRecordSlotNum``integer`The maximum number of important memory record slots shown in the relationship profile UI.`MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| `GrowthStepIconMap``table<EB1GrowthStep, UTexture2D>`A map from growth step to its corresponding icon texture asset.`HighlightRecordTextStyle``string`The rich text style tag name used to highlight the most recent relationship record text.`ImportantRecordWithIcon``FB1TableRowName[]`Debug data: list of records added with an icon via the B2AddRelationshipImportantRecordWithIcon cheat.`ImportantRecordWithoutIcon``FB1TableRowName[]`Debug data: list of records added without an icon via the B2AddRelationshipImportantRecordWithoutIcon cheat.`MaxImportantRecordSlotNum``integer`The maximum number of important memory record slots shown in the relationship profile UI.`MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| `HighlightRecordTextStyle``string`The rich text style tag name used to highlight the most recent relationship record text.`ImportantRecordWithIcon``FB1TableRowName[]`Debug data: list of records added with an icon via the B2AddRelationshipImportantRecordWithIcon cheat.`ImportantRecordWithoutIcon``FB1TableRowName[]`Debug data: list of records added without an icon via the B2AddRelationshipImportantRecordWithoutIcon cheat.`MaxImportantRecordSlotNum``integer`The maximum number of important memory record slots shown in the relationship profile UI.`MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| `ImportantRecordWithIcon``FB1TableRowName[]`Debug data: list of records added with an icon via the B2AddRelationshipImportantRecordWithIcon cheat.`ImportantRecordWithoutIcon``FB1TableRowName[]`Debug data: list of records added without an icon via the B2AddRelationshipImportantRecordWithoutIcon cheat.`MaxImportantRecordSlotNum``integer`The maximum number of important memory record slots shown in the relationship profile UI.`MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| `ImportantRecordWithoutIcon``FB1TableRowName[]`Debug data: list of records added without an icon via the B2AddRelationshipImportantRecordWithoutIcon cheat.`MaxImportantRecordSlotNum``integer`The maximum number of important memory record slots shown in the relationship profile UI.`MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| `MaxImportantRecordSlotNum``integer`The maximum number of important memory record slots shown in the relationship profile UI.`MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| `MaxProfileRecordNum``integer`The maximum number of relationship record entries shown in the relationship profile UI.`ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
| `ZoiInformationProfileData`[`FB1ZoiInformationProfileData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1zoiinformationprofiledata)The HUD Zoi information profile configuration data. |
