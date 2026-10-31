---
document_id: "1dd43ba387af135d0fd766a0945717c41d2badf5006de1f1cf566d94d247ce49"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviecommonbuffinfo"
title: "B1MovieCommonBuffInfo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:42+00:00"
content_sha256: "3457f0fff327eaec70e9394acae613840171a152a96e39991f6f00d783faf904"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1moviecommonbuffinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines a common buff entry for movie watching with probability-based selection. * Multiple entries can exist per time slot; one is chosen based on Probability weights.

| PropertyTypeDescriptionMetadataBuffIdFNameBuff to apply.Category: B1MovieCommonBuffInfo Foreign: Buff.IdFacialAnimationIdsTArrayFacial animation IDs to play when this buff is applied. One is chosen at random.Category: B1MovieCommonBuffInfoBodyAnimationIdsTArrayBody animation IDs to play when this buff is applied. One is chosen at random.Category: B1MovieCommonBuffInfoProbabilityfloatProbability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0.Category: B1MovieCommonBuffInfo |
| --- |
| BuffIdFNameBuff to apply.Category: B1MovieCommonBuffInfo Foreign: Buff.IdFacialAnimationIdsTArrayFacial animation IDs to play when this buff is applied. One is chosen at random.Category: B1MovieCommonBuffInfoBodyAnimationIdsTArrayBody animation IDs to play when this buff is applied. One is chosen at random.Category: B1MovieCommonBuffInfoProbabilityfloatProbability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0.Category: B1MovieCommonBuffInfo |
| FacialAnimationIdsTArrayFacial animation IDs to play when this buff is applied. One is chosen at random.Category: B1MovieCommonBuffInfoBodyAnimationIdsTArrayBody animation IDs to play when this buff is applied. One is chosen at random.Category: B1MovieCommonBuffInfoProbabilityfloatProbability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0.Category: B1MovieCommonBuffInfo |
| BodyAnimationIdsTArrayBody animation IDs to play when this buff is applied. One is chosen at random.Category: B1MovieCommonBuffInfoProbabilityfloatProbability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0.Category: B1MovieCommonBuffInfo |
| ProbabilityfloatProbability of selecting this buff entry (0.0 ~ 1.0). Sum of all CommonBuffs should be <= 1.0.Category: B1MovieCommonBuffInfo |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMovie[FB1MovieBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviebuffinfo)[FB1MoviePreferenceBuffInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1moviepreferencebuffinfo)[FB1MovieTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1movietablerow)
