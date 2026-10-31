---
document_id: "2e42c0cad4418ebe9e557ac891960b89ddfa63d450d4bdcf92ec5ae2856f7f0c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1skillcheckdice"
title: "FB1SkillCheckDice"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:29+00:00"
content_sha256: "0ce8114062da9c9569b8da3eed941f9b507de0813a31875cbeaa94b0764876d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1skillcheckdice"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the dice configuration for a skill check, including value range and result type probabilities.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`MaxValue``integer`The maximum value this dice can produce.`MinValue``integer`The minimum value this dice can produce.`ResultTypeChances``table<EB1SkillCheckResultType, integer>`The probability distribution for each result type; values should sum to 100. |
| --- |
| `MaxValue``integer`The maximum value this dice can produce.`MinValue``integer`The minimum value this dice can produce.`ResultTypeChances``table<EB1SkillCheckResultType, integer>`The probability distribution for each result type; values should sum to 100. |
| `MinValue``integer`The minimum value this dice can produce.`ResultTypeChances``table<EB1SkillCheckResultType, integer>`The probability distribution for each result type; values should sum to 100. |
| `ResultTypeChances``table<EB1SkillCheckResultType, integer>`The probability distribution for each result type; values should sum to 100. |
