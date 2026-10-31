---
document_id: "3ff37e4a006f284a0ab136470ac4c7b9d541d5338788e46344d81a1740de2f06"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/catshop"
title: "📘 CatShop Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:22+00:00"
content_sha256: "dfa45487b13ab0c228693ad3669f94265b23b78c97f1404480eca30d88688182"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/catshop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CatShopTableRow

Defines a purchasable item entry in the cat shop system, including display info, icon, and logic trigger.

### Properties

- **Id** (`FName`): Unique identifier for this shop item. *(L10N_Name = NameTextId, L10N_Desc = DescTextId)*
- **NameTextId** (`FString`): Localization key for the name shown in the shop UI. *(StringTableKey = "Id")*
- **DescTextId** (`FString`): Localization key for the item description. *(StringTableKey = "Id")*
- **EffectTextId** (`FString`): Localization key for describing what the item does. *(StringTableKey = "Id")*
- **Icon** (`FName`): ID of the icon texture representing the item. *(Foreign = "B1Texture2D.Id")*
- **Price** (`int64`): In-game cost of the item.
- **ScriptId** (`FName`): Script executed when the item is purchased. *(Foreign = "Script.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCat[CatTalkMenuUI Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cattalkmenuui)[CatTalkTutorial Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cattalktutorial)[FB1CatShopTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1catshoptablerow)[FB1CatTalkMenuUITableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cattalkmenuuitablerow)[FB1CatTalkTop3Suggestions](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cattalktop3suggestions)[FB1CatTalkTutorialTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cattalktutorialtablerow)
