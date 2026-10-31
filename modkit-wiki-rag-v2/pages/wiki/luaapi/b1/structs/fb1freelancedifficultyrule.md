---
document_id: "a7011ab889e3b8c32f5adfbe8fd1e4fd38faf8f13bbaeec05411422b3ca72ff6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancedifficultyrule"
title: "FB1FreelanceDifficultyRule"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:55+00:00"
content_sha256: "f5b230bd091ea2e5d7226234775c42f7c1d8ba87cb03dd2a452c6748f29e06cc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancedifficultyrule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Bundles reward and trust rules for a specific order difficulty tier into a single shared rule entry. Shared rules by difficulty.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Difficulty`[`EB1FreelanceOrderDifficulty`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceorderdifficulty)Difficulty level this rule applies to.`PenaltyPriceMultiplier``number`Penalty price multiplier applied to the target item's exchange price when calculating the breach penalty.`RewardRule`[`FB1FreelanceRewardRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerewardrule)Reward rule.`TrustRule`[`FB1FreelanceTrustRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetrustrule)Trust rule (base values by difficulty). |
| --- |
| `Difficulty`[`EB1FreelanceOrderDifficulty`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceorderdifficulty)Difficulty level this rule applies to.`PenaltyPriceMultiplier``number`Penalty price multiplier applied to the target item's exchange price when calculating the breach penalty.`RewardRule`[`FB1FreelanceRewardRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerewardrule)Reward rule.`TrustRule`[`FB1FreelanceTrustRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetrustrule)Trust rule (base values by difficulty). |
| `PenaltyPriceMultiplier``number`Penalty price multiplier applied to the target item's exchange price when calculating the breach penalty.`RewardRule`[`FB1FreelanceRewardRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerewardrule)Reward rule.`TrustRule`[`FB1FreelanceTrustRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetrustrule)Trust rule (base values by difficulty). |
| `RewardRule`[`FB1FreelanceRewardRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerewardrule)Reward rule.`TrustRule`[`FB1FreelanceTrustRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetrustrule)Trust rule (base values by difficulty). |
| `TrustRule`[`FB1FreelanceTrustRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancetrustrule)Trust rule (base values by difficulty). |
