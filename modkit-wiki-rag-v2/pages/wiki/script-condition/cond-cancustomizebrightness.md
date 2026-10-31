---
document_id: "7b9dc448664e22aa4f4e8b1bb9c3acefc2dfef28cb54127709da5c5ae1708cbd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness"
title: "Condition_CanCustomizeBrightness"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:47+00:00"
content_sha256: "06a16d037b2fc55fb7cc09f5f4ad29ad6c02efc37010e94c2d85c15df6d750a3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-cancustomizebrightness"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Checks whether the BaseObject light object can have its brightness changed at all - that is, whether it owns a customizable part whose ParamUsage enables both emissive color and emissive multiplier. Gate the brightness interaction bags with this so they disappear on lamps that have no customizable emissive part, instead of showing entries that do nothing when clicked. BaseObject = Target (the light object). S1/S2 and F1/F2 are unused. CompareType must be Equal or NotEqual.

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)[CanInviteStayoverGuest](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninvitestayoverguest)
