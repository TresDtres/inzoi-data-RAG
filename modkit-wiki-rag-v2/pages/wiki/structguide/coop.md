---
document_id: "9acce8a08ed073221e11e2aa991f6ff262d6490dc2b1f019a6f6a228dfe0a41f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/coop"
title: "📘 Coop Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:24+00:00"
content_sha256: "496420143a1f55cfd062211273a1973379b96e0a714f2b3d77167653f93ed594"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/coop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CoopTableRow

Defines a cooperative interaction, including tasks, roles, and associated scripts for lifecycle events.

### Properties

- **Id** (`FName`): Unique identifier for the cooperative interaction.
- **TaskInfos** (`TArray<FB1TaskInfo>`): List of task steps performed during the interaction.
- **RoleInfos** (`TArray<FB1RoleInfo>`): List of role definitions required for this interaction.
- **StartScriptIds** (`TArray<FName>`): Scripts executed at the beginning of the interaction. *(Foreign = "Script_Interaction.Id")*
- **FinishScriptIds** (`TArray<FName>`): Scripts executed when the interaction ends. *(Foreign = "Script_Interaction.Id")*
- **TimeOutDuration** (`int32`): Timeout value (in seconds) for the entire interaction.

## 📚 References

- [FB1TaskInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1taskinfo)
- [FB1RoleInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1roleinfo)
- [FB1RolePlayingInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1roleplayinginfo)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCoop[CoopTalk Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cooptalk)[FB1CoopAnimGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1coopanimgroup)[FB1CoopGroupRotationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1coopgrouprotationtablerow)[FB1CoopStartInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1coopstartinfo)[FB1CoopTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cooptablerow)[FB1CoopTalkInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cooptalkinfo)[FB1CoopTalkTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cooptalktablerow)
