---
document_id: "b7c6b9b6a3d3c62df750824c49de6bfbba80d31cb64daca6b5ae86fabbf80ef4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionconditiondata"
title: "B1MissionConditionData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:36+00:00"
content_sha256: "2865b4b7a46240bb7843dc4f024fdde8a0e20897e231e9c8a9ea9c8b898b737e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1missionconditiondata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Definition data for a single mission condition, specifying its type, identifiers, and goal count. * Used both in data tables and at runtime to evaluate mission progress.

| PropertyTypeDescriptionMetadataConditionTypeEB1MissionConditionType of condition that must be fulfilled for the mission.Category: B1MissionConditionDataGoalCountint32Number of times the condition must be met to complete this mission step.Category: B1MissionConditionData ClampMin: 1ConditionId1FNamePrimary content identifier used by the condition type (e.g., currency ID, skill ID).Category: B1MissionConditionData SearchLink: FB1MissionConditionData.ConditionTypeConditionId2FNameSecondary content identifier used by certain condition types as an additional filter.Category: B1MissionConditionDataConditionIntint32Integer parameter used by certain condition types for numeric comparisons.Category: B1MissionConditionDataDescTextIdFStringString table key referencing the localized description text for this condition.Category: B1MissionConditionData |
| --- |
| ConditionTypeEB1MissionConditionType of condition that must be fulfilled for the mission.Category: B1MissionConditionDataGoalCountint32Number of times the condition must be met to complete this mission step.Category: B1MissionConditionData ClampMin: 1ConditionId1FNamePrimary content identifier used by the condition type (e.g., currency ID, skill ID).Category: B1MissionConditionData SearchLink: FB1MissionConditionData.ConditionTypeConditionId2FNameSecondary content identifier used by certain condition types as an additional filter.Category: B1MissionConditionDataConditionIntint32Integer parameter used by certain condition types for numeric comparisons.Category: B1MissionConditionDataDescTextIdFStringString table key referencing the localized description text for this condition.Category: B1MissionConditionData |
| GoalCountint32Number of times the condition must be met to complete this mission step.Category: B1MissionConditionData ClampMin: 1ConditionId1FNamePrimary content identifier used by the condition type (e.g., currency ID, skill ID).Category: B1MissionConditionData SearchLink: FB1MissionConditionData.ConditionTypeConditionId2FNameSecondary content identifier used by certain condition types as an additional filter.Category: B1MissionConditionDataConditionIntint32Integer parameter used by certain condition types for numeric comparisons.Category: B1MissionConditionDataDescTextIdFStringString table key referencing the localized description text for this condition.Category: B1MissionConditionData |
| ConditionId1FNamePrimary content identifier used by the condition type (e.g., currency ID, skill ID).Category: B1MissionConditionData SearchLink: FB1MissionConditionData.ConditionTypeConditionId2FNameSecondary content identifier used by certain condition types as an additional filter.Category: B1MissionConditionDataConditionIntint32Integer parameter used by certain condition types for numeric comparisons.Category: B1MissionConditionDataDescTextIdFStringString table key referencing the localized description text for this condition.Category: B1MissionConditionData |
| ConditionId2FNameSecondary content identifier used by certain condition types as an additional filter.Category: B1MissionConditionDataConditionIntint32Integer parameter used by certain condition types for numeric comparisons.Category: B1MissionConditionDataDescTextIdFStringString table key referencing the localized description text for this condition.Category: B1MissionConditionData |
| ConditionIntint32Integer parameter used by certain condition types for numeric comparisons.Category: B1MissionConditionDataDescTextIdFStringString table key referencing the localized description text for this condition.Category: B1MissionConditionData |
| DescTextIdFStringString table key referencing the localized description text for this condition.Category: B1MissionConditionData |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMission[EB1MissionCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1missioncondition)[Mission Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mission)[FB1MissionConditionState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionconditionstate)[FB1MissionConditionTrigger](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionconditiontrigger)[FB1MissionCountMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missioncountmap)[FB1MissionRecorder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionrecorder)[FB1MissionState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionstate)[FB1MissionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missiontablerow)[FB1MissionTabTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missiontabtablerow)[FB1MissionTerritory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1missionterritory)
