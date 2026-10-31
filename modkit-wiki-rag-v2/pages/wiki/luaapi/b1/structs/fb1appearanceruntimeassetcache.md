---
document_id: "47c8b68147b8c18cf4aa71014623a64ef9bf9c23508745e20a3bee6359042555"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearanceruntimeassetcache"
title: "FB1AppearanceRuntimeAssetCache"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "b45d386014867ec04b17788ae0e6f7837faef3365e095339f31afcb78e59f3d5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1appearanceruntimeassetcache"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime UObject cache for UB1AppearanceComponent. Split out from FB1AppearanceSetting (data) and held per component; caches textures resolved from ID identifiers (MakeupId/FeatureId/parameter name, etc.) at the Refresh callback time. Its lifecycle is independent of the AppearanceSetting's rebuild/serialization.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`FaceHairSectionIndices``table<EB1FaceHairType, FB1FaceHairSectionIndices>`Post-merge material section indices per FaceHair type.`FaceHairTextures``table<EB1FaceHairType, FB1FaceHairTextureMap>`Material-parameter textures per FaceHair type.`HeadTextures``table<string, FSoftObjectPath>`Head material texture paths (Bald_Mask, etc.).`IrisTextures``table<string, any>`Texture per iris material parameter.`MakeupMaskTextures``table<string, any>`Makeup mask textures (keyed by makeup partsId).`SkinFeatureTextures``table<string, any>`Skin-feature (mole/freckle/scar/tattoo) textures (keyed by parameter name). |
| --- |
| `FaceHairSectionIndices``table<EB1FaceHairType, FB1FaceHairSectionIndices>`Post-merge material section indices per FaceHair type.`FaceHairTextures``table<EB1FaceHairType, FB1FaceHairTextureMap>`Material-parameter textures per FaceHair type.`HeadTextures``table<string, FSoftObjectPath>`Head material texture paths (Bald_Mask, etc.).`IrisTextures``table<string, any>`Texture per iris material parameter.`MakeupMaskTextures``table<string, any>`Makeup mask textures (keyed by makeup partsId).`SkinFeatureTextures``table<string, any>`Skin-feature (mole/freckle/scar/tattoo) textures (keyed by parameter name). |
| `FaceHairTextures``table<EB1FaceHairType, FB1FaceHairTextureMap>`Material-parameter textures per FaceHair type.`HeadTextures``table<string, FSoftObjectPath>`Head material texture paths (Bald_Mask, etc.).`IrisTextures``table<string, any>`Texture per iris material parameter.`MakeupMaskTextures``table<string, any>`Makeup mask textures (keyed by makeup partsId).`SkinFeatureTextures``table<string, any>`Skin-feature (mole/freckle/scar/tattoo) textures (keyed by parameter name). |
| `HeadTextures``table<string, FSoftObjectPath>`Head material texture paths (Bald_Mask, etc.).`IrisTextures``table<string, any>`Texture per iris material parameter.`MakeupMaskTextures``table<string, any>`Makeup mask textures (keyed by makeup partsId).`SkinFeatureTextures``table<string, any>`Skin-feature (mole/freckle/scar/tattoo) textures (keyed by parameter name). |
| `IrisTextures``table<string, any>`Texture per iris material parameter.`MakeupMaskTextures``table<string, any>`Makeup mask textures (keyed by makeup partsId).`SkinFeatureTextures``table<string, any>`Skin-feature (mole/freckle/scar/tattoo) textures (keyed by parameter name). |
| `MakeupMaskTextures``table<string, any>`Makeup mask textures (keyed by makeup partsId).`SkinFeatureTextures``table<string, any>`Skin-feature (mole/freckle/scar/tattoo) textures (keyed by parameter name). |
| `SkinFeatureTextures``table<string, any>`Skin-feature (mole/freckle/scar/tattoo) textures (keyed by parameter name). |
