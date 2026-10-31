---
document_id: "8dd77c713c8a4999d31a78fa47476d3dfcd082f8055cacd4f53ac163bff6b2d8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pseudosimulationresidencesite"
title: "FB1PseudoSimulationResidenceSite"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:07+00:00"
content_sha256: "29aa394ec196c7d426719080ca06b16d61d49bf8d3caf4678b48b5ed2fc47f4b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1pseudosimulationresidencesite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents the pseudo-simulated state of a residential site, including tax data, household oldest entity, and eviction status.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`HouseholdOldestEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the oldest household member at this site.`TaxData`[`FB1PseudoSimulationTax`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pseudosimulationtax)The tax data for this residential site.`bEvictSite``boolean`Whether this residential site is scheduled for eviction. |
| --- |
| `HouseholdOldestEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)The entity ID of the oldest household member at this site.`TaxData`[`FB1PseudoSimulationTax`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pseudosimulationtax)The tax data for this residential site.`bEvictSite``boolean`Whether this residential site is scheduled for eviction. |
| `TaxData`[`FB1PseudoSimulationTax`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1pseudosimulationtax)The tax data for this residential site.`bEvictSite``boolean`Whether this residential site is scheduled for eviction. |
| `bEvictSite``boolean`Whether this residential site is scheduled for eviction. |
