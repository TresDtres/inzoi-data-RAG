---
document_id: "d4ca56e40052cafe2c0b17fcad2173cd7b3fa0420fb58ad232d395b4c3772694"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activecalendareventschedule"
title: "FB1ActiveCalendarEventSchedule"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "94881bc36552034c3ec8f61c2658f54b7857a0047a3dddc5a1c5b0d5f8af662b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1activecalendareventschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents an active script schedule entry for a calendar event at runtime, tracking the associated schedule, last play time, and preload request status.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`LastPlayTime``FDateTime`Last time the script was played, used for interval checking.`Schedule`[`FB1CalendarEventScriptSchedule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1calendareventscriptschedule)The script schedule configuration for this active entry.`bPreloadRequested``boolean`Whether a preload request has been issued to prevent duplicate requests. |
| --- |
| `LastPlayTime``FDateTime`Last time the script was played, used for interval checking.`Schedule`[`FB1CalendarEventScriptSchedule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1calendareventscriptschedule)The script schedule configuration for this active entry.`bPreloadRequested``boolean`Whether a preload request has been issued to prevent duplicate requests. |
| `Schedule`[`FB1CalendarEventScriptSchedule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1calendareventscriptschedule)The script schedule configuration for this active entry.`bPreloadRequested``boolean`Whether a preload request has been issued to prevent duplicate requests. |
| `bPreloadRequested``boolean`Whether a preload request has been issued to prevent duplicate requests. |
