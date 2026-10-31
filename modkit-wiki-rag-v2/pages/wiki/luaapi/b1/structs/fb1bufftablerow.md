---
document_id: "1eb3752378c13c48f2d28a32d76feeed4b36d885901385484010a64e4f68bd12"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1bufftablerow"
title: "FB1BuffTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:13+00:00"
content_sha256: "edd851f6268c245f5527318cc8426d5aec810250af590409e357c6fb035a9cf6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1bufftablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row defining a buff, combining basic info, display info, and script lists for add, cancel, finish, tick, and interval events.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (7)

| NameTypeDescription`AddScriptIdList``string[]`Scripts Script IDs executed when this buff is added.`BuffBasicInfo`[`FB1BuffBasicInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffbasicinfo)Core configuration data for this buff.`BuffDisplayInfo`[`FB1BuffDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffdisplayinfo)Display and UI configuration for this buff.`CancelScriptIdList``string[]`Script IDs executed when this buff is cancelled.`FinishScriptIdList``string[]`Script IDs executed when this buff finishes normally.`IntervalScriptIdList``string[]`Script IDs executed at the configured script interval while this buff is active.`TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
| --- |
| `AddScriptIdList``string[]`Scripts Script IDs executed when this buff is added.`BuffBasicInfo`[`FB1BuffBasicInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffbasicinfo)Core configuration data for this buff.`BuffDisplayInfo`[`FB1BuffDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffdisplayinfo)Display and UI configuration for this buff.`CancelScriptIdList``string[]`Script IDs executed when this buff is cancelled.`FinishScriptIdList``string[]`Script IDs executed when this buff finishes normally.`IntervalScriptIdList``string[]`Script IDs executed at the configured script interval while this buff is active.`TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
| `BuffBasicInfo`[`FB1BuffBasicInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffbasicinfo)Core configuration data for this buff.`BuffDisplayInfo`[`FB1BuffDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffdisplayinfo)Display and UI configuration for this buff.`CancelScriptIdList``string[]`Script IDs executed when this buff is cancelled.`FinishScriptIdList``string[]`Script IDs executed when this buff finishes normally.`IntervalScriptIdList``string[]`Script IDs executed at the configured script interval while this buff is active.`TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
| `BuffDisplayInfo`[`FB1BuffDisplayInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1buffdisplayinfo)Display and UI configuration for this buff.`CancelScriptIdList``string[]`Script IDs executed when this buff is cancelled.`FinishScriptIdList``string[]`Script IDs executed when this buff finishes normally.`IntervalScriptIdList``string[]`Script IDs executed at the configured script interval while this buff is active.`TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
| `CancelScriptIdList``string[]`Script IDs executed when this buff is cancelled.`FinishScriptIdList``string[]`Script IDs executed when this buff finishes normally.`IntervalScriptIdList``string[]`Script IDs executed at the configured script interval while this buff is active.`TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
| `FinishScriptIdList``string[]`Script IDs executed when this buff finishes normally.`IntervalScriptIdList``string[]`Script IDs executed at the configured script interval while this buff is active.`TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
| `IntervalScriptIdList``string[]`Script IDs executed at the configured script interval while this buff is active.`TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
| `TickScriptIdList``string[]`Script IDs executed each tick while this buff is active. |
