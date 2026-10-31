---
document_id: "a7ff712d0c1f45a6112efa1edb0235cc866e665b0764a569b6f11f67bcdefb94"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1surfboardvisualdata"
title: "B1SurfBoardVisualData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:02+00:00"
content_sha256: "5d4217d5eabe2599aba0ea37d3b2fcc975f28f4104a146096635f02b9a993cb7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1surfboardvisualdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Visual set authored per surfboard tag: the board mesh, the water FX and the ride sound played while riding that board.

| PropertyTypeDescriptionMetadataBoardMeshFSoftObjectPathSoft path to the surfboard static mesh.Category: SurfSurfFxRowNameFNameFX table row name of the water FX played while riding this board.Category: SurfSpawnRatefloatSpawn rate applied to the water FX played while riding this board.Category: Surf ClampMin: 0.0 UIMin: 0.0SurfLoopSoundIdFName* AudioResources table row id of the looping MetaSound played at the surfboard while riding this board. * The MetaSound is expected to expose a FadeOutStart trigger input, which is fired when the ride ends. * Leaving this empty disables the ride sound for this board.Category: Surf ReferTo: DT_AudioResources |
| --- |
| BoardMeshFSoftObjectPathSoft path to the surfboard static mesh.Category: SurfSurfFxRowNameFNameFX table row name of the water FX played while riding this board.Category: SurfSpawnRatefloatSpawn rate applied to the water FX played while riding this board.Category: Surf ClampMin: 0.0 UIMin: 0.0SurfLoopSoundIdFName* AudioResources table row id of the looping MetaSound played at the surfboard while riding this board. * The MetaSound is expected to expose a FadeOutStart trigger input, which is fired when the ride ends. * Leaving this empty disables the ride sound for this board.Category: Surf ReferTo: DT_AudioResources |
| SurfFxRowNameFNameFX table row name of the water FX played while riding this board.Category: SurfSpawnRatefloatSpawn rate applied to the water FX played while riding this board.Category: Surf ClampMin: 0.0 UIMin: 0.0SurfLoopSoundIdFName* AudioResources table row id of the looping MetaSound played at the surfboard while riding this board. * The MetaSound is expected to expose a FadeOutStart trigger input, which is fired when the ride ends. * Leaving this empty disables the ride sound for this board.Category: Surf ReferTo: DT_AudioResources |
| SpawnRatefloatSpawn rate applied to the water FX played while riding this board.Category: Surf ClampMin: 0.0 UIMin: 0.0SurfLoopSoundIdFName* AudioResources table row id of the looping MetaSound played at the surfboard while riding this board. * The MetaSound is expected to expose a FadeOutStart trigger input, which is fired when the ride ends. * Leaving this empty disables the ride sound for this board.Category: Surf ReferTo: DT_AudioResources |
| SurfLoopSoundIdFName* AudioResources table row id of the looping MetaSound played at the surfboard while riding this board. * The MetaSound is expected to expose a FadeOutStart trigger input, which is fired when the ride ends. * Leaving this empty disables the ride sound for this board.Category: Surf ReferTo: DT_AudioResources |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSurf[FB1SurfCutbackData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1surfcutbackdata)
