---
document_id: "c3039459d4af329e260fe44207fe78a62602ccbbad9f9f8c3871988ba7af86c7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join"
title: "career.join"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:52+00:00"
content_sha256: "8a41651e7de5c37350c79cb6734800ad5f3479bf50902bd8cd4f53216894b1e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/career/career-join"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Assigns the character to a specific career/job (use career.list_openings to get valid career_entity_id/job_id).

# Metadata

| FieldValueDisplayJoin CareerCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayJoin CareerCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID to employ (default: possessed)career_entity_identityIdyes—Career entity ID to joinjob_idnameyes—Job DataTable id within the career |
| --- |
| entity_identityIdno—Character entity ID to employ (default: possessed)career_entity_identityIdyes—Career entity ID to joinjob_idnameyes—Job DataTable id within the career |
| career_entity_identityIdyes—Career entity ID to joinjob_idnameyes—Job DataTable id within the career |
| job_idnameyes—Job DataTable id within the career |

# Usage

```
await inzoi.cli.execute('career.join', {  entity_id: 0, // optional  career_entity_id: 0,  job_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocareer[career.add_attendance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance)[career.can_promote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote)[career.get_work_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status)[career.list_openings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings)[career.promotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion)[career.school_migration_scan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-school-migration-scan)[career.set_business_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level)[career.set_exam_preparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation)[career.set_skill_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level)
