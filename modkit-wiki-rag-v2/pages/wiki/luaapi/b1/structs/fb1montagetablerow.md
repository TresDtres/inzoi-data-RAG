---
document_id: "925b60760022b90ea7e5f37bbd09f1d63b0616870dc3a0fda8c1a29250bbf17d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1montagetablerow"
title: "FB1MontageTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:32+00:00"
content_sha256: "0c6b3ebfba1bbe07c9e6b14ba7f76cfeaf42aaadbd5633a9385b493b3b64e306"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1montagetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining the full configuration of an animation montage. Includes timing, sections, animation tracks, and notify events loaded from the data table.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (10)

| NameTypeDescription`AnimTracks``FB1AnimTrack[]`Array of animation tracks, each targeting a slot and containing animation segments.`BlendInTime``number`Time in seconds over which the montage blends in when starting.`BlendOutTime``number`Time in seconds over which the montage blends out when stopping.`GroupName``string`Group name used to categorize this montage with related montages.`LoopPlayLength``number`Duration of the looping portion of the montage in seconds.`RateScale``number`Playback rate scale applied to the entire montage.`Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| --- |
| `AnimTracks``FB1AnimTrack[]`Array of animation tracks, each targeting a slot and containing animation segments.`BlendInTime``number`Time in seconds over which the montage blends in when starting.`BlendOutTime``number`Time in seconds over which the montage blends out when stopping.`GroupName``string`Group name used to categorize this montage with related montages.`LoopPlayLength``number`Duration of the looping portion of the montage in seconds.`RateScale``number`Playback rate scale applied to the entire montage.`Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `BlendInTime``number`Time in seconds over which the montage blends in when starting.`BlendOutTime``number`Time in seconds over which the montage blends out when stopping.`GroupName``string`Group name used to categorize this montage with related montages.`LoopPlayLength``number`Duration of the looping portion of the montage in seconds.`RateScale``number`Playback rate scale applied to the entire montage.`Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `BlendOutTime``number`Time in seconds over which the montage blends out when stopping.`GroupName``string`Group name used to categorize this montage with related montages.`LoopPlayLength``number`Duration of the looping portion of the montage in seconds.`RateScale``number`Playback rate scale applied to the entire montage.`Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `GroupName``string`Group name used to categorize this montage with related montages.`LoopPlayLength``number`Duration of the looping portion of the montage in seconds.`RateScale``number`Playback rate scale applied to the entire montage.`Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `LoopPlayLength``number`Duration of the looping portion of the montage in seconds.`RateScale``number`Playback rate scale applied to the entire montage.`Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `RateScale``number`Playback rate scale applied to the entire montage.`Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `Sections``FB1AnimSection[]`Array of named sections defining the playback structure of this montage.`TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `TotalPlayLength``number`Total playback duration of the montage in seconds.`bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `bEnableAutoBlendOut``boolean`Whether the montage automatically blends out when it reaches its end.`bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
| `bHasRootAnim``boolean`Whether this montage contains root motion animation data. |
