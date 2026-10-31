---
document_id: "23b231d09337b37b1f50b97fb83aec142a45ed4f7de5bfd70451760ff026018c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1movietablerow"
title: "FB1MovieTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:32+00:00"
content_sha256: "3e7b98d5cdd7ee94e71ae4994709b60d7bdfe5d5fb5eff466ea37bd9e52377dc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1movietablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining a movie entry with its media source, buff schedule, and playback duration. Supports both interval-based (in-game time) and static (real-time) buff application during playback.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`DurationInGameMinutes``integer`Total duration of this movie in in-game minutes.`IntervalBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at in-game minute intervals during movie playback.`MediaSource``UMediaSource`Soft reference to the media source asset played for this movie entry.`OnFinishAllAudienceScriptId``string`Script executed for all-time audiences (ever watched) when the movie finishes.`OnFinishCurrentAudienceScriptId``string`Script executed for current audiences (still watching) when the movie finishes.`StaticBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at real-time second offsets during movie playback. |
| --- |
| `DurationInGameMinutes``integer`Total duration of this movie in in-game minutes.`IntervalBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at in-game minute intervals during movie playback.`MediaSource``UMediaSource`Soft reference to the media source asset played for this movie entry.`OnFinishAllAudienceScriptId``string`Script executed for all-time audiences (ever watched) when the movie finishes.`OnFinishCurrentAudienceScriptId``string`Script executed for current audiences (still watching) when the movie finishes.`StaticBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at real-time second offsets during movie playback. |
| `IntervalBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at in-game minute intervals during movie playback.`MediaSource``UMediaSource`Soft reference to the media source asset played for this movie entry.`OnFinishAllAudienceScriptId``string`Script executed for all-time audiences (ever watched) when the movie finishes.`OnFinishCurrentAudienceScriptId``string`Script executed for current audiences (still watching) when the movie finishes.`StaticBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at real-time second offsets during movie playback. |
| `MediaSource``UMediaSource`Soft reference to the media source asset played for this movie entry.`OnFinishAllAudienceScriptId``string`Script executed for all-time audiences (ever watched) when the movie finishes.`OnFinishCurrentAudienceScriptId``string`Script executed for current audiences (still watching) when the movie finishes.`StaticBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at real-time second offsets during movie playback. |
| `OnFinishAllAudienceScriptId``string`Script executed for all-time audiences (ever watched) when the movie finishes.`OnFinishCurrentAudienceScriptId``string`Script executed for current audiences (still watching) when the movie finishes.`StaticBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at real-time second offsets during movie playback. |
| `OnFinishCurrentAudienceScriptId``string`Script executed for current audiences (still watching) when the movie finishes.`StaticBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at real-time second offsets during movie playback. |
| `StaticBuffInfo``FB1MovieBuffInfo[]`List of buffs applied at real-time second offsets during movie playback. |
