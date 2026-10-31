---
document_id: "c10ab825bdadb0941ef933f1cf36fea5a906073aeb6ad635576082b4fa498971"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost"
title: "Condition_IsSiteEventHost"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:46+00:00"
content_sha256: "9adae00cbb1c565eece404d206d5d6e7896231faeb6e6044955cef55567b9c53"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteeventhost"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the entity resolved from BaseObject is registered as the host member of the currently active site event.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose host status in the site event is checked.CompareTypeEqual: entity is the host; NotEqual: entity is not the host. |
| --- |
| BaseObjectThe entity whose host status in the site event is checked.CompareTypeEqual: entity is the host; NotEqual: entity is not the host. |
| CompareTypeEqual: entity is the host; NotEqual: entity is not the host. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is the event hostSelfIsSiteEventHostEqualCheck if Target is not the event hostTargetIsSiteEventHostNotEqual |
| --- |
| Check if Self is the event hostSelfIsSiteEventHostEqualCheck if Target is not the event hostTargetIsSiteEventHostNotEqual |
| Check if Target is not the event hostTargetIsSiteEventHostNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
