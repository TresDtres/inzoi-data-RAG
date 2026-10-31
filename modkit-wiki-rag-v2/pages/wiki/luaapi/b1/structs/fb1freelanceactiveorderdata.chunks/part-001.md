---
document_id: "284a8c53ef6dd392a030223dbca038c99caab41294d0987e02a46f7ca755944c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceactiveorderdata"
title: "FB1FreelanceActiveOrderData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:54+00:00"
content_sha256: "a3c969f69dd59739d38bbe883c2eeaae7f3d3275c2fa4c2212ec0d6b07f46f91"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelanceactiveorderdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Active order data used in UI widgets and packets, representing an order currently in progress. Template data (title, description) is looked up via TemplateId in B1; time display is calculated from StartedTimeTicks/ExpireTimeTicks in B1; text formatting (client, recipient, request target, sites) is resolved via B1FreelanceUIHelper::FormatOrderText.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (15)
