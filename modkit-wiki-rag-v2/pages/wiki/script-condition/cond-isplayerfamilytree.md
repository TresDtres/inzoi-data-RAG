---
document_id: "bd0c3e82c08b4a1202398667ad2aa262d099b980e6a2bbc56b3411cfb3199745"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayerfamilytree"
title: "Condition_IsPlayerFamilyTree"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:39+00:00"
content_sha256: "e32619460de8b62c0a748f7232c7e932809cfb7c289114f1852799e78e87c056"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isplayerfamilytree"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject shares the same family tree (blood relation) as the currently played character. Spouses of the played character are also included, but the spouse's own family is not.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose family tree membership will be checkedCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter whose family tree membership will be checkedCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is in the played character's family treeSelfIsPlayerFamilyTreeEqualIf Self is not in the played character's family treeSelfIsPlayerFamilyTreeNotEqualIf Target is in the played character's family treeTargetIsPlayerFamilyTreeEqualIf Target is not in the played character's family treeTargetIsPlayerFamilyTreeNotEqual |
| --- |
| If Self is in the played character's family treeSelfIsPlayerFamilyTreeEqualIf Self is not in the played character's family treeSelfIsPlayerFamilyTreeNotEqualIf Target is in the played character's family treeTargetIsPlayerFamilyTreeEqualIf Target is not in the played character's family treeTargetIsPlayerFamilyTreeNotEqual |
| If Self is not in the played character's family treeSelfIsPlayerFamilyTreeNotEqualIf Target is in the played character's family treeTargetIsPlayerFamilyTreeEqualIf Target is not in the played character's family treeTargetIsPlayerFamilyTreeNotEqual |
| If Target is in the played character's family treeTargetIsPlayerFamilyTreeEqualIf Target is not in the played character's family treeTargetIsPlayerFamilyTreeNotEqual |
| If Target is not in the played character's family treeTargetIsPlayerFamilyTreeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
