---
document_id: "b8cec3ab795377f40fea5592ec2eb2992af959cb54ad5738a238fc50a103412c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleseatoccupied"
title: "Condition_IsVehicleSeatOccupied"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:49+00:00"
content_sha256: "ba8e93adf8a1e61e0b48fdffc6079ce817210a7db7781b22544f3c99fc59bbb6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isvehicleseatoccupied"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified seat (S1) of the given vehicle is occupied. Note: For some interactions (e.g., embark/disembark, seat shift), a seat may be treated as "occupied" even before a passenger is seated if the interaction/slot is already reserved.

# Parameters

| ParameterDescriptionBaseObjectThe vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1The seat to check (Driver, Passenger0, Passenger1, etc.). |
| --- |
| BaseObjectThe vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1The seat to check (Driver, Passenger0, Passenger1, etc.). |
| CompareTypeType of comparison operation (Equal or NotEqual).S1The seat to check (Driver, Passenger0, Passenger1, etc.). |
| S1The seat to check (Driver, Passenger0, Passenger1, etc.). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether driver seat is occupied.SelfIsVehicleSeatOccupiedEqualDriverChecks whether passenger seat is empty.SelfIsVehicleSeatOccupiedNotEqualPassenger0 |
| --- |
| Checks whether driver seat is occupied.SelfIsVehicleSeatOccupiedEqualDriverChecks whether passenger seat is empty.SelfIsVehicleSeatOccupiedNotEqualPassenger0 |
| Checks whether passenger seat is empty.SelfIsVehicleSeatOccupiedNotEqualPassenger0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
