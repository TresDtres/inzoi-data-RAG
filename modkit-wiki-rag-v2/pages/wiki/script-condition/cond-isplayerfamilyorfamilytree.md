---
document_id: "5bca80ee26a5a5b1809d127f73d9d4e825689cc2cc0f89db9e4f443777e09ce7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayerfamilyorfamilytree"
title: "Condition_IsPlayerFamilyOrFamilyTree"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:39+00:00"
content_sha256: "f047e28b8ab9820d872611038bfabce6e5e52106b26dc067597b379a18da8635"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isplayerfamilyorfamilytree"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject belongs to the playing household OR shares the same family tree as the currently played character (equivalent to IsPlayerFamily OR IsPlayerFamilyTree). Spouses of the played character are included, but their own families are not.

# Parameters

| ParameterDescriptionBaseObjectCharacter to check for household or family tree membershipCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter to check for household or family tree membershipCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is in the playing household or the played character's family treeSelfIsPlayerFamilyOrFamilyTreeEqualIf Self meets neither conditionSelfIsPlayerFamilyOrFamilyTreeNotEqualIf Target is in the playing household or the played character's family treeTargetIsPlayerFamilyOrFamilyTreeEqualIf Target meets neither conditionTargetIsPlayerFamilyOrFamilyTreeNotEqual |
| --- |
| If Self is in the playing household or the played character's family treeSelfIsPlayerFamilyOrFamilyTreeEqualIf Self meets neither conditionSelfIsPlayerFamilyOrFamilyTreeNotEqualIf Target is in the playing household or the played character's family treeTargetIsPlayerFamilyOrFamilyTreeEqualIf Target meets neither conditionTargetIsPlayerFamilyOrFamilyTreeNotEqual |
| If Self meets neither conditionSelfIsPlayerFamilyOrFamilyTreeNotEqualIf Target is in the playing household or the played character's family treeTargetIsPlayerFamilyOrFamilyTreeEqualIf Target meets neither conditionTargetIsPlayerFamilyOrFamilyTreeNotEqual |
| If Target is in the playing household or the played character's family treeTargetIsPlayerFamilyOrFamilyTreeEqualIf Target meets neither conditionTargetIsPlayerFamilyOrFamilyTreeNotEqual |
| If Target meets neither conditionTargetIsPlayerFamilyOrFamilyTreeNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
