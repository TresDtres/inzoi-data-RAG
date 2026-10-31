---
document_id: "8a2684db3919594e969868bf85fe35e094ad1d648645e1ebfb8112f1849bcf0d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-createsiteevent"
title: "Execute_CreateSiteEvent"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:23+00:00"
content_sha256: "2954d180169fb0007c4bd4ca1c30b5442d71efb2eedc471644064ef6c48068c3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-createsiteevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Creates a site event (social event) from the specified SocialEventTemplate. The event start time is determined by S2 (TimeSettingType) with optional F1/F2 inputs. For Date-type categories the context Target is invited as a single party member; for other categories, role members are selected from the host's relationships and a customized event creation task is scheduled.

# Parameters

| ParameterDescriptionBaseObjectThe host character who creates the site event.S1SocialEventTemplateTable row ID identifying the event template.S2TimeSettingType controlling when the event starts:NextHour: earliest available full hour; NextNoon: earliest noon;CurrentHour: current hour rounded down; NextWeekday: next specified weekday;DaysFromNow: N days from now (N = F1).F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| --- |
| BaseObjectThe host character who creates the site event.S1SocialEventTemplateTable row ID identifying the event template.S2TimeSettingType controlling when the event starts:NextHour: earliest available full hour; NextNoon: earliest noon;CurrentHour: current hour rounded down; NextWeekday: next specified weekday;DaysFromNow: N days from now (N = F1).F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| S1SocialEventTemplateTable row ID identifying the event template.S2TimeSettingType controlling when the event starts:NextHour: earliest available full hour; NextNoon: earliest noon;CurrentHour: current hour rounded down; NextWeekday: next specified weekday;DaysFromNow: N days from now (N = F1).F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| S2TimeSettingType controlling when the event starts:NextHour: earliest available full hour; NextNoon: earliest noon;CurrentHour: current hour rounded down; NextWeekday: next specified weekday;DaysFromNow: N days from now (N = F1).F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| NextHour: earliest available full hour; NextNoon: earliest noon;CurrentHour: current hour rounded down; NextWeekday: next specified weekday;DaysFromNow: N days from now (N = F1).F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| CurrentHour: current hour rounded down; NextWeekday: next specified weekday;DaysFromNow: N days from now (N = F1).F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| DaysFromNow: N days from now (N = F1).F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| F1For NextWeekday: target weekday (Mon=0 … Sun=6). For DaysFromNow: number of days.F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |
| F2For NextWeekday / DaysFromNow: the hour of day at which to schedule the event. |

# Examples

| DescriptionBaseObjectCommandCreate the event at the earliest available full hourSelfCreateSiteEventCreate the event at the earliest available noonSelfCreateSiteEventCreate the event on the next Friday at 18:00SelfCreateSiteEventCreate the event 3 days from now at 20:00SelfCreateSiteEvent |
| --- |
| Create the event at the earliest available full hourSelfCreateSiteEventCreate the event at the earliest available noonSelfCreateSiteEventCreate the event on the next Friday at 18:00SelfCreateSiteEventCreate the event 3 days from now at 20:00SelfCreateSiteEvent |
| Create the event at the earliest available noonSelfCreateSiteEventCreate the event on the next Friday at 18:00SelfCreateSiteEventCreate the event 3 days from now at 20:00SelfCreateSiteEvent |
| Create the event on the next Friday at 18:00SelfCreateSiteEventCreate the event 3 days from now at 20:00SelfCreateSiteEvent |
| Create the event 3 days from now at 20:00SelfCreateSiteEvent |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoSite, Access & World[AttractCustomerNearBizSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attractcustomernearbizsite)[FinishSiteEvent](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-finishsiteevent)[FireExtinguish](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fireextinguish)[PurchaseHouseholdBizSiteByTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-purchasehouseholdbizsitebytag)[RunScriptToTargetInSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-runscripttotargetinsite)[SetDoorPrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setdoorprivilege)[SetKnockDoorVisitSitePrivilege](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setknockdoorvisitsiteprivilege)[VisitWithOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoccupytarget)[VisitWithoutOccupyTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-visitwithoutoccupytarget)
