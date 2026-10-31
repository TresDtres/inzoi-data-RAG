---
document_id: "f2194d1a446840c8f0210d98b9b8eac0e31f82d60289b8fca723ca225355204f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/talkselection"
title: "📘 TalkSelection Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:56+00:00"
content_sha256: "0b70221245302a3a8640255117581544f1f8609a7aef8b583468dbdca1580085"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/talkselection"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1TalkSelectionTableRow

Defines selectable talk options shown to the player, including category, condition, and visual UI information.

### Properties

- **Id** (`FName`): Unique identifier for this talk selection entry.
- **TalkType** (`FName`): Category or grouping for this type of talk (used in UI sorting).
- **DisplayStringTextId** (`FString`): Localized name for this talk option. *(StringTableKey)*
- **ConditionId** (`FName`): Condition to determine if this talk type is visible or enabled. *(Foreign = "InteractionCondition_Talk.Id")*
- **DisplayIcon** (`TSoftObjectPtr<UObject>`): Icon shown beside the talk option. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **DisplayIconColorId** (`FName`): Optional color override for the talk icon. *(Foreign = "ColorMapping.Id")*
- **InteractionBagList** (`TArray<FName>`): List of interaction bags triggered when this talk is selected. *(Foreign = "InteractionBag_Talk.Id")*
- **LeftMarkerId** (`FName`): Optional UI marker shown to the left of this option. *(Foreign = "WidgetMarker.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTalk[TalkRandomPool Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/talkrandompool)[FB1TalkDataCache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkdatacache)[FB1TalkInteractionStartTalk](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkinteractionstarttalk)[FB1TalkRandomPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkrandompooltablerow)[FB1TalkRolePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkrolepool)[FB1TalkSelectionRelationshipData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkselectionrelationshipdata)[FB1TalkSelectionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkselectiontablerow)
