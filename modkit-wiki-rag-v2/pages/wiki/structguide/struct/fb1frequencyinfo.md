---
document_id: "47db491e0e388e51a718ac468d8cd8d7bdf278ad5de9ed3b4b4e533817ac9ea6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1frequencyinfo"
title: "B1FrequencyInfo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:50+00:00"
content_sha256: "b077c28542aa68468ee98640877566eb8137e9feddd5b063a4fe83d404dd76af"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1frequencyinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines the frequency behavior of a howling event, controlling whether it fires once, * on enter, or on a repeating pulse, along with cooldown and duration settings.

| PropertyTypeDescriptionMetadataTypeEB1HowlingFrequencyTypeFrequency type determining when and how often this howling fires.Category: B1FrequencyInfobAllowMultipleboolIf true, allows the howling to fire multiple times for the same target. Caution: this flag only works with the Enter frequency type, so check the spec before using it.Category: B1FrequencyInfoCooldownTimefloatCooldown time between repeated firings of this howling event.Category: B1FrequencyInfoDurationfloatDuration for which this howling event remains active (for Pulse type).Category: B1FrequencyInfo |
| --- |
| TypeEB1HowlingFrequencyTypeFrequency type determining when and how often this howling fires.Category: B1FrequencyInfobAllowMultipleboolIf true, allows the howling to fire multiple times for the same target. Caution: this flag only works with the Enter frequency type, so check the spec before using it.Category: B1FrequencyInfoCooldownTimefloatCooldown time between repeated firings of this howling event.Category: B1FrequencyInfoDurationfloatDuration for which this howling event remains active (for Pulse type).Category: B1FrequencyInfo |
| bAllowMultipleboolIf true, allows the howling to fire multiple times for the same target. Caution: this flag only works with the Enter frequency type, so check the spec before using it.Category: B1FrequencyInfoCooldownTimefloatCooldown time between repeated firings of this howling event.Category: B1FrequencyInfoDurationfloatDuration for which this howling event remains active (for Pulse type).Category: B1FrequencyInfo |
| CooldownTimefloatCooldown time between repeated firings of this howling event.Category: B1FrequencyInfoDurationfloatDuration for which this howling event remains active (for Pulse type).Category: B1FrequencyInfo |
| DurationfloatDuration for which this howling event remains active (for Pulse type).Category: B1FrequencyInfo |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
