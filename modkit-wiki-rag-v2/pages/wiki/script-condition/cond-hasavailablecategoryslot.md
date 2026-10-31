---
document_id: "f285260972e0daa2207bf3dc001550104ecfb311128172c7cd4153f629b696b3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasavailablecategoryslot"
title: "Condition_HasAvailableCategorySlot"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:02+00:00"
content_sha256: "4345aa752d430249240a5e04ffc36a75156f41659dcb616858d7fb50f036a70d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasavailablecategoryslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if BaseObject character has available outfit slot (<5) in a resolved OutfitCategory. Category source is selected by S1 to match the paired Execute's category resolution: S1="Mannequin" → NonBaseObject (Target) mannequin's OutfitCategory (pairs with Execute_BuyMannequinOutfit). otherwise → BaseObject character's currently-worn OutfitCategory, Everyday fallback when None (pairs with Execute_BuyAndWearMannequinOutfit's categoryOverride=currentCategory).

# Parameters

| ParameterDescriptionBaseObjectSelf (character) or Target — the character whose slots to check.S1Optional. "Mannequin" to use mannequin category; else character.CompareTypeEqual: has available slot → true. NotEqual: full → true. |
| --- |
| BaseObjectSelf (character) or Target — the character whose slots to check.S1Optional. "Mannequin" to use mannequin category; else character.CompareTypeEqual: has available slot → true. NotEqual: full → true. |
| S1Optional. "Mannequin" to use mannequin category; else character.CompareTypeEqual: has available slot → true. NotEqual: full → true. |
| CompareTypeEqual: has available slot → true. NotEqual: full → true. |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
