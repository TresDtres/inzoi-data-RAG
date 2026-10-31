---
document_id: "54823f8669591cd9d3b9e866d4a4b4bcbd08114d8cc4caaa7cf56a8a8f1c8ca1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1milestonetablerow"
title: "B1MilestoneTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:35+00:00"
content_sha256: "8eb45bb429f2e97c3992629fb1a9fc2cae6522d807fbc1150e214068bc9ae81c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1milestonetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Structure that defines a milestone data table row. * Contains category, target type, reward script, triggering quest ID, and display data for a milestone.

| PropertyTypeDescriptionMetadataCategoryEB1MilestoneCategoryCategory this milestone belongs to (e.g., Growth, Career, Romance).TargetEB1MilestoneTargetTypeTarget type for this milestone (None, Character, or Company).RewardScriptIdFNameScript ID executed as a reward when this milestone is achieved.QuestIdListTArrayQuest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.ConditionIdFNameCondition ID that determines whether this milestone is visible in the UI. If None, always visible.DisplayDataFB1MilestoneDisplayDataDisplay data used to render this milestone in the UI.IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| CategoryEB1MilestoneCategoryCategory this milestone belongs to (e.g., Growth, Career, Romance).TargetEB1MilestoneTargetTypeTarget type for this milestone (None, Character, or Company).RewardScriptIdFNameScript ID executed as a reward when this milestone is achieved.QuestIdListTArrayQuest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.ConditionIdFNameCondition ID that determines whether this milestone is visible in the UI. If None, always visible.DisplayDataFB1MilestoneDisplayDataDisplay data used to render this milestone in the UI.IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| TargetEB1MilestoneTargetTypeTarget type for this milestone (None, Character, or Company).RewardScriptIdFNameScript ID executed as a reward when this milestone is achieved.QuestIdListTArrayQuest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.ConditionIdFNameCondition ID that determines whether this milestone is visible in the UI. If None, always visible.DisplayDataFB1MilestoneDisplayDataDisplay data used to render this milestone in the UI.IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| RewardScriptIdFNameScript ID executed as a reward when this milestone is achieved.QuestIdListTArrayQuest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.ConditionIdFNameCondition ID that determines whether this milestone is visible in the UI. If None, always visible.DisplayDataFB1MilestoneDisplayDataDisplay data used to render this milestone in the UI.IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| QuestIdListTArrayQuest IDs that can trigger this milestone; achieving any one of them completes the milestone. If empty, must be triggered directly in code.ConditionIdFNameCondition ID that determines whether this milestone is visible in the UI. If None, always visible.DisplayDataFB1MilestoneDisplayDataDisplay data used to render this milestone in the UI.IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| ConditionIdFNameCondition ID that determines whether this milestone is visible in the UI. If None, always visible.DisplayDataFB1MilestoneDisplayDataDisplay data used to render this milestone in the UI.IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| DisplayDataFB1MilestoneDisplayDataDisplay data used to render this milestone in the UI.IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMilestone[FB1Milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1milestone)[FB1MilestoneDisplayData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1milestonedisplaydata)
