---
document_id: "fcf3f45b92908899b5746beac759bb05e34bee8124f2812cdc03813dd7d1c8f8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving"
title: "Condition_IsVehicleDriving"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:49+00:00"
content_sha256: "14ec7b8f9a2bb12b351ea05c54d776755613b01b70855925cc1016c3738220df"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isvehicledriving"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

This condition function determines whether the vehicle that the specified BaseObject (character) is currently riding is in driving state. Specifically, it checks if the vehicle's speed is greater than 0.

The evaluation result is compared against the given CompareType:

- Equal : Condition is true if the vehicle IS driving (speed > 0).
- NotEqual : Condition is true if the vehicle is NOT driving (speed == 0).

# Parameters

| ParameterDescriptionBaseObjectSpecifies the character riding the vehicle (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectSpecifies the character riding the vehicle (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeIs the vehicle self is riding currently driving?SelfIsVehicleDrivingEqualIs the vehicle self is riding stopped?SelfIsVehicleDrivingNotEqualIs the target vehicle currently driving?TargetIsVehicleDrivingEqualIs the target vehicle stopped?TargetIsVehicleDrivingNotEqual |
| --- |
| Is the vehicle self is riding currently driving?SelfIsVehicleDrivingEqualIs the vehicle self is riding stopped?SelfIsVehicleDrivingNotEqualIs the target vehicle currently driving?TargetIsVehicleDrivingEqualIs the target vehicle stopped?TargetIsVehicleDrivingNotEqual |
| Is the vehicle self is riding stopped?SelfIsVehicleDrivingNotEqualIs the target vehicle currently driving?TargetIsVehicleDrivingEqualIs the target vehicle stopped?TargetIsVehicleDrivingNotEqual |
| Is the target vehicle currently driving?TargetIsVehicleDrivingEqualIs the target vehicle stopped?TargetIsVehicleDrivingNotEqual |
| Is the target vehicle stopped?TargetIsVehicleDrivingNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)[IsVehicleLightsOn](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehiclelightson)
