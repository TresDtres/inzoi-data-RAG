---
document_id: "e497000858dd053e5d14a6c945a321481d057a8e958bf10743dab05fddfa62a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/pose/pose-clear"
title: "pose.clear"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:12+00:00"
content_sha256: "92ef5264e5bb62f54b329eb3829890cd0c9f3738f217268b96a71cd31f275c05"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/pose/pose-clear"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Removes bone pose overrides from the body post-process anim instance. Clears a single bone if 'bone' is given, otherwise all. Body proportions (shape) are preserved.

# Metadata

| FieldValueDisplayClear Bone PoseCategory`pose`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayClear Bone PoseCategory`pose`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`pose`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)bonenameno—Bone name to clear (omit to clear all)componentnameno—Skeletal mesh component name (default: CharacterMesh0 / body) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)bonenameno—Bone name to clear (omit to clear all)componentnameno—Skeletal mesh component name (default: CharacterMesh0 / body) |
| bonenameno—Bone name to clear (omit to clear all)componentnameno—Skeletal mesh component name (default: CharacterMesh0 / body) |
| componentnameno—Skeletal mesh component name (default: CharacterMesh0 / body) |

# Usage

```
await inzoi.cli.execute('pose.clear', {  entity_id: 0, // optional  bone: '', // optional  component: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
