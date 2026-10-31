---
document_id: "7638c3fdfd19684d08edbb388da8858fb88148a5950ea33b779efa173f8a1ae5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicle"
title: "📘 Vehicle Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:58+00:00"
content_sha256: "29362285ac86d97c86a92f45bfa2a8f7cdb0e60cbf39323969b04de7b97a51e3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/vehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1VehicleTableRow

Defines a vehicle entity used in simulation, including appearance, template, and spawn settings.

### Properties

- **Id** (`FName`): Unique identifier for the vehicle.
- **Type** (`EB1VehicleType`): The type of vehicle (car, motorcycle, ship, or bicycle).
- **DisplayNameTextId** (`FString`): Localized name shown in the UI. *(StringTableKey = "Id")*
- **DescriptionTextId** (`FString`): Localized description for the vehicle. *(StringTableKey = "Id")*
- **VehicleTemplateId** (`FName`): Template this vehicle is based on. *(Foreign = "VehicleTemplate.Id")*
- **Asset** (`TSoftObjectPtr<UBlueprint>`): Blueprint actor asset for the vehicle.
- **StaticMeshAsset** (`TSoftObjectPtr<UStaticMesh>`): Single merged static mesh used for distant / simulation-mode rendering. Separate from the component mesh slots.
- **SimulationDriverMeshSetId** (`FName`): Optional driver mesh group ID used in simulation mode.
- **Icon** (`TSoftObjectPtr<UObject>`): Scheduled for removal. Nothing in the game reads it. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **PurchasableLevel** (`TArray<FName>`): Map (level) IDs where this vehicle can be purchased. *(Foreign = "Map.Id", ModTip = "LevelName")*
- **Price** (`int32`): Cost to purchase this vehicle.
- **bDisableSimulationRandomVehicleColor** (`bool`): When true, simulation-spawned vehicles of this type use the default color instead of a random one.
- **Color** (`TArray<FB1VehicleColorData>`): List of available vehicle colors.
- **RequiredSkillLevel** (`int32`): Minimum skill level required to purchase. *(ClampMin = 0)*
- **Thumbnail** (`TSoftObjectPtr<UObject>`): Thumbnail shown in the boat rental UI. Read only there; the vehicle management list uses `Color[].ColoredIcon` instead.

## 📚 References

- [FB1VehicleColorData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclecolordata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoVehicle[EB1VehiclePartActionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1vehiclepartactiontype)[EB1VehiclePartType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1vehicleparttype)[VehicleTemplate Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicletemplate)[FB1VehicleAccidentData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidentdata)[FB1VehicleAccidentDataList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidentdatalist)[FB1VehicleAccidentProbabilityData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidentprobabilitydata)[FB1VehicleAccidentTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleaccidenttablerow)[FB1VehicleAssetDescription](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleassetdescription)[FB1VehicleColorData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclecolordata)[FB1VehicleContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclecontext)[FB1VehicleDefaultSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicledefaultsetting)[FB1VehicleDynamicData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicledynamicdata)
