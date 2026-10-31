---
document_id: "ba67e4488ce297422f8418ea3ac68e4a1109afce40f9c598c93859ff43d742af"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1messageanswerreplyset"
title: "B1MessageAnswerReplySet"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:34+00:00"
content_sha256: "e16d1cf66c6d72ec208abf77885db1a6522830fc94a2d9bf5d7769ed8a450d30"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1messageanswerreplyset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- A set of answer texts and their corresponding reply texts for a specific response condition. * Used within send message table rows to define what answer options and replies are available.

| PropertyTypeDescriptionMetadataListKeyFStringUnique list key identifying this answer-reply set within its parent array.Category: B1MessageAnswerReplySetAnswerConditionIdFNameCondition ID that must be satisfied for this answer set to be available; NAME_None means it is the default.Category: B1MessageAnswerReplySet Foreign: Condition_MobileMessage.IdAnswerStrIdsTArrayArray of answer string entries available for this response set.Category: B1MessageAnswerReplySetAnswerReplyStrIdsTArrayArray of reply string entries sent in response to the chosen answer.Category: B1MessageAnswerReplySet |
| --- |
| ListKeyFStringUnique list key identifying this answer-reply set within its parent array.Category: B1MessageAnswerReplySetAnswerConditionIdFNameCondition ID that must be satisfied for this answer set to be available; NAME_None means it is the default.Category: B1MessageAnswerReplySet Foreign: Condition_MobileMessage.IdAnswerStrIdsTArrayArray of answer string entries available for this response set.Category: B1MessageAnswerReplySetAnswerReplyStrIdsTArrayArray of reply string entries sent in response to the chosen answer.Category: B1MessageAnswerReplySet |
| AnswerConditionIdFNameCondition ID that must be satisfied for this answer set to be available; NAME_None means it is the default.Category: B1MessageAnswerReplySet Foreign: Condition_MobileMessage.IdAnswerStrIdsTArrayArray of answer string entries available for this response set.Category: B1MessageAnswerReplySetAnswerReplyStrIdsTArrayArray of reply string entries sent in response to the chosen answer.Category: B1MessageAnswerReplySet |
| AnswerStrIdsTArrayArray of answer string entries available for this response set.Category: B1MessageAnswerReplySetAnswerReplyStrIdsTArrayArray of reply string entries sent in response to the chosen answer.Category: B1MessageAnswerReplySet |
| AnswerReplyStrIdsTArrayArray of reply string entries sent in response to the chosen answer.Category: B1MessageAnswerReplySet |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMessage[FB1MessageSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1messagesetting)[FB1MessageString](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1messagestring)
