---
document_id: "0648d8da7216170a6823e4b78c668200fd783ada4fc22df889b52b129b9407fc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteownerhouseholdmember"
title: "Condition_IsSiteOwnerHouseholdMember"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:47+00:00"
content_sha256: "f6ffacd8bdad696a80e553686a82cde64255d1c3a7b8a635a8443728c64d53ff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteownerhouseholdmember"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject character belongs to the same household as the owner of the site where the Target object is located. Used for family-exclusive take-away interactions at household business sites.

# Parameters

| ParameterDescriptionBaseObjectCharacter to check household membershipCompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectCharacter to check household membershipCompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is a household member of the site ownerSelfIsSiteOwnerHouseholdMemberEqualIf Self is not a household member of the site ownerSelfIsSiteOwnerHouseholdMemberNotEqual |
| --- |
| If Self is a household member of the site ownerSelfIsSiteOwnerHouseholdMemberEqualIf Self is not a household member of the site ownerSelfIsSiteOwnerHouseholdMemberNotEqual |
| If Self is not a household member of the site ownerSelfIsSiteOwnerHouseholdMemberNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
