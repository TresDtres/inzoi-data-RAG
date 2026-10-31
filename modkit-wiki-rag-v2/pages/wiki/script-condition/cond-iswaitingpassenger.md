---
document_id: "0e59c4e740b3bc1df8cf7cb1b3b54f5b207585cb20a10c462531fef994d86daa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iswaitingpassenger"
title: "Condition_IsWaitingPassenger"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:50+00:00"
content_sha256: "2c6d131abac8f5feb5178eb399d4c26dbd9656446b364cd4ed597c23db9f5102"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iswaitingpassenger"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified vehicle is currently waiting for a passenger. If S1 is not specified (or is invalid), this checks whether the vehicle is waiting for ANY passenger on any seat. If S1 is specified, only the given seat is checked.

# Parameters

| ParameterDescriptionBaseObjectThe vehicle to validate (Self or Target).CompareTypeEqual: vehicle is waiting for passenger. NotEqual: not waiting.S1(Optional) Seat to check (Driver, Passenger0 ~ Passenger5, ...). |
| --- |
| BaseObjectThe vehicle to validate (Self or Target).CompareTypeEqual: vehicle is waiting for passenger. NotEqual: not waiting.S1(Optional) Seat to check (Driver, Passenger0 ~ Passenger5, ...). |
| CompareTypeEqual: vehicle is waiting for passenger. NotEqual: not waiting.S1(Optional) Seat to check (Driver, Passenger0 ~ Passenger5, ...). |
| S1(Optional) Seat to check (Driver, Passenger0 ~ Passenger5, ...). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether the target vehicle is waiting for any passenger.TargetIsWaitingForPassengerEqualChecks whether the target vehicle is NOT waiting for any passenger.TargetIsWaitingForPassengerNotEqualChecks whether the target vehicle is waiting for driver seat.TargetIsWaitingForPassengerEqualDriver |
| --- |
| Checks whether the target vehicle is waiting for any passenger.TargetIsWaitingForPassengerEqualChecks whether the target vehicle is NOT waiting for any passenger.TargetIsWaitingForPassengerNotEqualChecks whether the target vehicle is waiting for driver seat.TargetIsWaitingForPassengerEqualDriver |
| Checks whether the target vehicle is NOT waiting for any passenger.TargetIsWaitingForPassengerNotEqualChecks whether the target vehicle is waiting for driver seat.TargetIsWaitingForPassengerEqualDriver |
| Checks whether the target vehicle is waiting for driver seat.TargetIsWaitingForPassengerEqualDriver |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
