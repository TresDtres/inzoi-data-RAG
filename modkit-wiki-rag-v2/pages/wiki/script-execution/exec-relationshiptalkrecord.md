---
document_id: "843f76afeb736c828c7a929499cf5967bbb5b0a0a6386e67f274858de83784fc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-relationshiptalkrecord"
title: "Execute_RelationshipTalkRecord"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:43+00:00"
content_sha256: "22db63fb1d60f2a558600074989e4e3ef556da43ca42f88c9616cefd6f9992a5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-relationshiptalkrecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a talk record entry to the relationship data of the owner character toward the target character. BaseObject specifies the target of the record; the owner (who stores the record) is the opposite party. For example, if BaseObject is Target, the record is stored on Self's relationship data toward Target.

# Note

The record is stored on the owner's side. If BaseObject is Self, owner is Target; if BaseObject is Target, owner is Self.

# Parameters

| ParameterDescriptionBaseObjectThe target of the record (Self or Target); the opposite party stores the recordS1Record ID (FName) to store in the relationship record data |
| --- |
| BaseObjectThe target of the record (Self or Target); the opposite party stores the recordS1Record ID (FName) to store in the relationship record data |
| S1Record ID (FName) to store in the relationship record data |

# Examples

| DescriptionBaseObjectCommandS1Record that Target proposed to Self (stored on Self)TargetRelationshipTalkRecordPropose_Success_TargetRecord confession event for Self toward Target (on Target)SelfRelationshipTalkRecordConfession_SuccessRecord breakup event (stored on Self toward Target)TargetRelationshipTalkRecordBreakup_TalkRecord marriage event (stored on Target toward Self)SelfRelationshipTalkRecordMarriage_Event |
| --- |
| Record that Target proposed to Self (stored on Self)TargetRelationshipTalkRecordPropose_Success_TargetRecord confession event for Self toward Target (on Target)SelfRelationshipTalkRecordConfession_SuccessRecord breakup event (stored on Self toward Target)TargetRelationshipTalkRecordBreakup_TalkRecord marriage event (stored on Target toward Self)SelfRelationshipTalkRecordMarriage_Event |
| Record confession event for Self toward Target (on Target)SelfRelationshipTalkRecordConfession_SuccessRecord breakup event (stored on Self toward Target)TargetRelationshipTalkRecordBreakup_TalkRecord marriage event (stored on Target toward Self)SelfRelationshipTalkRecordMarriage_Event |
| Record breakup event (stored on Self toward Target)TargetRelationshipTalkRecordBreakup_TalkRecord marriage event (stored on Target toward Self)SelfRelationshipTalkRecordMarriage_Event |
| Record marriage event (stored on Target toward Self)SelfRelationshipTalkRecordMarriage_Event |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoRelationship & Romance[AddRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrabbitholerelationship)[AddRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationship)[AddRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipflag)[AddRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrelationshipname)[MakeRabbitHoleRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-makerabbitholerelationship)[ReleaseRelationshipFocus](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserelationshipfocus)[RemoveRelationshipFlag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipflag)[RemoveRelationshipName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removerelationshipname)[SetRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setrelationship)[UpdateMainRelationship](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-updatemainrelationship)
