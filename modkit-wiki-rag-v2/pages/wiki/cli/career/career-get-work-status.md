---
document_id: "3ac9ccfa9ea123a09e92e85a2920787eb9e5040f9b0025789edb3b09fa283bd1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status"
title: "career.get_work_status"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:52+00:00"
content_sha256: "a6d14e43239098e1c1595e58af3860189b93115c290ea4bae73faadaadc5fe54"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/career/career-get-work-status"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns work schedule status for a character (has_job, is_working_time, is_working_day, is_at_work, simulated, work_site_id, home_site_id). Supports batch via comma-separated entity_ids.

# Metadata

| FieldValueDisplayGet Work StatusCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Work StatusCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)entity_idsstringno—Comma-separated entity IDs for batch query |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)entity_idsstringno—Comma-separated entity IDs for batch query |
| entity_idsstringno—Comma-separated entity IDs for batch query |

# Usage

```
await inzoi.cli.execute('career.get_work_status', {  entity_id: 0, // optional  entity_ids: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocareer[career.add_attendance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance)[career.can_promote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote)[career.join](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join)[career.list_openings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings)[career.promotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion)[career.school_migration_scan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-school-migration-scan)[career.set_business_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level)[career.set_exam_preparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation)[career.set_skill_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level)
