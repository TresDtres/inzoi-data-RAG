---
document_id: "9d3a57031ddb02f81dd574fc7efce874fdbfaa9d6b44185930caf7c96328e793"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-put-in-inventory"
title: "building.put_in_inventory"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "084f8d56e5cfd9995f5b21931ae1357934d94eb7d5da24d928a9508c4d26e124"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-put-in-inventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Moves one or more placed objects into the household inventory through the build undo/redo stack. Multiple objects are batched into a SINGLE undo step (unlike building.move_object, which creates one step per object). If neither entity_id nor entity_ids is given, the current build-mode selection is used. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayPut Object In InventoryCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayPut Object In InventoryCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Single target entity ID (from build.scan_objects)entity_idsstringno—Comma-separated entity IDs for a batch, e.g. 123,456,789destroy_when_cannot_put_inboolnotrueDestroy the object when the inventory cannot accept it |
| --- |
| entity_identityIdno—Single target entity ID (from build.scan_objects)entity_idsstringno—Comma-separated entity IDs for a batch, e.g. 123,456,789destroy_when_cannot_put_inboolnotrueDestroy the object when the inventory cannot accept it |
| entity_idsstringno—Comma-separated entity IDs for a batch, e.g. 123,456,789destroy_when_cannot_put_inboolnotrueDestroy the object when the inventory cannot accept it |
| destroy_when_cannot_put_inboolnotrueDestroy the object when the inventory cannot accept it |

# Usage

```
await inzoi.cli.execute('building.put_in_inventory', {  entity_id: 0, // optional  entity_ids: '', // optional  destroy_when_cannot_put_in: true, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
