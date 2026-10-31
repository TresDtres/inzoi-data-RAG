---
document_id: "c9f26fd98177e1651739eee3b9c1e85e770a392ecd86e9f42ca8716e95ea5627"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cattalkmenuui"
title: "📘 CatTalkMenuUI Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:22+00:00"
content_sha256: "adcf8942d0b35845fcfd13c76bb7bcc8766aadaa92437b7330ce9816aa1b8c90"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/cattalkmenuui"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CatTalkMenuUITableRow

Defines a chatbot menu group in the UI, used to organize chatbot-based interactions.

### Properties

- **Id** (`FName`): Unique identifier for this UI menu group.
- **GroupNameTextId** (`FString`): Localization key for the menu group title. *(StringTableKey = "Id")*
- **bIsBuildWorldData** (`bool`): If true, this entry is used in build world data mode.
- **ChatbotIdList** (`TArray<FB1ChatbotId>`): List of chatbot IDs included in this menu group.

## 📚 References

- [FB1ChatbotId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1chatbotid)
- [EB1ChatbotType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1chatbottype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCat[CatShop Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/catshop)[CatTalkTutorial Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cattalktutorial)[FB1CatShopTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1catshoptablerow)[FB1CatTalkMenuUITableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cattalkmenuuitablerow)[FB1CatTalkTop3Suggestions](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cattalktop3suggestions)[FB1CatTalkTutorialTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cattalktutorialtablerow)
