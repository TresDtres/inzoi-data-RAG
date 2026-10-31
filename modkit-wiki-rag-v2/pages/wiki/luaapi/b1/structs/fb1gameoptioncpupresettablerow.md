---
document_id: "a2c28f395cc8dbf37cce81b7158158aa98c6b998a06cd0a5db196075106dcc5e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1gameoptioncpupresettablerow"
title: "FB1GameOptionCPUPresetTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:59+00:00"
content_sha256: "6f5ef52b5cef5061227d7eb92c4a6c6504ccfaab9d1ca7030bed962e276e5c8d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1gameoptioncpupresettablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row mapping a CPU model to its CPU-Z 1T benchmark score, used to determine the recommended simulation preset for the detected CPU. Data version of the formerly hardcoded lookup table in B1CPUScoreTable.cpp. On match, the most specific (longest) CPU key contained in the brand string is selected (regardless of record order).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`CPU``string`CPU model name matched as a substring of FPlatformMisc::GetCPUBrand().`CPUZScore``integer`CPU-Z 1T benchmark score for this CPU model. Higher is faster.`Platform`[`EB1GameOptionAllowPlatforms`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gameoptionallowplatforms)Platform this entry applies to (Windows / Mac). Prevents cross-platform substring false matches. Default None: lets Validate catch a missing Platform in the JSON. |
| --- |
| `CPU``string`CPU model name matched as a substring of FPlatformMisc::GetCPUBrand().`CPUZScore``integer`CPU-Z 1T benchmark score for this CPU model. Higher is faster.`Platform`[`EB1GameOptionAllowPlatforms`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gameoptionallowplatforms)Platform this entry applies to (Windows / Mac). Prevents cross-platform substring false matches. Default None: lets Validate catch a missing Platform in the JSON. |
| `CPUZScore``integer`CPU-Z 1T benchmark score for this CPU model. Higher is faster.`Platform`[`EB1GameOptionAllowPlatforms`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gameoptionallowplatforms)Platform this entry applies to (Windows / Mac). Prevents cross-platform substring false matches. Default None: lets Validate catch a missing Platform in the JSON. |
| `Platform`[`EB1GameOptionAllowPlatforms`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gameoptionallowplatforms)Platform this entry applies to (Windows / Mac). Prevents cross-platform substring false matches. Default None: lets Validate catch a missing Platform in the JSON. |
