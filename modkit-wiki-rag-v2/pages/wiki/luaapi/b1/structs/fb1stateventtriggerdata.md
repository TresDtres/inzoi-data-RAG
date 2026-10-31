---
document_id: "58863b8ae42c4deaffc19720ce40db5235e3d2e2e52fcdfe54f9caccde7481d2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1stateventtriggerdata"
title: "FB1StatEventTriggerData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:35+00:00"
content_sha256: "aee01f01971a1c8e08727cc372b42868e634de5205d71a014bea315bc6464660"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1stateventtriggerdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the trigger data for a stat-based event, including the stat range, probability, and event timing.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`EventTime``integer`The in-game time at which this event should fire.`MaxStat``integer`The maximum stat value at which this event can trigger.`MinStat``integer`The minimum stat value required to trigger this event.`Probability``number`The probability that this event triggers when conditions are met.`StatName``string`The ID of the stat that triggers this event. |
| --- |
| `EventTime``integer`The in-game time at which this event should fire.`MaxStat``integer`The maximum stat value at which this event can trigger.`MinStat``integer`The minimum stat value required to trigger this event.`Probability``number`The probability that this event triggers when conditions are met.`StatName``string`The ID of the stat that triggers this event. |
| `MaxStat``integer`The maximum stat value at which this event can trigger.`MinStat``integer`The minimum stat value required to trigger this event.`Probability``number`The probability that this event triggers when conditions are met.`StatName``string`The ID of the stat that triggers this event. |
| `MinStat``integer`The minimum stat value required to trigger this event.`Probability``number`The probability that this event triggers when conditions are met.`StatName``string`The ID of the stat that triggers this event. |
| `Probability``number`The probability that this event triggers when conditions are met.`StatName``string`The ID of the stat that triggers this event. |
| `StatName``string`The ID of the stat that triggers this event. |
