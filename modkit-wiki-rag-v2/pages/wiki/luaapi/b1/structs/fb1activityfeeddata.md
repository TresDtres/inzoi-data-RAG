---
document_id: "df3fadfb682e3475191dff60424792bfba93b6a43471ff3afa1f9d1578595dd0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeeddata"
title: "FB1ActivityFeedData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "d07ab955baec6e7c8f9066a381732e5e8c55d766b93b6680604431915f1a981c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1activityfeeddata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Persisted data for a single activity feed entry, used for saving and network transmission.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`ActivityFeedDtId``string`Data table ID of the activity feed template used by this entry.`FeedTimeTicks``integer`Server tick timestamp when this feed entry was generated.`Id`[`FB1ActivityFeedId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedid)Unique identifier for this feed entry instance.`OtherEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the other character involved in the event.`OtherEntityNameBackup``string`Backup display name for the other entity (used if entity is unavailable).`ParamContext`[`FB1ActivityFeedParamContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedparamcontext)Optional context for title and description parameters.`ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| --- |
| `ActivityFeedDtId``string`Data table ID of the activity feed template used by this entry.`FeedTimeTicks``integer`Server tick timestamp when this feed entry was generated.`Id`[`FB1ActivityFeedId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedid)Unique identifier for this feed entry instance.`OtherEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the other character involved in the event.`OtherEntityNameBackup``string`Backup display name for the other entity (used if entity is unavailable).`ParamContext`[`FB1ActivityFeedParamContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedparamcontext)Optional context for title and description parameters.`ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| `FeedTimeTicks``integer`Server tick timestamp when this feed entry was generated.`Id`[`FB1ActivityFeedId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedid)Unique identifier for this feed entry instance.`OtherEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the other character involved in the event.`OtherEntityNameBackup``string`Backup display name for the other entity (used if entity is unavailable).`ParamContext`[`FB1ActivityFeedParamContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedparamcontext)Optional context for title and description parameters.`ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| `Id`[`FB1ActivityFeedId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedid)Unique identifier for this feed entry instance.`OtherEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the other character involved in the event.`OtherEntityNameBackup``string`Backup display name for the other entity (used if entity is unavailable).`ParamContext`[`FB1ActivityFeedParamContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedparamcontext)Optional context for title and description parameters.`ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| `OtherEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the other character involved in the event.`OtherEntityNameBackup``string`Backup display name for the other entity (used if entity is unavailable).`ParamContext`[`FB1ActivityFeedParamContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedparamcontext)Optional context for title and description parameters.`ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| `OtherEntityNameBackup``string`Backup display name for the other entity (used if entity is unavailable).`ParamContext`[`FB1ActivityFeedParamContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedparamcontext)Optional context for title and description parameters.`ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| `ParamContext`[`FB1ActivityFeedParamContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activityfeedparamcontext)Optional context for title and description parameters.`ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| `ReceiverEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the character who received this feed entry.`ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
| `ReceiverEntityNameBackup``string`Backup display name for the receiver entity (used if entity is unavailable). |
