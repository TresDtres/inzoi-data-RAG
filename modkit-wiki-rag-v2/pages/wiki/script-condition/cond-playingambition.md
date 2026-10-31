---
document_id: "702e85de9b66519f99606af74ac699133108d76b9302aa82bc27b228be6ebc00"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-playingambition"
title: "Condition_PlayingAmbition"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:56+00:00"
content_sha256: "17fc9849bf898f25621da3661b050530559ffbb356423c83cb966faff6a9c1b3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-playingambition"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the currently in-progress ambition of the specified entity. When F1 is greater than 0, also verifies that the ambition's current step matches F1. Supports Equal and NotEqual comparisons only.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check (Self or Target).CompareTypeComparison operator (Equal, NotEqual).S1Ambition item ID that is expected to be in progress (e.g., Rich, Voice).F1Expected ambition step (0 means step is ignored; otherwise must match). |
| --- |
| BaseObjectThe entity to check (Self or Target).CompareTypeComparison operator (Equal, NotEqual).S1Ambition item ID that is expected to be in progress (e.g., Rich, Voice).F1Expected ambition step (0 means step is ignored; otherwise must match). |
| CompareTypeComparison operator (Equal, NotEqual).S1Ambition item ID that is expected to be in progress (e.g., Rich, Voice).F1Expected ambition step (0 means step is ignored; otherwise must match). |
| S1Ambition item ID that is expected to be in progress (e.g., Rich, Voice).F1Expected ambition step (0 means step is ignored; otherwise must match). |
| F1Expected ambition step (0 means step is ignored; otherwise must match). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1Check if self's current ambition is RichSelfPlayingAmbitionEqualRich0Check if self's current ambition is Rich at step 2SelfPlayingAmbitionEqualRich2Check if self's current ambition is NOT VoiceSelfPlayingAmbitionNotEqualVoice0Check if self's current ambition is Voice at step 3SelfPlayingAmbitionEqualVoice3 |
| --- |
| Check if self's current ambition is RichSelfPlayingAmbitionEqualRich0Check if self's current ambition is Rich at step 2SelfPlayingAmbitionEqualRich2Check if self's current ambition is NOT VoiceSelfPlayingAmbitionNotEqualVoice0Check if self's current ambition is Voice at step 3SelfPlayingAmbitionEqualVoice3 |
| Check if self's current ambition is Rich at step 2SelfPlayingAmbitionEqualRich2Check if self's current ambition is NOT VoiceSelfPlayingAmbitionNotEqualVoice0Check if self's current ambition is Voice at step 3SelfPlayingAmbitionEqualVoice3 |
| Check if self's current ambition is NOT VoiceSelfPlayingAmbitionNotEqualVoice0Check if self's current ambition is Voice at step 3SelfPlayingAmbitionEqualVoice3 |
| Check if self's current ambition is Voice at step 3SelfPlayingAmbitionEqualVoice3 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoAmbition & Hope[CompleteAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-completeambition)[CurrentAmbition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-currentambition)[HasHope](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hashope)
