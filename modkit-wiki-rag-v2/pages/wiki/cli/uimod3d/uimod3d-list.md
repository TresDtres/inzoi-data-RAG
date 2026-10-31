---
document_id: "a2755e46da89a3accce3ab52e0cfdb6e9965d206ae70a0605428d62d02a5383e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-list"
title: "uimod3d.list"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:39+00:00"
content_sha256: "25c0f3f9fb8440cbd209b9bbd845983749c8c4f189908d86f81b0e4f0e55ae60"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/uimod3d/uimod3d-list"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Lists all currently attached 3D UI mod instances with their entity_id, URL, and transform.

# Metadata

| FieldValueDisplayList 3D UI ModsCategory`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayList 3D UI ModsCategory`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`uimod3d`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Returns

Returns a JSON array; each element is an object with the following fields:

| FieldTypeRequiredDescription`entity_id`entityIdyesTarget entity ID`url`stringyesLoaded Cohtml URL`location`arrayyesRelative location [x, y, z]`rotation`arrayyesRelative rotation [pitch, yaw, roll]`scale`arrayyesRelative scale [x, y, z] |
| --- |
| `entity_id`entityIdyesTarget entity ID`url`stringyesLoaded Cohtml URL`location`arrayyesRelative location [x, y, z]`rotation`arrayyesRelative rotation [pitch, yaw, roll]`scale`arrayyesRelative scale [x, y, z] |
| `url`stringyesLoaded Cohtml URL`location`arrayyesRelative location [x, y, z]`rotation`arrayyesRelative rotation [pitch, yaw, roll]`scale`arrayyesRelative scale [x, y, z] |
| `location`arrayyesRelative location [x, y, z]`rotation`arrayyesRelative rotation [pitch, yaw, roll]`scale`arrayyesRelative scale [x, y, z] |
| `rotation`arrayyesRelative rotation [pitch, yaw, roll]`scale`arrayyesRelative scale [x, y, z] |
| `scale`arrayyesRelative scale [x, y, z] |

# Usage

```
await inzoi.cli.execute('uimod3d.list');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsouimod3d[uimod3d.attach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-attach)[uimod3d.detach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-detach)[uimod3d.transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/uimod3d/uimod3d-transform)
