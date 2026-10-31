---
document_id: "36acc392dd5dca1139bd92c95d59c8259f76504eb71efdee15efa4d48e45018f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1pathfindconfig"
title: "UB1PathFindConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:01+00:00"
content_sha256: "bb1aecc13b31b75acf87af2a7214078f97428e47c002573594c8b7df0e730a98"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1pathfindconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset configuring global pathfinding parameters including distance thresholds, stair offsets, swimming pool settings, and site groupings. Provides runtime query support for determining whether pathfinding should be bypassed between two sites.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (7)

| NameTypeDescription`CityGraphKeepRightHandDistance``number`Distance at which city graph keep-right-hand-side behavior is enforced.`CityPathFindGroup``table<string, FB1CityPathFindGroup>`Map from city name to its pathfinding group configuration.`IgnoreDifferentBlockDistance``number`Maximum distance at which different pathfinding blocks are ignored during traversal.`StairSlotOffset``number`Lateral offset applied to stair entry/exit slots during stair path generation.`SwimmingPoolCollisionEnterExitInteractionTriggerSecond``number`Duration in seconds for the swimming pool collision enter/exit interaction trigger.`SwimmingPoolCopingNodeLenghtInterval``number`Distance interval between consecutive swimming pool coping navigation nodes.`SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
| --- |
| `CityGraphKeepRightHandDistance``number`Distance at which city graph keep-right-hand-side behavior is enforced.`CityPathFindGroup``table<string, FB1CityPathFindGroup>`Map from city name to its pathfinding group configuration.`IgnoreDifferentBlockDistance``number`Maximum distance at which different pathfinding blocks are ignored during traversal.`StairSlotOffset``number`Lateral offset applied to stair entry/exit slots during stair path generation.`SwimmingPoolCollisionEnterExitInteractionTriggerSecond``number`Duration in seconds for the swimming pool collision enter/exit interaction trigger.`SwimmingPoolCopingNodeLenghtInterval``number`Distance interval between consecutive swimming pool coping navigation nodes.`SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
| `CityPathFindGroup``table<string, FB1CityPathFindGroup>`Map from city name to its pathfinding group configuration.`IgnoreDifferentBlockDistance``number`Maximum distance at which different pathfinding blocks are ignored during traversal.`StairSlotOffset``number`Lateral offset applied to stair entry/exit slots during stair path generation.`SwimmingPoolCollisionEnterExitInteractionTriggerSecond``number`Duration in seconds for the swimming pool collision enter/exit interaction trigger.`SwimmingPoolCopingNodeLenghtInterval``number`Distance interval between consecutive swimming pool coping navigation nodes.`SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
| `IgnoreDifferentBlockDistance``number`Maximum distance at which different pathfinding blocks are ignored during traversal.`StairSlotOffset``number`Lateral offset applied to stair entry/exit slots during stair path generation.`SwimmingPoolCollisionEnterExitInteractionTriggerSecond``number`Duration in seconds for the swimming pool collision enter/exit interaction trigger.`SwimmingPoolCopingNodeLenghtInterval``number`Distance interval between consecutive swimming pool coping navigation nodes.`SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
| `StairSlotOffset``number`Lateral offset applied to stair entry/exit slots during stair path generation.`SwimmingPoolCollisionEnterExitInteractionTriggerSecond``number`Duration in seconds for the swimming pool collision enter/exit interaction trigger.`SwimmingPoolCopingNodeLenghtInterval``number`Distance interval between consecutive swimming pool coping navigation nodes.`SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
| `SwimmingPoolCollisionEnterExitInteractionTriggerSecond``number`Duration in seconds for the swimming pool collision enter/exit interaction trigger.`SwimmingPoolCopingNodeLenghtInterval``number`Distance interval between consecutive swimming pool coping navigation nodes.`SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
| `SwimmingPoolCopingNodeLenghtInterval``number`Distance interval between consecutive swimming pool coping navigation nodes.`SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
| `SwimmingPoolCopingOffset``number`Offset applied when generating swimming pool coping navigation nodes. |
