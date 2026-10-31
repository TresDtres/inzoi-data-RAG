---
document_id: "21e0f5c874ba0bc2ba9e6165ca53b9e3bfea4ad0feb91d04303ec7834d99d1a5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modassethash"
title: "B1ModAssetHash"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:40+00:00"
content_sha256: "0746974c49bbdedcb3217603f0231f0d93da8c51c6767d6951be6b50de5c8ef3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1modassethash"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Snapshot of structural hashes for material-related assets, used to detect whether a mod's material assets have diverged from the base game (e.g. for compatibility validation).

| PropertyTypeDescriptionMetadataMaterialCollectionParamGuidsTMapMap of material asset path to the Material Parameter Collection GUIDs it references, used to detect changes in referenced parameter collections.MaterialStructureHashesTMapMap of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash.MaterialFunctionInstanceHashesTMapMap of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.AssetClassesTMapMap of package path (mod-root relative, same form as the manifest's Assets) to its asset class path, written by ModKit at packaging time. Lets the runtime pick the packages a modding tool needs without reading IoStore headers. Empty means fall back to header peek. |
| --- |
| MaterialCollectionParamGuidsTMapMap of material asset path to the Material Parameter Collection GUIDs it references, used to detect changes in referenced parameter collections.MaterialStructureHashesTMapMap of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash.MaterialFunctionInstanceHashesTMapMap of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.AssetClassesTMapMap of package path (mod-root relative, same form as the manifest's Assets) to its asset class path, written by ModKit at packaging time. Lets the runtime pick the packages a modding tool needs without reading IoStore headers. Empty means fall back to header peek. |
| MaterialStructureHashesTMapMap of material asset path to its structural hash (blend mode, shading model, parameters, layers), computed via ComputeMaterialStructureHash.MaterialFunctionInstanceHashesTMapMap of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.AssetClassesTMapMap of package path (mod-root relative, same form as the manifest's Assets) to its asset class path, written by ModKit at packaging time. Lets the runtime pick the packages a modding tool needs without reading IoStore headers. Empty means fall back to header peek. |
| MaterialFunctionInstanceHashesTMapMap of material function instance asset path to its parameter hash, computed via ComputeMaterialFunctionInstanceHash.AssetClassesTMapMap of package path (mod-root relative, same form as the manifest's Assets) to its asset class path, written by ModKit at packaging time. Lets the runtime pick the packages a modding tool needs without reading IoStore headers. Empty means fall back to header peek. |
| AssetClassesTMapMap of package path (mod-root relative, same form as the manifest's Assets) to its asset class path, written by ModKit at packaging time. Lets the runtime pick the packages a modding tool needs without reading IoStore headers. Empty means fall back to header peek. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMod[FB1ModBlackListTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modblacklisttablerow)[FB1ModExploreSubMenuData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modexploresubmenudata)[FB1ModPlatformButtonData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modplatformbuttondata)[FB1ModSortOrderData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modsortorderdata)[FB1ModUIInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moduiinfo)[FB1ModValidationStateData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1modvalidationstatedata)
