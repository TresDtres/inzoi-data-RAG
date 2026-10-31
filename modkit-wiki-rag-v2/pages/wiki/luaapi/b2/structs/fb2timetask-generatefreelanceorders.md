---
document_id: "95d386c7346126bf79e7c17a12bbb3b5189bccc55536feed529f9829d5d04dfb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-generatefreelanceorders"
title: "FB2TimeTask_GenerateFreelanceOrders"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:52+00:00"
content_sha256: "7435888afb4afb567a0bdad6b6c510770176641b800601af35014ba5d4851831"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2timetask-generatefreelanceorders"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Freelance order generation TimeTask with distributed processing - Generates orders across multiple ticks to avoid hitching - Processes one template per tick by popping from AvailableTemplateIds

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Category`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |

# Properties (10)

| NameTypeDescription`AllEligibleZois``FB1EntityId[]`Cached ALL available Zois EntityIds without schedule filtering for non-Delivery categories (removed as used).`AvailableCompanies``FB1EntityId[]`Cached available Company EntityIds (initialized once at generation start).`AvailableTemplateIds``string[]``CurrentHour``integer``CurrentTicks``integer``GeneratedSummaries``FB1FreelanceOrderSummary[]``MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| --- |
| `AllEligibleZois``FB1EntityId[]`Cached ALL available Zois EntityIds without schedule filtering for non-Delivery categories (removed as used).`AvailableCompanies``FB1EntityId[]`Cached available Company EntityIds (initialized once at generation start).`AvailableTemplateIds``string[]``CurrentHour``integer``CurrentTicks``integer``GeneratedSummaries``FB1FreelanceOrderSummary[]``MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `AvailableCompanies``FB1EntityId[]`Cached available Company EntityIds (initialized once at generation start).`AvailableTemplateIds``string[]``CurrentHour``integer``CurrentTicks``integer``GeneratedSummaries``FB1FreelanceOrderSummary[]``MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `AvailableTemplateIds``string[]``CurrentHour``integer``CurrentTicks``integer``GeneratedSummaries``FB1FreelanceOrderSummary[]``MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `CurrentHour``integer``CurrentTicks``integer``GeneratedSummaries``FB1FreelanceOrderSummary[]``MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `CurrentTicks``integer``GeneratedSummaries``FB1FreelanceOrderSummary[]``MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `GeneratedSummaries``FB1FreelanceOrderSummary[]``MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `MaxOrdersPerTemplate``integer``MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `MinOrdersPerTemplate``integer``ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `ScheduleFilteredZois``FB1EntityId[]`Cached schedule-filtered Zois EntityIds for Delivery category (initialized once at generation start, removed as used).`bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
| `bGuaranteePassCompleted``boolean`Whether Phase 1 (pre-generation per category x grade) completed. Phase 1 runs while this is false. |
