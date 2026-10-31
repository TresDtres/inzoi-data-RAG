---
document_id: "d9e54c497461a114023de6cb1def619a051f76a7a21b24b27fe266dec8577831"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareerseatassigned"
title: "Condition_IsCareerSeatAssigned"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:22+00:00"
content_sha256: "98eba4c5ac90340058ead08905b6f866a415f2e4db5b812d6cc6b26c3540e02b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscareerseatassigned"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Script condition function to check whether a career seat already has an assigned member. Resolves the seat object to its ObjectGrouping root, then looks up the career for the seat's located site and the career type specified by S1.

# Parameters

| ParamsDescriptionBaseObjectSeat game object to check. Self uses the self entity, Target uses target.CommandIsCareerSeatAssigned.CompareTypeEqual returns true when the seat has an assigned member. NotEqual returnstrue when the seat has no assigned member.S1Career type used to resolve the site career. None defaults to Business. |
| --- |
| BaseObjectSeat game object to check. Self uses the self entity, Target uses target.CommandIsCareerSeatAssigned.CompareTypeEqual returns true when the seat has an assigned member. NotEqual returnstrue when the seat has no assigned member.S1Career type used to resolve the site career. None defaults to Business. |
| CommandIsCareerSeatAssigned.CompareTypeEqual returns true when the seat has an assigned member. NotEqual returnstrue when the seat has no assigned member.S1Career type used to resolve the site career. None defaults to Business. |
| CompareTypeEqual returns true when the seat has an assigned member. NotEqual returnstrue when the seat has no assigned member.S1Career type used to resolve the site career. None defaults to Business. |
| true when the seat has no assigned member.S1Career type used to resolve the site career. None defaults to Business. |
| S1Career type used to resolve the site career. None defaults to Business. |

# Notes

- The checked seat is resolved from BaseObject, not from the implicit target.
- ObjectGrouping child objects are normalized to their root entity before lookup.
- The career is resolved by the seat object's located site and S1 career type.
- Returns false when the seat object, site, career manager, or career cannot be resolved.

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if a School locker is already assignedTargetIsCareerSeatAssignedEqualSchoolCheck if a Business seat is emptyTargetIsCareerSeatAssignedNotEqualBusiness |
| --- |
| Check if a School locker is already assignedTargetIsCareerSeatAssignedEqualSchoolCheck if a Business seat is emptyTargetIsCareerSeatAssignedNotEqualBusiness |
| Check if a Business seat is emptyTargetIsCareerSeatAssignedNotEqualBusiness |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)
