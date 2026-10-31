---
document_id: "a8934c1de91ba13f3820ded2fbf8d282ec3360e5d7c257c3a93eb09c5a54957c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameoptioncpupresettablerow"
title: "B1GameOptionCPUPresetTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:54+00:00"
content_sha256: "8d1ab542ddd52ffa55ac3cca1105e957df08a0b1f8a49a876439bb62a0263f6c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1gameoptioncpupresettablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Table row mapping a CPU model to its CPU-Z 1T benchmark score, used to determine the * recommended simulation preset for the detected CPU. Data version of the formerly * hardcoded lookup table in B1CPUScoreTable.cpp. * When matching, the most specific (longest) CPU key contained in the brand string is selected, regardless of record order.

| PropertyTypeDescriptionMetadataCPUFNameCPU model name matched as a substring of FPlatformMisc::GetCPUBrand().Category: B1GameOptionCPUPresetTableRowCPUZScoreint32CPU-Z 1T benchmark score for this CPU model. Higher is faster.Category: B1GameOptionCPUPresetTableRow ClampMin: 0PlatformEB1GameOptionAllowPlatformsPlatform this entry applies to (Windows / Mac). Prevents cross-platform substring false-positive matches. Default is None so that Validate catches cases where Platform is missing from the JSON.Category: B1GameOptionCPUPresetTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| CPUFNameCPU model name matched as a substring of FPlatformMisc::GetCPUBrand().Category: B1GameOptionCPUPresetTableRowCPUZScoreint32CPU-Z 1T benchmark score for this CPU model. Higher is faster.Category: B1GameOptionCPUPresetTableRow ClampMin: 0PlatformEB1GameOptionAllowPlatformsPlatform this entry applies to (Windows / Mac). Prevents cross-platform substring false-positive matches. Default is None so that Validate catches cases where Platform is missing from the JSON.Category: B1GameOptionCPUPresetTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CPUZScoreint32CPU-Z 1T benchmark score for this CPU model. Higher is faster.Category: B1GameOptionCPUPresetTableRow ClampMin: 0PlatformEB1GameOptionAllowPlatformsPlatform this entry applies to (Windows / Mac). Prevents cross-platform substring false-positive matches. Default is None so that Validate catches cases where Platform is missing from the JSON.Category: B1GameOptionCPUPresetTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| PlatformEB1GameOptionAllowPlatformsPlatform this entry applies to (Windows / Mac). Prevents cross-platform substring false-positive matches. Default is None so that Validate catches cases where Platform is missing from the JSON.Category: B1GameOptionCPUPresetTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGame[GameObjectSound Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/gameobjectsound)[FB1GameActionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameactioninfo)[FB1GameActionInfoArray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameactioninfoarray)[FB1GameConfigBasicSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigbasicsetting)[FB1GameConfigDateTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigdatetime)[FB1GameConfigTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigtime)[FB1GameConfigWidgetCustomization](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigwidgetcustomization)[FB1GameObjectAnimTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectanimtablerow)[FB1GameObjectChangeMaterialParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectchangematerialparam)[FB1GameObjectChangeMeshParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectchangemeshparam)[FB1GameObjectDataCache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectdatacache)[FB1GameObjectDataCache_ObjectGrouping](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectdatacache-objectgrouping)
