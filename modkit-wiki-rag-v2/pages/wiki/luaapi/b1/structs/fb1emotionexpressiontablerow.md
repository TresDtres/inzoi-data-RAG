---
document_id: "6791e3d45eee56564acbca051cbe6ad514a26b2038168c83adb3b4fc4f136c35"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1emotionexpressiontablerow"
title: "FB1EmotionExpressionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:44+00:00"
content_sha256: "9ee5d6c78be5fef141d6c02826be2ab8371a753ac40d2a2892b673a74333c24d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1emotionexpressiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that defines emotion expression during loop animations. When a looping action matches any LoopTarget, the system selects an InteractionBag from EmotionAnims based on the character's current emotion and executes it as a multi-interaction.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`EmotionAnims``FB1EmotionAnims[]`Emotion-to-InteractionBag mappings. EmotionId=None serves as the default.`LoopTargets``FB1LoopTargets[]`Target conditions (OR). If any condition matches, EmotionAnims from this row are used. |
| --- |
| `EmotionAnims``FB1EmotionAnims[]`Emotion-to-InteractionBag mappings. EmotionId=None serves as the default.`LoopTargets``FB1LoopTargets[]`Target conditions (OR). If any condition matches, EmotionAnims from this row are used. |
| `LoopTargets``FB1LoopTargets[]`Target conditions (OR). If any condition matches, EmotionAnims from this row are used. |
