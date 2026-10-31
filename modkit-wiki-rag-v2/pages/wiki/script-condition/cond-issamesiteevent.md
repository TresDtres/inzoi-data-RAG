---
document_id: "5cf26a1fae3695f1bdab34b50acdee326a4c03401a8764d998ade170bce72946"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent"
title: "Condition_IsSameSiteEvent"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:44+00:00"
content_sha256: "86fa70122445065d2682837a5214cdc4f18809807a94cce7bed592ca14050fa7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issamesiteevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self and the context Target are participating in the same site event. Optionally restricts the member comparison to a specific role within the event.

# Parameters

| ParameterDescriptionBaseObjectMust be Self. The entity whose active site event is used as reference.CompareTypeEqual: Target is in the same event (or role); NotEqual: Target is not.S1Optional role ID to filter the member list. Leave empty to check all members. |
| --- |
| BaseObjectMust be Self. The entity whose active site event is used as reference.CompareTypeEqual: Target is in the same event (or role); NotEqual: Target is not.S1Optional role ID to filter the member list. Leave empty to check all members. |
| CompareTypeEqual: Target is in the same event (or role); NotEqual: Target is not.S1Optional role ID to filter the member list. Leave empty to check all members. |
| S1Optional role ID to filter the member list. Leave empty to check all members. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self and Target are in the same site eventSelfIsSameSiteEventEqualCheck if Target is not in Self's site eventSelfIsSameSiteEventNotEqualCheck if Target is in Self's event under Role_GuardSelfIsSameSiteEventEqual |
| --- |
| Check if Self and Target are in the same site eventSelfIsSameSiteEventEqualCheck if Target is not in Self's site eventSelfIsSameSiteEventNotEqualCheck if Target is in Self's event under Role_GuardSelfIsSameSiteEventEqual |
| Check if Target is not in Self's site eventSelfIsSameSiteEventNotEqualCheck if Target is in Self's event under Role_GuardSelfIsSameSiteEventEqual |
| Check if Target is in Self's event under Role_GuardSelfIsSameSiteEventEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
