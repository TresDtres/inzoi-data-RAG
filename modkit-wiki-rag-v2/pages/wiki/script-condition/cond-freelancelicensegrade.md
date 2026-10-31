---
document_id: "f55aa575e424504ea162d54aa1b348cbfa7bd87c0dab8b7edc620824f303c8ba"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade"
title: "Condition_FreelanceLicenseGrade"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:59+00:00"
content_sha256: "75b20297255cca1d1aa00065081a0d58cd7dbf01d390bedfef0b6821d1efa2ff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-freelancelicensegrade"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the grade level of a specific freelance license for the BaseObject character. Compares the current grade of the license (identified by S1) against the grade value specified in F1. Grade values: None=0, Beginner=1, Intermediate=2, Advanced=3, Expert=4.

# Parameters

| ParameterDescriptionBaseObjectThe character entity to check the license grade for.CompareTypeSupported compare types: Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.S1LicenseId (refers to License.Id in the data table).F1Grade level to compare against (0=None, 1=Beginner, 2=Intermediate, 3=Advanced, 4=Expert). |
| --- |
| BaseObjectThe character entity to check the license grade for.CompareTypeSupported compare types: Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.S1LicenseId (refers to License.Id in the data table).F1Grade level to compare against (0=None, 1=Beginner, 2=Intermediate, 3=Advanced, 4=Expert). |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.S1LicenseId (refers to License.Id in the data table).F1Grade level to compare against (0=None, 1=Beginner, 2=Intermediate, 3=Advanced, 4=Expert). |
| S1LicenseId (refers to License.Id in the data table).F1Grade level to compare against (0=None, 1=Beginner, 2=Intermediate, 3=Advanced, 4=Expert). |
| F1Grade level to compare against (0=None, 1=Beginner, 2=Intermediate, 3=Advanced, 4=Expert). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1Check if Self's Plumbing license is Advanced or higherSelfFreelanceLicenseGradeGreaterOrEqualPlumbing3Check if Self's Repair license is exactly IntermediateSelfFreelanceLicenseGradeEqualRepair2Check if Target's Cleaning license is below ExpertTargetFreelanceLicenseGradeLessCleaning4 |
| --- |
| Check if Self's Plumbing license is Advanced or higherSelfFreelanceLicenseGradeGreaterOrEqualPlumbing3Check if Self's Repair license is exactly IntermediateSelfFreelanceLicenseGradeEqualRepair2Check if Target's Cleaning license is below ExpertTargetFreelanceLicenseGradeLessCleaning4 |
| Check if Self's Repair license is exactly IntermediateSelfFreelanceLicenseGradeEqualRepair2Check if Target's Cleaning license is below ExpertTargetFreelanceLicenseGradeLessCleaning4 |
| Check if Target's Cleaning license is below ExpertTargetFreelanceLicenseGradeLessCleaning4 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerAbsenceDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)
