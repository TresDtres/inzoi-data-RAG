---
document_id: "be4b86eb5e8631e6a8b45e431881aa42981730292b2f2419e73783b10505eb7b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-returntoparkingplace"
title: "Execute_ReturnToParkingPlace"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:49+00:00"
content_sha256: "4242c0cd236d718883b35f31dab94e0fea64d74a6dfab7faffbf5597fbf5d3b4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-returntoparkingplace"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns (recalls) a vehicle to its parking place. If Execute.BaseObject does not resolve to a valid vehicle, this will fall back to the Self character's owned vehicle.

# Note

Depending on the spec, there may be no actual "parking place" in the world. In such cases, recalling the vehicle results in despawning the vehicle (i.e., treating it as parked).

# Parameters

| ParameterDescriptionBaseObjectVehicle to recall (Self or Target). If not found, Self's owned vehicle is used. |
| --- |
| BaseObjectVehicle to recall (Self or Target). If not found, Self's owned vehicle is used. |

# Examples

| DescriptionBaseObjectCommandRecalls the target vehicle to parking place.TargetReturnToParkingPlaceRecalls self's owned vehicle to parking place.SelfReturnToParkingPlace |
| --- |
| Recalls the target vehicle to parking place.TargetReturnToParkingPlaceRecalls self's owned vehicle to parking place.SelfReturnToParkingPlace |
| Recalls self's owned vehicle to parking place.SelfReturnToParkingPlace |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoVehicle[FreezeVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-freezevehicle)[SellStolenVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sellstolenvehicle)[UnfreezeVehicle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-unfreezevehicle)
