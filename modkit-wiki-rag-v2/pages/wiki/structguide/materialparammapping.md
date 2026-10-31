---
document_id: "b9558f3ad830cb077c997599efc9c6e9ad7825872ae7c6ca27dbbdf99ddb3f1d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/materialparammapping"
title: "📘 MaterialParamMapping Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:53+00:00"
content_sha256: "f1a563d882e06d22d4cfab6c9dd22c226f566af6290d326b2b02679c91414d8c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/materialparammapping"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1MaterialParamMappingTableRow

Defines how a specific material parameter is applied to a mesh with optional layer and name targeting.

### Properties

- **Id** (`FName`): Unique identifier for this mapping entry.
- **ParamType** (`EB1MaterialParamType`): Type of parameter (e.g., Scalar, Vector).
- **MeshName** (`FName`): Name of the mesh the parameter applies to.
- **LayerIndex** (`float`): Layer index for applying the parameter.
- **ParamName** (`FName`): Name of the parameter to modify.
- **ValueString** (`FString`): String representation of the value assigned (parsed at runtime).

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMaterial[EB1MaterialParamType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1materialparamtype)[FB1MaterialParamMappingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1materialparammappingtablerow)[FB1MaterialTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1materialtablerow)
