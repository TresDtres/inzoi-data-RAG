---
document_id: "266f65092d66835936656846f3de008ff0bbdd4f6ef25f1dc6693c7b9317b8c2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1realdateconditiontablerow"
title: "FB1RealDateConditionTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:12+00:00"
content_sha256: "9146bf31298849855e8924927acfc427a88ad6aa8fda1579ba2a510b35e79fee"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1realdateconditiontablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a real-world date condition range used to restrict certain events to specific calendar periods.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`EndDay``integer`Day of the month when the valid date range ends (1-31).`EndMonth``integer`Month when the valid date range ends (1-12).`SpecificYear``integer`If non-zero, restricts the condition to this specific calendar year; 0 means every year is valid.`StartDay``integer`Day of the month when the valid date range begins (1-31).`StartMonth``integer`Month when the valid date range begins (1-12). |
| --- |
| `EndDay``integer`Day of the month when the valid date range ends (1-31).`EndMonth``integer`Month when the valid date range ends (1-12).`SpecificYear``integer`If non-zero, restricts the condition to this specific calendar year; 0 means every year is valid.`StartDay``integer`Day of the month when the valid date range begins (1-31).`StartMonth``integer`Month when the valid date range begins (1-12). |
| `EndMonth``integer`Month when the valid date range ends (1-12).`SpecificYear``integer`If non-zero, restricts the condition to this specific calendar year; 0 means every year is valid.`StartDay``integer`Day of the month when the valid date range begins (1-31).`StartMonth``integer`Month when the valid date range begins (1-12). |
| `SpecificYear``integer`If non-zero, restricts the condition to this specific calendar year; 0 means every year is valid.`StartDay``integer`Day of the month when the valid date range begins (1-31).`StartMonth``integer`Month when the valid date range begins (1-12). |
| `StartDay``integer`Day of the month when the valid date range begins (1-31).`StartMonth``integer`Month when the valid date range begins (1-12). |
| `StartMonth``integer`Month when the valid date range begins (1-12). |
