---
document_id: "bc7d12ff21678ab8b2116bc02879fd54223a7260d0260909ca7244fcde181513"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1selectionset"
title: "FB1SelectionSet"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:22+00:00"
content_sha256: "812a7a1c54cd82cbe4acc70190946f0aa0d187acface9739682f456daa961be6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1selectionset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a set of interaction bags available for a given state group and selection type. Used within object selection set table rows to map states to available interaction options.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`InteractionBagList``string[]`List of interaction bag IDs available when this selection set is active.`SelectionType`[`EB1SelectionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1selectiontype)Type of selection mode (Normal, etc.) for this set.`StateGroupId``string`State group ID this selection set applies to. |
| --- |
| `InteractionBagList``string[]`List of interaction bag IDs available when this selection set is active.`SelectionType`[`EB1SelectionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1selectiontype)Type of selection mode (Normal, etc.) for this set.`StateGroupId``string`State group ID this selection set applies to. |
| `SelectionType`[`EB1SelectionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1selectiontype)Type of selection mode (Normal, etc.) for this set.`StateGroupId``string`State group ID this selection set applies to. |
| `StateGroupId``string`State group ID this selection set applies to. |
