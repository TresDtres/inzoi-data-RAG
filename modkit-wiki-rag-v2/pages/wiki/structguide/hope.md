---
document_id: "8218552dae4a3d7e74fd0cb984c988c6d6256fd51bb3e08b5f83c30afdad2967"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/hope"
title: "📘 Hope Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:49+00:00"
content_sha256: "3e5bf03a9abf4a790e1489ba554d90de52769a8530b3d195dec4da5984617718"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/hope"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1HopeTableRow

Defines a "hope" entry representing a character's personal goal, desire, or life mission. Includes its category, display information, conditions, and scripts for activation and completion.

### Properties

- **Id** (`FName`): Unique identifier for the hope entry.
- **HopeCategory** (`FName`): Category that groups similar hope entries.
- **SelectConditionId** (`FName`): ID of the condition required to make this hope selectable. *(Foreign = "HopeCondition.Id")*
- **DisplayTextId** (`FString`): UI name of the hope. *(StringTableKey)*
- **ReasonDescTextId** (`FString`): Description of why this hope arose. *(StringTableKey)*
- **DescTextId** (`FString`): Detailed explanation of the hope itself. *(StringTableKey)*
- **CompleteEffectDescTextId** (`FString`): Text shown when the hope is fulfilled. *(StringTableKey)*
- **SpeechBubbleId** (`FName`): Optional speech bubble ID shown when the hope appears. *(Foreign = "SpeechBubble_Hope.Id")*
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon representing the hope in the UI.
- **MissionId** (`FName`): ID of the mission linked to fulfilling this hope. *(Foreign = "Mission_Hope.Id")*
- **StartScriptId** (`FName`): Script executed when the hope begins. *(Foreign = "Script_Hope.Id")*
- **CompleteScriptId** (`FName`): Script executed upon hope completion. *(Foreign = "Script_Hope.Id")*
- **EmotionId** (`FName`): Emotion ID rewarded upon fulfilling a hope. *(Foreign = "Emotion.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoHope[HopeLife Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/hopelife)[FB1HopeLifeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopelifetablerow)[FB1HopeSlotDefine](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopeslotdefine)[FB1HopeSlotInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopeslotinfo)[FB1HopeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1hopetablerow)
