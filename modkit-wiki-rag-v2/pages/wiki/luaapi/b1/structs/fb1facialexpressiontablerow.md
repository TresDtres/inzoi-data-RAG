---
document_id: "b758b1c565875bdcdec2d1200bc18bd88a929421e48192046d70ef81ef740728"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1facialexpressiontablerow"
title: "FB1FacialExpressionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:48+00:00"
content_sha256: "cbafb58bf0aa51cf40dfbc053fe5070f4ebf74e246dc869d30ec3eab3db9bb5d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1facialexpressiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a facial expression, including the list of animation sequences and the blend alpha used when applying the expression to a character.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`AnimInfoList``FB1AnimSequenceInfo[]`List of animation sequence infos that compose this facial expression.`BlendAlpha``number`Blend alpha controlling how strongly this facial expression is applied (0.0 to 1.0). |
| --- |
| `AnimInfoList``FB1AnimSequenceInfo[]`List of animation sequence infos that compose this facial expression.`BlendAlpha``number`Blend alpha controlling how strongly this facial expression is applied (0.0 to 1.0). |
| `BlendAlpha``number`Blend alpha controlling how strongly this facial expression is applied (0.0 to 1.0). |
