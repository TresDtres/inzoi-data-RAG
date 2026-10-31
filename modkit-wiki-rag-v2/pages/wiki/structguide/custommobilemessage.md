---
document_id: "0400f0427f31386533daa225a0c0b9644873bf6d66819f8e00cadfc226b913c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/custommobilemessage"
title: "📘 CustomMobileMessage Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:26+00:00"
content_sha256: "e88f5a7583c1b6978887be3203b5d1a242968a01082c8f6372472a6d844b53da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/custommobilemessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CustomMobileMessageTableRow

Defines a mobile message used in gameplay, including content, answers, scripts, and cooldown behavior.

### Properties

- **Id** (`FName`): Unique identifier for this message.
- **RelationShipStatId** (`FName`): Relationship stat associated with this message. *(Foreign = "RelationshipStat.Id")*
- **PositiveAnswerButtonStrId** (`FString`): Text shown on the positive answer button. *(StringTableKey)*
- **NormalAnswerButtonStrId** (`FString`): Text shown on the neutral answer button. *(StringTableKey)*
- **NegativeAnswerButtonStrId** (`FString`): Text shown on the negative answer button. *(StringTableKey)*
- **OpenMessageScript** (`FName`): Script triggered when the message is opened. *(Foreign = "Script_MobileMessage")*
- **PositiveAnswerScriptId** (`FName`): Script triggered on positive reply. *(Foreign = "Script_MobileMessage")*
- **NormalAnswerScriptId** (`FName`): Script triggered on neutral reply. *(Foreign = "Script_MobileMessage")*
- **NegativeAnswerScriptId** (`FName`): Script triggered on negative reply. *(Foreign = "Script_MobileMessage")*
- **MessageData** (`FB1MobileMessageData`): Full text content and reply structure.
- **ResponseTimeout** (`int32`): Time limit (in seconds) to respond to the message. `-1` means no timeout.
- **CooltimeMinute** (`int64`): Cooldown time (in minutes) before this message can appear again.
- **MobileMessagePartiesId** (`FName`): Party info associated with this message. *(Foreign = "MobileMessageParties")*
- **UseDelayMessage** (`bool`): If true, uses delay logic before sending the message.
- **DelayInfo** (`FB1MobileMessageDelayInfo`): Settings for delay conditions and probability.

## 📚 References

- [FB1MobileMessageData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedata)
- [FB1MobileMessageDelayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mobilemessagedelayinfo)
- [EB1DayOfWeek](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1dayofweek)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCustom[FB1CustomMobileMessagePoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1custommobilemessagepooltablerow)[FB1CustomMobileMessageTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1custommobilemessagetablerow)[FB1CustomScheduleActorRoleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleactorroledata)[FB1CustomSchedulePresetTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customschedulepresettablerow)[FB1CustomScheduleSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleslotdata)[FB1CustomScheduleSlotPresetData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscheduleslotpresetdata)[FB1CustomScriptTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1customscripttablerow)
