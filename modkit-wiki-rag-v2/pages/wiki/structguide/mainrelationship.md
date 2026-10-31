---
document_id: "107d5e3e1b33da5e3f50857b17878a656ed760127ec6759a68be91968e779ae7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/mainrelationship"
title: "📘 MainRelationship Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:52+00:00"
content_sha256: "2ec137ccb0e1c1e71f43e05edf24a18f222152b8639b0a1a3121afde25766018"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/mainrelationship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1MainRelationshipTableRow

Defines relationship weight settings between key characters, used to balance or refresh the primary relationship stats.

### Properties

- **Id** (`FName`): Unique identifier for this main relationship entry.
- **bRefresh** (`bool`): If true, the relationship stats are recalculated from this entry.
- **FriendshipRate** (`int32`): Weight applied to friendship level. *(ClampMin = 0)*
- **BusinessRate** (`int32`): Weight applied to business connection level. *(ClampMin = 0)*
- **RomanceRate** (`int32`): Weight applied to romance or intimacy level. *(ClampMin = 0)*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMain[FB1MainRelationshipAutonomyRate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mainrelationshipautonomyrate)[FB1MainRelationshipTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1mainrelationshiptablerow)
