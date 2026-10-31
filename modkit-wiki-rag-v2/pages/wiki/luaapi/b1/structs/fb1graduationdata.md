---
document_id: "533b6fdfc285b02047ff9384b78250db07af2866f1cb1e29e648656517aabcce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1graduationdata"
title: "FB1GraduationData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:06+00:00"
content_sha256: "81080c6a1e5bd5ca3f4bc72453284e7a3f6fa9db1eddaebd074062e1c62eb4e5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1graduationdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Graduation ceremony runtime data. Triggered on growth detection, held the following Sunday at 18:00, and reset once the event ends.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`PendingGraduateIds``FB1EntityId[]`The entity IDs of students pending graduation at this ceremony.`SiteEventId`[`FB1SiteEventId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventid)The reserved graduation SiteEvent; Invalid when no ceremony is scheduled.`ValedictorianId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the valedictorian (top graduate); Invalid if none. |
| --- |
| `PendingGraduateIds``FB1EntityId[]`The entity IDs of students pending graduation at this ceremony.`SiteEventId`[`FB1SiteEventId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventid)The reserved graduation SiteEvent; Invalid when no ceremony is scheduled.`ValedictorianId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the valedictorian (top graduate); Invalid if none. |
| `SiteEventId`[`FB1SiteEventId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventid)The reserved graduation SiteEvent; Invalid when no ceremony is scheduled.`ValedictorianId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the valedictorian (top graduate); Invalid if none. |
| `ValedictorianId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the valedictorian (top graduate); Invalid if none. |
