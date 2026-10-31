---
document_id: "33f03d77075a2de626b64e30f68d9c40be84b88d0b6ad14de2bffe9dbbfbde8c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent"
title: "Condition_IsPlayingSiteEvent"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:40+00:00"
content_sha256: "0974f9f02aa727036cc0868a23cfaf04ddbb85d5eae298558f5de786aca5c78e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isplayingsiteevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the entity resolved from BaseObject is currently participating in an active site event. Optionally filters by a specific event DT ID, or checks all household members instead of the entity itself.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose site event participation is checked (Self or Target).CompareTypeEqual: entity is participating; NotEqual: entity is not participating.S1Optional SiteEvent DT ID to filter for a specific event. Leave empty for any.S2Set to CheckHouseholdMember to check all household members instead of BaseObject. |
| --- |
| BaseObjectThe entity whose site event participation is checked (Self or Target).CompareTypeEqual: entity is participating; NotEqual: entity is not participating.S1Optional SiteEvent DT ID to filter for a specific event. Leave empty for any.S2Set to CheckHouseholdMember to check all household members instead of BaseObject. |
| CompareTypeEqual: entity is participating; NotEqual: entity is not participating.S1Optional SiteEvent DT ID to filter for a specific event. Leave empty for any.S2Set to CheckHouseholdMember to check all household members instead of BaseObject. |
| S1Optional SiteEvent DT ID to filter for a specific event. Leave empty for any.S2Set to CheckHouseholdMember to check all household members instead of BaseObject. |
| S2Set to CheckHouseholdMember to check all household members instead of BaseObject. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is playing any site eventSelfIsPlayingSiteEventEqualCheck if Target is not in a specific eventTargetIsPlayingSiteEventNotEqualCheck if any household member is participatingSelfIsPlayingSiteEventEqual |
| --- |
| Check if Self is playing any site eventSelfIsPlayingSiteEventEqualCheck if Target is not in a specific eventTargetIsPlayingSiteEventNotEqualCheck if any household member is participatingSelfIsPlayingSiteEventEqual |
| Check if Target is not in a specific eventTargetIsPlayingSiteEventNotEqualCheck if any household member is participatingSelfIsPlayingSiteEventEqual |
| Check if any household member is participatingSelfIsPlayingSiteEventEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
