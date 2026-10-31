---
document_id: "5104fd1a7958dc0edc36594431ec61f35d7b9457a1b2b70c9e89ed641058895e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventsettingparam"
title: "FB1SiteEventSettingParam"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:27+00:00"
content_sha256: "92c7881536991845d4aa8fcb3599ed5ccc3b73df5ee9881a78958da8888500a7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1siteeventsettingparam"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Parameters used to create and configure a site event instance at runtime.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (11)

| NameTypeDescription`CareerContext`[`FB1SiteEventCareerContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventcareercontext)The career context associated with this event (e.g., for work-related events).`CustomEventName``string`A custom name entered by the player for this event instance.`EventEndTime``integer`The game time when this event is scheduled to end.`EventStartTime``integer`The game time when this event is scheduled to start.`HostEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character hosting this event.`RepeatingSubscriptionId``integer`The weekly repeating subscription this event instance belongs to, or 0 for a one-off event. Carried through to the schedule.`ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| --- |
| `CareerContext`[`FB1SiteEventCareerContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1siteeventcareercontext)The career context associated with this event (e.g., for work-related events).`CustomEventName``string`A custom name entered by the player for this event instance.`EventEndTime``integer`The game time when this event is scheduled to end.`EventStartTime``integer`The game time when this event is scheduled to start.`HostEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character hosting this event.`RepeatingSubscriptionId``integer`The weekly repeating subscription this event instance belongs to, or 0 for a one-off event. Carried through to the schedule.`ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `CustomEventName``string`A custom name entered by the player for this event instance.`EventEndTime``integer`The game time when this event is scheduled to end.`EventStartTime``integer`The game time when this event is scheduled to start.`HostEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character hosting this event.`RepeatingSubscriptionId``integer`The weekly repeating subscription this event instance belongs to, or 0 for a one-off event. Carried through to the schedule.`ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `EventEndTime``integer`The game time when this event is scheduled to end.`EventStartTime``integer`The game time when this event is scheduled to start.`HostEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character hosting this event.`RepeatingSubscriptionId``integer`The weekly repeating subscription this event instance belongs to, or 0 for a one-off event. Carried through to the schedule.`ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `EventStartTime``integer`The game time when this event is scheduled to start.`HostEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character hosting this event.`RepeatingSubscriptionId``integer`The weekly repeating subscription this event instance belongs to, or 0 for a one-off event. Carried through to the schedule.`ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `HostEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the character hosting this event.`RepeatingSubscriptionId``integer`The weekly repeating subscription this event instance belongs to, or 0 for a one-off event. Carried through to the schedule.`ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `RepeatingSubscriptionId``integer`The weekly repeating subscription this event instance belongs to, or 0 for a one-off event. Carried through to the schedule.`ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `ScheduleInfoId``string`The schedule info ID associated with this event.`SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `SiteEventTemplateId``string`The data table ID of the site event template this event is based on.`SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `SiteId``string`The ID of the site where this event takes place.`StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `StageRoleDatas``FB1SiteEventStageRoleData[]`The list of pre-assigned role data for this event's stages.`bIsPlayerCreated``boolean` |
| `bIsPlayerCreated``boolean` |
