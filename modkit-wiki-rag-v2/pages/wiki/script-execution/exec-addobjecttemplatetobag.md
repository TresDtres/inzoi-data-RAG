---
document_id: "3171c41cb188c45e649091389da74b0d02475275aca65fe2b939fa8bd24c91a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttemplatetobag"
title: "Execute_AddObjectTemplateToBag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:08+00:00"
content_sha256: "499c4b2c405e90930b3a4ff12cae642a42f29eb48ad5843c4a501b1d2ec6e3b5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addobjecttemplatetobag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates a random item from the specified ObjectTemplate group and adds it to the bag.

# Note

One item is randomly selected from all objects belonging to the given ObjectTemplateId and added to the bag. For example, ServedFood04_Template may include ServedRamen01 or ServedDumpling01, and one is picked at random.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner that will receive the itemS1The ObjectTemplateId from Object.json for the template group to pick fromF1The number of items to add (minimum: 1) |
| --- |
| BaseObjectThe inventory owner that will receive the itemS1The ObjectTemplateId from Object.json for the template group to pick fromF1The number of items to add (minimum: 1) |
| S1The ObjectTemplateId from Object.json for the template group to pick fromF1The number of items to add (minimum: 1) |
| F1The number of items to add (minimum: 1) |

# Examples

| DescriptionBaseObjectCommandAdd 1 random item from a food template to Self's bagSelfAddObjectTemplateToBagAdd 2 random items from a food template to Target's bagTargetAddObjectTemplateToBagAdd 1 random item from a template to Self's bagSelfAddObjectTemplateToBag |
| --- |
| Add 1 random item from a food template to Self's bagSelfAddObjectTemplateToBagAdd 2 random items from a food template to Target's bagTargetAddObjectTemplateToBagAdd 1 random item from a template to Self's bagSelfAddObjectTemplateToBag |
| Add 2 random items from a food template to Target's bagTargetAddObjectTemplateToBagAdd 1 random item from a template to Self's bagSelfAddObjectTemplateToBag |
| Add 1 random item from a template to Self's bagSelfAddObjectTemplateToBag |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInventory & Carried Objects[AddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobjecttobag)[AttachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachgrabobject)[CancelInteractionBagByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cancelinteractionbagbytag)[DestroyInventoryChild](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroyinventorychild)[DetachGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachgrabobject)[HandOverGrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-handovergrabobject)[OpenCommonBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opencommonbox)[OpenGiftBox](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-opengiftbox)[PickUpAttachCharacter](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachcharacter)[PickUpAttachObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupattachobject)[PickUpServedFoodObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupservedfoodobject)[PickUpSlotObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pickupslotobject)
