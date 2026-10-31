---
document_id: "b8e8da2334b4d4e8900fe33f3d2677c5cc388f383d1832082ca082611addabad"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmissionchecker"
title: "B1WorldMissionChecker"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:26+00:00"
content_sha256: "79c4db795efc15f5c960221e52024526ce3c9d9e5d81e098de3818a6c9a37e3f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1worldmissionchecker"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Runtime checker for an entire world mission, aggregating condition checkers and tracking overall progress. * Stores mission metadata such as repeat settings and check type alongside its condition checkers.

| PropertyTypeDescriptionMetadataMissionIdFB1MissionIdRuntime identifier of the world mission being tracked.MissionDtIdFNameData table row ID of this world mission definition.bIsRepeatboolWhether this world mission repeats after completion.RepeatCountint32Maximum number of times this world mission can repeat.CheckTypeEB1WorldMissionCheckTypeScope at which this world mission is evaluated (Character, Family, or World).MissionConditionsTArrayArray of per-condition checkers tracking individual condition progress. |
| --- |
| MissionIdFB1MissionIdRuntime identifier of the world mission being tracked.MissionDtIdFNameData table row ID of this world mission definition.bIsRepeatboolWhether this world mission repeats after completion.RepeatCountint32Maximum number of times this world mission can repeat.CheckTypeEB1WorldMissionCheckTypeScope at which this world mission is evaluated (Character, Family, or World).MissionConditionsTArrayArray of per-condition checkers tracking individual condition progress. |
| MissionDtIdFNameData table row ID of this world mission definition.bIsRepeatboolWhether this world mission repeats after completion.RepeatCountint32Maximum number of times this world mission can repeat.CheckTypeEB1WorldMissionCheckTypeScope at which this world mission is evaluated (Character, Family, or World).MissionConditionsTArrayArray of per-condition checkers tracking individual condition progress. |
| bIsRepeatboolWhether this world mission repeats after completion.RepeatCountint32Maximum number of times this world mission can repeat.CheckTypeEB1WorldMissionCheckTypeScope at which this world mission is evaluated (Character, Family, or World).MissionConditionsTArrayArray of per-condition checkers tracking individual condition progress. |
| RepeatCountint32Maximum number of times this world mission can repeat.CheckTypeEB1WorldMissionCheckTypeScope at which this world mission is evaluated (Character, Family, or World).MissionConditionsTArrayArray of per-condition checkers tracking individual condition progress. |
| CheckTypeEB1WorldMissionCheckTypeScope at which this world mission is evaluated (Character, Family, or World).MissionConditionsTArrayArray of per-condition checkers tracking individual condition progress. |
| MissionConditionsTArrayArray of per-condition checkers tracking individual condition progress. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoWorld[EB1WorldMissionCheckType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1worldmissionchecktype)[WorldMission Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/worldmission)[FB1WorldDecorationSpawnCountDataList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worlddecorationspawncountdatalist)[FB1WorldLevelSequenceInfoList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldlevelsequenceinfolist)[FB1WorldMapCameraBlendSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmapcamerablendsetting)[FB1WorldMapCameraSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmapcamerasetting)[FB1WorldMapPostProcessSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmappostprocesssetting)[FB1WorldMissionConditionChecker](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmissionconditionchecker)[FB1WorldMissionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldmissiontablerow)[FB1WorldPerformanceDataLayer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1worldperformancedatalayer)
