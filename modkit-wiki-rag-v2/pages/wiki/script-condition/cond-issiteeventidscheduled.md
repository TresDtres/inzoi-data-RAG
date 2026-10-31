---
document_id: "c33dff4b4687675e0001c5984167bdd07d517d11f5b888ba9c7765461bc3e9df"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled"
title: "Condition_IsSiteEventIdScheduled"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:46+00:00"
content_sha256: "922c92591e3602a8af2779b6267fcae8c1141c08971cc93e3b6e566f98bebec0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteeventidscheduled"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the entity resolved from BaseObject has joined (scheduled) a site event whose event DT ID matches S1. Both active and upcoming scheduled events are evaluated.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose scheduled site events are checked (Self or Target).CompareTypeEqual: a matching event is scheduled; NotEqual: no matching event is found.S1The site event DT ID (template ID) to search for. |
| --- |
| BaseObjectThe entity whose scheduled site events are checked (Self or Target).CompareTypeEqual: a matching event is scheduled; NotEqual: no matching event is found.S1The site event DT ID (template ID) to search for. |
| CompareTypeEqual: a matching event is scheduled; NotEqual: no matching event is found.S1The site event DT ID (template ID) to search for. |
| S1The site event DT ID (template ID) to search for. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has a scheduled Party site eventSelfIsSiteEventIdScheduledEqualCheck if Target does not have a scheduled Party eventTargetIsSiteEventIdScheduledNotEqualCheck if Self has a scheduled Festival eventSelfIsSiteEventIdScheduledEqual |
| --- |
| Check if Self has a scheduled Party site eventSelfIsSiteEventIdScheduledEqualCheck if Target does not have a scheduled Party eventTargetIsSiteEventIdScheduledNotEqualCheck if Self has a scheduled Festival eventSelfIsSiteEventIdScheduledEqual |
| Check if Target does not have a scheduled Party eventTargetIsSiteEventIdScheduledNotEqualCheck if Self has a scheduled Festival eventSelfIsSiteEventIdScheduledEqual |
| Check if Self has a scheduled Festival eventSelfIsSiteEventIdScheduledEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
