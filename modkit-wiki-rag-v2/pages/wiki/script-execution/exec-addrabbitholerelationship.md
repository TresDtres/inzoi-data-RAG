---
document_id: "cae2fa43dd84b00f111febe63acdcaa03f8d620f23e760ba2a452f8f497052f0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship"
title: "Execute_AddRabbitHoleRelationship"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:09+00:00"
content_sha256: "968930c366f12c7b524639d3a99e00394cb6e74c04ed6256ad89b8a309f7faae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addrabbitholerelationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds the specified relationship stat value to characters who are in the same rabbit hole as BaseObject. Only applies to characters that are already known (not a first meeting). Targets are selected from the current rabbit hole participant list on the located site, shuffled randomly, and applied up to F1 count.

# Parameters

| ParameterDescriptionBaseObjectThe character currently in a rabbit hole (Self or Target)S1Relationship stat ID to modify (defined in RelationshipStat.json)F1Maximum number of targets to apply (integer)F2Value to add for the specified stat |
| --- |
| BaseObjectThe character currently in a rabbit hole (Self or Target)S1Relationship stat ID to modify (defined in RelationshipStat.json)F1Maximum number of targets to apply (integer)F2Value to add for the specified stat |
| S1Relationship stat ID to modify (defined in RelationshipStat.json)F1Maximum number of targets to apply (integer)F2Value to add for the specified stat |
| F1Maximum number of targets to apply (integer)F2Value to add for the specified stat |
| F2Value to add for the specified stat |

# Examples

| DescriptionBaseObjectCommandS1F1F2Add +5 friendship to up to 3 already-met participants in rabbit holeSelfAddRabbitHoleRelationshipFriendship35Add +10 romance to up to 2 already-met participants in rabbit holeSelfAddRabbitHoleRelationshipRomance210 |
| --- |
| Add +5 friendship to up to 3 already-met participants in rabbit holeSelfAddRabbitHoleRelationshipFriendship35Add +10 romance to up to 2 already-met participants in rabbit holeSelfAddRabbitHoleRelationshipRomance210 |
| Add +10 romance to up to 2 already-met participants in rabbit holeSelfAddRabbitHoleRelationshipRomance210 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship)[AddRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[MakeRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship)[RelationshipTalkRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord)[ReleaseRelationshipFocus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus)[RemoveRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag)[RemoveRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
