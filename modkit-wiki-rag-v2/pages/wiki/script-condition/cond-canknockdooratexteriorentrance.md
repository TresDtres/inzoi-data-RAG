---
document_id: "9b50a5f82bbfbedcfd5ddc3b2fca30d5e760441a55c7aa84d133c00921ba4c6c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canknockdooratexteriorentrance"
title: "Condition_CanKnockDoorAtExteriorEntrance"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:49+00:00"
content_sha256: "14798d3d210352c964b3cbbb76a947b009ff3cf0a6850d217891341b6abfc20a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canknockdooratexteriorentrance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Script condition function to check whether Self can start the normal knock-door flow at the Target door. The door must belong to a Residence and connect to a cached outer-ground Zone, while Self must not be inside that building.

# Parameters

| ParameterDescriptionBaseObjectMust be SelfCompareTypeEqual returns the eligibility result; NotEqual returns its inverse |
| --- |
| BaseObjectMust be SelfCompareTypeEqual returns the eligibility result; NotEqual returns its inverse |
| CompareTypeEqual returns the eligibility result; NotEqual returns its inverse |

# Notes

Target is resolved from the script context and must be an FB2DoorObject. Required Guest/Host interaction slots are validated by the interaction data and asset setup.

# Examples

| DescriptionBaseObjectCommandCompareTypeShow knock-door at an exterior Residence doorSelfCanKnockDoorAtExteriorEntranceEqualHide the interaction when the door is eligibleSelfCanKnockDoorAtExteriorEntranceNotEqual |
| --- |
| Show knock-door at an exterior Residence doorSelfCanKnockDoorAtExteriorEntranceEqualHide the interaction when the door is eligibleSelfCanKnockDoorAtExteriorEntranceNotEqual |
| Hide the interaction when the door is eligibleSelfCanKnockDoorAtExteriorEntranceNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
