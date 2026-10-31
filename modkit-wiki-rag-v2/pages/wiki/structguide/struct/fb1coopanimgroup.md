---
document_id: "db6f39d9967775533f9c5726e2aac726b179e1db6367227263b5cb9876f27b47"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1coopanimgroup"
title: "B1CoopAnimGroup"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:11+00:00"
content_sha256: "6fa3ddc5d750a5d8d8e632a534fa48e4153627352d53c20a04b627b875611384"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1coopanimgroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Anim group for coop talk animation pools. * Each group declares the (host, target) character condition it applies to (4 filters), and the anim entries to use for that condition. * Default = wildcard. Real characters never evaluate to Default, so Default works as an "any" filter. * Matching priority: (1) filter pass, (2) only groups with the maximum specific-count are kept, (3) weighted random across AnimEntries.

| PropertyTypeDescriptionMetadataHostGenderFilterEB1GenderTypeHost character's gender filter. Default = Any.Category: B1CoopAnimGroupHostBodyAgeFilterEB1BodyAgeTypeHost character's body-age filter. Default = Any.Category: B1CoopAnimGroupTargetGenderFilterEB1GenderTypeTarget character's gender filter. Default = Any.Category: B1CoopAnimGroupTargetBodyAgeFilterEB1BodyAgeTypeTarget character's body-age filter. Default = Any.Category: B1CoopAnimGroupAnimEntriesTArrayAnim entries that apply to this (host, target) combination.Category: B1CoopAnimGroup |
| --- |
| HostGenderFilterEB1GenderTypeHost character's gender filter. Default = Any.Category: B1CoopAnimGroupHostBodyAgeFilterEB1BodyAgeTypeHost character's body-age filter. Default = Any.Category: B1CoopAnimGroupTargetGenderFilterEB1GenderTypeTarget character's gender filter. Default = Any.Category: B1CoopAnimGroupTargetBodyAgeFilterEB1BodyAgeTypeTarget character's body-age filter. Default = Any.Category: B1CoopAnimGroupAnimEntriesTArrayAnim entries that apply to this (host, target) combination.Category: B1CoopAnimGroup |
| HostBodyAgeFilterEB1BodyAgeTypeHost character's body-age filter. Default = Any.Category: B1CoopAnimGroupTargetGenderFilterEB1GenderTypeTarget character's gender filter. Default = Any.Category: B1CoopAnimGroupTargetBodyAgeFilterEB1BodyAgeTypeTarget character's body-age filter. Default = Any.Category: B1CoopAnimGroupAnimEntriesTArrayAnim entries that apply to this (host, target) combination.Category: B1CoopAnimGroup |
| TargetGenderFilterEB1GenderTypeTarget character's gender filter. Default = Any.Category: B1CoopAnimGroupTargetBodyAgeFilterEB1BodyAgeTypeTarget character's body-age filter. Default = Any.Category: B1CoopAnimGroupAnimEntriesTArrayAnim entries that apply to this (host, target) combination.Category: B1CoopAnimGroup |
| TargetBodyAgeFilterEB1BodyAgeTypeTarget character's body-age filter. Default = Any.Category: B1CoopAnimGroupAnimEntriesTArrayAnim entries that apply to this (host, target) combination.Category: B1CoopAnimGroup |
| AnimEntriesTArrayAnim entries that apply to this (host, target) combination.Category: B1CoopAnimGroup |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCoop[Coop Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/coop)[CoopTalk Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cooptalk)[FB1CoopGroupRotationTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1coopgrouprotationtablerow)[FB1CoopStartInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1coopstartinfo)[FB1CoopTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cooptablerow)[FB1CoopTalkInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cooptalkinfo)[FB1CoopTalkTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cooptalktablerow)
