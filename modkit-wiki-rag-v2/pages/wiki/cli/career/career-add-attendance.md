---
document_id: "c036a34e855bcf4fcedf9a01df4ca8dede779e8d5683c272bbed5c5f8a6ac163"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance"
title: "career.add_attendance"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:52+00:00"
content_sha256: "36f539e955adbe300e9832d742cdbe33fd151c1426a9320dba2998f928064550"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/career/career-add-attendance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds attendance days to a character's career record for retirement eligibility testing

# Metadata

| FieldValueDisplayAdd Attendance DaysCategory`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`B2AddCareerAttendance` |
| --- |
| DisplayAdd Attendance DaysCategory`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`B2AddCareerAttendance` |
| Category`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`B2AddCareerAttendance` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`B2AddCareerAttendance` |
| Scope`B2Authority`Tags—Aliases`B2AddCareerAttendance` |
| Tags—Aliases`B2AddCareerAttendance` |
| Aliases`B2AddCareerAttendance` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character EntityId (default: possessed)daysintno20Number of days to add |
| --- |
| entity_identityIdno—Character EntityId (default: possessed)daysintno20Number of days to add |
| daysintno20Number of days to add |

# Usage

```
await inzoi.cli.execute('career.add_attendance', {  entity_id: 0, // optional  days: 20, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocareer[career.can_promote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote)[career.get_work_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status)[career.join](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join)[career.list_openings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings)[career.promotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion)[career.school_migration_scan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-school-migration-scan)[career.set_business_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level)[career.set_exam_preparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation)[career.set_skill_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level)
