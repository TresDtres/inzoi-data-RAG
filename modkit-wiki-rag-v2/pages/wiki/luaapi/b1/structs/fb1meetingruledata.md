---
document_id: "e55ab099c9f14897cdc4cc85da6e4d723692011c4d8964d67b92d9cf8a6016e6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1meetingruledata"
title: "FB1MeetingRuleData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:25+00:00"
content_sha256: "f763e3b6fb1735449c171c3d26857b3132b7381682de9c7a33f8f5b54a61359e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1meetingruledata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a single meeting rule entry. Specifies the conditions, site tags, and timeline/script IDs applied to host and guest during a meeting.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`ApplyGuestTimelineId``string`Timeline ID applied to the guest when this meeting rule triggers.`ApplyHostTimelineId``string`Timeline ID applied to the host when this meeting rule triggers.`ApplyScriptId``string`Script ID executed when this meeting rule triggers.`Conditions``FB1Condition[]`List of conditions that must all be met for this meeting rule to apply.`RandomApplySiteTags``string[]`List of site tags where this meeting rule may be randomly applied. |
| --- |
| `ApplyGuestTimelineId``string`Timeline ID applied to the guest when this meeting rule triggers.`ApplyHostTimelineId``string`Timeline ID applied to the host when this meeting rule triggers.`ApplyScriptId``string`Script ID executed when this meeting rule triggers.`Conditions``FB1Condition[]`List of conditions that must all be met for this meeting rule to apply.`RandomApplySiteTags``string[]`List of site tags where this meeting rule may be randomly applied. |
| `ApplyHostTimelineId``string`Timeline ID applied to the host when this meeting rule triggers.`ApplyScriptId``string`Script ID executed when this meeting rule triggers.`Conditions``FB1Condition[]`List of conditions that must all be met for this meeting rule to apply.`RandomApplySiteTags``string[]`List of site tags where this meeting rule may be randomly applied. |
| `ApplyScriptId``string`Script ID executed when this meeting rule triggers.`Conditions``FB1Condition[]`List of conditions that must all be met for this meeting rule to apply.`RandomApplySiteTags``string[]`List of site tags where this meeting rule may be randomly applied. |
| `Conditions``FB1Condition[]`List of conditions that must all be met for this meeting rule to apply.`RandomApplySiteTags``string[]`List of site tags where this meeting rule may be randomly applied. |
| `RandomApplySiteTags``string[]`List of site tags where this meeting rule may be randomly applied. |
