---
document_id: "852e535b4d4e3dcbb0273d53d898756bc5e02066b617138ca31352e9c7f4c611"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinfront"
title: "Condition_IsInFront"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:33+00:00"
content_sha256: "49a70baff6142482c779e20891a69cd4950a5b54566deff0bccd7a98a3e52f69"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinfront"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

A condition command that checks whether the BaseObject is positioned in front of the NonBase target.

This condition evaluates the relative directional relationship between the BaseObject and the target entity.

The result is evaluated based on the comparison operator:

- Equal: The condition succeeds if the BaseObject is in front of the target.
- NotEqual: The condition succeeds if the BaseObject is NOT in front of the target (i.e., positioned behind the target).

# Parameters

| ParameterDescriptionBaseObjectThe entity whose position is evaluated relative to the non-base target.CompareTypeThe comparison operator. Supported values are Equal and NotEqual. |
| --- |
| BaseObjectThe entity whose position is evaluated relative to the non-base target.CompareTypeThe comparison operator. Supported values are Equal and NotEqual. |
| CompareTypeThe comparison operator. Supported values are Equal and NotEqual. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is in front of TargetSelfIsInFrontEqualCheck if Self is behind TargetSelfIsInFrontNotEqualCheck if Target is in front of SelfTargetIsInFrontEqual |
| --- |
| Check if Self is in front of TargetSelfIsInFrontEqualCheck if Self is behind TargetSelfIsInFrontNotEqualCheck if Target is in front of SelfTargetIsInFrontEqual |
| Check if Self is behind TargetSelfIsInFrontNotEqualCheck if Target is in front of SelfTargetIsInFrontEqual |
| Check if Target is in front of SelfTargetIsInFrontEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
