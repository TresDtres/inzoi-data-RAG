---
document_id: "98599382e9b8c2f1e50b5891954a056076371cd56fcd31055a11a202eca8727b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/job"
title: "📘 Job Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:51+00:00"
content_sha256: "5398fe9e21da0536fa59c776779cfe7e4560c6dcda9cd54e88fb177f0c33b90c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/job"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1JobTableRow

Defines a job or profession, including its type, scripts, levels, and promotion paths.

### Properties

- **Id** (`FName`): Unique identifier for the job type.
- **JobType** (`EB1JobType`): Classification of this job (e.g., Normal, Student).
- **DisplayNameTextId** (`FString`): Localized name of the job. *(StringTableKey = "Id")*
- **RetirementTextId** (`FString`): Localized message shown when retiring from this job. *(StringTableKey)*
- **EnterScriptId** (`FName`): Script executed when entering this job. *(Foreign = "Script_Job.Id")*
- **LeaveScriptId** (`FName`): Script executed when leaving this job. *(Foreign = "Script_Job.Id")*
- **JobPromotions** (`TArray<FName>`): List of job IDs this one can promote into. *(Foreign = "Job.Id")*
- **Levels** (`TArray<FB1JobLevel>`): Job level configurations, including conditions and rewards.

## 📚 References

- [EB1JobType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1jobtype)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoJob[EB1JobType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1jobtype)[FB1JobEventAction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1jobeventaction)[FB1JobInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1jobinfo)[FB1JobLeaveEventConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1jobleaveeventconfig)[FB1JobLeaveReasonAction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1jobleavereasonaction)[FB1JobSearchJobData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1jobsearchjobdata)[FB1JobTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1jobtablerow)
