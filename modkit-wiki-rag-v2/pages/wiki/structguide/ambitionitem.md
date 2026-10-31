---
document_id: "4a2c8a8b9622beecb55c70217ae0d80321c16397c386f05904e837cc62de057a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/ambitionitem"
title: "📘 AmbitionItem Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:16+00:00"
content_sha256: "c5964e43588836aa89b00e4eb950de76a148349cd2411bb14d345843a9dbd5c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/ambitionitem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AmbitionItemTableRow

Defines an ambition step entry, including age restrictions, descriptions, and mission steps.

### Properties

- **Id** (`FName`): Unique ID for this ambition item. *(L10N_Name = DisplayTextId, L10N_Desc = DescTextId)*
- **DisplayTextId** (`FString`): Localization key for display name. *(StringTableKey = "Id")*
- **DescTextId** (`FString`): Localization key for description. *(StringTableKey = "Id")*
- **ConditionId** (`FName`): ID of the condition that must be met for this ambition step. *(Foreign = "AmbitionCondition.Id")*
- **AgeAvailable** (`TArray<EB1GrowthStep>`): Growth stages where this ambition step is valid.
- **ChangeByGrowthStep** (`TArray<FB1GrowthChangeData>`): Changes that occur as the character grows.
- **AmbitionSteps** (`TArray<FB1AmbitionStepDefine>`): List of missions required to complete this ambition.

## 📚 References

- [FB1AmbitionStepDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstepdefine)
- [FB1AmbitionStepMissionDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstepmissiondefine)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)
- [FB1GrowthChangeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1growthchangedata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAmbition[Ambition Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/ambition)[FB1AmbitionItemTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionitemtablerow)[FB1AmbitionProgressStepMissionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionprogressstepmissioninfo)[FB1AmbitionState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstate)[FB1AmbitionStepDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstepdefine)[FB1AmbitionStepMissionDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitionstepmissiondefine)[FB1AmbitionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1ambitiontablerow)
