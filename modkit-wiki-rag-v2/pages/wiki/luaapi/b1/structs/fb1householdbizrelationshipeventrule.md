---
document_id: "71ac023ef88f888deedc3a19da7c9c7fa69297f50dbbf3dc5018e1d7406a1e3f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbizrelationshipeventrule"
title: "FB1HouseholdBizRelationshipEventRule"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:08+00:00"
content_sha256: "efb4b1a09824892b16403b99da7746af6aef09a5c7d2ad721faa5827a40da1be"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbizrelationshipeventrule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a relationship-based event rule for end-of-day business processing, specifying the relationship type, score range, selection weight, and the choice card triggered.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`ChoiceCardId``string`Choice card ID opened when this relationship event rule is triggered.`MaxRelationshipScore``integer`Maximum relationship score for this rule to be eligible (Score < MaxRelationshipScore).`MinRelationshipScore``integer`Minimum relationship score for this rule to be eligible (Score >= MinRelationshipScore).`RelationshipId``string`Relationship type ID used to look up the relationship score (e.g., "business", "family", "romance").`Weight``integer`Relative weight determining how often this rule is selected compared to others; 0 disables selection. |
| --- |
| `ChoiceCardId``string`Choice card ID opened when this relationship event rule is triggered.`MaxRelationshipScore``integer`Maximum relationship score for this rule to be eligible (Score < MaxRelationshipScore).`MinRelationshipScore``integer`Minimum relationship score for this rule to be eligible (Score >= MinRelationshipScore).`RelationshipId``string`Relationship type ID used to look up the relationship score (e.g., "business", "family", "romance").`Weight``integer`Relative weight determining how often this rule is selected compared to others; 0 disables selection. |
| `MaxRelationshipScore``integer`Maximum relationship score for this rule to be eligible (Score < MaxRelationshipScore).`MinRelationshipScore``integer`Minimum relationship score for this rule to be eligible (Score >= MinRelationshipScore).`RelationshipId``string`Relationship type ID used to look up the relationship score (e.g., "business", "family", "romance").`Weight``integer`Relative weight determining how often this rule is selected compared to others; 0 disables selection. |
| `MinRelationshipScore``integer`Minimum relationship score for this rule to be eligible (Score >= MinRelationshipScore).`RelationshipId``string`Relationship type ID used to look up the relationship score (e.g., "business", "family", "romance").`Weight``integer`Relative weight determining how often this rule is selected compared to others; 0 disables selection. |
| `RelationshipId``string`Relationship type ID used to look up the relationship score (e.g., "business", "family", "romance").`Weight``integer`Relative weight determining how often this rule is selected compared to others; 0 disables selection. |
| `Weight``integer`Relative weight determining how often this rule is selected compared to others; 0 disables selection. |
