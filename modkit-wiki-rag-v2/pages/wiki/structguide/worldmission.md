---
document_id: "ab8a284e763849c205ecb9d42fea18de8051d21cfd3e027761a8ab9ec54f591b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/worldmission"
title: "📘 WorldMission Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:59+00:00"
content_sha256: "581339e3c64198fcb61c7bbc0d4cfec3e05b7e80cf7b3e8bde1c2cdd267167f6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/worldmission"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1WorldMissionTableRow

Defines a mission that occurs globally or persistently in the world.

### Properties

- **Id** (`FName`): Unique identifier for the world mission.
- **CheckType** (`EB1WorldMissionCheckType`): Defines the target scope for mission checks. (e.g., character, family, world)
- **bIsRepeat** (`bool`): If true, this mission can be completed multiple times.
- **RepeatCount** (`int32`): Number of times the mission can be repeated. A value of -1 indicates unlimited repetitions.
- **Conditions** (`TArray<FB1MissionConditionData>`): Conditions evaluated to check whether the mission has been successfully completed.
- **CompleteMissionId** (`FName`): Script run when mission is completed. *(Foreign = "Script_WorldMission.Id")*
- **PlayingNotOldestFamilySystemMessageId** (`FString`): If the mission is a Family mission and the currently active character is not the eldest member of the family, this is the system message ID to be shown. *(StringTableKey)*

## 📚 References

- [FB1MissionConditionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionconditiondata)
- [EB1WorldMissionCheckType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1worldmissionchecktype)
- [EB1MissionCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1missioncondition)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoWorld[EB1WorldMissionCheckType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1worldmissionchecktype)[FB1WorldDecorationSpawnCountDataList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worlddecorationspawncountdatalist)[FB1WorldLevelSequenceInfoList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldlevelsequenceinfolist)[FB1WorldMapCameraBlendSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmapcamerablendsetting)[FB1WorldMapCameraSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmapcamerasetting)[FB1WorldMapPostProcessSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmappostprocesssetting)[FB1WorldMissionChecker](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmissionchecker)[FB1WorldMissionConditionChecker](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmissionconditionchecker)[FB1WorldMissionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmissiontablerow)[FB1WorldPerformanceDataLayer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldperformancedatalayer)
