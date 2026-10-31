---
document_id: "11811fa255cce3453c24e8d048a833be7050fe5dbb5254b292e84b832272a5e9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1highesteducationdata"
title: "B1HighestEducationData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:09+00:00"
content_sha256: "b6dcb4f83f54acdf7f6662693760e2b5bfbe7ba4ae1b4915bc29d56bd1b1a21a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1highesteducationdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Structure that stores the highest education data for a character. * Tracks the education level, achievement rating, and the associated job unlocked by education.

| PropertyTypeDescriptionMetadataHighestEducationLevelEB1EducationTypeThe highest education level the character has reached.Category: B1HighestEducationDataAchievementRankint32Achievement rank at graduation (e.g., Excellent, Good, Poor).Category: B1HighestEducationDataJobIdFNameJob ID associated with this education record (references Job.Id).Category: B1HighestEducationData Foreign: Job.IdCareerDtIdFNameCareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.Category: B1HighestEducationData Foreign: Company.IdSchoolGradeEB1SchoolGradeFinal weekly evaluation grade at graduation. None for pre-evaluation-era graduates.Category: B1HighestEducationData |
| --- |
| HighestEducationLevelEB1EducationTypeThe highest education level the character has reached.Category: B1HighestEducationDataAchievementRankint32Achievement rank at graduation (e.g., Excellent, Good, Poor).Category: B1HighestEducationDataJobIdFNameJob ID associated with this education record (references Job.Id).Category: B1HighestEducationData Foreign: Job.IdCareerDtIdFNameCareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.Category: B1HighestEducationData Foreign: Company.IdSchoolGradeEB1SchoolGradeFinal weekly evaluation grade at graduation. None for pre-evaluation-era graduates.Category: B1HighestEducationData |
| AchievementRankint32Achievement rank at graduation (e.g., Excellent, Good, Poor).Category: B1HighestEducationDataJobIdFNameJob ID associated with this education record (references Job.Id).Category: B1HighestEducationData Foreign: Job.IdCareerDtIdFNameCareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.Category: B1HighestEducationData Foreign: Company.IdSchoolGradeEB1SchoolGradeFinal weekly evaluation grade at graduation. None for pre-evaluation-era graduates.Category: B1HighestEducationData |
| JobIdFNameJob ID associated with this education record (references Job.Id).Category: B1HighestEducationData Foreign: Job.IdCareerDtIdFNameCareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.Category: B1HighestEducationData Foreign: Company.IdSchoolGradeEB1SchoolGradeFinal weekly evaluation grade at graduation. None for pre-evaluation-era graduates.Category: B1HighestEducationData |
| CareerDtIdFNameCareerDtId (Company.Id) of the school. NAME_None for legacy saves or NPCs without school assignment.Category: B1HighestEducationData Foreign: Company.IdSchoolGradeEB1SchoolGradeFinal weekly evaluation grade at graduation. None for pre-evaluation-era graduates.Category: B1HighestEducationData |
| SchoolGradeEB1SchoolGradeFinal weekly evaluation grade at graduation. None for pre-evaluation-era graduates.Category: B1HighestEducationData |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
