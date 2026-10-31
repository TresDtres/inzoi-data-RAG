---
document_id: "17510d852b39eafd0ad34386dee5e889a2e99bf4251de7483064f769946b9c4e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicletemplate"
title: "📘 VehicleTemplate Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:58+00:00"
content_sha256: "ad244f97a593495da09741c1d90b3f3ad7f91b5eefda97101ec43e8211dacb35"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/vehicletemplate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1VehicleTemplateTableRow

Defines a base template shared by one or more vehicles: part animation list, physical dimensions and crash weight.

### Properties

- **Id** (`FName`): Unique identifier for the vehicle template.
- **ObjectSelectionId** (`FName`): The ID of the interaction set to display when a vehicle is clicked. *(Foreign = "ObjectSelectionSet.Id")*
- **CrashMassLevel** (`int32`): Virtual mass level used to judge severity when vehicles collide.
- **PartList** (`TArray<FB1VehiclePart>`): Mapping between vehicle parts and animations that control part movement.
- **AssetDescription** (`FB1VehicleAssetDescription`): Physical dimensions and seating capacity.
- **PartMap** (`TMap<EB1VehiclePartType, FB1VehiclePartCache>`): Runtime mapping of parts, initialized at load.

> Driving parameters (speed, acceleration, steering) are **not** in this template. They live in the vehicle's movement component.

## 📚 References

- [FB1VehiclePart](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclepart)
- [FB1VehiclePartState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclepartstate)
- [FB1VehicleAssetDescription](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleassetdescription)
- [EB1VehiclePartType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1vehicleparttype)
- [EB1VehiclePartActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1vehiclepartactiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoVehicle[EB1VehiclePartActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1vehiclepartactiontype)[EB1VehiclePartType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1vehicleparttype)[Vehicle Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicle)[FB1VehicleAccidentData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidentdata)[FB1VehicleAccidentDataList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidentdatalist)[FB1VehicleAccidentProbabilityData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidentprobabilitydata)[FB1VehicleAccidentTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidenttablerow)[FB1VehicleAssetDescription](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleassetdescription)[FB1VehicleColorData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclecolordata)[FB1VehicleContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclecontext)[FB1VehicleDefaultSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicledefaultsetting)[FB1VehicleDynamicData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicledynamicdata)
