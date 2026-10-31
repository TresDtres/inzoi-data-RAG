---
document_id: "29a49797438b96256dcd3a836d733988c784c70ba317ad6dc3c70b173a10b55f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy"
title: "Condition_CanPregnancy"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:49+00:00"
content_sha256: "a6c2c16587fee916afb70ac5d6950a94040442a4dc7ea94b4cb0ac54db087358"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canpregnancy"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self and Target can have a child. One must be female and one male (physical sex). The female must not be pregnant, both must be at least Youth age, and the household must have capacity. Returns false for Autonomy interactions when either party belongs to the currently played household.

# Parameters

| ParameterDescriptionBaseObjectMust be SelfCompareTypeEqual, NotEqual |
| --- |
| BaseObjectMust be SelfCompareTypeEqual, NotEqual |
| CompareTypeEqual, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self and Target can have a childSelfCanPregnancyEqualCheck if Self and Target cannot have a childSelfCanPregnancyNotEqual |
| --- |
| Check if Self and Target can have a childSelfCanPregnancyEqualCheck if Self and Target cannot have a childSelfCanPregnancyNotEqual |
| Check if Self and Target cannot have a childSelfCanPregnancyNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)[HouseholdBizRoleTargetSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizroletargetsite)
