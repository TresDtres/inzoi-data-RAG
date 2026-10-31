---
document_id: "3663c484ab3bb89c497d39065e43004ef12da7905d229862341a04f8c5faf76c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied"
title: "Condition_IsAnyVehicleSeatOccupied"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:19+00:00"
content_sha256: "3b951f1de85928d0213d593ab5ad329b65e8d0958de0548c9cc3c7cfb0262257"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isanyvehicleseatoccupied"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether any seat of the given vehicle is occupied. This is the "any seat" variant of Condition_IsVehicleSeatOccupied (no S1 required). If BaseObject is Self, this function checks the vehicle owned by the Self character.

# Parameters

| ParameterDescriptionBaseObjectSelf: checks Self character's owned vehicle.Target: checks the target vehicle.CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectSelf: checks Self character's owned vehicle.Target: checks the target vehicle.CompareTypeType of comparison operation (Equal or NotEqual). |
| Target: checks the target vehicle.CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether any seat of target vehicle is occupied.TargetIsAnyVehicleSeatOccupiedEqualChecks whether owned vehicle has no occupied seats.SelfIsAnyVehicleSeatOccupiedNotEqual |
| --- |
| Checks whether any seat of target vehicle is occupied.TargetIsAnyVehicleSeatOccupiedEqualChecks whether owned vehicle has no occupied seats.SelfIsAnyVehicleSeatOccupiedNotEqual |
| Checks whether owned vehicle has no occupied seats.SelfIsAnyVehicleSeatOccupiedNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)[IsVehicleLightsOn](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehiclelightson)
