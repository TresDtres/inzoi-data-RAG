---
document_id: "7e61f0202c74d98d6438e848481d6c062371f4700877955895a337d32e4a8b13"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole"
title: "Condition_IsSameSiteEventRole"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:44+00:00"
content_sha256: "506757037492a169ea2557861ecbb4dcfd67d6c8f8545fe97f3adabe45e37f95"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issamesiteeventrole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self and the context Target share the same role within the currently active site event. Both entities must be in the same site event and have an assigned role ID.

# Parameters

| ParameterDescriptionBaseObjectMust be Self. The reference entity whose site event role is compared.CompareTypeEqual: Self and Target have the same role; NotEqual: roles are different. |
| --- |
| BaseObjectMust be Self. The reference entity whose site event role is compared.CompareTypeEqual: Self and Target have the same role; NotEqual: roles are different. |
| CompareTypeEqual: Self and Target have the same role; NotEqual: roles are different. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self and Target have the same site event roleSelfIsSameSiteEventRoleEqualCheck if Self and Target have different site event rolesSelfIsSameSiteEventRoleNotEqual |
| --- |
| Check if Self and Target have the same site event roleSelfIsSameSiteEventRoleEqualCheck if Self and Target have different site event rolesSelfIsSameSiteEventRoleNotEqual |
| Check if Self and Target have different site event rolesSelfIsSameSiteEventRoleNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
