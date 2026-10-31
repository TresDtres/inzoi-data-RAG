---
document_id: "5af4c5cb72ccdcecf8c449231edff4f8b7354d6408fdb5537f738a841f5372e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1licenseacquirecondition"
title: "FB1LicenseAcquireCondition"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:16+00:00"
content_sha256: "99d3960e3f824a33a5f902b0d6acddede421c5fc47fc7c1da5c3bbc665f69f9d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1licenseacquirecondition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the acquisition condition for a license, specifying the method and the required parameter values for that method. License acquisition condition.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`F1``number`Generic float parameter (used differently based on Method): Job=required work days, Business=required operation days, Skill=required skill level, Exam=passing score.`Method`[`EB1LicenseAcquireMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licenseacquiremethod)Acquisition method (Job/Business/Skill/Exam).`S1``string`Generic string parameter (used differently based on Method): Job=JobId, Business=BusinessId, Skill=SkillId, Exam=ExamId. |
| --- |
| `F1``number`Generic float parameter (used differently based on Method): Job=required work days, Business=required operation days, Skill=required skill level, Exam=passing score.`Method`[`EB1LicenseAcquireMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licenseacquiremethod)Acquisition method (Job/Business/Skill/Exam).`S1``string`Generic string parameter (used differently based on Method): Job=JobId, Business=BusinessId, Skill=SkillId, Exam=ExamId. |
| `Method`[`EB1LicenseAcquireMethod`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1licenseacquiremethod)Acquisition method (Job/Business/Skill/Exam).`S1``string`Generic string parameter (used differently based on Method): Job=JobId, Business=BusinessId, Skill=SkillId, Exam=ExamId. |
| `S1``string`Generic string parameter (used differently based on Method): Job=JobId, Business=BusinessId, Skill=SkillId, Exam=ExamId. |
