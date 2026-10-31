---
document_id: "d5f2961e10549e5108b421c260588d529efedcc6a99fee64ebec1700005a17e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gatherablereward"
title: "B1GatherableReward"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:03+00:00"
content_sha256: "e7e5a649ebb842b102e84f50361999589ffc557682b125997617944bdbec14ae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1gatherablereward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines a single reward entry for a gatherable object, specifying the required tool level, * selection priority, an optional condition, and the reward object pool to draw from.

| PropertyTypeDescriptionMetadataToolLevelint32Minimum tool level required to receive this reward.Category: B1GatherableReward ClampMin: 0PriorityLevelint32Priority used to sort and select rewards when multiple entries match.Category: B1GatherableReward ClampMin: 1ConditionIdFNameOptional condition that must be satisfied to grant this reward.Category: B1GatherableReward Foreign: Condition.IdRewardObjectPoolIdFNameIdentifier for the reward object pool to draw items from.Category: B1GatherableReward Foreign: RewardObjectPool.Id |
| --- |
| ToolLevelint32Minimum tool level required to receive this reward.Category: B1GatherableReward ClampMin: 0PriorityLevelint32Priority used to sort and select rewards when multiple entries match.Category: B1GatherableReward ClampMin: 1ConditionIdFNameOptional condition that must be satisfied to grant this reward.Category: B1GatherableReward Foreign: Condition.IdRewardObjectPoolIdFNameIdentifier for the reward object pool to draw items from.Category: B1GatherableReward Foreign: RewardObjectPool.Id |
| PriorityLevelint32Priority used to sort and select rewards when multiple entries match.Category: B1GatherableReward ClampMin: 1ConditionIdFNameOptional condition that must be satisfied to grant this reward.Category: B1GatherableReward Foreign: Condition.IdRewardObjectPoolIdFNameIdentifier for the reward object pool to draw items from.Category: B1GatherableReward Foreign: RewardObjectPool.Id |
| ConditionIdFNameOptional condition that must be satisfied to grant this reward.Category: B1GatherableReward Foreign: Condition.IdRewardObjectPoolIdFNameIdentifier for the reward object pool to draw items from.Category: B1GatherableReward Foreign: RewardObjectPool.Id |
| RewardObjectPoolIdFNameIdentifier for the reward object pool to draw items from.Category: B1GatherableReward Foreign: RewardObjectPool.Id |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGatherable[FB1GatherableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gatherableobject)[FB1GatherableObjectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gatherableobjecttablerow)
