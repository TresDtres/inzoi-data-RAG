---
document_id: "47196c414ac25ed45e237db7f72f6b18772cec0b67fb7777cb5c844a5af4613c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-holdhandtarget"
title: "Condition_HoldHandTarget"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:17+00:00"
content_sha256: "eb1b79a34fa951fa49c1acfddd4b0f381570a91b23ad608939a86788f6dd7f5b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-holdhandtarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is the partner currently holding hands with the script Self. In other words: BaseObject's HoldHandTargetEntityId == ScriptContext.SelfEntityId.

# Parameters

| ParameterDescriptionBaseObjectMust be Target (Self is invalid — would compare Self to itself).CompareTypeEqual (is the partner) / NotEqual (is not). |
| --- |
| BaseObjectMust be Target (Self is invalid — would compare Self to itself).CompareTypeEqual (is the partner) / NotEqual (is not). |
| CompareTypeEqual (is the partner) / NotEqual (is not). |

# Examples

| DescriptionBaseObjectCommandCompareTypeTarget is the character Self is currently holding hands withTargetHoldHandTargetEqualTarget is NOT the partnerTargetHoldHandTargetNotEqual |
| --- |
| Target is the character Self is currently holding hands withTargetHoldHandTargetEqualTarget is NOT the partnerTargetHoldHandTargetNotEqual |
| Target is NOT the partnerTargetHoldHandTargetNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
