---
document_id: "6bf7546869af6ade016d2efc49e1f8cb020d63fbe4e1dd284b20d9ef09f555fb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-set-reward"
title: "interaction.set_reward"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:07+00:00"
content_sha256: "2aa9daf7f4a0c209c7700db9cc2138d9b9e9f18111b67cd132a0191b31762824"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-set-reward"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Overrides InteractionRewards.Reward (autonomy selection weight) of an InteractionBag at runtime, applied to all its reward entries. For tuning autonomous selection frequency (e.g. autonomous pregnancy: Co_TryToHaveChildren). Resets on restart.

# Metadata

| FieldValueDisplaySet Interaction Autonomy RewardCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySet Interaction Autonomy RewardCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioninteraction_bag_idnameyes—InteractionBag row name (e.g. Co_TryToHaveChildren)rewardintyes—New autonomy reward weight applied to all InteractionRewards entries |
| --- |
| interaction_bag_idnameyes—InteractionBag row name (e.g. Co_TryToHaveChildren)rewardintyes—New autonomy reward weight applied to all InteractionRewards entries |
| rewardintyes—New autonomy reward weight applied to all InteractionRewards entries |

# Usage

```
await inzoi.cli.execute('interaction.set_reward', {  interaction_bag_id: '',  reward: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
