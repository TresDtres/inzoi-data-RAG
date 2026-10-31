---
document_id: "cbd3656645a7969f1c05ec021743e80342b5d5bb18fae5edebe955eb71ce0a9b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1targetfiltertype"
title: "EB1TargetFilterType"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:42+00:00"
content_sha256: "4e6c7897a6457b31f1da488cec54a712cc7c4856b2adbfc9d7922b93b3dd86ef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/enum/eb1targetfiltertype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🎛️ Enum: EB1TargetFilterType

Determines the type of filter applied to identify a specific interaction or object target.

- **Invalid**: Find game objects that can use the specified InteractionBag Id..
- **InteractionBagId**: Find game objects that can use interactions categorized under InteractionBagCategory.
- **InteractionBagCategory**: Find the game object with the specified ObjectId.
- **ObjectId**: Find game objects with the specified ObjectTag.
- **Character**: Find Joy characters currently located on the same site.
- **CarriedObject**: Targets the currently carried object.
- **AutoPutDown**: Finds where the carried object should be placed.
- **Vehicle**: Targets a vehicle.
- **OwnedVehicle**: Find vehicles owned by the player.
- **VehiclePassenger**: Find Joy characters seated in a vehicle.(Only works when the target is a vehicle.).
- **ConnectedChairObject**: Find chair objects connected to the target.(e.g., A chair in front of a computer)
- **RelationshipStat**: Among Joy characters who have a relationship with the player, find those based on relationship comparison. Vehicle: Find vehicles within range.
- **Site**: Find site area sites within range.
- **CharacterDiningSlot**: Find carriable objects placed on the table in front of a Joy character.
- **PutDownDiningSlot**: Targets where food can be placed.
- **PickedObjectSlot**: Find a specific object slot of the selected object.
- **ChairObject**: Find chairs within range.
- **CoopRole**: Filters for cooperative interaction roles.
- **Tag**: Filters by tag (S1: Character, GameObject, Vehicle).
- **EntityTag**: Find type objects that have the EntityTag
- **PickedObjectOccupiedSlot**: Filters for occupied slot on picked object.
- **SiteEventRole**: Find Joy characters participating in the same site or social event role.
- **Engagement**: Find the engaged partner.
- **Spouse**: Find the spouse.
- **TalkLocation**: Filters by available talk location.
- **ServiceTrigger**: When the player is performing a service (e.g., firefighter, police officer), find the Joy who requested the service (trigger).
- **ServiceExecutioner**: Find the Joy character(s) performing the service requested by the player.
- **ObjectTag**: Filters by object tag.
- **InteractionBagIdDoNotCheckOccupyEntityId**: Filters InteractionBag without checking entity ID.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTarget[TargetFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/targetfilter)[FB1TargetCustomerCategoryData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetcustomercategorydata)[FB1TargetCustomerCommonData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetcustomercommondata)[FB1TargetCustomerData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetcustomerdata)[FB1TargetFilterInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetfilterinfo)[FB1TargetFilters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetfilters)[FB1TargetFilterTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetfiltertablerow)[FB1TargetMemory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetmemory)[FB1TargetSlotParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetslotparam)
