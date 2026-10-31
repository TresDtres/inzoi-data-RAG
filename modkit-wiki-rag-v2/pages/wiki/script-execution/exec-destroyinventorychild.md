---
document_id: "692617063e0def57c996f694825132b907ebb3446d87f1a2d831a8842390fd5c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild"
title: "Execute_DestroyInventoryChild"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:25+00:00"
content_sha256: "618a9f393cb4a03797a2707daf5b1651b7cefe943c3959034dfd56fe0823de30"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-destroyinventorychild"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes and destroys all child objects in the inventory that satisfy the specified condition. The condition is evaluated with Self as the inventory owner and Target as each child object.

# Parameters

| ParameterDescriptionBaseObjectThe inventory or an object/character that owns an inventoryS1Condition Id used to filter which child objects to remove and destroy |
| --- |
| BaseObjectThe inventory or an object/character that owns an inventoryS1Condition Id used to filter which child objects to remove and destroy |
| S1Condition Id used to filter which child objects to remove and destroy |

# Examples

| DescriptionBaseObjectCommandRemove all spoiled objects from a refrigeratorTargetDestroyInventoryChildRemove all expired items from Self's inventorySelfDestroyInventoryChildRemove all objects matching a custom condition from inventoryTargetDestroyInventoryChild |
| --- |
| Remove all spoiled objects from a refrigeratorTargetDestroyInventoryChildRemove all expired items from Self's inventorySelfDestroyInventoryChildRemove all objects matching a custom condition from inventoryTargetDestroyInventoryChild |
| Remove all expired items from Self's inventorySelfDestroyInventoryChildRemove all objects matching a custom condition from inventoryTargetDestroyInventoryChild |
| Remove all objects matching a custom condition from inventoryTargetDestroyInventoryChild |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
