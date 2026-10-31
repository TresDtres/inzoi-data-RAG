---
document_id: "17a96da367d67a1b4bb5a1a37a6f220f0a28e12f0ea611c8cda69d612c0294f6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1modassethash"
title: "FB1ModAssetHash"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:30+00:00"
content_sha256: "65f38f783b25dc1111aaa56420b964a06bdfea841bcfd24eaeb2989a3a4c48e0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1modassethash"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Snapshot of structural hashes for material-related assets, used to detect whether a mod's material assets have diverged from the base game (e.g. for compatibility validation).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AssetClasses``table<string, string>`Map of package path (mod-root relative, same form as the manifest's Assets) to its asset class path, written by ModKit at packaging time. Lets the runtime pick the packages a modding tool needs without reading IoStore headers. Empty means fall back to header peek.`MaterialCollectionParamGuids``table<FSoftObjectPath, FGuid>`Map of material asset path to the Material Parameter Collection GUIDs it references, used to detect changes in referenced parameter collections.`MaterialFunctionInstanceHashes``table<FSoftObjectPath, integer>`Map of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.`MaterialStructureHashes``table<FSoftObjectPath, integer>`Map of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash. |
| --- |
| `AssetClasses``table<string, string>`Map of package path (mod-root relative, same form as the manifest's Assets) to its asset class path, written by ModKit at packaging time. Lets the runtime pick the packages a modding tool needs without reading IoStore headers. Empty means fall back to header peek.`MaterialCollectionParamGuids``table<FSoftObjectPath, FGuid>`Map of material asset path to the Material Parameter Collection GUIDs it references, used to detect changes in referenced parameter collections.`MaterialFunctionInstanceHashes``table<FSoftObjectPath, integer>`Map of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.`MaterialStructureHashes``table<FSoftObjectPath, integer>`Map of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash. |
| `MaterialCollectionParamGuids``table<FSoftObjectPath, FGuid>`Map of material asset path to the Material Parameter Collection GUIDs it references, used to detect changes in referenced parameter collections.`MaterialFunctionInstanceHashes``table<FSoftObjectPath, integer>`Map of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.`MaterialStructureHashes``table<FSoftObjectPath, integer>`Map of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash. |
| `MaterialFunctionInstanceHashes``table<FSoftObjectPath, integer>`Map of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.`MaterialStructureHashes``table<FSoftObjectPath, integer>`Map of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash. |
| `MaterialStructureHashes``table<FSoftObjectPath, integer>`Map of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash. |
