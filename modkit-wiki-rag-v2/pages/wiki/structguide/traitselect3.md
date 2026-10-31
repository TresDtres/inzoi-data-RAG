---
document_id: "eb21e74f9651ab7788669a60f143943b62498fe1696d9ecfcec15dac24ac9beb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitselect3"
title: "📘 TraitSelect3 Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:57+00:00"
content_sha256: "0c03afb1b626de07bab81898e1acf72b29ae0403715d56da2ec5fffd49a40979"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/traitselect3"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1TraitSelect3TableRow

Defines selectable traits shown to the player in a grouped UI format.

### Properties

- **Id** (`FName`): Unique identifier for the trait selection group. *(L10N_Name = TraitCategoryTextId)*
- **TraitCategoryTextId** (`FString`): Localized title for this group of traits. *(StringTableKey = "Id")*
- **TraitIds** (`TArray<FName>`): List of traits included in this group. *(Foreign = "Trait.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTrait[EB1TraitCategoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitcategorytype)[EB1TraitEntryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traitentrytype)[EB1TraitEventTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1traiteventtriggertype)[Trait Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/trait)[TraitChemistry Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitchemistry)[TraitChemistryReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitchemistryreward)[TraitHopeLife Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traithopelife)[TraitRelationship Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitrelationship)[TraitValue Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitvalue)[TraitValuePoint Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/traitvaluepoint)[FB1TraitChangeByPerspectiveTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitchangebyperspectivetablerow)[FB1TraitChemistryList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1traitchemistrylist)
