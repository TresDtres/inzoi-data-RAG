---
document_id: "08eac4f9be2674951f521aabc7e8220c8c05188f2c56032826ce838cb03275f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-set-level"
title: "skill.set_level"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:15+00:00"
content_sha256: "abb990b6f76ff422171afeeda8b5f3eb3c7d8d1874311d7cb795106eeee1de5b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/skill/skill-set-level"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Sets a skill to the given level on the target character.

# Metadata

| FieldValueDisplaySet Skill LevelCategory`skill`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Skill LevelCategory`skill`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`skill`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)skill_idnameyes—Skill IDlevelintyes—Target level |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)skill_idnameyes—Skill IDlevelintyes—Target level |
| skill_idnameyes—Skill IDlevelintyes—Target level |
| levelintyes—Target level |

# Usage

```
await inzoi.cli.execute('skill.set_level', {  entity_id: 0, // optional  skill_id: '',  level: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoskill[skill.add_exp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-add-exp)[skill.get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-get-all)
