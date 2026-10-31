---
document_id: "96df75762f3c2cbdc67033316cead7f560dd1af2a751bf5b94d870a3ad4bef74"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownership"
title: "Condition_HasOwnership"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:11+00:00"
content_sha256: "bee8429e683cb49e03ff7bb916d7cd733ede21cf4ca8246d31e852aacbed3b84"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasownership"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the NonBaseObject character holds ownership of the BaseObject game object. If BaseObject is Self, checks Self(object)-Target(character). If BaseObject is Target, checks Target(object)-Self(character). S1 determines the ownership check mode: "Character", "Household", or empty (both). S2 can be set to "CheckHouseholdMember" to also check if any household member owns the object.

# Parameters

| ParameterDescriptionBaseObjectThe game object to check ownership of (Self = object, Target = character)CompareTypeComparison operator: Equal, NotEqualS1Ownership check mode: "Character", "Household", or empty (checks both Character and Household)S2(Optional) "CheckHouseholdMember" to also check if any household member has individual ownership |
| --- |
| BaseObjectThe game object to check ownership of (Self = object, Target = character)CompareTypeComparison operator: Equal, NotEqualS1Ownership check mode: "Character", "Household", or empty (checks both Character and Household)S2(Optional) "CheckHouseholdMember" to also check if any household member has individual ownership |
| CompareTypeComparison operator: Equal, NotEqualS1Ownership check mode: "Character", "Household", or empty (checks both Character and Household)S2(Optional) "CheckHouseholdMember" to also check if any household member has individual ownership |
| S1Ownership check mode: "Character", "Household", or empty (checks both Character and Household)S2(Optional) "CheckHouseholdMember" to also check if any household member has individual ownership |
| S2(Optional) "CheckHouseholdMember" to also check if any household member has individual ownership |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if Target character individually owns Self objectSelfHasOwnershipEqualCharacterCheck if Target character's household owns Self objectSelfHasOwnershipEqualHouseholdCheck if Target character or household owns Self objectSelfHasOwnershipEqualCheck if any household member individually owns Self objectSelfHasOwnershipEqualCharacterCheckHouseholdMember |
| --- |
| Check if Target character individually owns Self objectSelfHasOwnershipEqualCharacterCheck if Target character's household owns Self objectSelfHasOwnershipEqualHouseholdCheck if Target character or household owns Self objectSelfHasOwnershipEqualCheck if any household member individually owns Self objectSelfHasOwnershipEqualCharacterCheckHouseholdMember |
| Check if Target character's household owns Self objectSelfHasOwnershipEqualHouseholdCheck if Target character or household owns Self objectSelfHasOwnershipEqualCheck if any household member individually owns Self objectSelfHasOwnershipEqualCharacterCheckHouseholdMember |
| Check if Target character or household owns Self objectSelfHasOwnershipEqualCheck if any household member individually owns Self objectSelfHasOwnershipEqualCharacterCheckHouseholdMember |
| Check if any household member individually owns Self objectSelfHasOwnershipEqualCharacterCheckHouseholdMember |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
