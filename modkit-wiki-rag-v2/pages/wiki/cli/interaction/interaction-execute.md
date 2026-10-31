---
document_id: "d647aeb10a9bbcfd6137b664221134982c88280bb3e2fe1ae41a4fbb1bd0f92a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute"
title: "interaction.execute"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "2317c958db40f16c79ba8205cd2a3656d1902f9838126508b149cc448ea91658"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-execute"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Queues a specific interaction on a character by InteractionBagId. The character will walk to the target and perform the interaction.

# Metadata

| FieldValueDisplayExecute InteractionCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayExecute InteractionCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID that performs the interaction (default: possessed)interaction_bag_idnameyes—InteractionBag row name from data table (e.g. Sit, Talk, Cook)target_entity_identityIdno—Target entity ID for the interaction (character or object)smartzoiboolnofalseMark the interaction as SmartZoi-sourcedinsert_frontboolnofalseInsert at front of interaction queue instead of back |
| --- |
| entity_identityIdno—Character entity ID that performs the interaction (default: possessed)interaction_bag_idnameyes—InteractionBag row name from data table (e.g. Sit, Talk, Cook)target_entity_identityIdno—Target entity ID for the interaction (character or object)smartzoiboolnofalseMark the interaction as SmartZoi-sourcedinsert_frontboolnofalseInsert at front of interaction queue instead of back |
| interaction_bag_idnameyes—InteractionBag row name from data table (e.g. Sit, Talk, Cook)target_entity_identityIdno—Target entity ID for the interaction (character or object)smartzoiboolnofalseMark the interaction as SmartZoi-sourcedinsert_frontboolnofalseInsert at front of interaction queue instead of back |
| target_entity_identityIdno—Target entity ID for the interaction (character or object)smartzoiboolnofalseMark the interaction as SmartZoi-sourcedinsert_frontboolnofalseInsert at front of interaction queue instead of back |
| smartzoiboolnofalseMark the interaction as SmartZoi-sourcedinsert_frontboolnofalseInsert at front of interaction queue instead of back |
| insert_frontboolnofalseInsert at front of interaction queue instead of back |

# Usage

```
await inzoi.cli.execute('interaction.execute', {  entity_id: 0, // optional  interaction_bag_id: '',  target_entity_id: 0, // optional  smartzoi: false, // optional  insert_front: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsointeraction[interaction.cancel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-cancel)[interaction.clear_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-clear-queue)[interaction.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-current)[interaction.get_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-queue)[interaction.list_available](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-list-available)[interaction.search](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-search)
