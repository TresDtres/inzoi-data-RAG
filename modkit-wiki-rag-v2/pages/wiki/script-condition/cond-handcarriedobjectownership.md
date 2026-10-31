---
document_id: "0b5de0431cf62ae8256f2c3c8a42910b12c2e74fe5c74f6f1fb9346c630374a1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership"
title: "Condition_HandCarriedObjectOwnership"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "790514f03a6fbeca08d91d4e1be2452799eedf6ed0bfcd66848ae70ec5f8bccb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-handcarriedobjectownership"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the object currently held in the character's hand has the specified ownership type. S1 determines the ownership check mode: Character, Household, HouseholdMember, or empty (both Character and Household). S2 selects the hand: "Left" for left hand, anything else for right hand.

# Parameters

| ParameterDescriptionBaseObjectThe character whose hand-carried object ownership will be checkedCompareTypeComparison operator: Equal, NotEqualS1Ownership check mode: "Character", "Household", "HouseholdMember", or empty (checks both Character+Household)S2Hand selector: "Left" checks left hand; anything else checks right hand (default) |
| --- |
| BaseObjectThe character whose hand-carried object ownership will be checkedCompareTypeComparison operator: Equal, NotEqualS1Ownership check mode: "Character", "Household", "HouseholdMember", or empty (checks both Character+Household)S2Hand selector: "Left" checks left hand; anything else checks right hand (default) |
| CompareTypeComparison operator: Equal, NotEqualS1Ownership check mode: "Character", "Household", "HouseholdMember", or empty (checks both Character+Household)S2Hand selector: "Left" checks left hand; anything else checks right hand (default) |
| S1Ownership check mode: "Character", "Household", "HouseholdMember", or empty (checks both Character+Household)S2Hand selector: "Left" checks left hand; anything else checks right hand (default) |
| S2Hand selector: "Left" checks left hand; anything else checks right hand (default) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if right-hand object is owned by the characterSelfHandCarriedObjectOwnershipEqualCharacterCheck if left-hand object is owned by character's householdSelfHandCarriedObjectOwnershipEqualHouseholdLeftCheck if right-hand object is owned by any household memberSelfHandCarriedObjectOwnershipEqualHouseholdMemberCheck if right-hand object is not owned by character or householdSelfHandCarriedObjectOwnershipNotEqual |
| --- |
| Check if right-hand object is owned by the characterSelfHandCarriedObjectOwnershipEqualCharacterCheck if left-hand object is owned by character's householdSelfHandCarriedObjectOwnershipEqualHouseholdLeftCheck if right-hand object is owned by any household memberSelfHandCarriedObjectOwnershipEqualHouseholdMemberCheck if right-hand object is not owned by character or householdSelfHandCarriedObjectOwnershipNotEqual |
| Check if left-hand object is owned by character's householdSelfHandCarriedObjectOwnershipEqualHouseholdLeftCheck if right-hand object is owned by any household memberSelfHandCarriedObjectOwnershipEqualHouseholdMemberCheck if right-hand object is not owned by character or householdSelfHandCarriedObjectOwnershipNotEqual |
| Check if right-hand object is owned by any household memberSelfHandCarriedObjectOwnershipEqualHouseholdMemberCheck if right-hand object is not owned by character or householdSelfHandCarriedObjectOwnershipNotEqual |
| Check if right-hand object is not owned by character or householdSelfHandCarriedObjectOwnershipNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)
