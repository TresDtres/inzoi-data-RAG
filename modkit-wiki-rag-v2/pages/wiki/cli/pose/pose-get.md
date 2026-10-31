---
document_id: "b5370b65aeb565e55a709d9185afee8cc68e49fb80c4fb5bf01fe26c98e59109"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/pose/pose-get"
title: "pose.get"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:12+00:00"
content_sha256: "d64f87c3e767bf6df5897834e9a7bd0ae1ae1cdeb81fba1ea3c4a51062ed796d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/pose/pose-get"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the current bone pose overrides on the body post-process anim instance.

# Metadata

| FieldValueDisplayGet Bone PosesCategory`pose`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Bone PosesCategory`pose`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
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
await inzoi.cli.execute('pose.get', {  entity_id: 0, // optional  component: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
