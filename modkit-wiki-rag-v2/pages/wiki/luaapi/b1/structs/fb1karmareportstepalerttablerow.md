---
document_id: "6733e18f4feb2fb753ea6932754a206b9d8cc2d1ed4a4370ecd787f001625cae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1karmareportstepalerttablerow"
title: "FB1KarmaReportStepAlertTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:14+00:00"
content_sha256: "e9bd75871d3226a9b0b0cd84c796c37b440fe819c0b3c24ea8cafa18792e7cf1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1karmareportstepalerttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a karma report step alert table row. Specifies the karma step threshold, comparison types, rate, and alert requirements.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type used when evaluating the rate value.`Rate``number`The karma rate threshold for triggering this alert.`Step``integer`EB1KarmaStateType FB1StatRangeDisplayInfo The karma step index for this alert threshold.`StepCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type used when evaluating the step value.`bNeedAlertMessage``boolean`Whether an alert message should be displayed when this threshold is reached. |
| --- |
| `CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type used when evaluating the rate value.`Rate``number`The karma rate threshold for triggering this alert.`Step``integer`EB1KarmaStateType FB1StatRangeDisplayInfo The karma step index for this alert threshold.`StepCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type used when evaluating the step value.`bNeedAlertMessage``boolean`Whether an alert message should be displayed when this threshold is reached. |
| `Rate``number`The karma rate threshold for triggering this alert.`Step``integer`EB1KarmaStateType FB1StatRangeDisplayInfo The karma step index for this alert threshold.`StepCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type used when evaluating the step value.`bNeedAlertMessage``boolean`Whether an alert message should be displayed when this threshold is reached. |
| `Step``integer`EB1KarmaStateType FB1StatRangeDisplayInfo The karma step index for this alert threshold.`StepCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type used when evaluating the step value.`bNeedAlertMessage``boolean`Whether an alert message should be displayed when this threshold is reached. |
| `StepCompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison type used when evaluating the step value.`bNeedAlertMessage``boolean`Whether an alert message should be displayed when this threshold is reached. |
| `bNeedAlertMessage``boolean`Whether an alert message should be displayed when this threshold is reached. |
