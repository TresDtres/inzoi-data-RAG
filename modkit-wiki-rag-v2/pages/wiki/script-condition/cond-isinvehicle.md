---
document_id: "d74ad4fee034865756bd4a255d22471709e3acea3e236266e91b2ea15f6686dc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle"
title: "Condition_IsInVehicle"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:34+00:00"
content_sha256: "d6685765c0ceddb6c065765b24a70dc6fb2a4997f083278ab6985287da6b122e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isinvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

This condition function determines whether the specified BaseObject (character) is currently riding in a vehicle. Optionally, a specific vehicle type can be specified using the S1 parameter.

The evaluation result is compared against the given CompareType:

- Equal : Condition is true if the character IS in a vehicle.
- NotEqual : Condition is true if the character is NOT in a vehicle.

# Parameters

| ParameterDescriptionBaseObjectSpecifies the object to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) The vehicle type to check (Car, Motorcycle, Ship). |
| --- |
| BaseObjectSpecifies the object to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) The vehicle type to check (Car, Motorcycle, Ship). |
| CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) The vehicle type to check (Car, Motorcycle, Ship). |
| S1(Optional) The vehicle type to check (Car, Motorcycle, Ship). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Is self in any vehicle?SelfIsInVehicleEqualIs self in a car?SelfIsInVehicleEqualCarIs self not riding a motorcycle?SelfIsInVehicleNotEqualMotorcycle |
| --- |
| Is self in any vehicle?SelfIsInVehicleEqualIs self in a car?SelfIsInVehicleEqualCarIs self not riding a motorcycle?SelfIsInVehicleNotEqualMotorcycle |
| Is self in a car?SelfIsInVehicleEqualCarIs self not riding a motorcycle?SelfIsInVehicleNotEqualMotorcycle |
| Is self not riding a motorcycle?SelfIsInVehicleNotEqualMotorcycle |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)[IsVehicleLightsOn](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehiclelightson)
