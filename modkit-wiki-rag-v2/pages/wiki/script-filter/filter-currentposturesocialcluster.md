---
document_id: "a15bd4df3ec4f2683e8c95f117ff9bc80e40f3b5110a5ce1ad06eee73033b079"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-currentposturesocialcluster"
title: "Description"
section: "wiki/script-filter"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:47:49+00:00"
content_sha256: "d98700ea21113b8c70e3d3853d961b168821f9ccdef63edb4fdba471d351c46b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-filter/filter-currentposturesocialcluster"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

TargetFilter to find the location or seat that keeps self's current posture within the picked object's social cluster (standing -> reachable cluster location, sitting -> currently occupied seat with highest priority), falling back to other available seats or cluster locations

# Parameters

| ParameterDescriptionInContextBaseObject SettingInFilterFilter Setting: `S1`EB1SocialClusterType to search within the picked object `S2`Sort key passed to GetSortedAvailableSocialClusterSlots for fallback seat candidatesOutResultOutput result |
| --- |
| InContextBaseObject SettingInFilterFilter Setting: `S1`EB1SocialClusterType to search within the picked object `S2`Sort key passed to GetSortedAvailableSocialClusterSlots for fallback seat candidatesOutResultOutput result |
| InFilterFilter Setting: `S1`EB1SocialClusterType to search within the picked object `S2`Sort key passed to GetSortedAvailableSocialClusterSlots for fallback seat candidatesOutResultOutput result |
| `S1`EB1SocialClusterType to search within the picked object `S2`Sort key passed to GetSortedAvailableSocialClusterSlots for fallback seat candidatesOutResultOutput result |
| `S2`Sort key passed to GetSortedAvailableSocialClusterSlots for fallback seat candidatesOutResultOutput result |
| OutResultOutput result |

[←Back to Filter FinderSearch and filter all 66 Script Filter documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/commands)See alsoPosture & Slot[AttachedObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-attachedobjectslot)[AutoPutDown](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-autoputdown)[AvailablePostureLocation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-availableposturelocation)[ChairObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-chairobject)[CharacterDiningSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-characterdiningslot)[ConnectedChairObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-connectedchairobject)[DiningChairObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-diningchairobject)[HasSlotAttachedObjectWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-hasslotattachedobjectwithtag)[InteractionBagIdWithMostAvailableSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-interactionbagidwithmostavailableslot)[OnSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-onseat)[PickedObjectOccupiedSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-pickedobjectoccupiedslot)[PickedObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-pickedobjectslot)
