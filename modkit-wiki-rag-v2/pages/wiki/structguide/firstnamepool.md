---
document_id: "567ff973ecf5d0492c15ae5a9ed5f1cb7da38553885f3c410ac78716f92eb49a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/firstnamepool"
title: "📘 FirstNamePool Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:45+00:00"
content_sha256: "62d9d92679499dac8a39819180b545c7a112ec9ebbfb79c496b7ea573717268f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/firstnamepool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1FirstNamePoolTableRow

Defines a pool of first names by cultural group.

### Properties

- **Id** (`FName`): Unique identifier for the pool.
- **Culture** (`EB1DiversityCulture`): Cultural context for the name list.
- **Names** (`TArray<FB1NameData>`): List of valid first names.

@include Data/StrcutGuide/Enum/EB1DiversityCulture.md @include Data/StrcutGuide/Struct/FB1NameData.md

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoFirst[FB1FirstNamePoolTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1firstnamepooltablerow)
