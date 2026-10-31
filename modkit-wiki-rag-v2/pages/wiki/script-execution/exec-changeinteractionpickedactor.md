---
document_id: "fb505e826e4b0dd996a3fe3360bbbcfcd3c18df846b029e3b90bd7cb336c3e1b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeinteractionpickedactor"
title: "Execute_ChangeInteractionPickedActor"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:19+00:00"
content_sha256: "fb673f31520e2649440823c7263c30db4319a7e536b5679a3663fad7611a332a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changeinteractionpickedactor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the PickedActor of the currently active interaction bag for the specified BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe character whose current interaction bag's PickedActor will be changed (Self or Target).S1The new PickedActor type to set (Self or Target). |
| --- |
| BaseObjectThe character whose current interaction bag's PickedActor will be changed (Self or Target).S1The new PickedActor type to set (Self or Target). |
| S1The new PickedActor type to set (Self or Target). |

# Examples

| DescriptionBaseObjectCommandS1Change PickedActor of Self's interaction bag to SelfSelfChangeInteractionPickedActorSelfChange PickedActor of Self's interaction bag to TargetSelfChangeInteractionPickedActorTargetChange PickedActor of Target's interaction bag to SelfTargetChangeInteractionPickedActorSelfChange PickedActor of Target's interaction bag to TargetTargetChangeInteractionPickedActorTarget |
| --- |
| Change PickedActor of Self's interaction bag to SelfSelfChangeInteractionPickedActorSelfChange PickedActor of Self's interaction bag to TargetSelfChangeInteractionPickedActorTargetChange PickedActor of Target's interaction bag to SelfTargetChangeInteractionPickedActorSelfChange PickedActor of Target's interaction bag to TargetTargetChangeInteractionPickedActorTarget |
| Change PickedActor of Self's interaction bag to TargetSelfChangeInteractionPickedActorTargetChange PickedActor of Target's interaction bag to SelfTargetChangeInteractionPickedActorSelfChange PickedActor of Target's interaction bag to TargetTargetChangeInteractionPickedActorTarget |
| Change PickedActor of Target's interaction bag to SelfTargetChangeInteractionPickedActorSelfChange PickedActor of Target's interaction bag to TargetTargetChangeInteractionPickedActorTarget |
| Change PickedActor of Target's interaction bag to TargetTargetChangeInteractionPickedActorTarget |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInteraction & Movement[BanSprint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bansprint)[DisableSprint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-disablesprint)[EnableSprint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enablesprint)
