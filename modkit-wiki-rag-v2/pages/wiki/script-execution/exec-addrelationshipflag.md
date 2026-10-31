---
document_id: "dec014b885f574a8da6d2fe9261cd9db85b9a9a40254a746ea7b6341dc58c717"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag"
title: "Execute_AddRelationshipFlag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:09+00:00"
content_sha256: "cb19b2dbc1552b5aa7b8aa96d993016f1e6f37a4c094bf296e3d27cb4e545dce"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addrelationshipflag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds the specified relationship flag from BaseObject to the counterpart. The flag is automatically removed after the LifeTime defined in RelationshipFlag.json. Start scripts (StartScriptIds) defined for the flag are executed when it is added. If another flag in the same Category already exists, it is removed and replaced; its EndScriptIds are executed.

# Parameters

| ParameterDescriptionBaseObjectCharacter who receives the relationship flag (Self or Target)S1Relationship flag ID to add |
| --- |
| BaseObjectCharacter who receives the relationship flag (Self or Target)S1Relationship flag ID to add |
| S1Relationship flag ID to add |

# Examples

| DescriptionBaseObjectCommandS1Self has a crush on TargetSelfAddRelationshipFlagCrushTarget has a crush on SelfTargetAddRelationshipFlagCrushSelf gives a present to TargetSelfAddRelationshipFlagGavePresentTarget gives a present to SelfTargetAddRelationshipFlagGavePresent |
| --- |
| Self has a crush on TargetSelfAddRelationshipFlagCrushTarget has a crush on SelfTargetAddRelationshipFlagCrushSelf gives a present to TargetSelfAddRelationshipFlagGavePresentTarget gives a present to SelfTargetAddRelationshipFlagGavePresent |
| Target has a crush on SelfTargetAddRelationshipFlagCrushSelf gives a present to TargetSelfAddRelationshipFlagGavePresentTarget gives a present to SelfTargetAddRelationshipFlagGavePresent |
| Self gives a present to TargetSelfAddRelationshipFlagGavePresentTarget gives a present to SelfTargetAddRelationshipFlagGavePresent |
| Target gives a present to SelfTargetAddRelationshipFlagGavePresent |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship)[AddRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[MakeRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship)[RelationshipTalkRecord](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord)[ReleaseRelationshipFocus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus)[RemoveRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag)[RemoveRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
