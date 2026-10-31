---
document_id: "a4f93c3a1ee94eb64ce27297b3007e0c0da7e17dc5f681e0ad156bdeebfcafa0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-school-migration-scan"
title: "career.school_migration_scan"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:52+00:00"
content_sha256: "136d19d1981c23325cca452f65fa824f6b774157cd66fef61940b052b8cab578"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/career/career-school-migration-scan"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [BL-47322] Scans loaded world memory for deprecated *_Middle school JobIds in MemberInfo / CareerSlots / GraduationRecords. Hit count should be 0 after save migration runs correctly.

# Metadata

| FieldValueDisplayScan Middle School MigrationCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayScan Middle School MigrationCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionverboseboolnofalseInclude detailed findings array in response |
| --- |
| verboseboolnofalseInclude detailed findings array in response |

# Usage

```
await inzoi.cli.execute('career.school_migration_scan', {  verbose: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocareer[career.add_attendance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance)[career.can_promote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote)[career.get_work_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status)[career.join](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join)[career.list_openings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings)[career.promotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion)[career.set_business_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level)[career.set_exam_preparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation)[career.set_skill_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level)
