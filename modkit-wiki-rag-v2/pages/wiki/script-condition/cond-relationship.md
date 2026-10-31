---
document_id: "436522be78cec2fe8d97e434007df529572306191c1f05297406d1fa61481a68"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-relationship"
title: "Condition_Relationship"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:56+00:00"
content_sha256: "6ab93cd4a09ab15c7c07a18454cdaff95fa8550973242eba10c466f906f10f66"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-relationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the relationship between Self and Target has the specified relationship name. Always evaluates from Self's perspective regardless of BaseObject setting.

# Parameters

| ParameterDescriptionBaseObjectAlways Self for this condition (the check is from Self's perspective)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship ID to check (defined in Relationship.json) |
| --- |
| BaseObjectAlways Self for this condition (the check is from Self's perspective)CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship ID to check (defined in Relationship.json) |
| CompareTypeType of comparison operation (Equal, NotEqual)S1Relationship ID to check (defined in Relationship.json) |
| S1Relationship ID to check (defined in Relationship.json) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Self has a spouse relationship name with TargetSelfRelationshipEqualMarriagePartnerSelf does not have an engagement relationship with TargetSelfRelationshipNotEqualengagementSelf has a best friend relationship name with TargetSelfRelationshipEqualBestFriendSelf does not have a business partner relationship with TargetSelfRelationshipNotEqualBusinessPartner |
| --- |
| Self has a spouse relationship name with TargetSelfRelationshipEqualMarriagePartnerSelf does not have an engagement relationship with TargetSelfRelationshipNotEqualengagementSelf has a best friend relationship name with TargetSelfRelationshipEqualBestFriendSelf does not have a business partner relationship with TargetSelfRelationshipNotEqualBusinessPartner |
| Self does not have an engagement relationship with TargetSelfRelationshipNotEqualengagementSelf has a best friend relationship name with TargetSelfRelationshipEqualBestFriendSelf does not have a business partner relationship with TargetSelfRelationshipNotEqualBusinessPartner |
| Self has a best friend relationship name with TargetSelfRelationshipEqualBestFriendSelf does not have a business partner relationship with TargetSelfRelationshipNotEqualBusinessPartner |
| Self does not have a business partner relationship with TargetSelfRelationshipNotEqualBusinessPartner |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoRelationship & Romance[CanMarry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarry)[CanMarrySuccess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canmarrysuccess)[Chemistry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-chemistry)[HasRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationship)[HasRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflag)[HasRelationshipFlagGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipflaggroup)[HasRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipname)[HasRelationshipNameCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipnamecount)[HasRelationshipRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshiprecord)[IsLovable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islovable)[IsMatchingRomanceTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ismatchingromancetarget)[IsRelationshipFocusSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrelationshipfocusselection)
