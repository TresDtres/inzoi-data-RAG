---
document_id: "91ad05a7a542f44a6fcd013dc0fd60f2f18403f634c99e0bf693f0d58b6b15cc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/action"
title: "📘 Action Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:16+00:00"
content_sha256: "8c38c5c59171f987edf2c6bb8480835bed20ad1d7273b557611af3cd517da15d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/action"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ActionTableRow

Defines a row in the action data table, containing one or more actions and associated tags.

### Properties

- **Id** (`FName`): Unique identifier for this action entry (used as the row key in the data table).
- **Actions** (`TArray<FB1ActionInfo>`): List of individual actions to be performed.
- **ActionTags** (`TArray<FName>`): Tags used to classify or search for this action group.

## 📚 References

- [FB1ActionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1actioninfo)
- [EB1ActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1actiontype)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAction[EB1ActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1actiontype)[FB1ActionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1actioninfo)[FB1ActionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1actiontablerow)[FB1ActionTimeData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1actiontimedata)
