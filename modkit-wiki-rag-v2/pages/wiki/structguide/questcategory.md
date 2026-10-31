---
document_id: "6fb51213c6f65b10fdd149b6a5077fb7c5afd80b0136d7047215350c7918fb61"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/questcategory"
title: "📘 QuestCategory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:59+00:00"
content_sha256: "5f58a01a0b6b648ad3cbb555d6138e295c153b9b5a7ec7979f673f669d7c6e4b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/questcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1QuestCategoryTableRow

Defines a quest category for organizing and styling quests in the UI.

### Properties

- **Id** (`FName`): Unique identifier for the quest category.
- **MainDisplayTextId** (`FString`): Main title shown in the UI. *(StringTableKey = "Id")*
- **MainCategoryIcon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the category visually.
- **SubDisplayTextId** (`FString`): Subtitle or secondary name for this category. *(StringTableKey)*
- **SubCategoryIcon** (`TSoftObjectPtr<UTexture2D>`): Icon for the subcategory section.
- **CategoryColorId** (`FName`): UI color applied to this category. *(Foreign = "ColorMapping.Id")*
- **MissionToolTipId** (`FString`): Settings that define how reward tooltips for missions are displayed in the UI. *(Foreign = "Text_UI.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoQuest[Quest Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/quest)[FB1QuestCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questcategorytablerow)[FB1QuestConditionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questconditiondata)[FB1QuestHistoryData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questhistorydata)[FB1QuestHistoryElement](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questhistoryelement)[FB1QuestInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questinfo)[FB1QuestTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questtablerow)[FB1QuestTask](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1questtask)
