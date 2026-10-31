---
document_id: "07d4a0eeadd11d5e028cb4f72ec44946de004fce6e869d77801fb016e0770e41"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-availableposturelocation"
title: "Description"
section: "wiki/script-filter"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:47:49+00:00"
content_sha256: "e699edf9445192e23f9d5b3b11aea80afe38b2e24d32afe9ab74b7593382e400"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-filter/filter-availableposturelocation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

TargetFilter to find available chairs/seats (or an Anywhere-available flag) for self to take a posture, searching by EB1PostureSpaceSearchType strategy: connected chair grouped with the picked object, chair in the picked object's Object slot, dining slot chair, or nearby chair within range

# Parameters

| ParameterDescriptionInContextBaseObject SettingInFilterFilter Setting: `S1`EB1PostureSpaceSearchType flags (ConnectedChair/DiningSlotChair/Chair/Anywhere/TargetConnectedChair/PickedObjectSlotChair) `S2`SlotName substring filter used when matching a connected chair `SearchRange`Range unit to search `bOnlySameZoneTarget`Whether to restrict candidates to self's current zoneOutResultOutput result |
| --- |
| InContextBaseObject SettingInFilterFilter Setting: `S1`EB1PostureSpaceSearchType flags (ConnectedChair/DiningSlotChair/Chair/Anywhere/TargetConnectedChair/PickedObjectSlotChair) `S2`SlotName substring filter used when matching a connected chair `SearchRange`Range unit to search `bOnlySameZoneTarget`Whether to restrict candidates to self's current zoneOutResultOutput result |
| InFilterFilter Setting: `S1`EB1PostureSpaceSearchType flags (ConnectedChair/DiningSlotChair/Chair/Anywhere/TargetConnectedChair/PickedObjectSlotChair) `S2`SlotName substring filter used when matching a connected chair `SearchRange`Range unit to search `bOnlySameZoneTarget`Whether to restrict candidates to self's current zoneOutResultOutput result |
| `S1`EB1PostureSpaceSearchType flags (ConnectedChair/DiningSlotChair/Chair/Anywhere/TargetConnectedChair/PickedObjectSlotChair) `S2`SlotName substring filter used when matching a connected chair `SearchRange`Range unit to search `bOnlySameZoneTarget`Whether to restrict candidates to self's current zoneOutResultOutput result |
| `S2`SlotName substring filter used when matching a connected chair `SearchRange`Range unit to search `bOnlySameZoneTarget`Whether to restrict candidates to self's current zoneOutResultOutput result |
| `SearchRange`Range unit to search `bOnlySameZoneTarget`Whether to restrict candidates to self's current zoneOutResultOutput result |
| `bOnlySameZoneTarget`Whether to restrict candidates to self's current zoneOutResultOutput result |
| OutResultOutput result |

[←Back to Filter FinderSearch and filter all 66 Script Filter documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/commands)See alsoPosture & Slot[AttachedObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-attachedobjectslot)[AutoPutDown](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-autoputdown)[ChairObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-chairobject)[CharacterDiningSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-characterdiningslot)[ConnectedChairObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-connectedchairobject)[CurrentPostureSocialCluster](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-currentposturesocialcluster)[DiningChairObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-diningchairobject)[HasSlotAttachedObjectWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-hasslotattachedobjectwithtag)[InteractionBagIdWithMostAvailableSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-interactionbagidwithmostavailableslot)[OnSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-onseat)[PickedObjectOccupiedSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-pickedobjectoccupiedslot)[PickedObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-pickedobjectslot)
