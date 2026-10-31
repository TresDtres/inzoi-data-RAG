---
document_id: "da8a88ffa3b4f9c6449d2242ea181009e411f4ec309c5d95ab2679eb73537f4b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1inputtriggerkeyblocker"
title: "UB1InputTriggerKeyBlocker"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:45+00:00"
content_sha256: "6f9b1abd892696d738a5f44846b5e8d558b46448538d97d2c22d47a3e6850b72"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1inputtriggerkeyblocker"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A simple blocker that blocks a mapping while a specific key is held. Used for bidirectional combos like square+triangle. E.g. add this blocker to the square single action with BlockingKey=triangle, and the square single action is blocked while triangle is held.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UInputTrigger` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UInputTrigger` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UInputTrigger` |
| Category`classes`Extends`UInputTrigger` |
| Extends`UInputTrigger` |

# Properties (2)

| NameTypeDescription`BlockingKey``FKey`Blocks while this key is held.`OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |
| --- |
| `BlockingKey``FKey`Blocks while this key is held.`OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |
| `OwnerMappingName``string`MappingName of the action this blocker is attached to (for checking its own key). |
