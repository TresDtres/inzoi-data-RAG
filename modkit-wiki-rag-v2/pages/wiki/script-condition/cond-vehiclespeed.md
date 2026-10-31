---
document_id: "4283f20c7c4a379fb687ebe5527a97193640fee2f5f65186ed52ec68782ff6ea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-vehiclespeed"
title: "Condition_VehicleSpeed"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:02+00:00"
content_sha256: "118924f95fd7b250529b304a6d014f3487b36a841b70d73930ce3652621a07fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-vehiclespeed"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

This condition function compares the speed of the specified vehicle (BaseObject) against the given threshold values (F1, F2).

The evaluation result is compared against the given CompareType:

- Equal : Condition is true if the speed equals F1.
- NotEqual : Condition is true if the speed does not equal F1.
- Less : Condition is true if the speed is less than F1.
- LessOrEqual : Condition is true if the speed is less than or equal to F1.
- Greater : Condition is true if the speed is greater than F1.
- GreaterOrEqual: Condition is true if the speed is greater than or equal to F1.
- Between : Condition is true if the speed is between F1 and F2.

# Parameters

| ParameterDescriptionBaseObjectSpecifies the vehicle to check (Self or Target).CompareTypeType of comparison operation.F1The first threshold value for speed comparison.F2The second threshold value (used for Between comparison). |
| --- |
| BaseObjectSpecifies the vehicle to check (Self or Target).CompareTypeType of comparison operation.F1The first threshold value for speed comparison.F2The second threshold value (used for Between comparison). |
| CompareTypeType of comparison operation.F1The first threshold value for speed comparison.F2The second threshold value (used for Between comparison). |
| F1The first threshold value for speed comparison.F2The second threshold value (used for Between comparison). |
| F2The second threshold value (used for Between comparison). |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Is the vehicle speed greater than 50?SelfVehicleSpeedGreater50Is the vehicle speed between 30 and 60?SelfVehicleSpeedBetween3060Is the vehicle stopped (speed equals 0)?SelfVehicleSpeedEqual0 |
| --- |
| Is the vehicle speed greater than 50?SelfVehicleSpeedGreater50Is the vehicle speed between 30 and 60?SelfVehicleSpeedBetween3060Is the vehicle stopped (speed equals 0)?SelfVehicleSpeedEqual0 |
| Is the vehicle speed between 30 and 60?SelfVehicleSpeedBetween3060Is the vehicle stopped (speed equals 0)?SelfVehicleSpeedEqual0 |
| Is the vehicle stopped (speed equals 0)?SelfVehicleSpeedEqual0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
