---
document_id: "e01427cfe7f6f25988c623a24097fa930ba5b1a5cda0caaae0a84430adda3c25"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1worldmissionchecker"
title: "FB1WorldMissionChecker"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:52+00:00"
content_sha256: "4f63ce3a492c21063a90bddb23fee9b20b1a08a67517863004de075b46f5a0fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1worldmissionchecker"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime checker for an entire world mission, aggregating condition checkers and tracking overall progress. Stores mission metadata such as repeat settings and check type alongside its condition checkers.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`CheckType`[`EB1WorldMissionCheckType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1worldmissionchecktype)Scope at which this world mission is evaluated (Character, Family, or World).`MissionConditions``FB1WorldMissionConditionChecker[]`Array of per-condition checkers tracking individual condition progress.`MissionDtId``string`Data table row ID of this world mission definition.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Runtime identifier of the world mission being tracked.`RepeatCount``integer`Maximum number of times this world mission can repeat.`bIsRepeat``boolean`Whether this world mission repeats after completion. |
| --- |
| `CheckType`[`EB1WorldMissionCheckType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1worldmissionchecktype)Scope at which this world mission is evaluated (Character, Family, or World).`MissionConditions``FB1WorldMissionConditionChecker[]`Array of per-condition checkers tracking individual condition progress.`MissionDtId``string`Data table row ID of this world mission definition.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Runtime identifier of the world mission being tracked.`RepeatCount``integer`Maximum number of times this world mission can repeat.`bIsRepeat``boolean`Whether this world mission repeats after completion. |
| `MissionConditions``FB1WorldMissionConditionChecker[]`Array of per-condition checkers tracking individual condition progress.`MissionDtId``string`Data table row ID of this world mission definition.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Runtime identifier of the world mission being tracked.`RepeatCount``integer`Maximum number of times this world mission can repeat.`bIsRepeat``boolean`Whether this world mission repeats after completion. |
| `MissionDtId``string`Data table row ID of this world mission definition.`MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Runtime identifier of the world mission being tracked.`RepeatCount``integer`Maximum number of times this world mission can repeat.`bIsRepeat``boolean`Whether this world mission repeats after completion. |
| `MissionId`[`FB1MissionId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionid)Runtime identifier of the world mission being tracked.`RepeatCount``integer`Maximum number of times this world mission can repeat.`bIsRepeat``boolean`Whether this world mission repeats after completion. |
| `RepeatCount``integer`Maximum number of times this world mission can repeat.`bIsRepeat``boolean`Whether this world mission repeats after completion. |
| `bIsRepeat``boolean`Whether this world mission repeats after completion. |
