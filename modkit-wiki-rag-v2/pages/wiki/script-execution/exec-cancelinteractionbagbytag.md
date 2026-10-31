---
document_id: "1b7cbf6afe8a0e816e11685577234779041e98e541413bbe7400da46dfbebb00"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag"
title: "Execute_CancelInteractionBagByTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:18+00:00"
content_sha256: "6dc89445c7b116fa60bb5b4421ba474ea6187750de1a3327c29af4a984a4ddd2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-cancelinteractionbagbytag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Cancels the current interaction bag of the specified BaseObject if it contains the given interaction bag tag.

# Parameters

| ParameterDescriptionBaseObjectThe character whose current interaction bag will be cancelled (Self or Target).S1The InteractionBagTag to match against the current interaction bag. |
| --- |
| BaseObjectThe character whose current interaction bag will be cancelled (Self or Target).S1The InteractionBagTag to match against the current interaction bag. |
| S1The InteractionBagTag to match against the current interaction bag. |

# Examples

| DescriptionBaseObjectCommandS1Cancel Self's interaction bag if it has the Idle tagSelfCancelInteractionBagByTagIdleCancel Target's interaction bag if it has the Sit tagTargetCancelInteractionBagByTagSitCancel Self's interaction bag if it has a Piano tagSelfCancelInteractionBagByTagPianoCancel Target's interaction bag if it has a Sleep tagTargetCancelInteractionBagByTagSleep |
| --- |
| Cancel Self's interaction bag if it has the Idle tagSelfCancelInteractionBagByTagIdleCancel Target's interaction bag if it has the Sit tagTargetCancelInteractionBagByTagSitCancel Self's interaction bag if it has a Piano tagSelfCancelInteractionBagByTagPianoCancel Target's interaction bag if it has a Sleep tagTargetCancelInteractionBagByTagSleep |
| Cancel Target's interaction bag if it has the Sit tagTargetCancelInteractionBagByTagSitCancel Self's interaction bag if it has a Piano tagSelfCancelInteractionBagByTagPianoCancel Target's interaction bag if it has a Sleep tagTargetCancelInteractionBagByTagSleep |
| Cancel Self's interaction bag if it has a Piano tagSelfCancelInteractionBagByTagPianoCancel Target's interaction bag if it has a Sleep tagTargetCancelInteractionBagByTagSleep |
| Cancel Target's interaction bag if it has a Sleep tagTargetCancelInteractionBagByTagSleep |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
