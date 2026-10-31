---
document_id: "e924341788c542f08fb32f38a1a0e5ad9593be13b39f032a7f6c76aaa4564937"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent"
title: "Condition_DaysUntilSiteEvent"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:56+00:00"
content_sha256: "fe032d51327f7601fbcb101561b725a1a8c995812a3dc1e056683c75f2fe2505"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-daysuntilsiteevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the remaining days until the next scheduled SiteEvent or SocialEvent calendar entry whose event ID matches S1.

# Parameters

| ParameterDescriptionCompareTypeNumeric comparison against remaining days. InRange/OutRange use F1 and F2.S1SiteEvent.Id or SocialEventTemplate.Id to search for. Empty means no check.F1Day threshold for the comparison.F2Upper day threshold when CompareType is InRange or OutRange. |
| --- |
| CompareTypeNumeric comparison against remaining days. InRange/OutRange use F1 and F2.S1SiteEvent.Id or SocialEventTemplate.Id to search for. Empty means no check.F1Day threshold for the comparison.F2Upper day threshold when CompareType is InRange or OutRange. |
| S1SiteEvent.Id or SocialEventTemplate.Id to search for. Empty means no check.F1Day threshold for the comparison.F2Upper day threshold when CompareType is InRange or OutRange. |
| F1Day threshold for the comparison.F2Upper day threshold when CompareType is InRange or OutRange. |
| F2Upper day threshold when CompareType is InRange or OutRange. |

# Examples

| DescriptionCommandCompareTypeS1F1F2Check if the test starts in exactly three daysDaysUntilSiteEventEqualHighSchool_Test3Check if prom starts tomorrowDaysUntilSiteEventEqualHighSchool_Prom1Check if graduation starts within three daysDaysUntilSiteEventInRangeHighSchool_Graduation03 |
| --- |
| Check if the test starts in exactly three daysDaysUntilSiteEventEqualHighSchool_Test3Check if prom starts tomorrowDaysUntilSiteEventEqualHighSchool_Prom1Check if graduation starts within three daysDaysUntilSiteEventInRangeHighSchool_Graduation03 |
| Check if prom starts tomorrowDaysUntilSiteEventEqualHighSchool_Prom1Check if graduation starts within three daysDaysUntilSiteEventInRangeHighSchool_Graduation03 |
| Check if graduation starts within three daysDaysUntilSiteEventInRangeHighSchool_Graduation03 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
