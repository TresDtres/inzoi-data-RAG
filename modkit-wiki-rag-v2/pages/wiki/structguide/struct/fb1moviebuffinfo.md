---
document_id: "edae252c0d56d4480a6e0c61cc4c71ed013bee106a47dbc5d53d50609aa06daf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviebuffinfo"
title: "B1MovieBuffInfo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:42+00:00"
content_sha256: "d29738684f75d1cbcfd821254c9848fccec4bdbf4ee34a1e57becc2c6261cb59"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1moviebuffinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines a buff schedule entry for movie playback at a specific time point. * Time is interpreted as in-game minutes for interval buffs or real-time seconds for static buffs. * CommonBuffs are selected by probability for characters without matching preferences.

| PropertyTypeDescriptionMetadataTimefloatTime at which the buff is applied; in-game minutes for interval mode, real-time seconds for static mode.Category: B1MovieBuffInfoCommonBuffsTArrayCommon buff entries with probability-based selection. For characters without matching preferences.Category: B1MovieBuffInfoPreferenceBuffsTArrayPer-preference buff overrides. If a character has a matching preference, the corresponding buff is used instead of CommonBuffs.Category: B1MovieBuffInfo |
| --- |
| TimefloatTime at which the buff is applied; in-game minutes for interval mode, real-time seconds for static mode.Category: B1MovieBuffInfoCommonBuffsTArrayCommon buff entries with probability-based selection. For characters without matching preferences.Category: B1MovieBuffInfoPreferenceBuffsTArrayPer-preference buff overrides. If a character has a matching preference, the corresponding buff is used instead of CommonBuffs.Category: B1MovieBuffInfo |
| CommonBuffsTArrayCommon buff entries with probability-based selection. For characters without matching preferences.Category: B1MovieBuffInfoPreferenceBuffsTArrayPer-preference buff overrides. If a character has a matching preference, the corresponding buff is used instead of CommonBuffs.Category: B1MovieBuffInfo |
| PreferenceBuffsTArrayPer-preference buff overrides. If a character has a matching preference, the corresponding buff is used instead of CommonBuffs.Category: B1MovieBuffInfo |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMovie[FB1MovieCommonBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviecommonbuffinfo)[FB1MoviePreferenceBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviepreferencebuffinfo)[FB1MovieTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1movietablerow)
