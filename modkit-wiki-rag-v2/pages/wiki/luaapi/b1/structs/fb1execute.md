---
document_id: "b92731d9c15b01ba2e26aa581267781977edb918e8e2b8e889157871fba142d5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1execute"
title: "FB1Execute"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:47+00:00"
content_sha256: "9d27d802597be97b19b1c330debe90a1d9de4633abb991c034812cff0185ae63"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1execute"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a single execution command applied to a base object as part of script or interaction logic.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`BaseObject`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The base object (Self or Target) this execute command acts upon.`Command`[`EB1ExecuteType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1executetype)The execute command type that determines what action is performed.`F1``number`The first float parameter for this execute command (meaning depends on Command).`F2``number`The second float parameter for this execute command (meaning depends on Command).`Prob``number`The probability (0.0 to 1.0) that this execute command will fire.`S1``string`The first string parameter for this execute command (meaning depends on Command).`S2``string`The second string parameter for this execute command (meaning depends on Command). |
| --- |
| `BaseObject`[`EB1BaseObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1baseobject)The base object (Self or Target) this execute command acts upon.`Command`[`EB1ExecuteType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1executetype)The execute command type that determines what action is performed.`F1``number`The first float parameter for this execute command (meaning depends on Command).`F2``number`The second float parameter for this execute command (meaning depends on Command).`Prob``number`The probability (0.0 to 1.0) that this execute command will fire.`S1``string`The first string parameter for this execute command (meaning depends on Command).`S2``string`The second string parameter for this execute command (meaning depends on Command). |
| `Command`[`EB1ExecuteType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1executetype)The execute command type that determines what action is performed.`F1``number`The first float parameter for this execute command (meaning depends on Command).`F2``number`The second float parameter for this execute command (meaning depends on Command).`Prob``number`The probability (0.0 to 1.0) that this execute command will fire.`S1``string`The first string parameter for this execute command (meaning depends on Command).`S2``string`The second string parameter for this execute command (meaning depends on Command). |
| `F1``number`The first float parameter for this execute command (meaning depends on Command).`F2``number`The second float parameter for this execute command (meaning depends on Command).`Prob``number`The probability (0.0 to 1.0) that this execute command will fire.`S1``string`The first string parameter for this execute command (meaning depends on Command).`S2``string`The second string parameter for this execute command (meaning depends on Command). |
| `F2``number`The second float parameter for this execute command (meaning depends on Command).`Prob``number`The probability (0.0 to 1.0) that this execute command will fire.`S1``string`The first string parameter for this execute command (meaning depends on Command).`S2``string`The second string parameter for this execute command (meaning depends on Command). |
| `Prob``number`The probability (0.0 to 1.0) that this execute command will fire.`S1``string`The first string parameter for this execute command (meaning depends on Command).`S2``string`The second string parameter for this execute command (meaning depends on Command). |
| `S1``string`The first string parameter for this execute command (meaning depends on Command).`S2``string`The second string parameter for this execute command (meaning depends on Command). |
| `S2``string`The second string parameter for this execute command (meaning depends on Command). |
