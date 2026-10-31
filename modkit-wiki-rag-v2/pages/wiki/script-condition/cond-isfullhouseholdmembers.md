---
document_id: "1041238fef3684bc351c71d458f509b267c910213d938ee77183bdd0a661f046"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfullhouseholdmembers"
title: "Condition_IsFullHouseholdMembers"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:29+00:00"
content_sha256: "ec523d73d40910ed324a28a6a68bd9a6e3b796e91b2b95049619a37405236766"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfullhouseholdmembers"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject's household has reached the maximum member count defined in HouseholdDataAsset. Equal returns true when the count meets or exceeds the maximum; NotEqual returns true when below the maximum. By default, pregnant characters (unborn) are included in the count. Pass "IgnorePregnancy" in S1 to exclude them.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose household member count will be checkedCompareTypeSupported compare types: Equal, NotEqualS1Pass "IgnorePregnancy" to exclude unborn children from count; leave empty to include them |
| --- |
| BaseObjectCharacter whose household member count will be checkedCompareTypeSupported compare types: Equal, NotEqualS1Pass "IgnorePregnancy" to exclude unborn children from count; leave empty to include them |
| CompareTypeSupported compare types: Equal, NotEqualS1Pass "IgnorePregnancy" to exclude unborn children from count; leave empty to include them |
| S1Pass "IgnorePregnancy" to exclude unborn children from count; leave empty to include them |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self's household is fullSelfIsFullHouseholdMembersEqualIf Self's household is not fullSelfIsFullHouseholdMembersNotEqualIf Self's household is full (ignore pregnancy)SelfIsFullHouseholdMembersEqualIf Target's household still has roomTargetIsFullHouseholdMembersNotEqual |
| --- |
| If Self's household is fullSelfIsFullHouseholdMembersEqualIf Self's household is not fullSelfIsFullHouseholdMembersNotEqualIf Self's household is full (ignore pregnancy)SelfIsFullHouseholdMembersEqualIf Target's household still has roomTargetIsFullHouseholdMembersNotEqual |
| If Self's household is not fullSelfIsFullHouseholdMembersNotEqualIf Self's household is full (ignore pregnancy)SelfIsFullHouseholdMembersEqualIf Target's household still has roomTargetIsFullHouseholdMembersNotEqual |
| If Self's household is full (ignore pregnancy)SelfIsFullHouseholdMembersEqualIf Target's household still has roomTargetIsFullHouseholdMembersNotEqual |
| If Target's household still has roomTargetIsFullHouseholdMembersNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
