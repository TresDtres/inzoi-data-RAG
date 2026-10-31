---
document_id: "4c609c5206a2766c1a9cdb579b3f4f80a575238992a5f8a739eef261b817f324"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/service"
title: "📘 Service Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:02+00:00"
content_sha256: "fd474e015f890913e3998238aceedee4da1497b819e4c6d6e1d651bf143415a8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/service"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ServiceTableRow

Defines service roles and visit behavior, including schedule flow and popup text configuration.

### Properties

- **Id** (`FName`): Unique identifier for the service entry.
- **ServiceRoleInfos** (`TArray<FB1ServiceRoleInfo>`): List of service roles used during this service.
- **VisitType** (`EB1ServiceVisitType`): Visit type used by the service (e.g., Personal, Site).
- **GroupId** (`FName`): Group identifier used to logically organize related services.
- **bKeepPushingSchedule** (`bool`): An option that keeps the service running until it is terminated by a designated trigger.
- **PersistentScheduleFinishConditions** (`TArray<FB1Condition>`): When bKeepPushingSchedule is True, this defines the set of conditions that determine when the service is considered complete.
- **VehicleMeshDescriptionTagId** (`FName`): Mesh tag used to spawn service vehicles. *(Foreign = "MeshSpawnTag.Id")*
- **PendingPopupTextId** (`FString`): Message shown while the service is pending. *(Foreign = "Text_Message.Id")*
- **AddingPopupTextId** (`FString`): Message shown when the service is being added. *(Foreign = "Text_Message.Id")*
- **SuccessPopupTextId** (`FString`): Message shown when the service is successfully completed. *(Foreign = "Text_Message.Id")*
- **FailurePopupTextId** (`FString`): Message shown when the service fails. *(Foreign = "Text_Message.Id")*
- **TimeOutPopupTextId** (`FString`): Message shown when the service times out. *(Foreign = "Text_Message.Id")*
- **FinishPopupTextId** (`FString`): Message shown at the final completion of the service. *(Foreign = "Text_Message.Id")*

## 📚 References

- [FB1ServiceRoleInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceroleinfo)
- [EB1ServiceVisitType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1servicevisittype)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoService[EB1ServiceVisitType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1servicevisittype)[FB1ServiceContextId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicecontextid)[FB1ServiceExecuteContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceexecutecontext)[FB1ServicePriceSatisfactionRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicepricesatisfactionrange)[FB1ServiceRoleInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceroleinfo)[FB1ServiceSelectContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceselectcontext)[FB1ServiceSelectExecuteConnection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1serviceselectexecuteconnection)[FB1ServiceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicetablerow)[FB1ServiceVehicleDescriptionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1servicevehicledescriptioninfo)
