---
document_id: "e5de225df472b63aa8aa318d03297d5c8bec09fc17ac55e2bdccacf8e6a01ca8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bansprint"
title: "Execute_BanSprint"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:16+00:00"
content_sha256: "44cbc0627c098da78de031ff87d3245b545d2946e67564b5b0d4cabad8e3f297"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-bansprint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Bans or unbans sprinting on the specified character. When banned, the character is prevented from sprinting entirely. S1 controls the ban state: set to "False" to lift the ban; any other value (or empty) activates the ban.

# Parameters

| ParameterDescriptionBaseObjectThe character to apply the sprint ban to (Self or Target).S1Set to "False" to unban sprinting; leave empty or any other value to ban. |
| --- |
| BaseObjectThe character to apply the sprint ban to (Self or Target).S1Set to "False" to unban sprinting; leave empty or any other value to ban. |
| S1Set to "False" to unban sprinting; leave empty or any other value to ban. |

# Examples

| DescriptionBaseObjectCommandS1Ban Self from sprintingSelfBanSprintUnban Self to allow sprintingSelfBanSprintFalseBan Target from sprintingTargetBanSprint |
| --- |
| Ban Self from sprintingSelfBanSprintUnban Self to allow sprintingSelfBanSprintFalseBan Target from sprintingTargetBanSprint |
| Unban Self to allow sprintingSelfBanSprintFalseBan Target from sprintingTargetBanSprint |
| Ban Target from sprintingTargetBanSprint |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInteraction & Movement[ChangeInteractionPickedActor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeinteractionpickedactor)[DisableSprint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-disablesprint)[EnableSprint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enablesprint)
