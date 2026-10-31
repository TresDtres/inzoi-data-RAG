---
document_id: "fb26e1f1f149bede043656025b195fad0058c20bb324cd1207424abd1fdcd846"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/quest"
title: "📘 Quest Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:59+00:00"
content_sha256: "a325584f7ece15870f4b609240d3a157adbf560841b0928a7b19f9af8b4ccf62"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/quest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1QuestTableRow

Defines a quest flow including all stages, category grouping, and completion rules.

### Properties

- **Id** (`FName`): Unique quest identifier.
- **IsLazyComplete** (`bool`): Even if all missions are cleared, they can only be completed through a specific action. For example, if IsLazyComplete is set to True, the mission can be completed by pressing the "Submit" button in the mission UI.
- **QuestCategoryId** (`FName`): Grouping category for this quest. *(Foreign = "QuestCategory.Id")*
- **QuestList** (`TArray<FB1QuestInfo>`): Ordered list of quest stages and conditions.

## 📚 References

- [FB1QuestInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questinfo)
- [FB1QuestTask](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questtask)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoQuest[QuestCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/questcategory)[FB1QuestCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questcategorytablerow)[FB1QuestConditionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questconditiondata)[FB1QuestHistoryData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questhistorydata)[FB1QuestHistoryElement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questhistoryelement)[FB1QuestInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questinfo)[FB1QuestTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questtablerow)[FB1QuestTask](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questtask)
