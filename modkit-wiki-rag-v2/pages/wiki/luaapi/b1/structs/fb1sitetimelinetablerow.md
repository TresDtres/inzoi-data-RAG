---
document_id: "e0d4ff2e0310055bf32e28fb816d3baa35ad1af8e217682db2ed30423f75f99b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitetimelinetablerow"
title: "FB1SiteTimelineTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:29+00:00"
content_sha256: "d561a78d6d8c658f5bbbaab20dc8d978573fb233e9bf7bed9271e07dc0166507"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1sitetimelinetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining site-level timeline data including NPC event schedules and site enter/leave scripts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`SiteEnterScriptIdList``string[]`Script IDs executed when a character enters the site.`SiteLeaveScriptIdList``string[]`Script IDs executed when a character leaves the site.`SiteNpcEvent``FB1SiteSchedule[]`List of site NPC event schedules assigned to this site timeline. |
| --- |
| `SiteEnterScriptIdList``string[]`Script IDs executed when a character enters the site.`SiteLeaveScriptIdList``string[]`Script IDs executed when a character leaves the site.`SiteNpcEvent``FB1SiteSchedule[]`List of site NPC event schedules assigned to this site timeline. |
| `SiteLeaveScriptIdList``string[]`Script IDs executed when a character leaves the site.`SiteNpcEvent``FB1SiteSchedule[]`List of site NPC event schedules assigned to this site timeline. |
| `SiteNpcEvent``FB1SiteSchedule[]`List of site NPC event schedules assigned to this site timeline. |
