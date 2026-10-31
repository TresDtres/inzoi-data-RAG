---
document_id: "10421e60306cc4304ada20d0f5ab1cc75524bff010a626c3d57e02cbca9cb974"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/meshspawntag"
title: "📘 MeshSpawnTag Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:53+00:00"
content_sha256: "ad8939d5cfc809fc7ab97a8500011aa2e3e5042b544b1d883893c9860bf158c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/meshspawntag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1MeshSpawnTagTableRow

Defines a tag-based mapping used to spawn mesh variants based on city-specific configurations.

### Properties

- **Id** (`FName`): Tag identifier for the mesh spawn rule.
- **DefaultMeshId** (`FName`): Default mesh to spawn when no city-specific match is found. *(Foreign = "DA_Spawner.Id")*
- **MeshDescriptionIds** (`TMap<FName, FName>`): Mapping of city names to their associated mesh IDs. *(Foreign = "DA_Spawner.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMesh[EB1MeshSkinningTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1meshskinningtarget)[FB1MeshReplaceSelectionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1meshreplaceselectiondata)[FB1MeshReplaceSelectionDataList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1meshreplaceselectiondatalist)[FB1MeshReplaceSelectionList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1meshreplaceselectionlist)[FB1MeshSpawnDescription](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1meshspawndescription)[FB1MeshSpawnTagTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1meshspawntagtablerow)
