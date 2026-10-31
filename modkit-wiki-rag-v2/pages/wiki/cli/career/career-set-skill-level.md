---
document_id: "11fe7e9bb162623af6c0660b22492a9047e6d64e2c6b821f8fb1cbab19d39b2c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-skill-level"
title: "career.set_skill_level"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:52+00:00"
content_sha256: "343d32a175e4bd0f1e50cac8a74c6d789163b95e5f9d8b63b2a3eb7d83f9d9db"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/career/career-set-skill-level"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets a skill to the given level by skill name.

# Metadata

| FieldValueDisplaySet Skill LevelCategory`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetSkillLevel`, `job.set_skill_level` |
| --- |
| DisplaySet Skill LevelCategory`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetSkillLevel`, `job.set_skill_level` |
| Category`career`Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetSkillLevel`, `job.set_skill_level` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`SetSkillLevel`, `job.set_skill_level` |
| Scope`B2Authority`Tags—Aliases`SetSkillLevel`, `job.set_skill_level` |
| Tags—Aliases`SetSkillLevel`, `job.set_skill_level` |
| Aliases`SetSkillLevel`, `job.set_skill_level` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)skill_namenameyes—Skill idlevelintyes—Skill level |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)skill_namenameyes—Skill idlevelintyes—Skill level |
| skill_namenameyes—Skill idlevelintyes—Skill level |
| levelintyes—Skill level |

# Usage

```
await inzoi.cli.execute('career.set_skill_level', {  entity_id: 0, // optional  skill_name: '',  level: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsocareer[career.add_attendance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-add-attendance)[career.can_promote](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-can-promote)[career.get_work_status](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-get-work-status)[career.join](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-join)[career.list_openings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-list-openings)[career.promotion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-promotion)[career.school_migration_scan](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-school-migration-scan)[career.set_business_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-business-level)[career.set_exam_preparation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/career/career-set-exam-preparation)
