---
document_id: "9398e5bd312becf07ffc458c5875eacd94babf7a44cfd5e145a07e941c4cb6eb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangreetcustomer"
title: "Condition_CanGreetCustomer"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:48+00:00"
content_sha256: "56501153faf21194fd2a1f85725a15f81311e9d13ad6c2f838ebfafcf68d65ab"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-cangreetcustomer"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target host character can greet the visiting customer (Self) at the door. This condition is only valid when the script reason is Coop. All of the following must be satisfied: the host must be in the same site as the door and must live there, the host must not be in the same zone as the customer, the host must have permission to open the door, and the host must be able to reach the greeting slot via pathfinding.

# Parameters

| ParameterDescriptionBaseObjectThe customer character who is knocking at the door (Self). |
| --- |
| BaseObjectThe customer character who is knocking at the door (Self). |

# Examples

| DescriptionBaseObjectCommandCheck if the host can greet a customer knocking at the doorSelfCanGreetCustomerValidate that the host is at home and has permission to open the doorSelfCanGreetCustomerVerify the host can reach the greeting slot via pathfindingSelfCanGreetCustomer |
| --- |
| Check if the host can greet a customer knocking at the doorSelfCanGreetCustomerValidate that the host is at home and has permission to open the doorSelfCanGreetCustomerVerify the host can reach the greeting slot via pathfindingSelfCanGreetCustomer |
| Validate that the host is at home and has permission to open the doorSelfCanGreetCustomerVerify the host can reach the greeting slot via pathfindingSelfCanGreetCustomer |
| Verify the host can reach the greeting slot via pathfindingSelfCanGreetCustomer |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite & Social Events[DaysUntilSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-daysuntilsiteevent)[IsPlayingSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayingsiteevent)[IsSameSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteevent)[IsSameSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issamesiteeventrole)[IsSiteEventCategoryScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventcategoryscheduled)[IsSiteEventHost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventhost)[IsSiteEventIdScheduled](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventidscheduled)[IsSiteEventMember](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventmember)[IsSiteEventRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteeventrole)[IsSocialEventMeeting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issocialeventmeeting)[IsVisitingFriend](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isvisitingfriend)
