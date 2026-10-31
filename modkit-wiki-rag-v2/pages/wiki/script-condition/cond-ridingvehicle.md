---
document_id: "8e47a2f92339be573cc2c665451a8ad5a69b70cad9d9310c6e8abc974bdd9746"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ridingvehicle"
title: "Condition_RidingVehicle"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:57+00:00"
content_sha256: "df0ae6bfce317851eece0db8819e12f17a0ce12ac4478b2bb3cc25acf0157bd3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ridingvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the given BaseObject (character) is riding a specific type of vehicle (S1) and whether the riding vehicle's DtId matches the expected value (S2).

# Parameters

| ParameterDescriptionBaseObjectThe character to validate (Self or Target).CompareTypeType of comparison operation for VehicleDtId.S1The vehicle type to check (Car, Motorcycle, Ship).S2The VehicleDtId to compare against. |
| --- |
| BaseObjectThe character to validate (Self or Target).CompareTypeType of comparison operation for VehicleDtId.S1The vehicle type to check (Car, Motorcycle, Ship).S2The VehicleDtId to compare against. |
| CompareTypeType of comparison operation for VehicleDtId.S1The vehicle type to check (Car, Motorcycle, Ship).S2The VehicleDtId to compare against. |
| S1The vehicle type to check (Car, Motorcycle, Ship).S2The VehicleDtId to compare against. |
| S2The VehicleDtId to compare against. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks whether self is riding a car with DtId.SelfRidingVehicleEqualCarSomeDtIdChecks whether target is NOT riding that vehicle.TargetRidingVehicleNotEqualCarSomeDtId |
| --- |
| Checks whether self is riding a car with DtId.SelfRidingVehicleEqualCarSomeDtIdChecks whether target is NOT riding that vehicle.TargetRidingVehicleNotEqualCarSomeDtId |
| Checks whether target is NOT riding that vehicle.TargetRidingVehicleNotEqualCarSomeDtId |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
