---
document_id: "9ad35ce4c843674b92afc2e49f0afcee602e868dfd9b94f1e28096560ab04462"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-show-speech-bubble"
title: "entity.show_speech_bubble"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:57+00:00"
content_sha256: "df8ea2f6cae442ea8aab5c7d1a6bebd2b49ceacb3153723d5fe17c253f1edcb2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-show-speech-bubble"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Shows a speech bubble with custom text directly above a character's head.

# Metadata

| FieldValueDisplayShow Speech BubbleCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases— |
| --- |
| DisplayShow Speech BubbleCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases— |
| Category`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases— |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases— |
| Scope`B1Multicast`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiontextstringyes—Text to display in the speech bubbleentity_identityIdno—Target character (default: possessed)durationfloatno—Display duration in seconds (default: 10) |
| --- |
| textstringyes—Text to display in the speech bubbleentity_identityIdno—Target character (default: possessed)durationfloatno—Display duration in seconds (default: 10) |
| entity_identityIdno—Target character (default: possessed)durationfloatno—Display duration in seconds (default: 10) |
| durationfloatno—Display duration in seconds (default: 10) |

# Usage

```
await inzoi.cli.execute('entity.show_speech_bubble', {  text: '',  entity_id: 0, // optional  duration: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)
