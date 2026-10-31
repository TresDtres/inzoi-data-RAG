---
document_id: "ee05eb1e0b032f1674f9d9e9a743b1ec071caf90512d964d61be857fe84bb37d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmilestone"
title: "Execute_AddMilestone"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:07+00:00"
content_sha256: "476b0262a39a05749ada326bb4fcd52195539150d138d9ebad61e92cc065475f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addmilestone"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Records a milestone achievement for the character. This action saves an important event or achievement that the character has experienced, which can be referenced later in the game.

# Parameters

| ParameterDescriptionBaseObjectThe character who will record the milestone (Self or Target).S1The milestone ID to record.S2(Optional) TargetDtId to attach to the milestone.Use "SiteEventCareerContext" to automatically resolve CareerDtId from the active site event. |
| --- |
| BaseObjectThe character who will record the milestone (Self or Target).S1The milestone ID to record.S2(Optional) TargetDtId to attach to the milestone.Use "SiteEventCareerContext" to automatically resolve CareerDtId from the active site event. |
| S1The milestone ID to record.S2(Optional) TargetDtId to attach to the milestone.Use "SiteEventCareerContext" to automatically resolve CareerDtId from the active site event. |
| S2(Optional) TargetDtId to attach to the milestone.Use "SiteEventCareerContext" to automatically resolve CareerDtId from the active site event. |
| Use "SiteEventCareerContext" to automatically resolve CareerDtId from the active site event. |

# Examples

| DescriptionBaseObjectCommandS1S2Record a milestone achievement for SelfSelfAddMilestoneMilestone_Career_FirstPromotionRecord a milestone with career context from site eventSelfAddMilestoneMilestone_Career_FirstPromotionFailSiteEventCareerContext |
| --- |
| Record a milestone achievement for SelfSelfAddMilestoneMilestone_Career_FirstPromotionRecord a milestone with career context from site eventSelfAddMilestoneMilestone_Career_FirstPromotionFailSiteEventCareerContext |
| Record a milestone with career context from site eventSelfAddMilestoneMilestone_Career_FirstPromotionFailSiteEventCareerContext |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoQuest, Memory & Milestone[AddDoodle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adddoodle)[AddUnlockCAZObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockcazobject)[AddUnlockGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addunlockgameobject)[ClearDoodles](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cleardoodles)[ProfileUnlock](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-profileunlock)[SendCollectionInformation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-sendcollectioninformation)
