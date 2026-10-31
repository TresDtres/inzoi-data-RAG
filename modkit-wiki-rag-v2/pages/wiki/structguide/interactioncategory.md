---
document_id: "405be81fff29c14fa10205d0e7e2127402915a0c371d90bf0b7cc41ee7a335a1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactioncategory"
title: "📘 InteractionCategory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:51+00:00"
content_sha256: "2ac1dcbb91edab2f36159d4e8494c1822d3f6fb939d2d81c092015d3a9e7dfe0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/interactioncategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1InteractionCategoryTableRow

Defines a named interaction category used for sorting and filtering interactions in the UI.

### Properties

- **Id** (`FName`): Category identifier.
- **NameTextId** (`FString`): Localized category name. *(StringTableKey)*
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Category icon. *(AllowedClasses = Texture2D)*
- **InteractionTagInfos** (`TArray<FB1InteractionTagInfo>`): List of tags associated with this category.

## 📚 References

- [FB1InteractionTagInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiontaginfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoInteraction[Interaction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interaction)[InteractionBag Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbag)[InteractionBagGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbaggroup)[InteractionBagWhitelist Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbagwhitelistbuff)[FB1InteractionBagGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbaggrouptablerow)[FB1InteractionBagTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtablerow)[FB1InteractionBagTagTooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtagtooltiptablerow)[FB1InteractionBagWhitelistBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagwhitelistbuff)[FB1InteractionBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbasicinfo)[FB1InteractionCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactioncategorytablerow)[FB1InteractionDesire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondesire)[FB1InteractionDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondisplayinfo)
