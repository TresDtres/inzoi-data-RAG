---
document_id: "03875dfd9436207b6949df11c070e72e362984f7e83a9eaf881a056b39cc042d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-channel"
title: "Condition_Channel"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:52+00:00"
content_sha256: "911877f7411421d6af26c74e1b0b2c6616a5371b645ca3797c2644d3a5d156d5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-channel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject's current channel matches the specified channel ID.

# Parameters

| ParameterDescriptionBaseObjectTarget GameObject to check the channelCompareTypeType of comparison operation (Equal / NotEqual)S1Channel ID to compare against |
| --- |
| BaseObjectTarget GameObject to check the channelCompareTypeType of comparison operation (Equal / NotEqual)S1Channel ID to compare against |
| CompareTypeType of comparison operation (Equal / NotEqual)S1Channel ID to compare against |
| S1Channel ID to compare against |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Target is in the "Holiday" channelTargetChannelEqualHolidayCheck if Target is not in "Normal" channelTargetChannelNotEqualNormalCheck if Self is in the "Christmas" channelSelfChannelEqualChristmas |
| --- |
| Check if Target is in the "Holiday" channelTargetChannelEqualHolidayCheck if Target is not in "Normal" channelTargetChannelNotEqualNormalCheck if Self is in the "Christmas" channelSelfChannelEqualChristmas |
| Check if Target is not in "Normal" channelTargetChannelNotEqualNormalCheck if Self is in the "Christmas" channelSelfChannelEqualChristmas |
| Check if Self is in the "Christmas" channelSelfChannelEqualChristmas |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoPhone & Messaging[HasPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasphonenumber)[IsBlockingPhoneNumber](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isblockingphonenumber)
