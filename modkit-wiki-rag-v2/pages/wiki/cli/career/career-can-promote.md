---
document_id: "370a7e6b1564f3712c8197a3d28508b08c7cf6955c625f58dc256d68aaa175aa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote"
title: "career.can_promote"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:52+00:00"
content_sha256: "79624afb2c93ad02d2eb8a24e8c5bd2c680f01eb07db4be2b437e61ae09a0aae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/career/career-can-promote"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns whether the character has a Business career and is eligible for promotion (rank below max). Non-mutating; safe to poll.

# Metadata

| FieldValueDisplayCan PromoteCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayCan PromoteCategory`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`career`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('career.can_promote', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocareer[career.add_attendance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance)[career.get_work_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status)[career.join](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join)[career.list_openings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings)[career.promotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion)[career.school_migration_scan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-school-migration-scan)[career.set_business_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level)[career.set_exam_preparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation)[career.set_skill_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level)
