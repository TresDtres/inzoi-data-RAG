---
document_id: "a1404279e75e81edb2c8720f36a0b41c1123e9e31714dd640e56aa35cd9fd199"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver"
title: "Condition_IsDriver"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:26+00:00"
content_sha256: "216f5cbd719b07edae952bb5307d8afc44fadeafb7c0b62a5975f1b48860cde9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isdriver"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

This condition function determines whether the specified BaseObject (character) is currently sitting in the driver's seat of a vehicle. (EB1VehicleSeat::Driver)

The evaluation result is compared against the given CompareType:

- Equal : Condition is true if the character IS sitting in the driver's seat.
- NotEqual : Condition is true if the character is NOT sitting in the driver's seat.

# Parameters

| ParameterDescriptionBaseObjectSpecifies the object to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectSpecifies the object to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeIs self sitting in the driver's seat?SelfIsDriverEqualIs target not sitting in the driver's seat?TargetIsDriverNotEqual |
| --- |
| Is self sitting in the driver's seat?SelfIsDriverEqualIs target not sitting in the driver's seat?TargetIsDriverNotEqual |
| Is target not sitting in the driver's seat?TargetIsDriverNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)[IsVehicleLightsOn](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehiclelightson)
