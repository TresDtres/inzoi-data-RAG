---
document_id: "5e0209ec9a1bcf02853235e6256e05fcbe49a9e10a0b5eee6c02cfa571278b5f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2careermanager"
title: "FB2CareerManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "f5d6a5ed2f61d9c372d8d809e9162169830ee43f80ac770fd98fb1f0b1b5449c"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2careermanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages the career (job) system.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CareerManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CareerManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CareerManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CareerManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CareerManager')` |
| Require`require('Systems.B2CareerManager')` |

# Properties (1)

| NameTypeDescription`SiteCareerMap``table<FB1EntityId, FB1CareerInfoDataList>`Index derived from the set of Career entities. Excluded from save serialization; rebuilt from the EntityManager via RebuildSiteCareerMap right after PostRestore. |
| --- |
| `SiteCareerMap``table<FB1EntityId, FB1CareerInfoDataList>`Index derived from the set of Career entities. Excluded from save serialization; rebuilt from the EntityManager via RebuildSiteCareerMap right after PostRestore. |

# Functions (24)
