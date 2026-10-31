---
document_id: "559f9f693189baa63ba6ea03ebbcbdf4a4bab5aa56720a74041b03498e9334e8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentsubcategory"
title: "📘 GarmentSubCategory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:48+00:00"
content_sha256: "2efe047b028f5dbc2ff25515db657703c1b72ee830e0e1ba8e46c0317b0774ec"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/garmentsubcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1GarmentSubCategoryTableRow

Data for a subcategory in the character customization garment list. Used to group garments into more specific categories within the UI.

### Properties

- **Id** (`FName`): Unique ID of the subcategory.
- **NameTextId** (`FString`): Subcategory name displayed in the game, localized based on language settings. *(StringTableKey = "Id")*
- **ParentCategory** (`FName`): ID of the parent category.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Path to the thumbnail image asset for the subcategory.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGarment[EB1GarmentCoveringRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1garmentcoveringregion)[GarmentBottom Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottom)[GarmentBottomMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottommesh)[GarmentFull Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfull)[GarmentFullMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfullmesh)[GarmentHat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthat)[GarmentHatMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthatmesh)[GarmentInnerTop Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertop)[GarmentInnerTopMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertopmesh)[GarmentInnerUnder Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerunder)[GarmentInnerUnderMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerundermesh)[GarmentJacket Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentjacket)
