---
document_id: "990d94aec36d17a934f954e5f80f52a8bd0312b0de9c9bdf358dc851678702ac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1objectlifecyclescriptstablerow"
title: "FB1ObjectLifecycleScriptsTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:39:43+00:00"
content_sha256: "58b14b92905569b7b02269bc4c483186753f7872826d4dff0335e42bf434182e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/scripts/fb1objectlifecyclescriptstablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row associating lifecycle scripts, a general effect ID, and a trait description with a game object. Defines how an object behaves throughout its interaction lifecycle via scripts and effects.

# Metadata

| FieldValueKind`script`EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`script`EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`ObjectGeneralEffectId``string`ID referencing the general effect table row applied during this object's lifecycle.`ObjectTraitDescription``string`Developer description of this object's trait for documentation and debugging purposes.`ScriptLifecycle`[`FB1ScriptLifecycle`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1scriptlifecycle)Script lifecycle data defining which scripts run at each interaction phase. |
| --- |
| `ObjectGeneralEffectId``string`ID referencing the general effect table row applied during this object's lifecycle.`ObjectTraitDescription``string`Developer description of this object's trait for documentation and debugging purposes.`ScriptLifecycle`[`FB1ScriptLifecycle`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1scriptlifecycle)Script lifecycle data defining which scripts run at each interaction phase. |
| `ObjectTraitDescription``string`Developer description of this object's trait for documentation and debugging purposes.`ScriptLifecycle`[`FB1ScriptLifecycle`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1scriptlifecycle)Script lifecycle data defining which scripts run at each interaction phase. |
| `ScriptLifecycle`[`FB1ScriptLifecycle`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1scriptlifecycle)Script lifecycle data defining which scripts run at each interaction phase. |
