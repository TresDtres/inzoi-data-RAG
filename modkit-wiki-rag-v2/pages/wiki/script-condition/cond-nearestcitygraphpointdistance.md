---
document_id: "3e15611697c37d6ebbcd936392a99e17e7d9f9d08f2b90e99c364b96d6e0feff"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-nearestcitygraphpointdistance"
title: "Condition_NearestCityGraphPointDistance"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:52+00:00"
content_sha256: "8ee4b733b7d7053384a2f4b53bb48b2265f7313ac9f1c4cd9341798d02f61b3d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-nearestcitygraphpointdistance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the distance between the BaseObject character and the nearest city graph point of the specified category is within the threshold defined by F1. F1 is also used as the search radius when querying the city graph, so it must be greater than 0.

# Parameters

| ParameterDescriptionBaseObjectThe character whose position is used as the query origin (Self or Target)CompareTypeEqual: distance is within F1; NotEqual is not supported (returns false if no point is found)S1City graph category to search (e.g., Spawn, Commerce, Residential, Industrial, Service)F1Distance threshold in Unreal units; must be greater than 0. Also used as the search radius. |
| --- |
| BaseObjectThe character whose position is used as the query origin (Self or Target)CompareTypeEqual: distance is within F1; NotEqual is not supported (returns false if no point is found)S1City graph category to search (e.g., Spawn, Commerce, Residential, Industrial, Service)F1Distance threshold in Unreal units; must be greater than 0. Also used as the search radius. |
| CompareTypeEqual: distance is within F1; NotEqual is not supported (returns false if no point is found)S1City graph category to search (e.g., Spawn, Commerce, Residential, Industrial, Service)F1Distance threshold in Unreal units; must be greater than 0. Also used as the search radius. |
| S1City graph category to search (e.g., Spawn, Commerce, Residential, Industrial, Service)F1Distance threshold in Unreal units; must be greater than 0. Also used as the search radius. |
| F1Distance threshold in Unreal units; must be greater than 0. Also used as the search radius. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1Is self within 1000 units of a Spawn point?SelfNearestCityGraphPointDistanceEqualSpawn1000Is self within 500 units of a Commerce zone?SelfNearestCityGraphPointDistanceEqualCommerce500Is target within 800 units of a Residential area?TargetNearestCityGraphPointDistanceEqualResidential800 |
| --- |
| Is self within 1000 units of a Spawn point?SelfNearestCityGraphPointDistanceEqualSpawn1000Is self within 500 units of a Commerce zone?SelfNearestCityGraphPointDistanceEqualCommerce500Is target within 800 units of a Residential area?TargetNearestCityGraphPointDistanceEqualResidential800 |
| Is self within 500 units of a Commerce zone?SelfNearestCityGraphPointDistanceEqualCommerce500Is target within 800 units of a Residential area?TargetNearestCityGraphPointDistanceEqualResidential800 |
| Is target within 800 units of a Residential area?TargetNearestCityGraphPointDistanceEqualResidential800 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoVehicle[HasOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasownedvehicle)[IsAnyVehicleSeatOccupied](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isanyvehicleseatoccupied)[IsDriver](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isdriver)[IsInVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isinvehicle)[IsOwnedVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownedvehicle)[IsOwnerSitInDriverSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isownersitindriverseat)[IsReachableUsingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isreachableusingvehicle)[IsTargetCurrentRidingVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-istargetcurrentridingvehicle)[IsVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicle)[IsVehicleDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicledriving)[IsVehicleInAutoDriving](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinautodriving)[IsVehicleInParkingPlace](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvehicleinparkingplace)
