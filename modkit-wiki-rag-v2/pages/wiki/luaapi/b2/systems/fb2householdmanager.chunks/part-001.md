---
document_id: "12ccb6f55a2b5e9a8a2440abe8c33aa14526f6590806fe73eca3dff5cf422304"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2householdmanager"
title: "FB2HouseholdManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:58+00:00"
content_sha256: "a3894cbf5b9611b9d6f97e6c6b4ab272c94ab25b73b4cb430afa712cfaef807e"
chunk: 1
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2householdmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Household manager that runs per-tick or OnDayChanged computations for households. Also handles waiting-household logic here.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2HouseholdManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2HouseholdManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2HouseholdManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2HouseholdManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2HouseholdManager')` |
| Require`require('Systems.B2HouseholdManager')` |

# Properties (3)

| NameTypeDescription`Households``table<FB1EntityId, FB2HouseholdContext>``OnDayChangedUpdateList``FB1EntityId[]`List of Households that need OnDayChanged updates.`RegistedHouseholdDtIds``table<string, boolean>`Info on HouseholdIds that have been created at least once. |
| --- |
| `Households``table<FB1EntityId, FB2HouseholdContext>``OnDayChangedUpdateList``FB1EntityId[]`List of Households that need OnDayChanged updates.`RegistedHouseholdDtIds``table<string, boolean>`Info on HouseholdIds that have been created at least once. |
| `OnDayChangedUpdateList``FB1EntityId[]`List of Households that need OnDayChanged updates.`RegistedHouseholdDtIds``table<string, boolean>`Info on HouseholdIds that have been created at least once. |
| `RegistedHouseholdDtIds``table<string, boolean>`Info on HouseholdIds that have been created at least once. |

# Functions (13)
