---
document_id: "951b74da488c4e01a25ed68ed6b282c1787dc75eec015757834ac2c23d37acb1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1garmentcoveringregion"
title: "EB1GarmentCoveringRegion"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:33+00:00"
content_sha256: "a054dfe48f6a7f902cf78868ec8057331b38a6c6d6d64da0bb337c988c958881"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/enum/eb1garmentcoveringregion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🎛️ Enum: EB1GarmentCoveringRegion

Defines bitflag-based regions of the body used to indicate which areas a garment covers.

#### Values

- **None**: No coverage.
- **LeftShoulder**: Covers the left shoulder.
- **RightShoulder**: Covers the right shoulder.
- **LeftArmUpper**: Covers the upper part of the left arm.
- **RightArmUpper**: Covers the upper part of the right arm.
- **LeftArmLower**: Covers the lower part of the left arm.
- **RightArmLower**: Covers the lower part of the right arm.
- **LeftSide**: Covers the left side of the torso.
- **RightSide**: Covers the right side of the torso.
- **Chest**: Covers the chest area.
- **Back**: Covers the back area.
- **BellyUpper**: Covers the upper belly.
- **BellyLower**: Covers the lower belly.
- **WaistBack**: Covers the back of the waist.
- **Buttocks**: Covers the buttocks.
- **LeftThigh**: Covers the left thigh.
- **RightThigh**: Covers the right thigh.
- **LeftShin**: Covers the left shin.
- **RightShin**: Covers the right shin.
- **LeftAnkle**: Covers the left ankle.
- **RightAnkle**: Covers the right ankle.
- **LeftFoot**: Covers the left foot.
- **RightFoot**: Covers the right foot.
- **LeftHand**: Covers the left hand.
- **RightHand**: Covers the right hand.
- **NeckFront**: Covers the front of the neck.
- **NeckBack**: Covers the back of the neck.
- **PantsWaist**: Covers the pants waist area.
- **NeckTight**: Covers tight neck-fitting regions.
- **LeftAnkleLow**: Covers the lower left ankle.
- **RightAnkleLow**: Covers the lower right ankle.

#### Composite Flags

These define combinations of base flags for common garment regions:

- **LeftArmShort**: `LeftShoulder | LeftArmUpper`
- **RightArmShort**: `RightShoulder | RightArmUpper`
- **LeftArm**: `LeftArmShort | LeftArmLower`
- **RightArm**: `RightArmShort | RightArmLower`
- **Shoulders**: `LeftShoulder | RightShoulder`
- **ArmsAll**: `LeftArm | RightArm`
- **ArmsAllShort**: `LeftArmShort | RightArmShort`
- **Gloves**: `LeftHand | RightHand`
- **UpperBodyShort**: `LeftSide | RightSide | Back`
- **UpperBodyShortClosed**: `UpperBodyShort | Chest`
- **UpperBody**: `UpperBodyShort | WaistBack`
- **UpperBodyClosed**: `UpperBody | Chest | BellyUpper`
- **Waist**: `BellyUpper | WaistBack`
- **BackBody**: `Back | WaistBack`
- **BackAndArms**: `Back | ArmsAll`
- **LeftLeg**: `LeftThigh | LeftShin`
- **RightLeg**: `RightThigh | RightShin`
- **BottomShort**: `BellyLower | Buttocks`
- **BottomMid**: `BottomShort | LeftThigh | RightThigh`
- **BottomLong**: `BottomMid | LeftShin | RightShin`
- **Shoes**: `LeftFoot | RightFoot`
- **SocksShort**: `Shoes`
- **SocksMid**: `SocksShort | LeftAnkle | RightAnkle | LeftAnkleLow | RightAnkleLow`
- **SocksLong**: `SocksMid | LeftShin | RightShin`
- **WholeBody**: Covers the full body

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGarment[GarmentBottom Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottom)[GarmentBottomMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottommesh)[GarmentFull Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfull)[GarmentFullMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfullmesh)[GarmentHat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthat)[GarmentHatMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthatmesh)[GarmentInnerTop Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertop)[GarmentInnerTopMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertopmesh)[GarmentInnerUnder Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerunder)[GarmentInnerUnderMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerundermesh)[GarmentJacket Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentjacket)[GarmentJacketMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentjacketmesh)
