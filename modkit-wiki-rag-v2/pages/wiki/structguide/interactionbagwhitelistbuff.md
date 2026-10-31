---
document_id: "094d531823a689ad9b10e0a2a0f1d7b85fb67a5107ef0a407fca340b2367195a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbagwhitelistbuff"
title: "📘 InteractionBagWhitelist Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:50+00:00"
content_sha256: "3ee312980034f06e0cbd170136a75181b716ad6177da6aee82beccaa4df8ad86"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/interactionbagwhitelistbuff"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1InteractionBagWhitelistBuff

Defines which interaction bags are enabled when the character has a buff with a specific tag.

### Properties

- **Id** (`FName`): Unique identifier.
- **BuffTag** (`FName`): Tag identifying relevant buffs.
- **InteractionBagIds** (`TArray<FName>`): Interaction bags unlocked by the buff. *(Foreign = "InteractionBag.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoInteraction[Interaction Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interaction)[InteractionBag Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbag)[InteractionBagGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactionbaggroup)[InteractionCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/interactioncategory)[FB1InteractionBagGroupTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbaggrouptablerow)[FB1InteractionBagTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtablerow)[FB1InteractionBagTagTooltipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagtagtooltiptablerow)[FB1InteractionBagWhitelistBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbagwhitelistbuff)[FB1InteractionBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionbasicinfo)[FB1InteractionCategoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactioncategorytablerow)[FB1InteractionDesire](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondesire)[FB1InteractionDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactiondisplayinfo)
