---
document_id: "138014027b83db3b05bff150937bba0de78a3b8bdaf12607aa8625eaa7d073a7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1animattachmeshtablerow"
title: "FB1AnimAttachMeshTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "0d8ea5d890e2b13a36db1e74082cca8f72dd0c3844aeede9b86faa3bdd016793"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1animattachmeshtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row defining an animation-specific attach mesh (static mesh), including socket name, location/rotation/scale offsets.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`LocationOffset``FVector`Location offset relative to the socket.`RotationOffset``FRotator`Rotation offset relative to the socket.`Scale``FVector`Scale of the attached mesh.`SocketName``string`Name of the socket to attach the mesh to.`StaticMesh``UStaticMesh`Static mesh asset to attach during animation. |
| --- |
| `LocationOffset``FVector`Location offset relative to the socket.`RotationOffset``FRotator`Rotation offset relative to the socket.`Scale``FVector`Scale of the attached mesh.`SocketName``string`Name of the socket to attach the mesh to.`StaticMesh``UStaticMesh`Static mesh asset to attach during animation. |
| `RotationOffset``FRotator`Rotation offset relative to the socket.`Scale``FVector`Scale of the attached mesh.`SocketName``string`Name of the socket to attach the mesh to.`StaticMesh``UStaticMesh`Static mesh asset to attach during animation. |
| `Scale``FVector`Scale of the attached mesh.`SocketName``string`Name of the socket to attach the mesh to.`StaticMesh``UStaticMesh`Static mesh asset to attach during animation. |
| `SocketName``string`Name of the socket to attach the mesh to.`StaticMesh``UStaticMesh`Static mesh asset to attach during animation. |
| `StaticMesh``UStaticMesh`Static mesh asset to attach during animation. |
