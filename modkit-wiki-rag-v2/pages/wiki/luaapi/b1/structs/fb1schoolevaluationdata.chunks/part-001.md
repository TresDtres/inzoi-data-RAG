---
document_id: "79a4582d74d1b8405958a193cbf18aa9a06de9d1880c036092c65e2e7124bb74"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1schoolevaluationdata"
title: "FB1SchoolEvaluationData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:20+00:00"
content_sha256: "79ef45df802c3b2199fe7d376de0d7a3a0a81f25e7ad22928da77c50000f9aba"
chunk: 1
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1schoolevaluationdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- The full evaluation state of a single student. Kept as the value of FB2School::StudentEvaluationMap. Sections: 1) weekly accumulation - DailyRecords[5], reset Monday in OnWeekReset (exam prep accumulation moved to FB2CareerComponent as personal capability data, 2026-05); 2) weekly result history - WeeklyHistory[], kept up to DA->MaxWeeklyHistoryCount weeks, oldest removed first; 3) cumulative state - bHadCounseling, bHadExamThisCareer (never reset).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (13)
