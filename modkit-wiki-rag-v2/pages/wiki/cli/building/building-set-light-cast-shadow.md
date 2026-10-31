---
document_id: "bd1c968c36693a9be548699727a770e94380d1ad10773edeb6ddd5bd586b2e0a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-light-cast-shadow"
title: "building.set_light_cast_shadow"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "fb1cd71ccb53bb4d320ff0593615449b26fdab85c3c4886a66bbc55243cb7703"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-set-light-cast-shadow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Turns shadow casting on or off for a placed light object, through the build undo/redo stack. Enabling shadows on many lights is expensive at runtime. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplaySet Light Cast ShadowCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Light Cast ShadowCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target light object entity ID (from build.scan_objects)enableboolyes—true to cast shadows, false to disable |
| --- |
| entity_identityIdyes—Target light object entity ID (from build.scan_objects)enableboolyes—true to cast shadows, false to disable |
| enableboolyes—true to cast shadows, false to disable |

# Usage

```
await inzoi.cli.execute('building.set_light_cast_shadow', {  entity_id: 0,  enable: false,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
