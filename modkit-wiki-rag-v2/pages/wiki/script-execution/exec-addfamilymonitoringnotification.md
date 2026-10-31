---
document_id: "148eddb026bb0c5f2fdca14071056f22ce1b34099a1de131ad94a4ff4d9adec7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addfamilymonitoringnotification"
title: "Execute_AddFamilyMonitoringNotification"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:06+00:00"
content_sha256: "8690aa3c2e7e04f6a5e5e2c3125e79f9aee9c432e100089376e535ef9e3cc0bd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addfamilymonitoringnotification"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a notification to the family monitoring board for the Self and Target households. By default, the notification is sent to both households. If S2 is "SendSingle", it is sent only to the BaseObject's household. The notification can be delayed using F1 (in HHMM format).

# Parameters

| ParameterDescriptionBaseObjectDetermines whose household receives the notification as the primary recipientS1FamilyMonitoringNotificationId identifying the notification typeS2Pass "SendSingle" to send only to the BaseObject's household; leave empty for bothF1Notification delay time in HHMM format (e.g., 230 = 2 hours 30 minutes delay) |
| --- |
| BaseObjectDetermines whose household receives the notification as the primary recipientS1FamilyMonitoringNotificationId identifying the notification typeS2Pass "SendSingle" to send only to the BaseObject's household; leave empty for bothF1Notification delay time in HHMM format (e.g., 230 = 2 hours 30 minutes delay) |
| S1FamilyMonitoringNotificationId identifying the notification typeS2Pass "SendSingle" to send only to the BaseObject's household; leave empty for bothF1Notification delay time in HHMM format (e.g., 230 = 2 hours 30 minutes delay) |
| S2Pass "SendSingle" to send only to the BaseObject's household; leave empty for bothF1Notification delay time in HHMM format (e.g., 230 = 2 hours 30 minutes delay) |
| F1Notification delay time in HHMM format (e.g., 230 = 2 hours 30 minutes delay) |

# Examples

| DescriptionBaseObjectCommandFire notification sent to both Self and Target householdsSelfAddFamilyMonitoringNotificationDelayed trespass warning sent only to Target's householdTargetAddFamilyMonitoringNotificationImmediate notification sent to Self's household onlySelfAddFamilyMonitoringNotificationNotification sent to both households with no delaySelfAddFamilyMonitoringNotification |
| --- |
| Fire notification sent to both Self and Target householdsSelfAddFamilyMonitoringNotificationDelayed trespass warning sent only to Target's householdTargetAddFamilyMonitoringNotificationImmediate notification sent to Self's household onlySelfAddFamilyMonitoringNotificationNotification sent to both households with no delaySelfAddFamilyMonitoringNotification |
| Delayed trespass warning sent only to Target's householdTargetAddFamilyMonitoringNotificationImmediate notification sent to Self's household onlySelfAddFamilyMonitoringNotificationNotification sent to both households with no delaySelfAddFamilyMonitoringNotification |
| Immediate notification sent to Self's household onlySelfAddFamilyMonitoringNotificationNotification sent to both households with no delaySelfAddFamilyMonitoringNotification |
| Notification sent to both households with no delaySelfAddFamilyMonitoringNotification |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoFamily & Life Events[Adoption](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-adoption)[ChildBirth](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-childbirth)[Cohabit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cohabit)[Death](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-death)[Divorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-divorce)[Marriage](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-marriage)[Pregnancy](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-pregnancy)
