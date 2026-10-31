---
document_id: "f0b25810572e2c0d616877749a0160d0dbb3a6d5f778610f1ba8aa3a184077e7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-completeambition"
title: "Condition_CompleteAmbition"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:55+00:00"
content_sha256: "f884e2931ab63814b5be4cafbe4c3361ecc0829adcd66aa13e7203dd76389991"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-completeambition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether an ambition has been completed. When F1 is 1 or greater, it compares the total number of completed ambitions against F1 (and optionally F2) using CompareType. When F1 is less than 1, it checks whether the specific ambition identified by S1 has been completed, supporting only Equal and NotEqual comparisons.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check (Self or Target).CompareTypeComparison operator (Equal, NotEqual, GreaterOrEqual, InRange, etc.).S1Ambition item ID to check by name (used when F1 < 1; e.g., Rich, Voice).F1Completed ambition count threshold (when >= 1, compares total count).F2Upper bound for range comparisons (used when CompareType is InRange). |
| --- |
| BaseObjectThe entity to check (Self or Target).CompareTypeComparison operator (Equal, NotEqual, GreaterOrEqual, InRange, etc.).S1Ambition item ID to check by name (used when F1 < 1; e.g., Rich, Voice).F1Completed ambition count threshold (when >= 1, compares total count).F2Upper bound for range comparisons (used when CompareType is InRange). |
| CompareTypeComparison operator (Equal, NotEqual, GreaterOrEqual, InRange, etc.).S1Ambition item ID to check by name (used when F1 < 1; e.g., Rich, Voice).F1Completed ambition count threshold (when >= 1, compares total count).F2Upper bound for range comparisons (used when CompareType is InRange). |
| S1Ambition item ID to check by name (used when F1 < 1; e.g., Rich, Voice).F1Completed ambition count threshold (when >= 1, compares total count).F2Upper bound for range comparisons (used when CompareType is InRange). |
| F1Completed ambition count threshold (when >= 1, compares total count).F2Upper bound for range comparisons (used when CompareType is InRange). |
| F2Upper bound for range comparisons (used when CompareType is InRange). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if self has completed 5 or more ambitionsSelfCompleteAmbitionGreaterOrEqual50Check if self has completed the Rich ambitionSelfCompleteAmbitionEqualRich00Check if self has NOT completed the Rich ambitionSelfCompleteAmbitionNotEqualRich00Check if self has completed 1 to 3 ambitionsSelfCompleteAmbitionInRange13 |
| --- |
| Check if self has completed 5 or more ambitionsSelfCompleteAmbitionGreaterOrEqual50Check if self has completed the Rich ambitionSelfCompleteAmbitionEqualRich00Check if self has NOT completed the Rich ambitionSelfCompleteAmbitionNotEqualRich00Check if self has completed 1 to 3 ambitionsSelfCompleteAmbitionInRange13 |
| Check if self has completed the Rich ambitionSelfCompleteAmbitionEqualRich00Check if self has NOT completed the Rich ambitionSelfCompleteAmbitionNotEqualRich00Check if self has completed 1 to 3 ambitionsSelfCompleteAmbitionInRange13 |
| Check if self has NOT completed the Rich ambitionSelfCompleteAmbitionNotEqualRich00Check if self has completed 1 to 3 ambitionsSelfCompleteAmbitionInRange13 |
| Check if self has completed 1 to 3 ambitionsSelfCompleteAmbitionInRange13 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoAmbition & Hope[CurrentAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-currentambition)[HasHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashope)[PlayingAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-playingambition)
