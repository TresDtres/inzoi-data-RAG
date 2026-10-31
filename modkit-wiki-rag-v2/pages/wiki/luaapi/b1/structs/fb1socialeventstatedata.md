---
document_id: "1ea04971246992b6350fef2d1d1ae6633fa838592daa624d5ffc578baf27c152"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1socialeventstatedata"
title: "FB1SocialEventStateData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:31+00:00"
content_sha256: "abc306b2866860ad2a2fff244a9582e4af39994701b88cc131c0ee3afd4e5311"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1socialeventstatedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the full runtime state of a social event, including timing, actions, and scenario flags.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`CustomEventName``string`A custom display name for this event instance, if specified by the player.`EventEndTime``integer`The in-game end time of this event as a Unix timestamp.`EventStartTime``integer`The in-game start time of this event as a Unix timestamp.`IsScenarioFlag``boolean`Whether this event is currently running a scripted scenario.`NormalActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of normal action IDs to their current state data.`ScenarioActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of scenario action IDs to their current state data.`SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| --- |
| `CustomEventName``string`A custom display name for this event instance, if specified by the player.`EventEndTime``integer`The in-game end time of this event as a Unix timestamp.`EventStartTime``integer`The in-game start time of this event as a Unix timestamp.`IsScenarioFlag``boolean`Whether this event is currently running a scripted scenario.`NormalActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of normal action IDs to their current state data.`ScenarioActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of scenario action IDs to their current state data.`SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| `EventEndTime``integer`The in-game end time of this event as a Unix timestamp.`EventStartTime``integer`The in-game start time of this event as a Unix timestamp.`IsScenarioFlag``boolean`Whether this event is currently running a scripted scenario.`NormalActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of normal action IDs to their current state data.`ScenarioActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of scenario action IDs to their current state data.`SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| `EventStartTime``integer`The in-game start time of this event as a Unix timestamp.`IsScenarioFlag``boolean`Whether this event is currently running a scripted scenario.`NormalActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of normal action IDs to their current state data.`ScenarioActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of scenario action IDs to their current state data.`SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| `IsScenarioFlag``boolean`Whether this event is currently running a scripted scenario.`NormalActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of normal action IDs to their current state data.`ScenarioActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of scenario action IDs to their current state data.`SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| `NormalActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of normal action IDs to their current state data.`ScenarioActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of scenario action IDs to their current state data.`SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| `ScenarioActionStateDatas``table<string, FB1SocialEventActionStateData>`The map of scenario action IDs to their current state data.`SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| `SiteId``string`The site ID where this social event is taking place.`SocialEventDtId``string`The data table ID of the social event template being played. |
| `SocialEventDtId``string`The data table ID of the social event template being played. |
