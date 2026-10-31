---
document_id: "04ab723afef08690575862445be1c269805c855ea44e7a84209bd7c1157fd0e8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbargainable"
title: "Condition_IsBargainable"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:20+00:00"
content_sha256: "49342fbba4753fe9cee94905fe5e91348e0e2d235412c75991dd1df7dec07a85"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isbargainable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Script condition function to check if a game object is bargainable.

This condition determines whether a game object (BaseObject) can be bargained by a character (NonBaseObject). The bargainability check differs based on the site type: for TinyShop sites, it checks the shop's bargain rules; for other sites (e.g., flea markets), it checks ownership.

# Parameters

| ParameterDescriptionBaseObjectGame object entity to check for bargainabilityCompareTypeNot used internally |
| --- |
| BaseObjectGame object entity to check for bargainabilityCompareTypeNot used internally |
| CompareTypeNot used internally |

# Notes

- The character entity is resolved internally via ScriptContext (NonBaseObject).
- Returns false if either BaseObject or NonBaseObject entity is invalid.
- Returns false if the game object's located site is invalid.
- **For TinyShop sites**: Uses TinyShopComponent.IsBargainable() to check bargain eligibility.
- **For non-TinyShop sites (e.g., flea markets)**: Falls back to Condition_HasOwnership check.
- CompareType is not used internally.

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if object can be bargainedSelfIsBargainableEqual |
| --- |
| Check if object can be bargainedSelfIsBargainableEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
