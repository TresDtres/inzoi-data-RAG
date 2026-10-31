---
document_id: "1402159081759117aeb797fd4bf65ddeb01f5a8b2607d0e6479b2ecc01ffe21e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstate"
title: "Condition_HasState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:15+00:00"
content_sha256: "5d8d8d2ed503a7bbd79bc2e151cb9bc1a29a3b869b36d97c4a54385fa327e818"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject has a specific state within a state group. Unlike Condition_State, this checks if the object possesses a given state in any position, not only the current active state.

# Parameters

| ParameterDescriptionBaseObjectTarget GameObject to check the stateCompareTypeEqual (has state) / NotEqual (does not have state)S1State Group ID to search inS2State ID to check for |
| --- |
| BaseObjectTarget GameObject to check the stateCompareTypeEqual (has state) / NotEqual (does not have state)S1State Group ID to search inS2State ID to check for |
| CompareTypeEqual (has state) / NotEqual (does not have state)S1State Group ID to search inS2State ID to check for |
| S1State Group ID to search inS2State ID to check for |
| S2State ID to check for |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if Target has the "Broken" stateTargetHasStateEqualNormalBrokenCheck if Target does not have the fire stateTargetHasStateNotEqualFireOnFireCheck if Self has the "Wet" stateSelfHasStateEqualWeatherWet |
| --- |
| Check if Target has the "Broken" stateTargetHasStateEqualNormalBrokenCheck if Target does not have the fire stateTargetHasStateNotEqualFireOnFireCheck if Self has the "Wet" stateSelfHasStateEqualWeatherWet |
| Check if Target does not have the fire stateTargetHasStateNotEqualFireOnFireCheck if Self has the "Wet" stateSelfHasStateEqualWeatherWet |
| Check if Self has the "Wet" stateSelfHasStateEqualWeatherWet |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
