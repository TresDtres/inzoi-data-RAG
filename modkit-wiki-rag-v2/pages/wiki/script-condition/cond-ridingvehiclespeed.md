---
document_id: "08d3bf223a63ad6c0f0f1baaa600b3378b004d893af06677d3d042c82f46ece3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ridingvehiclespeed"
title: "Condition_RidingVehicleSpeed"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:57+00:00"
content_sha256: "cac74e14eb730ebe49dd3ed34dd5b9d148c2599bd5a10d1c1e9a3d68ac5a236b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ridingvehiclespeed"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the speed of the vehicle that Self is currently riding against the given threshold values (F1, F2).

# Parameters

| ParameterDescriptionCompareTypeType of comparison operation.F1The first threshold value for speed comparison.F2The second threshold value (used for Between comparison). |
| --- |
| CompareTypeType of comparison operation.F1The first threshold value for speed comparison.F2The second threshold value (used for Between comparison). |
| F1The first threshold value for speed comparison.F2The second threshold value (used for Between comparison). |
| F2The second threshold value (used for Between comparison). |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks whether riding speed is greater than 30.SelfRidingVehicleSpeedGreater30Checks whether riding speed is between 20 and 50.SelfRidingVehicleSpeedBetween2050 |
| --- |
| Checks whether riding speed is greater than 30.SelfRidingVehicleSpeedGreater30Checks whether riding speed is between 20 and 50.SelfRidingVehicleSpeedBetween2050 |
| Checks whether riding speed is between 20 and 50.SelfRidingVehicleSpeedBetween2050 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
