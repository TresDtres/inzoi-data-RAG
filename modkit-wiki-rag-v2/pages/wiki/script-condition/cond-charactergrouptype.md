---
document_id: "c2733390277ac20b0fb2570077d6a35d9d6857abd3ae3cf790a4f7aa51e8ebd3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-charactergrouptype"
title: "Condition_CharacterGroupType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:52+00:00"
content_sha256: "35e60afe176d211a260c0596a518cd04b4628e145da89fc5117d5b13dd277f3c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-charactergrouptype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject's CharacterGroupType matches the type specified in S1. Supported group types include ResidenceFamily, CompanyRoleNpc, SiteRoleNpc, Crowd, EventCrowd, ServiceNpc, StaticNpc, and ShopNpc.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose group type will be checkedCompareTypeSupported compare types: Equal, None, NotEqualS1CharacterGroupType to compare (e.g., "ResidenceFamily") |
| --- |
| BaseObjectCharacter whose group type will be checkedCompareTypeSupported compare types: Equal, None, NotEqualS1CharacterGroupType to compare (e.g., "ResidenceFamily") |
| CompareTypeSupported compare types: Equal, None, NotEqualS1CharacterGroupType to compare (e.g., "ResidenceFamily") |
| S1CharacterGroupType to compare (e.g., "ResidenceFamily") |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is a residence family memberSelfCharacterGroupTypeEqualIf Target is not a crowd NPCTargetCharacterGroupTypeNotEqualIf Target is a shop NPCTargetCharacterGroupTypeEqualIf Self is a service NPCSelfCharacterGroupTypeEqual |
| --- |
| If Self is a residence family memberSelfCharacterGroupTypeEqualIf Target is not a crowd NPCTargetCharacterGroupTypeNotEqualIf Target is a shop NPCTargetCharacterGroupTypeEqualIf Self is a service NPCSelfCharacterGroupTypeEqual |
| If Target is not a crowd NPCTargetCharacterGroupTypeNotEqualIf Target is a shop NPCTargetCharacterGroupTypeEqualIf Self is a service NPCSelfCharacterGroupTypeEqual |
| If Target is a shop NPCTargetCharacterGroupTypeEqualIf Self is a service NPCSelfCharacterGroupTypeEqual |
| If Self is a service NPCSelfCharacterGroupTypeEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
