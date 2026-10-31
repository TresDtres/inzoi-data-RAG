---
document_id: "5089d6c62d0277e30da46018d34c9fe7bc00209c070007085ddc7f68a9fad2fe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cleanobjecttablerow"
title: "FB1CleanObjectTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:30+00:00"
content_sha256: "130d94822a8832279283e3e52c54e55d2ab354e43bd0efeec342b8fbfb129975"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cleanobjecttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining how a clean interaction removes dusty value and restores object states. Specifies the cleaning position, range, dusty reduction amount, animation, and the resulting normal state tag.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`AnimationId``string`ID of the animation played while this clean interaction is performed.`ChangeNormalStateObjectTag``string`Object template tag assigned to objects that are restored to their normal state after cleaning.`CleanPosition`[`EB1CleanPositionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanpositiontype)Position type determining where in the environment this clean interaction applies.`CleanRange``integer`Radius in units around the clean position that is affected by this clean interaction.`ReduceDustyValue``integer`Amount by which the dusty value is reduced when this clean interaction completes. |
| --- |
| `AnimationId``string`ID of the animation played while this clean interaction is performed.`ChangeNormalStateObjectTag``string`Object template tag assigned to objects that are restored to their normal state after cleaning.`CleanPosition`[`EB1CleanPositionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanpositiontype)Position type determining where in the environment this clean interaction applies.`CleanRange``integer`Radius in units around the clean position that is affected by this clean interaction.`ReduceDustyValue``integer`Amount by which the dusty value is reduced when this clean interaction completes. |
| `ChangeNormalStateObjectTag``string`Object template tag assigned to objects that are restored to their normal state after cleaning.`CleanPosition`[`EB1CleanPositionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanpositiontype)Position type determining where in the environment this clean interaction applies.`CleanRange``integer`Radius in units around the clean position that is affected by this clean interaction.`ReduceDustyValue``integer`Amount by which the dusty value is reduced when this clean interaction completes. |
| `CleanPosition`[`EB1CleanPositionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cleanpositiontype)Position type determining where in the environment this clean interaction applies.`CleanRange``integer`Radius in units around the clean position that is affected by this clean interaction.`ReduceDustyValue``integer`Amount by which the dusty value is reduced when this clean interaction completes. |
| `CleanRange``integer`Radius in units around the clean position that is affected by this clean interaction.`ReduceDustyValue``integer`Amount by which the dusty value is reduced when this clean interaction completes. |
| `ReduceDustyValue``integer`Amount by which the dusty value is reduced when this clean interaction completes. |
