---
document_id: "dbb13af88cdee0bdb1a3be174b32331972f60801d97fd21c2c39c30d05e41d85"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessage"
title: "📘 MobileMessage Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:53+00:00"
content_sha256: "a39edcc095c8ca2a995f9b407d8d41c8b46bc68cc82a0813663dd50f47b8b30c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/mobilemessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1MobileMessageTableRow

Defines a mobile message entry shown to the player, including button text, response scripts, and message content.

### Properties

- **Id** (`FName`): Unique identifier for this message.
- **RelationShipStatId** (`FName`): Relationship stat that this message is tied to. *(Foreign = "MobileMessageReward.Id")*
- **ConditionId** (`FName`): Condition that must be satisfied for the message to send. *(Foreign = "MobileMessageCondition.Id")*
- **PositiveAnswerButtonStrId** (`FString`): Localized text for the "positive" answer button. *(StringTableKey)*
- **NormalAnswerButtonStrId** (`FString`): Localized text for the "neutral" answer button. *(StringTableKey)*
- **NegativeAnswerButtonStrId** (`FString`): Localized text for the "negative" answer button. *(StringTableKey)*
- **OpenMessageScript** (`FName`): Script executed when the message opens. *(Foreign = "Script_MobileMessage.Id")*
- **PositiveAnswerScriptId** (`FName`): Script executed when the player selects the positive response. *(Foreign = "Script_MobileMessage.Id")*
- **NormalAnswerScriptId** (`FName`): Script executed when the player selects the neutral response. *(Foreign = "Script_MobileMessage.Id")*
- **NegativeAnswerScriptId** (`FName`): Script executed when the player selects the negative response. *(Foreign = "Script_MobileMessage.Id")*
- **MessageStrIdList** (`TArray<FB1MobileMessageData>`): List of text messages and their localizations displayed during this interaction.

## 📚 References

- [FB1MobileMessageData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMobile[EB1MobileMessageBaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1mobilemessagebaseobject)[MobileMessageParties Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessageparties)[MobileMessageReward Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagereward)[MobileMessageSystem Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mobilemessagesystem)[FB1MobileCallTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecalltablerow)[FB1MobileContactMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilecontactmap)[FB1MobileMessage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessage)[FB1MobileMessageCooltimeMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecooltimemap)[FB1MobileMessageCustomResponse](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagecustomresponse)[FB1MobileMessageData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedata)[FB1MobileMessageDelayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedelayinfo)[FB1MobileMessageList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagelist)
