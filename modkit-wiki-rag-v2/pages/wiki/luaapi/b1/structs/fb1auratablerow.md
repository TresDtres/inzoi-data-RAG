---
document_id: "9379fb5c9cbacca2f725d6d48a5893046e9ff96b3edae29a2c467a36aa6c0eac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1auratablerow"
title: "FB1AuraTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:10+00:00"
content_sha256: "0994614cec1b0033cafd4ae66a191c0c42d41caa0bcf9982ebc7d7ae4a2ccbd4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1auratablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row defining an aura, including its snap grid size and scripts to execute when entities enter or exit the aura.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`EffectSnapSize``integer`Number of 200 cm snap cells defining this aura's effective radius.`OnEnterScriptIds``string[]`Script IDs executed when an entity enters this aura's range.`OnExitScriptIds``string[]`Script IDs executed when an entity exits this aura's range. |
| --- |
| `EffectSnapSize``integer`Number of 200 cm snap cells defining this aura's effective radius.`OnEnterScriptIds``string[]`Script IDs executed when an entity enters this aura's range.`OnExitScriptIds``string[]`Script IDs executed when an entity exits this aura's range. |
| `OnEnterScriptIds``string[]`Script IDs executed when an entity enters this aura's range.`OnExitScriptIds``string[]`Script IDs executed when an entity exits this aura's range. |
| `OnExitScriptIds``string[]`Script IDs executed when an entity exits this aura's range. |
