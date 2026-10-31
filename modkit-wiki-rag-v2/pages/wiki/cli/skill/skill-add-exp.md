---
document_id: "7657b6127d638c33120bd84a82671de5da67e4029ff8aa73a8515deedd01f1ae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-add-exp"
title: "skill.add_exp"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:15+00:00"
content_sha256: "e6c4278495537478acf0fe8dd4ec80b027b66ef2d4cb50b0b607862ddef4a512"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/skill/skill-add-exp"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Adds experience to a skill on the target character.

# Metadata

| FieldValueDisplayAdd Skill EXPCategory`skill`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayAdd Skill EXPCategory`skill`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`skill`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)skill_idnameyes—Skill IDexpfloatyes—EXP amount to add |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)skill_idnameyes—Skill IDexpfloatyes—EXP amount to add |
| skill_idnameyes—Skill IDexpfloatyes—EXP amount to add |
| expfloatyes—EXP amount to add |

# Usage

```
await inzoi.cli.execute('skill.add_exp', {  entity_id: 0, // optional  skill_id: '',  exp: 0.0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoskill[skill.get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-get-all)[skill.set_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-set-level)
