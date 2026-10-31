---
document_id: "6c70226e28be6d885af397e95361ff633ce8753a6fa66c96d650e0050c583e72"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/schedule/schedule-diagnose"
title: "schedule.diagnose"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:13+00:00"
content_sha256: "d60ea04db0751e6810a3b4894fee9d4ff50c5bad31d76510e39cea908f14f711"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/schedule/schedule-diagnose"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Diagnose the current schedule: where it is heading (dest target / room purpose / goto site / arrived bag, arrival markers) and where it was registered (timeline / schedule type / career type / site event).

# Metadata

| FieldValueDisplayDiagnose Schedule RoutingCategory`schedule`Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| --- |
| DisplayDiagnose Schedule RoutingCategory`schedule`Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| Category`schedule`Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| Access`Public`Scope`B2Authority`TagsExperimentalAliases— |
| Scope`B2Authority`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('schedule.diagnose', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
