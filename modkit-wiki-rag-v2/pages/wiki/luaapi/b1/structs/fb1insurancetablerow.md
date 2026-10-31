---
document_id: "fca141b0bb4396e45570bee5f7a60c8f058915f215100a3bb36ba9240c914cab"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1insurancetablerow"
title: "FB1InsuranceTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:11+00:00"
content_sha256: "daf0ad7e14803b71ffb59f36aaa15e7548f56d3d677776cad1204a555d6512ff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1insurancetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining an insurance product, including its type, joining and recurring fees, reward type and amount, and associated lifecycle message IDs.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (8)

| NameTypeDescription`FixedReward``integer`Fixed payout amount when the reward type is Fixed.`JoiningFee``integer`One-time joining fee charged when enrolling in this insurance.`MessageData`[`FB1InsuranceMessageData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1insurancemessagedata)Mobile message IDs used for each lifecycle event of this insurance policy.`NameTextId``string`Localized text ID for the insurance product name.`RecurringFee``integer`Recurring premium charged each billing cycle for this insurance.`RewardProportion``number`Proportion of losses reimbursed when the reward type is Proportional.`RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| --- |
| `FixedReward``integer`Fixed payout amount when the reward type is Fixed.`JoiningFee``integer`One-time joining fee charged when enrolling in this insurance.`MessageData`[`FB1InsuranceMessageData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1insurancemessagedata)Mobile message IDs used for each lifecycle event of this insurance policy.`NameTextId``string`Localized text ID for the insurance product name.`RecurringFee``integer`Recurring premium charged each billing cycle for this insurance.`RewardProportion``number`Proportion of losses reimbursed when the reward type is Proportional.`RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| `JoiningFee``integer`One-time joining fee charged when enrolling in this insurance.`MessageData`[`FB1InsuranceMessageData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1insurancemessagedata)Mobile message IDs used for each lifecycle event of this insurance policy.`NameTextId``string`Localized text ID for the insurance product name.`RecurringFee``integer`Recurring premium charged each billing cycle for this insurance.`RewardProportion``number`Proportion of losses reimbursed when the reward type is Proportional.`RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| `MessageData`[`FB1InsuranceMessageData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1insurancemessagedata)Mobile message IDs used for each lifecycle event of this insurance policy.`NameTextId``string`Localized text ID for the insurance product name.`RecurringFee``integer`Recurring premium charged each billing cycle for this insurance.`RewardProportion``number`Proportion of losses reimbursed when the reward type is Proportional.`RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| `NameTextId``string`Localized text ID for the insurance product name.`RecurringFee``integer`Recurring premium charged each billing cycle for this insurance.`RewardProportion``number`Proportion of losses reimbursed when the reward type is Proportional.`RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| `RecurringFee``integer`Recurring premium charged each billing cycle for this insurance.`RewardProportion``number`Proportion of losses reimbursed when the reward type is Proportional.`RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| `RewardProportion``number`Proportion of losses reimbursed when the reward type is Proportional.`RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| `RewardType`[`EB1InsuranceRewardType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancerewardtype)Reward type determining whether the payout is a fixed amount or proportional to losses.`Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
| `Type`[`EB1InsuranceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1insurancetype)Type of insurance this product provides. |
