---
document_id: "ca3a8350d8c8fa522f27ca34274418122a9893b183fcffc2d33db1e597de743d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1temperaturerangeconfig"
title: "FB1TemperatureRangeConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:38+00:00"
content_sha256: "1a190f26478035e77d0d28a713cfda64b321ab4513f8d1e35b99e4c69c95a89b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1temperaturerangeconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Maps a temperature range enum to minimum and maximum temperature values, and configures a post-process volume blend weight for that range.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`MaxBlendWeight``number`Maximum blend weight applied to the post-process volume at the high end of this range, clamped 0-1.`MaxTemperature``integer`Maximum temperature value (inclusive) for this range.`MinBlendWeight``number`Minimum blend weight applied to the post-process volume at the low end of this range, clamped 0-1.`MinTemperature``integer`Minimum temperature value (inclusive) for this range.`PostVolumeTag``string`Tag identifying the post-process volume affected by this temperature range.`TemperatureRange`[`EB1TemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperaturerange)Enum identifier for this temperature range. |
| --- |
| `MaxBlendWeight``number`Maximum blend weight applied to the post-process volume at the high end of this range, clamped 0-1.`MaxTemperature``integer`Maximum temperature value (inclusive) for this range.`MinBlendWeight``number`Minimum blend weight applied to the post-process volume at the low end of this range, clamped 0-1.`MinTemperature``integer`Minimum temperature value (inclusive) for this range.`PostVolumeTag``string`Tag identifying the post-process volume affected by this temperature range.`TemperatureRange`[`EB1TemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperaturerange)Enum identifier for this temperature range. |
| `MaxTemperature``integer`Maximum temperature value (inclusive) for this range.`MinBlendWeight``number`Minimum blend weight applied to the post-process volume at the low end of this range, clamped 0-1.`MinTemperature``integer`Minimum temperature value (inclusive) for this range.`PostVolumeTag``string`Tag identifying the post-process volume affected by this temperature range.`TemperatureRange`[`EB1TemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperaturerange)Enum identifier for this temperature range. |
| `MinBlendWeight``number`Minimum blend weight applied to the post-process volume at the low end of this range, clamped 0-1.`MinTemperature``integer`Minimum temperature value (inclusive) for this range.`PostVolumeTag``string`Tag identifying the post-process volume affected by this temperature range.`TemperatureRange`[`EB1TemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperaturerange)Enum identifier for this temperature range. |
| `MinTemperature``integer`Minimum temperature value (inclusive) for this range.`PostVolumeTag``string`Tag identifying the post-process volume affected by this temperature range.`TemperatureRange`[`EB1TemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperaturerange)Enum identifier for this temperature range. |
| `PostVolumeTag``string`Tag identifying the post-process volume affected by this temperature range.`TemperatureRange`[`EB1TemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperaturerange)Enum identifier for this temperature range. |
| `TemperatureRange`[`EB1TemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperaturerange)Enum identifier for this temperature range. |
