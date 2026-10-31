---
document_id: "966b2a2fba470ec8c28ae6e1891a9b45692ce1a0493234a3a726a2f00e9b5e56"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/asset/asset-search"
title: "asset.search"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:46+00:00"
content_sha256: "b76afd3b5842b61ab9d9c5f1c8b0c10ae7de9fa09e3f7d3a113d71638700bc02"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/asset/asset-search"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Full-text search over the inZOI asset catalog (catalog.db). Returns id/path/class/category/name_en/desc_en/tags_en/usage_en/spec. BM25-ranked porter-stem FTS with a LIKE substring fallback (data.mode reports which stage served). English catalog: pass English keywords. Classes: StaticMesh / SkeletalMesh / AnimMontage / NiagaraSystem / SoundBase. Use the returned path with asset.preview to test-place/play the asset (transient preview — not a permanent placement).

# Metadata

| FieldValueDisplaySearch Asset CatalogCategory`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySearch Asset CatalogCategory`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`asset`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionquerystringyes—Search query (English keywords, e.g. 'arched stone wall').classstringno—Optional class filter: StaticMesh/SkeletalMesh/AnimMontage/NiagaraSystem/SoundBase. Empty = all.limitintno10Max results (default 10, max 200). |
| --- |
| querystringyes—Search query (English keywords, e.g. 'arched stone wall').classstringno—Optional class filter: StaticMesh/SkeletalMesh/AnimMontage/NiagaraSystem/SoundBase. Empty = all.limitintno10Max results (default 10, max 200). |
| classstringno—Optional class filter: StaticMesh/SkeletalMesh/AnimMontage/NiagaraSystem/SoundBase. Empty = all.limitintno10Max results (default 10, max 200). |
| limitintno10Max results (default 10, max 200). |

# Usage

```
await inzoi.cli.execute('asset.search', {  query: '',  class: '', // optional  limit: 10, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
