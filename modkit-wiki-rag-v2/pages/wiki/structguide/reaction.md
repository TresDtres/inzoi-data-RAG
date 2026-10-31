---
document_id: "af28c518ac911a1553ef15566d705996306f00dfdeef534d447c40478f5b2359"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/reaction"
title: "📘 Reaction Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:00+00:00"
content_sha256: "bc6f21629fe43381ea2b858ab40ea9e54d3a7cbe74df7acfb7a9272940f11daf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/reaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ReactionTableRow

Defines a character reaction with animations, triggering conditions, and scripts.

### Properties

- **Id** (`FName`): Unique identifier for this reaction.
- **Priority** (`int32`): Priority level for selecting this reaction over others.
- **Conditions** (`TArray<FB1Condition>`): Triggering logic that activates the reaction.
- **ReactionAnimInfo** (`FB1ReactionAnimInfo`): Animation played as part of the reaction.
- **StartScriptIds** (`TArray<FName>`): Scripts triggered at the start of the reaction. *(Foreign = "Script.Id")*

## 📚 References

- [FB1ReactionAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1reactionaniminfo)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoReaction[FB1ReactionAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1reactionaniminfo)[FB1ReactionRelationshipInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1reactionrelationshipinfo)[FB1ReactionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1reactiontablerow)
