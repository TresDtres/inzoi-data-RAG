---
document_id: "c8ad9521e8d992503f7cc33edba244ca9b83ee857d5ee6ae4b19817bdad7546d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasblockingchildnearby"
title: "Condition_HasBlockingChildNearby"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:02+00:00"
content_sha256: "5dfdf00b0915790b15b50892643880a827786227792a3446f65617082823d85f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasblockingchildnearby"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a protected child (baby/child, or a character holding one) is within the BaseObject's front detection zone. Used to gate harmful interactions (e.g. attacks) near children at enqueue time. Detection zone geometry comes from UB1InteractionDataAsset.ChildBlockCheck*.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (must be Self).CompareTypeSupported compare types: Equal, NotEqual. |
| --- |
| BaseObjectThe character to check (must be Self).CompareTypeSupported compare types: Equal, NotEqual. |
| CompareTypeSupported compare types: Equal, NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeGate enqueue when no protected child is nearbySelfHasBlockingChildNearbyNotEqualCheck whether a protected child is nearbySelfHasBlockingChildNearbyEqual |
| --- |
| Gate enqueue when no protected child is nearbySelfHasBlockingChildNearbyNotEqualCheck whether a protected child is nearbySelfHasBlockingChildNearbyEqual |
| Check whether a protected child is nearbySelfHasBlockingChildNearbyEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
