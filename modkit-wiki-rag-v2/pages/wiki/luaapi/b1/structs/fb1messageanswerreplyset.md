---
document_id: "c6babef7b734b1d0860109e2adc6fba9d7a19d2fa31fceebf85cd074bacb6243"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1messageanswerreplyset"
title: "FB1MessageAnswerReplySet"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:27+00:00"
content_sha256: "06b1bb9e7b8a3dbae626d6359a8bddeb4b747fe9b05edcd39398dd25b4b429dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1messageanswerreplyset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A set of answer texts and their corresponding reply texts for a specific response condition. Used within send message table rows to define what answer options and replies are available.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AnswerConditionId``string`Condition ID that must be satisfied for this answer set to be available; NAME_None means it is the default. The default reply set must exist.`AnswerReplyStrIds``FB1MessageString[]`Array of reply string entries sent in response to the chosen answer.`AnswerStrIds``FB1MessageString[]`Array of answer string entries available for this response set.`ListKey``string`Unique list key identifying this answer-reply set within its parent array. |
| --- |
| `AnswerConditionId``string`Condition ID that must be satisfied for this answer set to be available; NAME_None means it is the default. The default reply set must exist.`AnswerReplyStrIds``FB1MessageString[]`Array of reply string entries sent in response to the chosen answer.`AnswerStrIds``FB1MessageString[]`Array of answer string entries available for this response set.`ListKey``string`Unique list key identifying this answer-reply set within its parent array. |
| `AnswerReplyStrIds``FB1MessageString[]`Array of reply string entries sent in response to the chosen answer.`AnswerStrIds``FB1MessageString[]`Array of answer string entries available for this response set.`ListKey``string`Unique list key identifying this answer-reply set within its parent array. |
| `AnswerStrIds``FB1MessageString[]`Array of answer string entries available for this response set.`ListKey``string`Unique list key identifying this answer-reply set within its parent array. |
| `ListKey``string`Unique list key identifying this answer-reply set within its parent array. |
