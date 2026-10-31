---
document_id: "cffc320243cb3294b927c9cd891e32d3f41c5e670cf6b08fdf784fbb8579a35d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving"
title: "Condition_IsVehicleInAutoDriving"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:49+00:00"
content_sha256: "74c1f676975ab10087e190819d4b6da3de94efccf7eac1cadc6db09c9918e459"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isvehicleinautodriving"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

This condition function determines whether the specified vehicle (BaseObject) is currently in auto-driving mode.

The evaluation result is compared against the given CompareType:

- Equal : Condition is true if the vehicle IS in auto-driving mode.
- NotEqual : Condition is true if the vehicle is NOT in auto-driving mode.

# Parameters

| ParameterDescriptionBaseObjectSpecifies the vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectSpecifies the vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeIs this vehicle in auto-driving mode?SelfIsVehicleInAutoDrivingEqualIs the target vehicle not in auto-driving mode?TargetIsVehicleInAutoDrivingNotEqual |
| --- |
| Is this vehicle in auto-driving mode?SelfIsVehicleInAutoDrivingEqualIs the target vehicle not in auto-driving mode?TargetIsVehicleInAutoDrivingNotEqual |
| Is the target vehicle not in auto-driving mode?TargetIsVehicleInAutoDrivingNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)[IsVehicleLightsOn](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehiclelightson)
