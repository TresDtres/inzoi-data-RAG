---
document_id: "8d3031a69dbbb4c8837bc493071030ebcd6e0fdceb0dec1b4c7ae31af1331fa8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfamilyagerank"
title: "Condition_IsFamilyAgeRank"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:27+00:00"
content_sha256: "583eeaf0b9cc0a8dd9549d249f2685316a0df2d42f03372c32032b94384d0d88"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfamilyagerank"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the BaseObject's age rank within the family. Rank 1 is the oldest member. Returns false if the character does not belong to any family (rank == -1).

# Parameters

| ParameterDescriptionBaseObjectCharacter whose age rank within the family will be evaluatedCompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeF1Age rank value to compare against (or minimum value for Range)F2Maximum age rank for Range comparison |
| --- |
| BaseObjectCharacter whose age rank within the family will be evaluatedCompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeF1Age rank value to compare against (or minimum value for Range)F2Maximum age rank for Range comparison |
| CompareTypeSupported compare types: Equal, NotEqual, Less, LessEqual, Greater, GreaterEqual, RangeF1Age rank value to compare against (or minimum value for Range)F2Maximum age rank for Range comparison |
| F1Age rank value to compare against (or minimum value for Range)F2Maximum age rank for Range comparison |
| F2Maximum age rank for Range comparison |

# Examples

| DescriptionBaseObjectCommandCompareTypeIf Self is the oldest member in the familySelfIsFamilyAgeRankEqualIf Target is 2nd oldest or higher in the familyTargetIsFamilyAgeRankGreaterEqualIf Self is 3rd oldest or lower in the familySelfIsFamilyAgeRankLessEqualIf Target's rank is between 2nd and 4thTargetIsFamilyAgeRankRange |
| --- |
| If Self is the oldest member in the familySelfIsFamilyAgeRankEqualIf Target is 2nd oldest or higher in the familyTargetIsFamilyAgeRankGreaterEqualIf Self is 3rd oldest or lower in the familySelfIsFamilyAgeRankLessEqualIf Target's rank is between 2nd and 4thTargetIsFamilyAgeRankRange |
| If Target is 2nd oldest or higher in the familyTargetIsFamilyAgeRankGreaterEqualIf Self is 3rd oldest or lower in the familySelfIsFamilyAgeRankLessEqualIf Target's rank is between 2nd and 4thTargetIsFamilyAgeRankRange |
| If Self is 3rd oldest or lower in the familySelfIsFamilyAgeRankLessEqualIf Target's rank is between 2nd and 4thTargetIsFamilyAgeRankRange |
| If Target's rank is between 2nd and 4thTargetIsFamilyAgeRankRange |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
