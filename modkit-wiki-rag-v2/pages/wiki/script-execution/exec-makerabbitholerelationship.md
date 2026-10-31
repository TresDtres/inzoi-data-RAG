---
document_id: "8a6f9a2ec0f148086b6cc3d0c384fe880346165d56e1f7ebbef8a296da1541c8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship"
title: "Execute_MakeRabbitHoleRelationship"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:32+00:00"
content_sha256: "1d1d0469b6445533de2ebdbb0fb22f2f2b75c665b03c57ca54e3f89fb6f087fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-makerabbitholerelationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates first-time relationship records with characters in the same rabbit hole as BaseObject. Targets are selected from the current rabbit hole participant list on the located site, shuffled randomly, and applied up to F1 count. Only characters that are currently meeting BaseObject for the first time are processed.

# Parameters

| ParameterDescriptionBaseObjectThe character currently in a rabbit hole (Self or Target)S1Relationship ID to create (defined in Relationship.json)F1Maximum number of targets to apply (integer) |
| --- |
| BaseObjectThe character currently in a rabbit hole (Self or Target)S1Relationship ID to create (defined in Relationship.json)F1Maximum number of targets to apply (integer) |
| S1Relationship ID to create (defined in Relationship.json)F1Maximum number of targets to apply (integer) |
| F1Maximum number of targets to apply (integer) |

# Examples

| DescriptionBaseObjectCommandS1F1Create Friendship relationship with up to 2 first-meeting participantsSelfMakeRabbitHoleRelationshipFriendship2Create Acquaintance relationship with up to 5 first-meeting participantsSelfMakeRabbitHoleRelationshipAcquaintance5 |
| --- |
| Create Friendship relationship with up to 2 first-meeting participantsSelfMakeRabbitHoleRelationshipFriendship2Create Acquaintance relationship with up to 5 first-meeting participantsSelfMakeRabbitHoleRelationshipAcquaintance5 |
| Create Acquaintance relationship with up to 5 first-meeting participantsSelfMakeRabbitHoleRelationshipAcquaintance5 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship)[AddRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship)[AddRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[RelationshipTalkRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord)[ReleaseRelationshipFocus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus)[RemoveRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag)[RemoveRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
