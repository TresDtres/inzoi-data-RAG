---
document_id: "999a50dba092e0cd2cfa39edf6c0f5b20f356ff50aef4f092980563d77448622"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/world/world-list-characters"
title: "world.list_characters"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:22+00:00"
content_sha256: "8c23ed026cc588bffa04070cefdb560cf140bd8dec2f14c7b33caa85cf51c0d9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/world/world-list-characters"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns all characters in the simulation world with pagination. Supports filtering by group type and alive status.

# Metadata

| FieldValueDisplayList World CharactersCategory`world`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayList World CharactersCategory`world`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`world`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiongroup_typestringno—Filter by group type: ResidenceFamily, CompanyRoleNpc, SiteRoleNpc, Crowd, EventCrowd, ServiceNpc, StaticNpc, ShopNpclimitintno—Max characters to return (default: 50)offsetintno—Skip first N matched characters (default: 0)alive_onlyboolno—Exclude dead characters (default: true) |
| --- |
| group_typestringno—Filter by group type: ResidenceFamily, CompanyRoleNpc, SiteRoleNpc, Crowd, EventCrowd, ServiceNpc, StaticNpc, ShopNpclimitintno—Max characters to return (default: 50)offsetintno—Skip first N matched characters (default: 0)alive_onlyboolno—Exclude dead characters (default: true) |
| limitintno—Max characters to return (default: 50)offsetintno—Skip first N matched characters (default: 0)alive_onlyboolno—Exclude dead characters (default: true) |
| offsetintno—Skip first N matched characters (default: 0)alive_onlyboolno—Exclude dead characters (default: true) |
| alive_onlyboolno—Exclude dead characters (default: true) |

# Usage

```
await inzoi.cli.execute('world.list_characters', {  group_type: '', // optional  limit: 0, // optional  offset: 0, // optional  alive_only: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoworld[world.get_loaded_sites](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/world/world-get-loaded-sites)
