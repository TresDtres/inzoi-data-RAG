---
document_id: "ef37e2b2e5d49572bb1aed086801dc7721427b563d90d1260d42b28a31adbee4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclientinfo"
title: "FB1FreelanceClientInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:54+00:00"
content_sha256: "56f5b2723a5531e75aaa763b98727f255c1a8de6287ac9aec7c69db6c8610bd5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelanceclientinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores basic client or recipient information for a freelance order pool entry, identifying the client type and associated ID or tag. Client/recipient basic information.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`ClientType`[`EB1FreelanceClientType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceclienttype)Client type (NPC or Company).`S1``string`When ClientType is NPC: Concept Zoi ID (randomly generated if empty). When ClientType is Company: Company Tag.`S2``string`When ClientType is NPC: Site Tag where NPC will spawn. |
| --- |
| `ClientType`[`EB1FreelanceClientType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1freelanceclienttype)Client type (NPC or Company).`S1``string`When ClientType is NPC: Concept Zoi ID (randomly generated if empty). When ClientType is Company: Company Tag.`S2``string`When ClientType is NPC: Site Tag where NPC will spawn. |
| `S1``string`When ClientType is NPC: Concept Zoi ID (randomly generated if empty). When ClientType is Company: Company Tag.`S2``string`When ClientType is NPC: Site Tag where NPC will spawn. |
| `S2``string`When ClientType is NPC: Site Tag where NPC will spawn. |
