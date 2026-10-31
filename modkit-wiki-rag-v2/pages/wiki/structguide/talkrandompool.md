---
document_id: "baeaaa614a5ebf8ab4b6edb19e15dd94a2b9904e6268c50e2f56ce6e5020488a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/talkrandompool"
title: "📘 TalkRandomPool Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:55+00:00"
content_sha256: "00029ef42ff10fbc1130c4aaa435f61fda9672469e4098b33d06e07a7cf9cf7a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/talkrandompool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1TalkRandomPoolTableRow

Defines pools of random animations or expressions for both the speaker and listener in a talk interaction.

### Properties

- **Id** (`FName`): Unique identifier for the random talk pool.
- **SpeakerPool** (`FB1TalkRolePool`): Animation pool used by the speaker.
- **ListenerPool** (`FB1TalkRolePool`): Animation pool used by the listener.
- **FinishScriptPool** (`TArray<FName>`): List of scripts executed at the end of a random talk. *(Foreign = "Script_Talk.Id")*

## 📚 References

- [FB1TalkRolePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkrolepool)
- [FB1BodyAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1bodyaniminfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTalk[TalkSelection Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/talkselection)[FB1TalkDataCache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkdatacache)[FB1TalkInteractionStartTalk](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkinteractionstarttalk)[FB1TalkRandomPoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkrandompooltablerow)[FB1TalkRolePool](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkrolepool)[FB1TalkSelectionRelationshipData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkselectionrelationshipdata)[FB1TalkSelectionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1talkselectiontablerow)
