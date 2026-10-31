---
document_id: "b7eff955e7e146ce47ce2e6a534a7f536a8c054bf14ef09a00b558b44e550cb8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfamilyhead"
title: "Condition_IsFamilyHead"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:27+00:00"
content_sha256: "6c4953c068a2b4743d4c54a3aef69d301d36b4b049f57e8d20367f3071ef0c8a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfamilyhead"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is the head of their household. The household head is determined as the oldest member of the household.

When S1 is ExcludeBusyElsewhere, members who BOTH have an active schedule (B2TimelineComponent::GetScheduleAtNow() != nullptr) AND are located at a different site from the BaseObject are excluded from the candidate pool. Members who are at the same site as the BaseObject — including the BaseObject itself — remain candidates regardless of schedule. The head is then the oldest among the remaining members. If every other member is busy elsewhere, only the BaseObject remains and is treated as the head.

If no valid head can be determined (e.g., household lookup fails, no member has a valid BioComponent, or every member is filtered out), the condition returns false regardless of CompareType — i.e., neither Equal nor NotEqual is satisfied.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose household head status will be checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Optional. ExcludeBusyElsewhere to exclude members scheduled at a different site |
| --- |
| BaseObjectCharacter whose household head status will be checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Optional. ExcludeBusyElsewhere to exclude members scheduled at a different site |
| CompareTypeSupported compare types: Equal, NotEqualS1Optional. ExcludeBusyElsewhere to exclude members scheduled at a different site |
| S1Optional. ExcludeBusyElsewhere to exclude members scheduled at a different site |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1If Self is the head of the householdSelfIsFamilyHeadEqualIf Self is not the head of the householdSelfIsFamilyHeadNotEqualIf Target is the head of the householdTargetIsFamilyHeadEqualIf Target is not the head of the householdTargetIsFamilyHeadNotEqualIf Self is the head among members at the same site or with no current scheduleSelfIsFamilyHeadEqualExcludeBusyElsewhereIf Self is not the head among members at the same site or with no current scheduleSelfIsFamilyHeadNotEqualExcludeBusyElsewhere |
| --- |
| If Self is the head of the householdSelfIsFamilyHeadEqualIf Self is not the head of the householdSelfIsFamilyHeadNotEqualIf Target is the head of the householdTargetIsFamilyHeadEqualIf Target is not the head of the householdTargetIsFamilyHeadNotEqualIf Self is the head among members at the same site or with no current scheduleSelfIsFamilyHeadEqualExcludeBusyElsewhereIf Self is not the head among members at the same site or with no current scheduleSelfIsFamilyHeadNotEqualExcludeBusyElsewhere |
| If Self is not the head of the householdSelfIsFamilyHeadNotEqualIf Target is the head of the householdTargetIsFamilyHeadEqualIf Target is not the head of the householdTargetIsFamilyHeadNotEqualIf Self is the head among members at the same site or with no current scheduleSelfIsFamilyHeadEqualExcludeBusyElsewhereIf Self is not the head among members at the same site or with no current scheduleSelfIsFamilyHeadNotEqualExcludeBusyElsewhere |
| If Target is the head of the householdTargetIsFamilyHeadEqualIf Target is not the head of the householdTargetIsFamilyHeadNotEqualIf Self is the head among members at the same site or with no current scheduleSelfIsFamilyHeadEqualExcludeBusyElsewhereIf Self is not the head among members at the same site or with no current scheduleSelfIsFamilyHeadNotEqualExcludeBusyElsewhere |
| If Target is not the head of the householdTargetIsFamilyHeadNotEqualIf Self is the head among members at the same site or with no current scheduleSelfIsFamilyHeadEqualExcludeBusyElsewhereIf Self is not the head among members at the same site or with no current scheduleSelfIsFamilyHeadNotEqualExcludeBusyElsewhere |
| If Self is the head among members at the same site or with no current scheduleSelfIsFamilyHeadEqualExcludeBusyElsewhereIf Self is not the head among members at the same site or with no current scheduleSelfIsFamilyHeadNotEqualExcludeBusyElsewhere |
| If Self is not the head among members at the same site or with no current scheduleSelfIsFamilyHeadNotEqualExcludeBusyElsewhere |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
