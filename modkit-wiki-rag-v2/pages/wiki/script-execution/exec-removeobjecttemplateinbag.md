---
document_id: "ee8751246379f7acd43ec0ecfa1b02063e425f6982d5bdd7eb2255031d0795bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeobjecttemplateinbag"
title: "Execute_RemoveObjectTemplateInBag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:46+00:00"
content_sha256: "51894aa82ba0279d731382374e1585cc722522d4421bce5b3e90411b52690e8a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removeobjecttemplateinbag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes a random item matching the specified ObjectTemplate group from the bag.

# Note

If the removal fails, a toast message is displayed: "No stored items available."

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner from which the item will be removedS1The ObjectTemplateId from Object.json for the template group to remove fromF1The number of items to remove (minimum: 1) |
| --- |
| BaseObjectThe inventory owner from which the item will be removedS1The ObjectTemplateId from Object.json for the template group to remove fromF1The number of items to remove (minimum: 1) |
| S1The ObjectTemplateId from Object.json for the template group to remove fromF1The number of items to remove (minimum: 1) |
| F1The number of items to remove (minimum: 1) |

# Examples

| DescriptionBaseObjectCommandRemove 1 random item from a food template group in Self's bagSelfRemoveObjectTemplateInBagRemove 1 random item from a food template group in Target's bagTargetRemoveObjectTemplateInBagRemove 2 random items from a template group in Self's bagSelfRemoveObjectTemplateInBag |
| --- |
| Remove 1 random item from a food template group in Self's bagSelfRemoveObjectTemplateInBagRemove 1 random item from a food template group in Target's bagTargetRemoveObjectTemplateInBagRemove 2 random items from a template group in Self's bagSelfRemoveObjectTemplateInBag |
| Remove 1 random item from a food template group in Target's bagTargetRemoveObjectTemplateInBagRemove 2 random items from a template group in Self's bagSelfRemoveObjectTemplateInBag |
| Remove 2 random items from a template group in Self's bagSelfRemoveObjectTemplateInBag |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag)[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)
