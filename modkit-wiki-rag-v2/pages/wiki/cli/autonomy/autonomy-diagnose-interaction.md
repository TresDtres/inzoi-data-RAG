---
document_id: "9df7deace63e0cee7c1bdace6d1b20ae8c6fefe0f7fa0b6c17d80763852ac6a9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/autonomy/autonomy-diagnose-interaction"
title: "autonomy.diagnose_interaction"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:47+00:00"
content_sha256: "64f51ec5ab3ae9c72c1f0d2b89b7932ed0efeb040437b96b1c8471ea6c4327b8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/autonomy/autonomy-diagnose-interaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Diagnose why an interaction bag is or is not an autonomy candidate.

# Metadata

| FieldValueDisplayDiagnose Autonomy InteractionCategory`autonomy`Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplayDiagnose Autonomy InteractionCategory`autonomy`Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| Category`autonomy`Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionbag_idnameyes—Interaction bag ID to diagnoseentity_identityIdno—Target entity ID (default: possessed)target_entity_identityIdno—Optional target entity ID for object/talk interactions |
| --- |
| bag_idnameyes—Interaction bag ID to diagnoseentity_identityIdno—Target entity ID (default: possessed)target_entity_identityIdno—Optional target entity ID for object/talk interactions |
| entity_identityIdno—Target entity ID (default: possessed)target_entity_identityIdno—Optional target entity ID for object/talk interactions |
| target_entity_identityIdno—Optional target entity ID for object/talk interactions |

# Usage

```
await inzoi.cli.execute('autonomy.diagnose_interaction', {  bag_id: '',  entity_id: 0, // optional  target_entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoautonomy[autonomy.set_enable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/autonomy/autonomy-set-enable)
