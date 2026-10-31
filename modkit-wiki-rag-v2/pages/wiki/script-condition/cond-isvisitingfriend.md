---
document_id: "c13be3c2854e0c9bc0d86b429314a29afdd59548218574e020c4ab223381bb9c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend"
title: "Condition_IsVisitingFriend"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:49+00:00"
content_sha256: "5d0cb2b64489d042df8dccf76cbc33f33d24372c2fad058caf58e32c9fc5225d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isvisitingfriend"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is currently traveling to visit the non-BaseObject character.

# Parameters

| ParameterDescriptionBaseObjectThe character whose current schedule's associate entity is checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqual |
| --- |
| BaseObjectThe character whose current schedule's associate entity is checked (Self or Target)CompareTypeSupported compare types: Equal, NotEqual |
| CompareTypeSupported compare types: Equal, NotEqual |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self is currently visiting Target (Self is the visitor)SelfIsVisitingFriendEqualChecks if Target is currently visiting Self (Target is visitor)TargetIsVisitingFriendEqualChecks if Self is NOT currently visiting TargetSelfIsVisitingFriendNotEqual |
| --- |
| Checks if Self is currently visiting Target (Self is the visitor)SelfIsVisitingFriendEqualChecks if Target is currently visiting Self (Target is visitor)TargetIsVisitingFriendEqualChecks if Self is NOT currently visiting TargetSelfIsVisitingFriendNotEqual |
| Checks if Target is currently visiting Self (Target is visitor)TargetIsVisitingFriendEqualChecks if Self is NOT currently visiting TargetSelfIsVisitingFriendNotEqual |
| Checks if Self is NOT currently visiting TargetSelfIsVisitingFriendNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[CanGreetCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer)[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)
