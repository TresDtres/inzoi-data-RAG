---
document_id: "8c0385049ef9ed9cfe8eeae7e61fb66478d6d2fd305c60415c6dd167f0c8d4fa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ispurchasedesireoverthreshold"
title: "Condition_IsPurchaseDesireOverThreshold"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:41+00:00"
content_sha256: "c01cab1c8e93b2c86522aee58066b1310eb65f608db7a4e5aa4292e0e45e50e5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ispurchasedesireoverthreshold"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the BaseObject customer's current purchase desire gauge against the threshold value specified by F1, using the CompareType operator. The purchase desire is looked up on the HouseholdBiz located at the BaseObject's current Site (not the last completed business day). Returns false if the BaseObject has no valid located Site or HouseholdBiz. InRange, OutRange, and None CompareTypes are not supported.

# Parameters

| ParameterDescriptionBaseObjectA customer Character located at a HouseholdBiz site. Used to resolve the current biz.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against F1.F1Threshold purchase desire value to compare against the customer's current gauge. |
| --- |
| BaseObjectA customer Character located at a HouseholdBiz site. Used to resolve the current biz.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against F1.F1Threshold purchase desire value to compare against the customer's current gauge. |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against F1.F1Threshold purchase desire value to compare against the customer's current gauge. |
| F1Threshold purchase desire value to compare against the customer's current gauge. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1Check if Self's purchase desire is greater than 100SelfIsPurchaseDesireOverThresholdGreater100Check if Target's purchase desire is at least 50TargetIsPurchaseDesireOverThresholdGreaterOrEqual50 |
| --- |
| Check if Self's purchase desire is greater than 100SelfIsPurchaseDesireOverThresholdGreater100Check if Target's purchase desire is at least 50TargetIsPurchaseDesireOverThresholdGreaterOrEqual50 |
| Check if Target's purchase desire is at least 50TargetIsPurchaseDesireOverThresholdGreaterOrEqual50 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
