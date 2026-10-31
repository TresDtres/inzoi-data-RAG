---
document_id: "93ba0fabb97f2fdc6c1c132c7287c9755087b93e9b29c3184a94005297bf65ba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1rumoreventtablerow"
title: "FB1RumorEventTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:17+00:00"
content_sha256: "3afd369fd9f8cdfd51ddd5952311f45c38866eb8926ed8ff4ad670431b53c6c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1rumoreventtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DataTable row defining a rumor event, including its type and optional custom message.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`CustomMessageId``string`The custom message ID sent when this rumor event fires (for custom-type events).`TargetInt``integer`An integer parameter used as a threshold or target value for this event.`Type`[`EB1RumorEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1rumoreventtype)The type of this rumor event (positive, negative, expire, or custom). |
| --- |
| `CustomMessageId``string`The custom message ID sent when this rumor event fires (for custom-type events).`TargetInt``integer`An integer parameter used as a threshold or target value for this event.`Type`[`EB1RumorEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1rumoreventtype)The type of this rumor event (positive, negative, expire, or custom). |
| `TargetInt``integer`An integer parameter used as a threshold or target value for this event.`Type`[`EB1RumorEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1rumoreventtype)The type of this rumor event (positive, negative, expire, or custom). |
| `Type`[`EB1RumorEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1rumoreventtype)The type of this rumor event (positive, negative, expire, or custom). |
