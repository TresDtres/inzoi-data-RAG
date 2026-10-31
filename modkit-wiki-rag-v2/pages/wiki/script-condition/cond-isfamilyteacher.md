---
document_id: "de64f752e6f7ea74d0423a8357032487f01a8ca0cb92086e2cfa759a16355305"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isfamilyteacher"
title: "Condition_IsFamilyTeacher"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:28+00:00"
content_sha256: "55c44d6a1aaf61a5f6e98b21283438bf741d9325653cb5e7659bdb908b69290c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isfamilyteacher"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is school staff at the school site of any child of the opposite object. When BaseObject is Target, the parent side is Self. Empty S1 accepts any school staff member in the child's school; S1 can filter by Principal, Teacher, or a concrete Job.Id.

# Parameters

| ParameterDescriptionBaseObjectSchool staff candidate. Usually Target in interaction data.CompareTypeEqual checks that the staff relation exists; NotEqual negates.S1Optional filter: Principal, Teacher, or a concrete Job.Id. |
| --- |
| BaseObjectSchool staff candidate. Usually Target in interaction data.CompareTypeEqual checks that the staff relation exists; NotEqual negates.S1Optional filter: Principal, Teacher, or a concrete Job.Id. |
| CompareTypeEqual checks that the staff relation exists; NotEqual negates.S1Optional filter: Principal, Teacher, or a concrete Job.Id. |
| S1Optional filter: Principal, Teacher, or a concrete Job.Id. |

# Notes

The parent side is the opposite script object resolved from BaseObject and is not a table parameter.

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Target is staff at my child's schoolTargetIsFamilyTeacherEqualCheck if Target is my child's principalTargetIsFamilyTeacherEqualPrincipal |
| --- |
| Check if Target is staff at my child's schoolTargetIsFamilyTeacherEqualCheck if Target is my child's principalTargetIsFamilyTeacherEqualPrincipal |
| Check if Target is my child's principalTargetIsFamilyTeacherEqualPrincipal |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoFamily & Household[CanPregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canpregnancy)[FamilyRelationshipCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-familyrelationshipcount)[HasBuffInHousehold](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasbuffinhousehold)[HasFamilyRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfamilyrelationship)[HasHome](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashome)[HasHomelessSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomelesssite)[HasHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashomework)[HasHouseholdBiz](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbiz)[HasHouseholdBizActivityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizactivitytag)[HasHouseholdBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashouseholdbizsite)[HasRelationshipFamilyLove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrelationshipfamilylove)[HouseholdBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-householdbizrole)
