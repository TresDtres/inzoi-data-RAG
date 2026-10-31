---
document_id: "a7cc69bcada27dfce3ed11ff0211365999c6a2c7b326bc66279280ad22632134"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careermemberjobinfo"
title: "FB1CareerMemberJobInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:17+00:00"
content_sha256: "349590dbc76b9ac97120175eacce0279e164e856013c0c7cb73d01c58ccf81fc"
chunk: 4
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1careermemberjobinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

emented each workday end. When 0, NextDayVacationType resets to None.`VacationSegments``FB1VacationSegment[]`Ordered vacation segments in the current stretch. Each segment holds a type and day count. Extensions append (or merge if same type). ProcessVacationAtWorkEnd consumes from front. Cleared on vacation end or cancel.`bRemoteWorkPerformed``boolean`Whether this member performed at least one valid work interaction during remote work. Reset each work day. |
| `Rank``integer`Current rank of this member within the job.`RemainingVacationDays``integer`Remaining paid vacation days for this member. Decremented on vacation request, restored on cancel.`UnexcusedAbsenceCount``integer`Cumulative unexcused absence count for this member.`VacationScheduledDays``integer`Number of remaining scheduled vacation days. Decremented each workday end. When 0, NextDayVacationType resets to None.`VacationSegments``FB1VacationSegment[]`Ordered vacation segments in the current stretch. Each segment holds a type and day count. Extensions append (or merge if same type). ProcessVacationAtWorkEnd consumes from front. Cleared on vacation end or cancel.`bRemoteWorkPerformed``boolean`Whether this member performed at least one valid work interaction during remote work. Reset each work day. |
| `RemainingVacationDays``integer`Remaining paid vacation days for this member. Decremented on vacation request, restored on cancel.`UnexcusedAbsenceCount``integer`Cumulative unexcused absence count for this member.`VacationScheduledDays``integer`Number of remaining scheduled vacation days. Decremented each workday end. When 0, NextDayVacationType resets to None.`VacationSegments``FB1VacationSegment[]`Ordered vacation segments in the current stretch. Each segment holds a type and day count. Extensions append (or merge if same type). ProcessVacationAtWorkEnd consumes from front. Cleared on vacation end or cancel.`bRemoteWorkPerformed``boolean`Whether this member performed at least one valid work interaction during remote work. Reset each work day. |
| `UnexcusedAbsenceCount``integer`Cumulative unexcused absence count for this member.`VacationScheduledDays``integer`Number of remaining scheduled vacation days. Decremented each workday end. When 0, NextDayVacationType resets to None.`VacationSegments``FB1VacationSegment[]`Ordered vacation segments in the current stretch. Each segment holds a type and day count. Extensions append (or merge if same type). ProcessVacationAtWorkEnd consumes from front. Cleared on vacation end or cancel.`bRemoteWorkPerformed``boolean`Whether this member performed at least one valid work interaction during remote work. Reset each work day. |
| `VacationScheduledDays``integer`Number of remaining scheduled vacation days. Decremented each workday end. When 0, NextDayVacationType resets to None.`VacationSegments``FB1VacationSegment[]`Ordered vacation segments in the current stretch. Each segment holds a type and day count. Extensions append (or merge if same type). ProcessVacationAtWorkEnd consumes from front. Cleared on vacation end or cancel.`bRemoteWorkPerformed``boolean`Whether this member performed at least one valid work interaction during remote work. Reset each work day. |
| `VacationSegments``FB1VacationSegment[]`Ordered vacation segments in the current stretch. Each segment holds a type and day count. Extensions append (or merge if same type). ProcessVacationAtWorkEnd consumes from front. Cleared on vacation end or cancel.`bRemoteWorkPerformed``boolean`Whether this member performed at least one valid work interaction during remote work. Reset each work day. |
| `bRemoteWorkPerformed``boolean`Whether this member performed at least one valid work interaction during remote work. Reset each work day. |
