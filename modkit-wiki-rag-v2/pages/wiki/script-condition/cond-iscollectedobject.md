---
document_id: "1f007779246747f9b0131b0c1ca7510d691ff4fe787e561105f01c1dcea0bdc0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedobject"
title: "Condition_IsCollectedObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:24+00:00"
content_sha256: "4ba1cf9959a3548cc620191c3dc8c028f345ef4bfb4f7649fdc82043553ecccf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscollectedobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject has collected the specified object in the Family Collection.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check the collection status for.CompareTypeSupported compare types: Equal, NotEqual.S1Object ID as defined in Collection.json. |
| --- |
| BaseObjectThe entity to check the collection status for.CompareTypeSupported compare types: Equal, NotEqual.S1Object ID as defined in Collection.json. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Object ID as defined in Collection.json. |
| S1Object ID as defined in Collection.json. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if self has collected the ServedSalad01 itemSelfIsCollectedObjectEqualCheck if self has NOT collected the Flower01 itemSelfIsCollectedObjectNotEqualCheck if target has collected the FishA01 itemTargetIsCollectedObjectEqual |
| --- |
| Check if self has collected the ServedSalad01 itemSelfIsCollectedObjectEqualCheck if self has NOT collected the Flower01 itemSelfIsCollectedObjectNotEqualCheck if target has collected the FishA01 itemTargetIsCollectedObjectEqual |
| Check if self has NOT collected the Flower01 itemSelfIsCollectedObjectNotEqualCheck if target has collected the FishA01 itemTargetIsCollectedObjectEqual |
| Check if target has collected the FishA01 itemTargetIsCollectedObjectEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
