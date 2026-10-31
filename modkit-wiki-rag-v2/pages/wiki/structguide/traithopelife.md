---
document_id: "eaec6643eefa5992ad4e8c78408da6302334c166dd7dbf1bbe65afc9c5d5504a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traithopelife"
title: "📘 TraitHopeLife Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:57+00:00"
content_sha256: "0f86d33ec6d0427a204b307c05bc66e22db0f80bcf4e6fdb1b48915e6ce78b53"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/traithopelife"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1TraitHopeLifeTableRow

Defines a trait used in hope/life simulations, often age-restricted and behavior-driven.

### Properties

- **Id** (`FName`): Unique identifier for the trait.
- **Category** (`EB1TraitCategoryType`): Trait category (e.g., Social, Emotional, Physical).
- **AgeAvailable** (`TArray<EB1GrowthStep>`): List of growth stages where this trait is valid.
- **AddScriptId** (`FName`): Script triggered when the trait is added. *(Foreign = "Script_Trait.Id")*
- **RemoveScriptId** (`FName`): Script triggered when the trait is removed. *(Foreign = "Script_Trait.Id")*
- **TraitScripts** (`TArray<FB1TraitScript>`): Additional behavior logic linked to this trait.

## 📚 References

- [EB1TraitCategoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitcategorytype)
- [FB1TraitScript](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitscript)
- [EB1TraitEntryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitentrytype)
- [EB1GrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1growthstep)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)
- [FB1Execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1execute)
- [EB1ExecuteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1executetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTrait[EB1TraitCategoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitcategorytype)[EB1TraitEntryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitentrytype)[EB1TraitEventTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traiteventtriggertype)[Trait Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/trait)[TraitChemistry Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitchemistry)[TraitChemistryReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitchemistryreward)[TraitRelationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitrelationship)[TraitSelect3 Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitselect3)[TraitValue Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitvalue)[TraitValuePoint Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitvaluepoint)[FB1TraitChangeByPerspectiveTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitchangebyperspectivetablerow)[FB1TraitChemistryList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitchemistrylist)
