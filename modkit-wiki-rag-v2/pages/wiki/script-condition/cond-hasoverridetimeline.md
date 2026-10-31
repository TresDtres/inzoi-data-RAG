---
document_id: "e47b53cd1e558338e9392df7ccc7c149dcaa2990b7b8a33b4852a3a6b9006476"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoverridetimeline"
title: "Condition_HasOverrideTimeline"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:11+00:00"
content_sha256: "ef521e3dbef418eeb2f7a003b7c3857193f1627f7a6a77b107c8bf20b205a8db"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasoverridetimeline"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has the specified override timeline. S1 and S2 are optional; if omitted, checks for any override timeline regardless of ID or day.

# Parameters

| ParameterDescriptionBaseObjectThe character whose override timeline status is checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Override timeline ID to check for (optional)S2Day of week to check (EB1DayOfWeek name; optional) |
| --- |
| BaseObjectThe character whose override timeline status is checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqualS1Override timeline ID to check for (optional)S2Day of week to check (EB1DayOfWeek name; optional) |
| CompareTypeSupported compare types: Equal, NotEqualS1Override timeline ID to check for (optional)S2Day of week to check (EB1DayOfWeek name; optional) |
| S1Override timeline ID to check for (optional)S2Day of week to check (EB1DayOfWeek name; optional) |
| S2Day of week to check (EB1DayOfWeek name; optional) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks if Self has any override timelineSelfHasOverrideTimelineEqualChecks if Self has a specific friend visit overrideSelfHasOverrideTimelineEqualTimeline_FriendVisitChecks if Target does NOT have any override timelineTargetHasOverrideTimelineNotEqualChecks if Self has a work override on MondaySelfHasOverrideTimelineEqualTimeline_WorkMonday |
| --- |
| Checks if Self has any override timelineSelfHasOverrideTimelineEqualChecks if Self has a specific friend visit overrideSelfHasOverrideTimelineEqualTimeline_FriendVisitChecks if Target does NOT have any override timelineTargetHasOverrideTimelineNotEqualChecks if Self has a work override on MondaySelfHasOverrideTimelineEqualTimeline_WorkMonday |
| Checks if Self has a specific friend visit overrideSelfHasOverrideTimelineEqualTimeline_FriendVisitChecks if Target does NOT have any override timelineTargetHasOverrideTimelineNotEqualChecks if Self has a work override on MondaySelfHasOverrideTimelineEqualTimeline_WorkMonday |
| Checks if Target does NOT have any override timelineTargetHasOverrideTimelineNotEqualChecks if Self has a work override on MondaySelfHasOverrideTimelineEqualTimeline_WorkMonday |
| Checks if Self has a work override on MondaySelfHasOverrideTimelineEqualTimeline_WorkMonday |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoStat, Skill, Buff & State[Buff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-buff)[BuffTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bufftag)[CompareSkill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareskill)[IsChangeableState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ischangeablestate)[Skill](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skill)[SkillUp](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-skillup)[Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-stat)[State](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-state)
