---
document_id: "8ca45c9c7deccb63a42c64b73bb73791ee9d633b9b4d263851e26a57ac7a0d7a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1delinquency"
title: "FB1Delinquency"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:41+00:00"
content_sha256: "7abc4ee66c27980c499c8e98aac87b8a5504cebcc5247db8069aa42122366ae2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1delinquency"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the penalty settings applied when a household falls into delinquency on utility bills.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`CutOffTaxType`[`EB1ServiceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1servicetype)The utility service type that will be cut off when this delinquency triggers.`Day``integer`Number of days past the due date before this delinquency action triggers.`Execution``boolean`Whether this delinquency entry actively executes its actions.`Interest``number`Additional interest rate applied to the overdue amount at this delinquency stage.`MessageId``string`ID of the message to display when this delinquency action occurs. |
| --- |
| `CutOffTaxType`[`EB1ServiceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1servicetype)The utility service type that will be cut off when this delinquency triggers.`Day``integer`Number of days past the due date before this delinquency action triggers.`Execution``boolean`Whether this delinquency entry actively executes its actions.`Interest``number`Additional interest rate applied to the overdue amount at this delinquency stage.`MessageId``string`ID of the message to display when this delinquency action occurs. |
| `Day``integer`Number of days past the due date before this delinquency action triggers.`Execution``boolean`Whether this delinquency entry actively executes its actions.`Interest``number`Additional interest rate applied to the overdue amount at this delinquency stage.`MessageId``string`ID of the message to display when this delinquency action occurs. |
| `Execution``boolean`Whether this delinquency entry actively executes its actions.`Interest``number`Additional interest rate applied to the overdue amount at this delinquency stage.`MessageId``string`ID of the message to display when this delinquency action occurs. |
| `Interest``number`Additional interest rate applied to the overdue amount at this delinquency stage.`MessageId``string`ID of the message to display when this delinquency action occurs. |
| `MessageId``string`ID of the message to display when this delinquency action occurs. |
