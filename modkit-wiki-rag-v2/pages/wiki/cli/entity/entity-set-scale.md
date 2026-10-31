---
document_id: "d9efcfb01c97191c22fe307edf3174839a3dcebe7d153fb7c7e6ad6b490498d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-set-scale"
title: "entity.set_scale"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:57+00:00"
content_sha256: "a295dc3cf6137a69d24d12490158a085f64cbe9b9070c8a9edcaaee509be9261"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/entity/entity-set-scale"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Scale the character: skeletal mesh, capsule (half-height + radius), B2 HalfHeight, and MaxWalkSpeed are all scaled together. Speed uses sqrt curve for gentle falloff. NavMesh agent size is unchanged (navigation still works). When targeting the possessed Zoi (no entity_id), smart-mode cameras (QuarterView / ShoulderView) are also scaled. action=get: returns mesh scale, walk speed, camera scale, capsule half-height and radius. action=set scale=: applies full scale (0.05~5.0). action=reset: restores all scaled values to their originals.

# Metadata

| FieldValueDisplaySet Entity ScaleCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetScale` |
| --- |
| DisplaySet Entity ScaleCategory`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetScale` |
| Category`entity`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetScale` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`EntitySetScale` |
| Scope`B1Multicast`Tags—Aliases`EntitySetScale` |
| Tags—Aliases`EntitySetScale` |
| Aliases`EntitySetScale` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), set, or resetscalefloatno—Uniform scale factor: 0.05 (tiny) ~ 5.0 (giant) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), set, or resetscalefloatno—Uniform scale factor: 0.05 (tiny) ~ 5.0 (giant) |
| actionstringnogetget (default), set, or resetscalefloatno—Uniform scale factor: 0.05 (tiny) ~ 5.0 (giant) |
| scalefloatno—Uniform scale factor: 0.05 (tiny) ~ 5.0 (giant) |

# Usage

```
await inzoi.cli.execute('entity.set_scale', {  entity_id: 0, // optional  action: 'get', // optional  scale: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoentity[entity.attach_prop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-attach-prop)[entity.components](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-components)[entity.concept_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-concept-info)[entity.find_nearby](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-find-nearby)[entity.get_character_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-character-info)[entity.get_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-info)[entity.get_object_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-object-info)[entity.get_possessed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-possessed)[entity.get_simulate_state](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-simulate-state)[entity.get_vehicle_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-get-vehicle-info)[entity.possess](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-possess)[entity.reflect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/entity/entity-reflect)
