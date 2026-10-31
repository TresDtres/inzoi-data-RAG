---
document_id: "4df657dd842e14f198516d66fd8a911e1d4d7468bc4d72f44f3df2f1cb9889ff"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1cocanvastownwidget"
title: "UB1CoCanvastownWidget"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:12+00:00"
content_sha256: "ac423f5e38cc7a3bbf37320b723af05de24fb943dd2c3726e8c08e7c6fed8756"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1cocanvastownwidget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Root UMG widget of the Canvastown /play page. In UMG, place a Cohtml widget in the BW_CohtmlWidget slot and set the HTML Entry to BlueClient2/Content/UICoherent/Canvastown/index.html. Phase 0: round-trip-verify only canvas-ready / request-auth-data. Phase 1: relay rpc-request / rpc-response + fill the GPP auth payload. Phase 5+: relay RemoteInvoke / Notify.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| EnvironmentB1 - PresentationCategory`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Category`classes`Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |
| Extends[`UB1UserWidgetBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1userwidgetbase) |

# Properties (2)

| NameTypeDescription`BW_CohtmlWidget``any``OnCloseRequested``FB1CoCanvastownCloseRequestedDelegate` |
| --- |
| `BW_CohtmlWidget``any``OnCloseRequested``FB1CoCanvastownCloseRequestedDelegate` |
| `OnCloseRequested``FB1CoCanvastownCloseRequestedDelegate` |

# Functions (2)

| FunctionParametersReturnsDescription`Hide`FadeOutDurationSeconds: `number``-``Show`FadeInDurationSeconds: `number``-` |
| --- |
| `Hide`FadeOutDurationSeconds: `number``-``Show`FadeInDurationSeconds: `number``-` |
| `Show`FadeInDurationSeconds: `number``-` |
