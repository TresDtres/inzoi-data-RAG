---
document_id: "c78be99d71a17103c7875e43a5236f8063e1038c288cf4733e582160de367efb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember"
title: "Condition_IsSiteEventMember"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:46+00:00"
content_sha256: "3de484c95a226df9a27fcaba9bab70f96801f387458e50b7dc0164038c9b6380"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteeventmember"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the entity resolved from BaseObject is currently participating in an active site event whose category matches S1.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose site event membership is checked (Self or Target).CompareTypeEqual: entity is in an event of that category; NotEqual: it is not.S1The site event category to match against (e.g., Festival, Quest). |
| --- |
| BaseObjectThe entity whose site event membership is checked (Self or Target).CompareTypeEqual: entity is in an event of that category; NotEqual: it is not.S1The site event category to match against (e.g., Festival, Quest). |
| CompareTypeEqual: entity is in an event of that category; NotEqual: it is not.S1The site event category to match against (e.g., Festival, Quest). |
| S1The site event category to match against (e.g., Festival, Quest). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is in a Festival eventSelfIsSiteEventMemberEqualCheck if Target is not in a Quest eventTargetIsSiteEventMemberNotEqualCheck if Self is in a Party eventSelfIsSiteEventMemberEqual |
| --- |
| Check if Self is in a Festival eventSelfIsSiteEventMemberEqualCheck if Target is not in a Quest eventTargetIsSiteEventMemberNotEqualCheck if Self is in a Party eventSelfIsSiteEventMemberEqual |
| Check if Target is not in a Quest eventTargetIsSiteEventMemberNotEqualCheck if Self is in a Party eventSelfIsSiteEventMemberEqual |
| Check if Self is in a Party eventSelfIsSiteEventMemberEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
