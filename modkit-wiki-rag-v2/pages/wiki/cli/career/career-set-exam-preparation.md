---
document_id: "09954f6fe548de647fbd586fbd158e9993405d9979429009635c4f9a9793ca97"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation"
title: "career.set_exam_preparation"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:52+00:00"
content_sha256: "99f1770351d4f9d083026fcb46c6d55230b00649637f361ef811e13818433c88"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/career/career-set-exam-preparation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets a school student's exam preparation score (0-100) to test exam results/grades without studying. Reset to 0 on the weekly school reset (Monday).

# Metadata

| FieldValueDisplaySet Exam PreparationCategory`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetExamPreparation` |
| --- |
| DisplaySet Exam PreparationCategory`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetExamPreparation` |
| Category`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetExamPreparation` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetExamPreparation` |
| Scope`B2Authority`Tags—Aliases`SetExamPreparation` |
| Tags—Aliases`SetExamPreparation` |
| Aliases`SetExamPreparation` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)valueintyes—Exam preparation score (0-100) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)valueintyes—Exam preparation score (0-100) |
| valueintyes—Exam preparation score (0-100) |

# Usage

```
await inzoi.cli.execute('career.set_exam_preparation', {  entity_id: 0, // optional  value: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocareer[career.add_attendance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance)[career.can_promote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote)[career.get_work_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status)[career.join](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join)[career.list_openings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings)[career.promotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion)[career.school_migration_scan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-school-migration-scan)[career.set_business_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level)[career.set_skill_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level)
