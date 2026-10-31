---
document_id: "c5e52d5b6d5b579e8100c47ff6381d055e71d47d66fa1302a0d8df065d0e057d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/pose/pose-list-bones"
title: "pose.list_bones"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:12+00:00"
content_sha256: "e33ddb8fc40af22afa0b43f5d3009df35874aff7b9c65e4419d836939b83a3dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/pose/pose-list-bones"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all bone names of the skeletal mesh on the target component (for poser bone selection).

# Metadata

| FieldValueDisplayList BonesCategory`pose`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayList BonesCategory`pose`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`pose`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)componentnameno—Skeletal mesh component name (default: CharacterMesh0 / body) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)componentnameno—Skeletal mesh component name (default: CharacterMesh0 / body) |
| componentnameno—Skeletal mesh component name (default: CharacterMesh0 / body) |

# Usage

```
await inzoi.cli.execute('pose.list_bones', {  entity_id: 0, // optional  component: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
