---
document_id: "c075a610efa2fbe12fce58585ba3c926ac9a290f45b6dcb4c8a02b904320fac4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehiclelightson"
title: "Condition_IsVehicleLightsOn"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:49+00:00"
content_sha256: "dfea714dce087d8ef841a4b8c2812087ea3e98dc30a1638b5c0c3897991b98e0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isvehiclelightson"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified vehicle light flag (S1) is currently turned on.

# Parameters

| ParameterDescriptionBaseObjectThe vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Vehicle light flag to check (EB1VehicleLight). |
| --- |
| BaseObjectThe vehicle to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Vehicle light flag to check (EB1VehicleLight). |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Vehicle light flag to check (EB1VehicleLight). |
| S1Vehicle light flag to check (EB1VehicleLight). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether headlights are on.SelfIsVehicleLightsOnEqualHeadLightsChecks whether brake lights are NOT on.TargetIsVehicleLightsOnNotEqualBrakeLights |
| --- |
| Checks whether headlights are on.SelfIsVehicleLightsOnEqualHeadLightsChecks whether brake lights are NOT on.TargetIsVehicleLightsOnNotEqualBrakeLights |
| Checks whether brake lights are NOT on.TargetIsVehicleLightsOnNotEqualBrakeLights |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
