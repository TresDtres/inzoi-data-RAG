---
document_id: "a8671d24e686a5008c3bb9b77bdc9ec4f7a0e9ce01a8d73ed8e691cfb148f9b1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1milestone"
title: "FB1Milestone"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:27+00:00"
content_sha256: "56e63b4aab3eda98eb2fb7454a0068229e70e981e2b41e20f7fd131dcb63bee8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1milestone"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that stores runtime data for an achieved milestone. Tracks the milestone ID, the target entity, the target data table ID, and read status.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`AcquiredTime``integer`Game time (ticks) when this milestone was acquired.`MilestoneId``string`ID of the milestone definition this entry refers to.`TargetDtId``string`Data table row ID of the target (e.g., a company or school).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target associated with this milestone achievement.`bIsRead``boolean`Whether this milestone has been read/viewed in the UI. Used to control bluedot visibility. |
| --- |
| `AcquiredTime``integer`Game time (ticks) when this milestone was acquired.`MilestoneId``string`ID of the milestone definition this entry refers to.`TargetDtId``string`Data table row ID of the target (e.g., a company or school).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target associated with this milestone achievement.`bIsRead``boolean`Whether this milestone has been read/viewed in the UI. Used to control bluedot visibility. |
| `MilestoneId``string`ID of the milestone definition this entry refers to.`TargetDtId``string`Data table row ID of the target (e.g., a company or school).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target associated with this milestone achievement.`bIsRead``boolean`Whether this milestone has been read/viewed in the UI. Used to control bluedot visibility. |
| `TargetDtId``string`Data table row ID of the target (e.g., a company or school).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target associated with this milestone achievement.`bIsRead``boolean`Whether this milestone has been read/viewed in the UI. Used to control bluedot visibility. |
| `TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the target associated with this milestone achievement.`bIsRead``boolean`Whether this milestone has been read/viewed in the UI. Used to control bluedot visibility. |
| `bIsRead``boolean`Whether this milestone has been read/viewed in the UI. Used to control bluedot visibility. |
