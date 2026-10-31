---
document_id: "b4504994dd11d0b128418dbd1ce62931219c9e6dfd4a34ec738176a781289530"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting"
title: "Condition_IsSocialEventMeeting"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:47+00:00"
content_sha256: "c678c41fa351b286f90e0ced27f12a0d0488b83a1c219c3a4f027b80bd01906e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issocialeventmeeting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self is currently in a social site event meeting with the context Target. The condition is only valid for FB2SiteEvent_Social events; the meeting target is resolved from the script context's target entity.

# Parameters

| ParameterDescriptionBaseObjectMust be Self. The entity participating in the social site event.CompareTypeEqual: a meeting with the Target is in progress; NotEqual: it is not. |
| --- |
| BaseObjectMust be Self. The entity participating in the social site event.CompareTypeEqual: a meeting with the Target is in progress; NotEqual: it is not. |
| CompareTypeEqual: a meeting with the Target is in progress; NotEqual: it is not. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is currently in a social meetingSelfIsSocialEventMeetingEqualCheck if Self is not in a social meetingSelfIsSocialEventMeetingNotEqual |
| --- |
| Check if Self is currently in a social meetingSelfIsSocialEventMeetingEqualCheck if Self is not in a social meetingSelfIsSocialEventMeetingNotEqual |
| Check if Self is not in a social meetingSelfIsSocialEventMeetingNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
