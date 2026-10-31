---
document_id: "89e12212c8dfdd1fe7953571809ce0544a61ac89e0207648643371ac77e254c8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole"
title: "Condition_IsSiteEventRole"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:46+00:00"
content_sha256: "c2637b3487dece49fc76a735f784c36165aa9984a683feaceeab3111a60fe838"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteeventrole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the entity resolved from BaseObject has a specific role in the currently playing site event. Optionally validates that the entity is at a specific 1-based index within the role's member list.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose site event role is checked (Self or Target).CompareTypeEqual: entity has the role; NotEqual: entity does not have the role.S1The site event role ID to check against.F1Optional 1-based member index within the role. Set to 0 to skip the check. |
| --- |
| BaseObjectThe entity whose site event role is checked (Self or Target).CompareTypeEqual: entity has the role; NotEqual: entity does not have the role.S1The site event role ID to check against.F1Optional 1-based member index within the role. Set to 0 to skip the check. |
| CompareTypeEqual: entity has the role; NotEqual: entity does not have the role.S1The site event role ID to check against.F1Optional 1-based member index within the role. Set to 0 to skip the check. |
| S1The site event role ID to check against.F1Optional 1-based member index within the role. Set to 0 to skip the check. |
| F1Optional 1-based member index within the role. Set to 0 to skip the check. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has the Role_Guard roleSelfIsSiteEventRoleEqualCheck if Target is not the first Role_Guard memberTargetIsSiteEventRoleNotEqualCheck if Self is the 2nd member of Role_MemberSelfIsSiteEventRoleEqual |
| --- |
| Check if Self has the Role_Guard roleSelfIsSiteEventRoleEqualCheck if Target is not the first Role_Guard memberTargetIsSiteEventRoleNotEqualCheck if Self is the 2nd member of Role_MemberSelfIsSiteEventRoleEqual |
| Check if Target is not the first Role_Guard memberTargetIsSiteEventRoleNotEqualCheck if Self is the 2nd member of Role_MemberSelfIsSiteEventRoleEqual |
| Check if Self is the 2nd member of Role_MemberSelfIsSiteEventRoleEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
