---
document_id: "fc99e23a6aaa43a0ebad2d60e11124b3f3b7056830934684841887e2c452e391"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-get-all"
title: "skill.get_all"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "042b3fccd5235f483ca4c04e0eb2257d0beae07b5e4a2e642c2726d00a484200"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/skill/skill-get-all"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all skills with current level, max level, and localized name for the target character.

# Metadata

| FieldValueDisplayGet All SkillsCategory`skill`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet All SkillsCategory`skill`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`skill`Access`Public`Scope`B2Authority`Tags—Aliases— |
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
await inzoi.cli.execute('skill.get_all', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoskill[skill.add_exp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-add-exp)[skill.set_level](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/skill/skill-set-level)
