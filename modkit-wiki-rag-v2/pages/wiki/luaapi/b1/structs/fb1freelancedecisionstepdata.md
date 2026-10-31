---
document_id: "395138e05d2c82575ee19b10ef3c882010d1bc81ca48152a092f459eca34e1a2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancedecisionstepdata"
title: "FB1FreelanceDecisionStepData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:55+00:00"
content_sha256: "8d6e7368584f474f6a018eba8fe458348239e9f3c0b122156498fc966a693e02"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelancedecisionstepdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Choice card and answer data for one step in a DecisionFlow. Array index in StepDataList corresponds to the step index (matches TextVariables).

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`Answers``FB1FreelanceDecisionAnswerData[]`Scoring data per answer. Array index corresponds to the ChoiceCard answer index.`BaseScore``integer`Base score for completing this step (independent of answer choice).`ChoiceCardId``string`Choice card ID to show for this step. |
| --- |
| `Answers``FB1FreelanceDecisionAnswerData[]`Scoring data per answer. Array index corresponds to the ChoiceCard answer index.`BaseScore``integer`Base score for completing this step (independent of answer choice).`ChoiceCardId``string`Choice card ID to show for this step. |
| `BaseScore``integer`Base score for completing this step (independent of answer choice).`ChoiceCardId``string`Choice card ID to show for this step. |
| `ChoiceCardId``string`Choice card ID to show for this step. |
