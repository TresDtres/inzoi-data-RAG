---
document_id: "71f08d1e243658f9191276b35735d5ce5a6ea5b9123d1cefeddbc35470e47e7e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionstate"
title: "B1MissionState"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:36+00:00"
content_sha256: "034c3f1495ba477328a9605123ec6e3f98447fba65367140c28b86b08cff0ae8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1missionstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Runtime state of a mission instance, tracking its type, conditions, and completion status. * Links a mission data table entry to its live per-character progress.

| PropertyTypeDescriptionMetadataMissionTypeEB1MissionTypeClassification of the mission (e.g., Hope, Ambition, WorkMission).MissionTypeIdFNameIdentifier of the content category this mission belongs to (e.g., ambition ID or job ID).MissionDtIdFNameData table row ID referencing this mission's definition.ConditionStatesTArrayArray of runtime condition states tracking progress for each mission condition.bIsActiveboolWhether this mission is currently active and accepting progress updates.bIsFinishedboolWhether this mission has been completed.TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |
| --- |
| MissionTypeEB1MissionTypeClassification of the mission (e.g., Hope, Ambition, WorkMission).MissionTypeIdFNameIdentifier of the content category this mission belongs to (e.g., ambition ID or job ID).MissionDtIdFNameData table row ID referencing this mission's definition.ConditionStatesTArrayArray of runtime condition states tracking progress for each mission condition.bIsActiveboolWhether this mission is currently active and accepting progress updates.bIsFinishedboolWhether this mission has been completed.TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |
| MissionTypeIdFNameIdentifier of the content category this mission belongs to (e.g., ambition ID or job ID).MissionDtIdFNameData table row ID referencing this mission's definition.ConditionStatesTArrayArray of runtime condition states tracking progress for each mission condition.bIsActiveboolWhether this mission is currently active and accepting progress updates.bIsFinishedboolWhether this mission has been completed.TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |
| MissionDtIdFNameData table row ID referencing this mission's definition.ConditionStatesTArrayArray of runtime condition states tracking progress for each mission condition.bIsActiveboolWhether this mission is currently active and accepting progress updates.bIsFinishedboolWhether this mission has been completed.TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |
| ConditionStatesTArrayArray of runtime condition states tracking progress for each mission condition.bIsActiveboolWhether this mission is currently active and accepting progress updates.bIsFinishedboolWhether this mission has been completed.TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |
| bIsActiveboolWhether this mission is currently active and accepting progress updates.bIsFinishedboolWhether this mission has been completed.TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |
| bIsFinishedboolWhether this mission has been completed.TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |
| TargetEntityIdFB1EntityIdEntity ID of the specific target associated with this mission, if any. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMission[EB1MissionCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1missioncondition)[Mission Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mission)[FB1MissionConditionData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionconditiondata)[FB1MissionConditionState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionconditionstate)[FB1MissionConditionTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionconditiontrigger)[FB1MissionCountMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missioncountmap)[FB1MissionRecorder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionrecorder)[FB1MissionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missiontablerow)[FB1MissionTabTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missiontabtablerow)[FB1MissionTerritory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionterritory)
