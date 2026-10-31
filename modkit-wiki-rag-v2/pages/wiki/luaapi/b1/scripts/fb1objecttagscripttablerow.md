---
document_id: "183a41d9162535a9b29e6690b8bfdab8734b12353a68f8295dccbe473d47db85"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/scripts/fb1objecttagscripttablerow"
title: "FB1ObjectTagScriptTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:39:43+00:00"
content_sha256: "6c5d612fa3c74afb1a84a489058e045e31a6fcb9a257e64aedef2238332e6097"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/scripts/fb1objecttagscripttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining scripts triggered by object tag events such as hand-off, inventory changes, and hand attach/detach. Associates arrays of script IDs with each tag-driven lifecycle event on an object.

# Metadata

| FieldValueKind`script`EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`script`EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`scripts`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`HandOverScriptIds``string[]`Scripts executed when this object is handed over to another character or container.`OnHandAttachScriptIds``string[]`Scripts executed when this object is attached to a character's hand.`OnHandDetachScriptIds``string[]`Scripts executed when this object is detached from a character's hand.`ScriptIdsOnInventoryAdd``string[]`Scripts executed when this object is added to an inventory.`ScriptIdsOnInventoryRemove``string[]`Scripts executed when this object is removed from an inventory. |
| --- |
| `HandOverScriptIds``string[]`Scripts executed when this object is handed over to another character or container.`OnHandAttachScriptIds``string[]`Scripts executed when this object is attached to a character's hand.`OnHandDetachScriptIds``string[]`Scripts executed when this object is detached from a character's hand.`ScriptIdsOnInventoryAdd``string[]`Scripts executed when this object is added to an inventory.`ScriptIdsOnInventoryRemove``string[]`Scripts executed when this object is removed from an inventory. |
| `OnHandAttachScriptIds``string[]`Scripts executed when this object is attached to a character's hand.`OnHandDetachScriptIds``string[]`Scripts executed when this object is detached from a character's hand.`ScriptIdsOnInventoryAdd``string[]`Scripts executed when this object is added to an inventory.`ScriptIdsOnInventoryRemove``string[]`Scripts executed when this object is removed from an inventory. |
| `OnHandDetachScriptIds``string[]`Scripts executed when this object is detached from a character's hand.`ScriptIdsOnInventoryAdd``string[]`Scripts executed when this object is added to an inventory.`ScriptIdsOnInventoryRemove``string[]`Scripts executed when this object is removed from an inventory. |
| `ScriptIdsOnInventoryAdd``string[]`Scripts executed when this object is added to an inventory.`ScriptIdsOnInventoryRemove``string[]`Scripts executed when this object is removed from an inventory. |
| `ScriptIdsOnInventoryRemove``string[]`Scripts executed when this object is removed from an inventory. |
