---
document_id: "e639e4202c0c59a4bb396904e260b0efe2a7a66bf7c265774ba45714cd48c0ea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter"
title: "Filter"
section: "wiki/script-filter"
breadcrumb: ["ModKit Documentation", "Wiki"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:05+00:00"
content_sha256: "59f64c377efc31a182446128bed9ef036b75fb5c1ad675ddc7a08671eb0b3cf1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-filter"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

# Overview

This document explains the **TargetFilter** commands used to pick which object a script acts on.

- A Condition decides *whether* a script runs. A Filter decides *what it runs against*.
- A Filter searches the world for a matching object — a chair to sit on, a nearby character to talk to, an inventory item to hand over — and puts the result in `OutResult` for the rest of the script to use.
- Filters are generated from the game source, so this list matches the build.

# Parameter

Every Filter takes the same three arguments:

| ParamsDescriptionInContextThe BaseObject the search starts fromInFilterThe filter's own settings. Which of `S1` · `S2` · `SearchRange` and other fields matter depends on the commandOutResultWhere the matched object is written |
| --- |
| InContextThe BaseObject the search starts fromInFilterThe filter's own settings. Which of `S1` · `S2` · `SearchRange` and other fields matter depends on the commandOutResultWhere the matched object is written |
| InFilterThe filter's own settings. Which of `S1` · `S2` · `SearchRange` and other fields matter depends on the commandOutResultWhere the matched object is written |
| OutResultWhere the matched object is written |

The per-command pages list exactly which `InFilter` fields that command reads, and what values they accept.

# Full List
