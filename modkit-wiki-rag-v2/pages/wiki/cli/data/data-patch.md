---
document_id: "eb6b4dbf80d2d4e285d8b4d43596105561277b3e9833d147d23d4e91c6ab5b3a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-patch"
title: "data.patch"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:55+00:00"
content_sha256: "1d7b0b6926d8ecbd5f13ae0db75b02b7041389a1270537067559321500efa973"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/data/data-patch"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Apply an in-place data patch at runtime. Reverted on unmodding. QUERY SYNTAX (STRICT): Every bracket selector MUST be Key=Value. Bare-value selectors like Table[Foo] or arr[0] will FAIL to parse. OK: HouseholdBizConfig[Id=Default].baseEmployeeWagePerHour OK: HouseholdBizConfig[Id=Default].householdBizSkillLevelInfo[level=0].baseEmployeeWagePerHour OK: ItemTable[*].price (wildcard over all rows) BAD: HouseholdBizConfig[Default].baseEmployeeWagePerHour BAD: householdBizSkillLevelInfo[0].baseEmployeeWagePerHour COMMON KEYS: Top-level row Id is usually 'Id'. Inner arrays use their own key field (e.g. 'level', 'index', 'tier'). If unsure, fetch the row first via data.table_get and look at which scalar field uniquely identifies each array element. METHODS: Override = replace the value at the path. Append/Insert = list operations. VALIDATION (STRICT): The value is validated against the target schema BEFORE applying. A non-existent field name or a disallowed enum value FAILS with a specific reason (including the list of valid fields / enum values), instead of silently succeeding without any effect. POST-PROCESS (OnPostJsonDataLoad): Append/Insert (single-row) auto-runs OnPostJsonDataLoad on the new row to populate derived fields (e.g. Object.ObjectTags merged from ObjectTemplate). Override/Wildcard does NOT auto-run because re-invoking it on already-processed rows can double-apply non-idempotent merges (e.g. Tags.Append). Pass refresh=true to force OnPostJsonDataLoad on every applied row regardless of method (use sparingly).

# Metadata

| FieldValueDisplayPatch DataTableCategory`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayPatch DataTableCategory`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`data`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmethodstringyes—Override / Append / Insertquerystringyes—Patch query path. EVERY bracket MUST be [Key=Value], never [Value] alone. Examples: 'Table[Id=Foo].Field', 'Table[Id=Foo].arr[level=0].sub', 'Table[*].Field' (wildcard). Bare-value forms like Table[Foo] or arr[0] will be rejected by the parser.valuestringyes—Value to apply (JSON or plain string)refreshboolnofalseForce OnPostJsonDataLoad on every applied row to recompute derived fields. Default false. Append/Insert (single-row) post-processes automatically without this flag. |
| --- |
| methodstringyes—Override / Append / Insertquerystringyes—Patch query path. EVERY bracket MUST be [Key=Value], never [Value] alone. Examples: 'Table[Id=Foo].Field', 'Table[Id=Foo].arr[level=0].sub', 'Table[*].Field' (wildcard). Bare-value forms like Table[Foo] or arr[0] will be rejected by the parser.valuestringyes—Value to apply (JSON or plain string)refreshboolnofalseForce OnPostJsonDataLoad on every applied row to recompute derived fields. Default false. Append/Insert (single-row) post-processes automatically without this flag. |
| querystringyes—Patch query path. EVERY bracket MUST be [Key=Value], never [Value] alone. Examples: 'Table[Id=Foo].Field', 'Table[Id=Foo].arr[level=0].sub', 'Table[*].Field' (wildcard). Bare-value forms like Table[Foo] or arr[0] will be rejected by the parser.valuestringyes—Value to apply (JSON or plain string)refreshboolnofalseForce OnPostJsonDataLoad on every applied row to recompute derived fields. Default false. Append/Insert (single-row) post-processes automatically without this flag. |
| valuestringyes—Value to apply (JSON or plain string)refreshboolnofalseForce OnPostJsonDataLoad on every applied row to recompute derived fields. Default false. Append/Insert (single-row) post-processes automatically without this flag. |
| refreshboolnofalseForce OnPostJsonDataLoad on every applied row to recompute derived fields. Default false. Append/Insert (single-row) post-processes automatically without this flag. |

# Usage

```
await inzoi.cli.execute('data.patch', {  method: '',  query: '',  value: '',  refresh: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsodata[data.asset_get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-asset-get)[data.list_rows](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-list-rows)[data.list_tables](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-list-tables)[data.table_get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-table-get)[data.table_get_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/data/data-table-get-all)
