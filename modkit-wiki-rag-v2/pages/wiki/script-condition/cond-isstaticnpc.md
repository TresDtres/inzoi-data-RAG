---
document_id: "ce780875d7025e38394fe49c094920a343162bd6329217c753f412abcc5dbeb7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isstaticnpc"
title: "Condition_IsStaticNpc"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:47+00:00"
content_sha256: "fec94cca4ebdca9d35fd16f635115f1019c01d437b11dccb22b16502fe76ba07"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isstaticnpc"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character is a Static NPC. When S1 is provided, additionally verifies that the character's StaticSpawnerId matches S1. When S1 is empty, only the CharacterGroupType is checked against StaticNpc.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Optional static spawner ID to match. If empty, only group type is checked. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Optional static spawner ID to match. If empty, only group type is checked. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Optional static spawner ID to match. If empty, only group type is checked. |
| S1Optional static spawner ID to match. If empty, only group type is checked. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is a Static NPCSelfIsStaticNpcEqualCheck if Self is not a Static NPCSelfIsStaticNpcNotEqualCheck if Target is a specific Static NPC by spawnerTargetIsStaticNpcEqualMySpawnerId |
| --- |
| Check if Self is a Static NPCSelfIsStaticNpcEqualCheck if Self is not a Static NPCSelfIsStaticNpcNotEqualCheck if Target is a specific Static NPC by spawnerTargetIsStaticNpcEqualMySpawnerId |
| Check if Self is not a Static NPCSelfIsStaticNpcNotEqualCheck if Target is a specific Static NPC by spawnerTargetIsStaticNpcEqualMySpawnerId |
| Check if Target is a specific Static NPC by spawnerTargetIsStaticNpcEqualMySpawnerId |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
