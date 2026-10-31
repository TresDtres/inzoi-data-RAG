---
document_id: "b98c8f0105a287b53e3904dd5985d0ec8e8f1cd149218a089a3abd40cc950e8c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag"
title: "Condition_CanAddObjectToBag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:46+00:00"
content_sha256: "9aeab2124ed799bdd040c1f05e6abef5c2bb32237465f31574953ba94297ea82"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canaddobjecttobag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether an item can be added to the inventory.

# Note

S1 must be a valid Id defined in Object.json. The target must own an inventory (e.g., Zoi, storage container). Returns false if the inventory is already full.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to checkS1The Id from Object.json for the item to be addedF1The number of items to add (minimum: 1) |
| --- |
| BaseObjectThe inventory owner to checkS1The Id from Object.json for the item to be addedF1The number of items to add (minimum: 1) |
| S1The Id from Object.json for the item to be addedF1The number of items to add (minimum: 1) |
| F1The number of items to add (minimum: 1) |

# Examples

| DescriptionBaseObjectCommandCheck if Yukgaejang can be added to Self's inventorySelfCanAddObjectToBagCheck if 2 items can be added to Target's inventoryTargetCanAddObjectToBagCheck if 1 item can be added to a storage container inventoryTargetCanAddObjectToBag |
| --- |
| Check if Yukgaejang can be added to Self's inventorySelfCanAddObjectToBagCheck if 2 items can be added to Target's inventoryTargetCanAddObjectToBagCheck if 1 item can be added to a storage container inventoryTargetCanAddObjectToBag |
| Check if 2 items can be added to Target's inventoryTargetCanAddObjectToBagCheck if 1 item can be added to a storage container inventoryTargetCanAddObjectToBag |
| Check if 1 item can be added to a storage container inventoryTargetCanAddObjectToBag |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectTemplateToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)
