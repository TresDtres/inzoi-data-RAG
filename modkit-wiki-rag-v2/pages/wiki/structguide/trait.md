---
document_id: "72381fd60795ff29fa852b408e42c5ded75919863fdaa2910ca4f6a0f3575070"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/trait"
title: "📘 Trait Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:56+00:00"
content_sha256: "fdd07732e2b7dd7c4bf83289ce7788dc9fb3a5caaf51654384e1e5f68ee174a4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/trait"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1TraitTableRow

Defines a trait that can be assigned to a character, including metadata, conditions, and behavior logic.

### Properties

- **Id** (`FName`): Unique identifier for the trait.
- **Category** (`EB1TraitCategoryType`): Category this trait belongs to.
- **TraitNameTextId** (`FString`): Text ID for the trait name. *(StringTableKey = "Id")*
- **TraitDescTextId** (`FString`): Text ID for the trait description. *(StringTableKey = "Id")*
- **SymbolIcon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the trait.
- **TraitValuePointId** (`FName`): Unique identifier for the trait value point. *(Foreign = "TraitValuePoint.Id")*
- **PerspectiveIdList** (`TArray<FName>`): List of perspective IDs related to the trait. *(Foreign = "Trait.Id")*
- **KeywordInfoList** (`TArray<FB1TraitKeywordInfo>`): List of keyword information related to the trait.
- **FeatureInfoList** (`TArray<FB1TraitFeatureInfo>`): List of feature information related to the trait.
- **AgeAvailable** (`TArray<EB1GrowthStep>`): List of growth steps where this trait is available.
- **ChangeByGrowthStep** (`TArray<FB1GrowthChangeData>`): List of changes that occur based on growth steps.
- **AddTraitScriptId** (`FName`): ID referencing an additional trait script in DT_Script_Trait. *(Foreign = "Script_Trait.Id")*
- **RemoveTraitScriptId** (`FName`): ID referencing a removal trait script in DT_Script_Trait. *(Foreign = "Script_Trait.Id")*
- **RelatedPreferenceId** (`FName`): ID referencing a related preference in DT_Preference. *(Foreign = "Preference.Id")*
- **TraitScripts** (`TArray<FB1TraitScript>`): List of scripts related to the trait. *(Foreign = "Script_Trait.Id")*

## 📚 References

- [FB1TraitKeywordInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitkeywordinfo)
- [FB1TraitFeatureInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitfeatureinfo)
- [FB1GrowthChangeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1growthchangedata)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)
- [FB1TraitScript](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitscript)
- [EB1TraitEntryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitentrytype)
- [EB1TraitCategoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitcategorytype)
- [EB1TraitEventTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traiteventtriggertype)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)
- [FB1Execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1execute)
- [EB1ExecuteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1executetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTrait[EB1TraitCategoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitcategorytype)[EB1TraitEntryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitentrytype)[EB1TraitEventTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traiteventtriggertype)[TraitChemistry Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitchemistry)[TraitChemistryReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitchemistryreward)[TraitHopeLife Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traithopelife)[TraitRelationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitrelationship)[TraitSelect3 Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitselect3)[TraitValue Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitvalue)[TraitValuePoint Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitvaluepoint)[FB1TraitChangeByPerspectiveTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitchangebyperspectivetablerow)[FB1TraitChemistryList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitchemistrylist)
