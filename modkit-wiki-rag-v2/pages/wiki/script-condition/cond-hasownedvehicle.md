---
document_id: "4fc990d080ace90fd3a4d1e02ee08cb860c84f6a2ca8e47343495ca809b37e7b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle"
title: "Condition_HasOwnedVehicle"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:11+00:00"
content_sha256: "06a1adb0e43dedbdcbbe074cd7603f42ac785fee841925506cd624b9a28a8ca1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasownedvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified BaseObject (character) has an owned vehicle. If S1 is specified, this condition also verifies that the owned vehicle type matches S1.

# Parameters

| ParameterDescriptionBaseObjectThe character to validate (Self or Target).CompareTypeEqual: has an owned vehicle (and matches S1 if provided).NotEqual: does not have an owned vehicle (or does not match S1).S1(Optional) Vehicle type filter (Car, Motorcycle). |
| --- |
| BaseObjectThe character to validate (Self or Target).CompareTypeEqual: has an owned vehicle (and matches S1 if provided).NotEqual: does not have an owned vehicle (or does not match S1).S1(Optional) Vehicle type filter (Car, Motorcycle). |
| CompareTypeEqual: has an owned vehicle (and matches S1 if provided).NotEqual: does not have an owned vehicle (or does not match S1).S1(Optional) Vehicle type filter (Car, Motorcycle). |
| NotEqual: does not have an owned vehicle (or does not match S1).S1(Optional) Vehicle type filter (Car, Motorcycle). |
| S1(Optional) Vehicle type filter (Car, Motorcycle). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether self has any owned vehicle.SelfHasOwnedVehicleEqualChecks whether self does NOT have any owned vehicle.SelfHasOwnedVehicleNotEqualChecks whether target has an owned car.TargetHasOwnedVehicleEqualCarChecks whether target does NOT have an owned motorcycle.TargetHasOwnedVehicleNotEqualMotorcycle |
| --- |
| Checks whether self has any owned vehicle.SelfHasOwnedVehicleEqualChecks whether self does NOT have any owned vehicle.SelfHasOwnedVehicleNotEqualChecks whether target has an owned car.TargetHasOwnedVehicleEqualCarChecks whether target does NOT have an owned motorcycle.TargetHasOwnedVehicleNotEqualMotorcycle |
| Checks whether self does NOT have any owned vehicle.SelfHasOwnedVehicleNotEqualChecks whether target has an owned car.TargetHasOwnedVehicleEqualCarChecks whether target does NOT have an owned motorcycle.TargetHasOwnedVehicleNotEqualMotorcycle |
| Checks whether target has an owned car.TargetHasOwnedVehicleEqualCarChecks whether target does NOT have an owned motorcycle.TargetHasOwnedVehicleNotEqualMotorcycle |
| Checks whether target does NOT have an owned motorcycle.TargetHasOwnedVehicleNotEqualMotorcycle |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)[IsVehicleLightsOn](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehiclelightson)
