---
document_id: "850667ee6a28da9874f9c3a23b22d0a25db322c4c2a69a6a14b11d999da84cef"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolweeklyresult"
title: "B1SchoolWeeklyResult"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:34+00:00"
content_sha256: "c6d92aa8c9fa93b8c39086f0f41ecde33a7b71d82908aa1eae0b5c8ce05c8ec2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1schoolweeklyresult"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

The evaluation result for one week: per-category scores, total score, and grade. * Produced once every Friday by FinalizeWeeklyEvaluation and permanently kept in WeeklyHistory.

| PropertyTypeDescriptionMetadataWeekIndexint32The week number since school enrollment (starting at 1). Assigned by FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1), or 1 otherwise. * The numbering stays continuous even if WeeklyHistory is trimmed for exceeding DA->MaxWeeklyHistoryCount.AttendanceScoreint32The attendance score for this week (0~15).ParticipationScoreint32The class participation score for this week (0~25).HomeworkScoreint32The homework score for this week (0~20).ExamScoreint32The exam score for this week (0~40, sum of the two slots).RelationshipScoreint32The peer-relationship bonus score for this week (0~10).TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| --- |
| WeekIndexint32The week number since school enrollment (starting at 1). Assigned by FinalizeWeeklyEvaluation as (last entry's WeekIndex + 1), or 1 otherwise. * The numbering stays continuous even if WeeklyHistory is trimmed for exceeding DA->MaxWeeklyHistoryCount.AttendanceScoreint32The attendance score for this week (0~15).ParticipationScoreint32The class participation score for this week (0~25).HomeworkScoreint32The homework score for this week (0~20).ExamScoreint32The exam score for this week (0~40, sum of the two slots).RelationshipScoreint32The peer-relationship bonus score for this week (0~10).TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| AttendanceScoreint32The attendance score for this week (0~15).ParticipationScoreint32The class participation score for this week (0~25).HomeworkScoreint32The homework score for this week (0~20).ExamScoreint32The exam score for this week (0~40, sum of the two slots).RelationshipScoreint32The peer-relationship bonus score for this week (0~10).TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| ParticipationScoreint32The class participation score for this week (0~25).HomeworkScoreint32The homework score for this week (0~20).ExamScoreint32The exam score for this week (0~40, sum of the two slots).RelationshipScoreint32The peer-relationship bonus score for this week (0~10).TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| HomeworkScoreint32The homework score for this week (0~20).ExamScoreint32The exam score for this week (0~40, sum of the two slots).RelationshipScoreint32The peer-relationship bonus score for this week (0~10).TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| ExamScoreint32The exam score for this week (0~40, sum of the two slots).RelationshipScoreint32The peer-relationship bonus score for this week (0~10).TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| RelationshipScoreint32The peer-relationship bonus score for this week (0~10).TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| TotalScoreint32The total weekly score, sum of all categories (0~100).GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |
| GradeEB1SchoolGradeThe letter grade derived from the total score for this week. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSchool[FB1SchoolActivityRoleActionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolactivityroleactiondata)[FB1SchoolActivityTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolactivitytablerow)[FB1SchoolClassDayActivityData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassdayactivitydata)[FB1SchoolClassScheduleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassscheduledata)[FB1SchoolClassScheduleTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassscheduletablerow)[FB1SchoolClassSlotScheduleData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolclassslotscheduledata)[FB1SchoolDailyRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schooldailyrecord)[FB1SchoolDefaultUniform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schooldefaultuniform)[FB1SchoolEvaluationData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolevaluationdata)[FB1SchoolExamConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolexamconfig)[FB1SchoolExpulsionRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolexpulsionrecord)[FB1SchoolGraduationRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1schoolgraduationrecord)
