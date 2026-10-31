---
document_id: "0eacdada6f4901d7306b967157af9fbae013a2331fea565c170485736224ee57"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-currentambition"
title: "Condition_CurrentAmbition"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:56+00:00"
content_sha256: "49df8bbb64cd48fcc289b09b12ede55465de4ec55f55ede3b4c9f3056572fab1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-currentambition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the current step of a specific ambition for the specified entity. Retrieves the ambition's current step by ambition ID (S1) and compares it against the expected step value (F1), with optional upper bound (F2) for range comparisons.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check (Self or Target).CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange).S1Ambition ID to look up the current step for (e.g., Rich, Voice).F1Expected ambition step value to compare against.F2Upper bound for range comparisons (used when CompareType is InRange or OutRange). |
| --- |
| BaseObjectThe entity to check (Self or Target).CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange).S1Ambition ID to look up the current step for (e.g., Rich, Voice).F1Expected ambition step value to compare against.F2Upper bound for range comparisons (used when CompareType is InRange or OutRange). |
| CompareTypeComparison operator (Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRange).S1Ambition ID to look up the current step for (e.g., Rich, Voice).F1Expected ambition step value to compare against.F2Upper bound for range comparisons (used when CompareType is InRange or OutRange). |
| S1Ambition ID to look up the current step for (e.g., Rich, Voice).F1Expected ambition step value to compare against.F2Upper bound for range comparisons (used when CompareType is InRange or OutRange). |
| F1Expected ambition step value to compare against.F2Upper bound for range comparisons (used when CompareType is InRange or OutRange). |
| F2Upper bound for range comparisons (used when CompareType is InRange or OutRange). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if self's Rich ambition is exactly at step 2SelfCurrentAmbitionEqualRich20Check if self's Rich ambition is below step 3SelfCurrentAmbitionLessRich30Check if self's Voice ambition is at step 2 or higherSelfCurrentAmbitionGreaterOrEqualVoice20Check if self's Rich ambition step is between 1 and 2SelfCurrentAmbitionInRangeRich12 |
| --- |
| Check if self's Rich ambition is exactly at step 2SelfCurrentAmbitionEqualRich20Check if self's Rich ambition is below step 3SelfCurrentAmbitionLessRich30Check if self's Voice ambition is at step 2 or higherSelfCurrentAmbitionGreaterOrEqualVoice20Check if self's Rich ambition step is between 1 and 2SelfCurrentAmbitionInRangeRich12 |
| Check if self's Rich ambition is below step 3SelfCurrentAmbitionLessRich30Check if self's Voice ambition is at step 2 or higherSelfCurrentAmbitionGreaterOrEqualVoice20Check if self's Rich ambition step is between 1 and 2SelfCurrentAmbitionInRangeRich12 |
| Check if self's Voice ambition is at step 2 or higherSelfCurrentAmbitionGreaterOrEqualVoice20Check if self's Rich ambition step is between 1 and 2SelfCurrentAmbitionInRangeRich12 |
| Check if self's Rich ambition step is between 1 and 2SelfCurrentAmbitionInRangeRich12 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoAmbition & Hope[CompleteAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-completeambition)[HasHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashope)[PlayingAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-playingambition)
