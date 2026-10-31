---
document_id: "b42bde24eff566607441443b976fc2adbd21d394e11e9419e18826af2c567205"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1uitimealerttablerow"
title: "FB1UITimeAlertTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:44+00:00"
content_sha256: "5ec4444929ffb93b89ada9cda252f09f393d1c0f6c3f9a8cd7c894168c8f32cf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1uitimealerttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row struct that defines settings for time-based UI alerts. It includes priority, localized text ID, and icon information for each alert configuration.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`BuffInfo`[`FB1UITimeAlertBuffInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1uitimealertbuffinfo)Optional buff-linked alert configuration; if BuffId is set, the alert displays when the buff is applied.`ImageIconId``string`ID for the icon image displayed in the time alert UI.`Priority``integer`Priority value used to determine display order when multiple alerts are active; higher value means higher priority.`TextTitleId``string`ID for the title text displayed in the time alert UI. |
| --- |
| `BuffInfo`[`FB1UITimeAlertBuffInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1uitimealertbuffinfo)Optional buff-linked alert configuration; if BuffId is set, the alert displays when the buff is applied.`ImageIconId``string`ID for the icon image displayed in the time alert UI.`Priority``integer`Priority value used to determine display order when multiple alerts are active; higher value means higher priority.`TextTitleId``string`ID for the title text displayed in the time alert UI. |
| `ImageIconId``string`ID for the icon image displayed in the time alert UI.`Priority``integer`Priority value used to determine display order when multiple alerts are active; higher value means higher priority.`TextTitleId``string`ID for the title text displayed in the time alert UI. |
| `Priority``integer`Priority value used to determine display order when multiple alerts are active; higher value means higher priority.`TextTitleId``string`ID for the title text displayed in the time alert UI. |
| `TextTitleId``string`ID for the title text displayed in the time alert UI. |
