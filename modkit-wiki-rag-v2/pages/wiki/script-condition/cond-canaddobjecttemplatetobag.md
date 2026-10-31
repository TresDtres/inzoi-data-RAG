---
document_id: "a4e196bc5d6965144b85792ab38dcfeead64170dd899ce1fe19cace517474eed"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttemplatetobag"
title: "Condition_CanAddObjectTemplateToBag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:46+00:00"
content_sha256: "6c2f2a198df78a317f0cf4ae26d60898f6a293501c50b4509ff648e6ac6cfc27"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canaddobjecttemplatetobag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a TemplateObject-type item (randomly selected) can be added to the inventory.

# Note

S1 must be a valid ObjectTemplateId defined in Object.json. All object IDs associated with the template are validated before checking inventory capacity.

# Parameters

| ParameterDescriptionBaseObjectThe inventory owner to checkS1The ObjectTemplateId from Object.json for the item to be addedF1The number of items to add (minimum: 1) |
| --- |
| BaseObjectThe inventory owner to checkS1The ObjectTemplateId from Object.json for the item to be addedF1The number of items to add (minimum: 1) |
| S1The ObjectTemplateId from Object.json for the item to be addedF1The number of items to add (minimum: 1) |
| F1The number of items to add (minimum: 1) |

# Examples

| DescriptionBaseObjectCommandCheck if a template food item can be added to Self's inventorySelfCanAddObjectTemplateToBagCheck if a template item can be added to Target's inventoryTargetCanAddObjectTemplateToBagCheck if 2 template items can be added to Self's inventorySelfCanAddObjectTemplateToBag |
| --- |
| Check if a template food item can be added to Self's inventorySelfCanAddObjectTemplateToBagCheck if a template item can be added to Target's inventoryTargetCanAddObjectTemplateToBagCheck if 2 template items can be added to Self's inventorySelfCanAddObjectTemplateToBag |
| Check if a template item can be added to Target's inventoryTargetCanAddObjectTemplateToBagCheck if 2 template items can be added to Self's inventorySelfCanAddObjectTemplateToBag |
| Check if 2 template items can be added to Self's inventorySelfCanAddObjectTemplateToBag |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInventory & Carried Objects[AllInventoryChildState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-allinventorychildstate)[CanAddObjectToBag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canaddobjecttobag)[GiftBoxTendency](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-giftboxtendency)[GiftType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gifttype)[HandCarriedObjectCreatePurpose](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectcreatepurpose)[HandCarriedObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectid)[HandCarriedObjectOwnership](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectownership)[HandCarriedObjectState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjectstate)[HandCarriedObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttag)[HandCarriedObjectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-handcarriedobjecttype)[HasCarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascarriedobject)[HasHandOverObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashandoverobjecttag)
