---
document_id: "f3c6a02f4f7de730f38b5687fbf76e37ac8ed67d29172f6791fb72c2fed91134"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-set-visibility"
title: "entity.set_visibility"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:57+00:00"
content_sha256: "a5e33986e78c9242bf1e3d4fbffd3f93b378d3e5182cd572e2349f341de5dc02"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-set-visibility"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Show or hide a character. Default mode toggles mesh visibility only (input/movement/collision remain functional). action=status (default): show actor/mesh visibility and all hide reasons. action=hide / show / toggle: change visibility. mode=mesh (default) toggles only the visual SkeletalMeshComponents. mode=actor uses UB1VisibilityManager to hide the entire actor (may break input/movement; use only for debug). reason= overrides the default CLI reason in actor mode.

# Metadata

| FieldValueDisplaySet Character VisibilityCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetVisibility` |
| --- |
| DisplaySet Character VisibilityCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetVisibility` |
| Category`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetVisibility` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetVisibility` |
| Scope`B1Multicast`Tags—Aliases`EntitySetVisibility` |
| Tags—Aliases`EntitySetVisibility` |
| Aliases`EntitySetVisibility` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target character (default: possessed)actionstringnostatusstatus (default), show, hide, togglemodestringnomeshmesh (default) or actorreasonstringno—Hide reason for actor mode (default: CLI_Visibility) |
| --- |
| entity_identityIdno—Target character (default: possessed)actionstringnostatusstatus (default), show, hide, togglemodestringnomeshmesh (default) or actorreasonstringno—Hide reason for actor mode (default: CLI_Visibility) |
| actionstringnostatusstatus (default), show, hide, togglemodestringnomeshmesh (default) or actorreasonstringno—Hide reason for actor mode (default: CLI_Visibility) |
| modestringnomeshmesh (default) or actorreasonstringno—Hide reason for actor mode (default: CLI_Visibility) |
| reasonstringno—Hide reason for actor mode (default: CLI_Visibility) |

# Usage

```
await inzoi.cli.execute('entity.set_visibility', {  entity_id: 0, // optional  action: 'status', // optional  mode: 'mesh', // optional  reason: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)
