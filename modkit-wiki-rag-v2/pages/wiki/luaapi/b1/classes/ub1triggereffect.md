---
document_id: "ff4b7df90ae1e54fb9d14b7d72aca1d23aa534f7951238514197d56b6c591082"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1triggereffect"
title: "UB1TriggerEffect"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:27+00:00"
content_sha256: "dca7333c545e8118b5b97a61919dbcaed7d1530c53c1a89a0c37712d14d2a870"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1triggereffect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Intermediate abstract class for adaptive trigger effects. Inherits UB1DeviceEffect and defines trigger-specific properties (AffectedTriggers). Override ApplyEffect/ResetEffect to pass trigger properties to the hardware.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1DeviceEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1deviceeffect) |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1DeviceEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1deviceeffect) |
| EnvironmentB1 - PresentationCategory`classes`Extends[`UB1DeviceEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1deviceeffect) |
| Category`classes`Extends[`UB1DeviceEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1deviceeffect) |
| Extends[`UB1DeviceEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1deviceeffect) |

# Properties (1)

| NameTypeDescription`AffectedTriggers`[`EB1TriggerMask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggermask)Triggers the effect applies to (left/right/both). |
| --- |
| `AffectedTriggers`[`EB1TriggerMask`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1triggermask)Triggers the effect applies to (left/right/both). |
