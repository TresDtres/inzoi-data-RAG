---
document_id: "9c588ccf97027850126d397fc6846dbdd17a0c3e6bed01150db57eb13b0140fa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolgraduationrecord"
title: "B1SchoolGraduationRecord"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:34+00:00"
content_sha256: "14b504a349cfb584dda07b25bb05a1fbe23d0aabff8a7e8028d2f1178de67b97"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1schoolgraduationrecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- A single graduation record for a character's school career. * Replaces the Student-type entries (FB1JobInfo) formerly stored in FB2JobComponent::JobInfos. ** Mapping from the old FB1JobInfo: * JobId <- FB1JobInfo::JobId * AchievementLevel <- FB1JobInfo::Level (used by scripts such as Condition_IsGraduationRank) * GraduationTicks <- FB2TimeManager::GetCurrentTicks() (at time of graduation) ** Used by: * FB2CareerComponent::GraduationRecords (array of graduation records) * FB2CareerComponent::IsGraduation() (determines whether graduated) * FB2CareerComponent::GetGraduationRecord() (replaces GetGraduationInfo)

| PropertyTypeDescriptionMetadataJobIdFNameThe Student JobId of the school the character graduated from.Foreign: Job.IdCareerDtIdFNameThe CareerDtId (Company.Id) of the school graduated from. NAME_None in legacy saves.Foreign: Company.IdEducationTypeEB1EducationTypeThe education type of the school graduated from. Stored directly rather than derived from JobId.AchievementRankint32The member's Rank at the time of graduation. Compared against by the Condition_IsGraduationRank script.GraduationTicksint64The game tick at the time of graduation.SchoolGradeEB1SchoolGradeThe last weekly evaluation grade at the time of graduation. None for graduates prior to the evaluation system. |
| --- |
| JobIdFNameThe Student JobId of the school the character graduated from.Foreign: Job.IdCareerDtIdFNameThe CareerDtId (Company.Id) of the school graduated from. NAME_None in legacy saves.Foreign: Company.IdEducationTypeEB1EducationTypeThe education type of the school graduated from. Stored directly rather than derived from JobId.AchievementRankint32The member's Rank at the time of graduation. Compared against by the Condition_IsGraduationRank script.GraduationTicksint64The game tick at the time of graduation.SchoolGradeEB1SchoolGradeThe last weekly evaluation grade at the time of graduation. None for graduates prior to the evaluation system. |
| CareerDtIdFNameThe CareerDtId (Company.Id) of the school graduated from. NAME_None in legacy saves.Foreign: Company.IdEducationTypeEB1EducationTypeThe education type of the school graduated from. Stored directly rather than derived from JobId.AchievementRankint32The member's Rank at the time of graduation. Compared against by the Condition_IsGraduationRank script.GraduationTicksint64The game tick at the time of graduation.SchoolGradeEB1SchoolGradeThe last weekly evaluation grade at the time of graduation. None for graduates prior to the evaluation system. |
| EducationTypeEB1EducationTypeThe education type of the school graduated from. Stored directly rather than derived from JobId.AchievementRankint32The member's Rank at the time of graduation. Compared against by the Condition_IsGraduationRank script.GraduationTicksint64The game tick at the time of graduation.SchoolGradeEB1SchoolGradeThe last weekly evaluation grade at the time of graduation. None for graduates prior to the evaluation system. |
| AchievementRankint32The member's Rank at the time of graduation. Compared against by the Condition_IsGraduationRank script.GraduationTicksint64The game tick at the time of graduation.SchoolGradeEB1SchoolGradeThe last weekly evaluation grade at the time of graduation. None for graduates prior to the evaluation system. |
| GraduationTicksint64The game tick at the time of graduation.SchoolGradeEB1SchoolGradeThe last weekly evaluation grade at the time of graduation. None for graduates prior to the evaluation system. |
| SchoolGradeEB1SchoolGradeThe last weekly evaluation grade at the time of graduation. None for graduates prior to the evaluation system. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSchool[FB1SchoolActivityRoleActionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolactivityroleactiondata)[FB1SchoolActivityTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolactivitytablerow)[FB1SchoolClassDayActivityData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassdayactivitydata)[FB1SchoolClassScheduleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassscheduledata)[FB1SchoolClassScheduleTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassscheduletablerow)[FB1SchoolClassSlotScheduleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassslotscheduledata)[FB1SchoolDailyRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schooldailyrecord)[FB1SchoolDefaultUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schooldefaultuniform)[FB1SchoolEvaluationData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolevaluationdata)[FB1SchoolExamConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolexamconfig)[FB1SchoolExpulsionRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolexpulsionrecord)[FB1SchoolHomeworkAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolhomeworkassignment)
