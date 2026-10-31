---
document_id: "0e3f3193ca2c24b2afee76cfeacfcf0d0cc5c0cabb1098b86c760fbf09e8803e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1choicecardtextargument"
title: "FB1ChoiceCardTextArgument"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:25+00:00"
content_sha256: "b35ced855c6f8f4d231ea853d3c328c4c87f5b4333f1647e106a6924dfffd901"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1choicecardtextargument"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A single text argument for a choice card, containing a text ID and optional inner formatting arguments. Inner arguments are used to format the text before it is displayed.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`InnerArguments``table<string, string>`Optional inner format arguments applied to the text before display, keyed by argument name.`TextId``string`The string table key of the text to display for this argument. |
| --- |
| `InnerArguments``table<string, string>`Optional inner format arguments applied to the text before display, keyed by argument name.`TextId``string`The string table key of the text to display for this argument. |
| `TextId``string`The string table key of the text to display for this argument. |
