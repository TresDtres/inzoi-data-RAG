---
document_id: "4ba85fda656aba04bd5a1dfb8d09535e63c5ae76774fac4ed5c48b097dfc1cc5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerabsenceday"
title: "Condition_CareerAbsenceDay"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:51+00:00"
content_sha256: "4397d333367920f176f461d212cb19da29190f266429311b2faf9270ac8e450b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-careerabsenceday"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the character's absence days against a threshold. Used by UnexcusedAbsenceScript to gate "fired" buffs until the consecutive absence count actually reaches the fire threshold.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose absence days are checked (Self or Target).CommandCareerAbsenceDay (this condition type).CompareTypeThe comparison operator: Equal/NotEqual/Greater/Less/GreaterOrEqual/LessOrEqual.S1EB1AbsenceDayType (Consecutive = ConsecutiveAbsenceDays, Unexcused = UnexcusedAbsenceCount).S2"Fire" -> use UB1CareerDataAsset::FireAbsenceDayThreshold as threshold (F1 ignored).F1Threshold when S2 is not "Fire". Ignored when S2 == "Fire". |
| --- |
| BaseObjectThe entity whose absence days are checked (Self or Target).CommandCareerAbsenceDay (this condition type).CompareTypeThe comparison operator: Equal/NotEqual/Greater/Less/GreaterOrEqual/LessOrEqual.S1EB1AbsenceDayType (Consecutive = ConsecutiveAbsenceDays, Unexcused = UnexcusedAbsenceCount).S2"Fire" -> use UB1CareerDataAsset::FireAbsenceDayThreshold as threshold (F1 ignored).F1Threshold when S2 is not "Fire". Ignored when S2 == "Fire". |
| CommandCareerAbsenceDay (this condition type).CompareTypeThe comparison operator: Equal/NotEqual/Greater/Less/GreaterOrEqual/LessOrEqual.S1EB1AbsenceDayType (Consecutive = ConsecutiveAbsenceDays, Unexcused = UnexcusedAbsenceCount).S2"Fire" -> use UB1CareerDataAsset::FireAbsenceDayThreshold as threshold (F1 ignored).F1Threshold when S2 is not "Fire". Ignored when S2 == "Fire". |
| CompareTypeThe comparison operator: Equal/NotEqual/Greater/Less/GreaterOrEqual/LessOrEqual.S1EB1AbsenceDayType (Consecutive = ConsecutiveAbsenceDays, Unexcused = UnexcusedAbsenceCount).S2"Fire" -> use UB1CareerDataAsset::FireAbsenceDayThreshold as threshold (F1 ignored).F1Threshold when S2 is not "Fire". Ignored when S2 == "Fire". |
| S1EB1AbsenceDayType (Consecutive = ConsecutiveAbsenceDays, Unexcused = UnexcusedAbsenceCount).S2"Fire" -> use UB1CareerDataAsset::FireAbsenceDayThreshold as threshold (F1 ignored).F1Threshold when S2 is not "Fire". Ignored when S2 == "Fire". |
| S2"Fire" -> use UB1CareerDataAsset::FireAbsenceDayThreshold as threshold (F1 ignored).F1Threshold when S2 is not "Fire". Ignored when S2 == "Fire". |
| F1Threshold when S2 is not "Fire". Ignored when S2 == "Fire". |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2F1Has consecutive absence days reached the fire threshold?SelfCareerAbsenceDayGreaterOrEqualConsecutiveFire0Consecutive absence days >= 2SelfCareerAbsenceDayGreaterOrEqualConsecutive2Cumulative unexcused absence count > 5SelfCareerAbsenceDayGreaterUnexcused5 |
| --- |
| Has consecutive absence days reached the fire threshold?SelfCareerAbsenceDayGreaterOrEqualConsecutiveFire0Consecutive absence days >= 2SelfCareerAbsenceDayGreaterOrEqualConsecutive2Cumulative unexcused absence count > 5SelfCareerAbsenceDayGreaterUnexcused5 |
| Consecutive absence days >= 2SelfCareerAbsenceDayGreaterOrEqualConsecutive2Cumulative unexcused absence count > 5SelfCareerAbsenceDayGreaterUnexcused5 |
| Cumulative unexcused absence count > 5SelfCareerAbsenceDayGreaterUnexcused5 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCareer & Freelance[CanAcquireFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canacquirefreelancelicense)[CanDeliverFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candeliverfreelancequestitem)[CanReceiveFreelanceQuestItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canreceivefreelancequestitem)[CareerEmploymentDay](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careeremploymentday)[CareerRank](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrank)[CareerRankCompWithTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-careerrankcompwithtarget)[EmploymentForm](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-employmentform)[FreelanceLicenseGrade](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-freelancelicensegrade)[HasCareer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareer)[HasCareerSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascareerseat)[HasFreelanceLicense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfreelancelicense)[IsCareerEmployee](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscareeremployee)
