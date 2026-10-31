---
document_id: "c1b8e654cb199ca620d6c5b6b0dca4a438cdf355005ee6d15822f61b40a05587"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap"
title: "FB1MobileMessageListBySystemMap"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:54+00:00"
content_sha256: "45e931c32d3c033331c5e5b9e096d60810372532da5aa47529fad9960d3c952a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/fb1mobilemessagelistbysystemmap"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores all mobile message conversation threads keyed by system sender ID. Used for message threads where the sender is a system entity rather than a character.

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems` |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems` |
| EnvironmentB1 - PresentationCategory`systems` |
| Category`systems` |

# Properties (1)

| NameTypeDescription`MobileMessageListMap``table<string, FB1MobileMessageList>`Map from system sender ID to the conversation thread with that system entity. |
| --- |
| `MobileMessageListMap``table<string, FB1MobileMessageList>`Map from system sender ID to the conversation thread with that system entity. |
