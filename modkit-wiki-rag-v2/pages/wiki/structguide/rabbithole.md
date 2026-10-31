---
document_id: "544237f3c70f4f2c416fa94a0d129a7c8c82266ccd40f38994dacb4088ec1029"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/rabbithole"
title: "📘 RabbitHole Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:59+00:00"
content_sha256: "0a3feb1752a0bd0263b91b5f7619339e458b36e2ecde1962bce9f89cecc791a1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/rabbithole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1RabbitHoleTableRow

Defines a special "rabbit hole" interaction with scheduled actions, animations, and choices.

### Properties

- **Id** (`FName`): Unique identifier for the interaction.
- **IconTexture** (`TSoftObjectPtr<UObject>`): Icon texture for this interaction (supports Texture2D and SlateTextureAtlasInterface).
- **MainTextId / TooltipTextId / ToastMessageTextId** (`FString`): Localized UI texts for title, hint, and confirmation. *(StringTableKey)*
- **OverrideScheduleInfoId** (`FName`): ID reference for overriding schedule information. *(Foreign = "ScheduleInfo.Id")*
- **StartScriptId / CancelScriptId / FinishScriptId** (`FName`): Scripts triggered when the interaction starts, the interaction is canceled, the interaction is completed . *(Foreign = "Script_RabbitHole.Id")*
- **Tags** (`TArray<FName>`): Tags for categorizing or filtering this rabbit hole.
- **RabbitHoleInteractionList** (`TArray<FB1RabbitHoleInteraction>`): List of rabbit hole interactions associated with this interaction.
- **ChoiceCardList** (`TArray<FB1RabbitHoleChoiceCardInfo>`): List of choice cards available for this interaction.

## 📚 References

- [FB1RabbitHoleInteraction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rabbitholeinteraction)
- [FB1RabbitHoleChoiceCardInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rabbitholechoicecardinfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRabbit[FB1RabbitHoleChoiceCardInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rabbitholechoicecardinfo)[FB1RabbitHoleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rabbitholedata)[FB1RabbitHoleImage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rabbitholeimage)[FB1RabbitHoleInteraction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rabbitholeinteraction)[FB1RabbitHoleTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1rabbitholetablerow)
