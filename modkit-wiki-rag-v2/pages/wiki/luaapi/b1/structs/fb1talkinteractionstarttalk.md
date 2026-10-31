---
document_id: "fcf145d42dc115bf89def7c9c5206ecd42c583e62bb0b45cefa523469af69ed8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1talkinteractionstarttalk"
title: "FB1TalkInteractionStartTalk"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:37+00:00"
content_sha256: "d17137483b1c619a133b058a3e395780234b69f1e54353bd62b7d34309518cc7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1talkinteractionstarttalk"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines greeting (start talk) configuration for talk interactions. Specifies which interaction bag tags and talk nature types to display at the start of a conversation.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`PickAllTalkNatureList``EB1TalkNature[]`List of EB1TalkNature types for which all matching items are displayed in the greeting.`PickAllTalkNatureListMaxCount``integer`Maximum number of greeting items to display from PickAllTalkNatureList. Set to -1 for no limit.`RandomPickInteractionBagTagList``string[]`List of InteractionBag tags to randomly display in the greeting. One item is randomly picked per tag.`RandomPickTalkNatureList``EB1TalkNature[]`List of EB1TalkNature types to randomly display in the greeting. One item is randomly picked per type. |
| --- |
| `PickAllTalkNatureList``EB1TalkNature[]`List of EB1TalkNature types for which all matching items are displayed in the greeting.`PickAllTalkNatureListMaxCount``integer`Maximum number of greeting items to display from PickAllTalkNatureList. Set to -1 for no limit.`RandomPickInteractionBagTagList``string[]`List of InteractionBag tags to randomly display in the greeting. One item is randomly picked per tag.`RandomPickTalkNatureList``EB1TalkNature[]`List of EB1TalkNature types to randomly display in the greeting. One item is randomly picked per type. |
| `PickAllTalkNatureListMaxCount``integer`Maximum number of greeting items to display from PickAllTalkNatureList. Set to -1 for no limit.`RandomPickInteractionBagTagList``string[]`List of InteractionBag tags to randomly display in the greeting. One item is randomly picked per tag.`RandomPickTalkNatureList``EB1TalkNature[]`List of EB1TalkNature types to randomly display in the greeting. One item is randomly picked per type. |
| `RandomPickInteractionBagTagList``string[]`List of InteractionBag tags to randomly display in the greeting. One item is randomly picked per tag.`RandomPickTalkNatureList``EB1TalkNature[]`List of EB1TalkNature types to randomly display in the greeting. One item is randomly picked per type. |
| `RandomPickTalkNatureList``EB1TalkNature[]`List of EB1TalkNature types to randomly display in the greeting. One item is randomly picked per type. |
