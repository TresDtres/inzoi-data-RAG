---
document_id: "b1a446430509b6b26ad216c3947d93ed456a593fef25c27e7ffd67c398829511"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayerfamilyandfamilytree"
title: "Condition_IsPlayerFamilyAndFamilyTree"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:39+00:00"
content_sha256: "be7bcdf3fe7aea31cc6fad8d14b5f811ed7043c8ba780fc1ee3f267e17fba093"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isplayerfamilyandfamilytree"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject belongs to the playing household AND shares the same family tree as the currently played character (equivalent to IsPlayerFamily AND IsPlayerFamilyTree). Spouses of the played character are included, but their own families are not.

# Parameters

| ParameterDescriptionBaseObjectCharacter to check for both household and family tree membershipCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter to check for both household and family tree membershipCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is in playing household and the played character's family treeSelfIsPlayerFamilyAndFamilyTreeEqualIf Self fails either conditionSelfIsPlayerFamilyAndFamilyTreeNotEqualIf Target is in playing household and the played character's family treeTargetIsPlayerFamilyAndFamilyTreeEqualIf Target fails either conditionTargetIsPlayerFamilyAndFamilyTreeNotEqual |
| --- |
| If Self is in playing household and the played character's family treeSelfIsPlayerFamilyAndFamilyTreeEqualIf Self fails either conditionSelfIsPlayerFamilyAndFamilyTreeNotEqualIf Target is in playing household and the played character's family treeTargetIsPlayerFamilyAndFamilyTreeEqualIf Target fails either conditionTargetIsPlayerFamilyAndFamilyTreeNotEqual |
| If Self fails either conditionSelfIsPlayerFamilyAndFamilyTreeNotEqualIf Target is in playing household and the played character's family treeTargetIsPlayerFamilyAndFamilyTreeEqualIf Target fails either conditionTargetIsPlayerFamilyAndFamilyTreeNotEqual |
| If Target is in playing household and the played character's family treeTargetIsPlayerFamilyAndFamilyTreeEqualIf Target fails either conditionTargetIsPlayerFamilyAndFamilyTreeNotEqual |
| If Target fails either conditionTargetIsPlayerFamilyAndFamilyTreeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
