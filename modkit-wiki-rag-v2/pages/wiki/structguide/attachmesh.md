---
document_id: "179e4bae91d83633a812561ccf194c960c0c9bf2e838d06aeb311b3a40804ffc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/attachmesh"
title: "📘 AttachMesh Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:21+00:00"
content_sha256: "f0a76b27ada6bf79eae35f7af1dd495c2c5d29e97c02a4036f3eed834e8a14f1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/attachmesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AttachMeshTableRow

Defines a table row for meshes that are attached to characters, including gender/growth-specific mesh entries.

### Properties

- **Id** (`FName`): Unique identifier for this attached mesh entry.
- **GroupId** (`FName`): Optional group ID for organizing mesh entries by logical category.
- **MeshList** (`TArray<FB1AttachMeshInfo>`): List of attachable mesh assets, filtered by gender and growth step.

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAttach[FB1AttachMeshInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachmeshinfo)[FB1AttachMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1attachmeshtablerow)
