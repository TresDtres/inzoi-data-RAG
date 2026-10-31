---
document_id: "3cb2c796370ce16cf856a813847d02aeed6afbf02bff44c30b81d7b58e782403"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled"
title: "Condition_IsSiteEventCategoryScheduled"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:45+00:00"
content_sha256: "250e4d74bb94303e2744543263fc1d5487f58fd70930a409d811228e4d110114"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteeventcategoryscheduled"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the entity resolved from BaseObject has joined (scheduled) any site event whose category matches S1. Both active and upcoming scheduled events are evaluated.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose scheduled site events are checked (Self or Target).CompareTypeEqual: a matching event is scheduled; NotEqual: no matching event is found.S1The site event category to search for (e.g., Festival, Quest, Party). |
| --- |
| BaseObjectThe entity whose scheduled site events are checked (Self or Target).CompareTypeEqual: a matching event is scheduled; NotEqual: no matching event is found.S1The site event category to search for (e.g., Festival, Quest, Party). |
| CompareTypeEqual: a matching event is scheduled; NotEqual: no matching event is found.S1The site event category to search for (e.g., Festival, Quest, Party). |
| S1The site event category to search for (e.g., Festival, Quest, Party). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has a scheduled Festival eventSelfIsSiteEventCategoryScheduledEqualCheck if Target has no scheduled Quest eventTargetIsSiteEventCategoryScheduledNotEqualCheck if Self has a scheduled Party eventSelfIsSiteEventCategoryScheduledEqual |
| --- |
| Check if Self has a scheduled Festival eventSelfIsSiteEventCategoryScheduledEqualCheck if Target has no scheduled Quest eventTargetIsSiteEventCategoryScheduledNotEqualCheck if Self has a scheduled Party eventSelfIsSiteEventCategoryScheduledEqual |
| Check if Target has no scheduled Quest eventTargetIsSiteEventCategoryScheduledNotEqualCheck if Self has a scheduled Party eventSelfIsSiteEventCategoryScheduledEqual |
| Check if Self has a scheduled Party eventSelfIsSiteEventCategoryScheduledEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
