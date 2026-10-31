---
document_id: "c214aae9d61c88af56342d29869e3329420a9b8a522daaab5c1809452455255e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-vehiclepartstate"
title: "Condition_VehiclePartState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:02+00:00"
content_sha256: "45e27cd69d84b8b722db38a4daa4cf647b1adef11601e6392343f84f9837cfbf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-vehiclepartstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the current state of a specific vehicle part (S1) against the expected state (S2).

# Parameters

| ParameterDescriptionBaseObjectThe vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1The vehicle part type (DriverDoor, Trunk, DriverWindow, etc.).S2The expected part state value to compare against. |
| --- |
| BaseObjectThe vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1The vehicle part type (DriverDoor, Trunk, DriverWindow, etc.).S2The expected part state value to compare against. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1The vehicle part type (DriverDoor, Trunk, DriverWindow, etc.).S2The expected part state value to compare against. |
| S1The vehicle part type (DriverDoor, Trunk, DriverWindow, etc.).S2The expected part state value to compare against. |
| S2The expected part state value to compare against. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks whether driver door is open.SelfVehiclePartStateEqualDriverDoorOpenChecks whether trunk is NOT closed.SelfVehiclePartStateNotEqualTrunkClosed |
| --- |
| Checks whether driver door is open.SelfVehiclePartStateEqualDriverDoorOpenChecks whether trunk is NOT closed.SelfVehiclePartStateNotEqualTrunkClosed |
| Checks whether trunk is NOT closed.SelfVehiclePartStateNotEqualTrunkClosed |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
