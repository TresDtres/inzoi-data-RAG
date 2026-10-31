---
document_id: "f2c53c1ec8a8a9b063526a15cde5def3047dcbeea04e88661b2d270c32bc4356"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag"
title: "Execute_RemoveRelationshipFlag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:47+00:00"
content_sha256: "8b5e6faee124092b0e7b4272d67cb454897640e0803801a9cc7b4987fe9e4f97"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removerelationshipflag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes the specified relationship flag from BaseObject toward the counterpart. End scripts (EndScriptIds) defined for the flag in RelationshipFlag.json are executed on removal. S2 controls the scope of removal:

- Single: Remove the flag from BaseObject toward the counterpart only.
- Both: Remove the flag from both directions (BaseObject <-> counterpart).
- SingleToAny: Remove the flag from BaseObject toward everyone in the relationship window.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose relationship flag is removed (Self or Target)S1Relationship flag ID to removeS2Scope of removal (Single, Both, SingleToAny) |
| --- |
| BaseObjectCharacter whose relationship flag is removed (Self or Target)S1Relationship flag ID to removeS2Scope of removal (Single, Both, SingleToAny) |
| S1Relationship flag ID to removeS2Scope of removal (Single, Both, SingleToAny) |
| S2Scope of removal (Single, Both, SingleToAny) |

# Examples

| DescriptionBaseObjectCommandS1S2Self no longer has a crush on TargetSelfRemoveRelationshipFlagCrushSingleTarget no longer has a crush on SelfTargetRemoveRelationshipFlagCrushSingleBoth Self and Target no longer love each otherSelfRemoveRelationshipFlagLoveBothSelf gives up all crushes toward anyoneSelfRemoveRelationshipFlagCrushSingleToAny |
| --- |
| Self no longer has a crush on TargetSelfRemoveRelationshipFlagCrushSingleTarget no longer has a crush on SelfTargetRemoveRelationshipFlagCrushSingleBoth Self and Target no longer love each otherSelfRemoveRelationshipFlagLoveBothSelf gives up all crushes toward anyoneSelfRemoveRelationshipFlagCrushSingleToAny |
| Target no longer has a crush on SelfTargetRemoveRelationshipFlagCrushSingleBoth Self and Target no longer love each otherSelfRemoveRelationshipFlagLoveBothSelf gives up all crushes toward anyoneSelfRemoveRelationshipFlagCrushSingleToAny |
| Both Self and Target no longer love each otherSelfRemoveRelationshipFlagLoveBothSelf gives up all crushes toward anyoneSelfRemoveRelationshipFlagCrushSingleToAny |
| Self gives up all crushes toward anyoneSelfRemoveRelationshipFlagCrushSingleToAny |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship)[AddRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship)[AddRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[MakeRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship)[RelationshipTalkRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord)[ReleaseRelationshipFocus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus)[RemoveRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
