---
document_id: "72dc2aa718b313bf37ee1998688325c639bfdd1ee206bb698c54942d781ceb8a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/condition"
title: "📘 Condition Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:24+00:00"
content_sha256: "4af7b8c38d54fdede33bcdccfee9aebc641253131badb1a85741a99920556633"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/condition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ConditionTableRow

Stores reusable condition groups that other data rows reference by `ConditionId`.

### Properties

- **Id** (`FName`): Unique identifier for this condition entry.
- **AndConditionsList** (`TArray<FB1ConditionList>`): Condition groups that must **all** pass.
- **OrConditionsList** (`TArray<FB1ConditionList>`): Condition groups where **any one** passing is enough.

## Tables using this row

Conditions are split across many tables named `Condition_<Domain>`, all sharing this row type. A row is looked up by id regardless of which table it lives in, so the split is for authoring convenience only.

| DomainTableObject`Condition_Object`Door`Condition_Door`Interaction`Condition_Interaction` (plus per-feature variants such as `Condition_Interaction_Food`, `_Talk`, `_Vehicle` …)Enqueue`Condition_Enqueue` (plus per-feature variants)Life`Condition_Life`Hope`Condition_Hope`Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| --- |
| Object`Condition_Object`Door`Condition_Door`Interaction`Condition_Interaction` (plus per-feature variants such as `Condition_Interaction_Food`, `_Talk`, `_Vehicle` …)Enqueue`Condition_Enqueue` (plus per-feature variants)Life`Condition_Life`Hope`Condition_Hope`Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Door`Condition_Door`Interaction`Condition_Interaction` (plus per-feature variants such as `Condition_Interaction_Food`, `_Talk`, `_Vehicle` …)Enqueue`Condition_Enqueue` (plus per-feature variants)Life`Condition_Life`Hope`Condition_Hope`Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Interaction`Condition_Interaction` (plus per-feature variants such as `Condition_Interaction_Food`, `_Talk`, `_Vehicle` …)Enqueue`Condition_Enqueue` (plus per-feature variants)Life`Condition_Life`Hope`Condition_Hope`Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Enqueue`Condition_Enqueue` (plus per-feature variants)Life`Condition_Life`Hope`Condition_Hope`Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Life`Condition_Life`Hope`Condition_Hope`Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Hope`Condition_Hope`Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Ambition`Condition_Ambition`Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Choice card`Condition_ChoiceCard`Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Store`Condition_Store`Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Mobile message`Condition_MobileMessage`Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Talk`Condition_TalkRefuse`, `Condition_TalkFixedPosition`Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |
| Others`Condition_Common`, `Condition_Site`, `Condition_Weather`, `Condition_Timeline_*`, … |

> Company and relationship conditions are **not** part of this set. They keep their own row types - see [CompanyCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/companycondition) and [RelationshipCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/relationshipcondition).

## 📚 References

- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCondition[EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)[FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)[FB1ConditionFailTooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditionfailtooltiptablerow)[FB1ConditionList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditionlist)[FB1ConditionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditiontablerow)[FB1ConditionTooltipData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditiontooltipdata)[FB1ConditionTooltipParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1conditiontooltipparam)
