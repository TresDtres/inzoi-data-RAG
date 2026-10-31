---
document_id: "dc345476a8cd52a2f65114f72b3c29cfa704f1518f6dd08c11272eb9311a6402"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1commonb2chunkdata"
title: "B1CommonB2ChunkData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:09+00:00"
content_sha256: "f59fc8c54a04a160f4e1feb9b118aaf12ef03bbe027870ed4dd568019e3bd374"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1commonb2chunkdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Wrapper payload for the CommonB2 ("CDB2") save chunk. The chunk originally stored FB1GlobalCityMoveData alone, * so it could not carry other B2 global data. This wrapper lets the single chunk hold multiple global structures * (city move + city travel), and new structures can be added as fields. Old saves hold a raw FB1GlobalCityMoveData * without the wrapper; the CDB2 load gate in UB2SimulationSystem::LoadInternal detects old vs new by save version * and CBOR structure (old buffers lack the top-level 'GlobalCityMoveData' key) and converts old -> new. (BL-59215)

| PropertyTypeDescriptionMetadataGlobalCityMoveDataFB1GlobalCityMoveDataGlobal city-move data (per-city state, Zoi move, and household move maps).GlobalCityTravelDataFB1GlobalCityTravelDataGlobal city-travel state (in-progress flag, active travel, household UI carry buffer). |
| --- |
| GlobalCityMoveDataFB1GlobalCityMoveDataGlobal city-move data (per-city state, Zoi move, and household move maps).GlobalCityTravelDataFB1GlobalCityTravelDataGlobal city-travel state (in-progress flag, active travel, household UI carry buffer). |
| GlobalCityTravelDataFB1GlobalCityTravelDataGlobal city-travel state (in-progress flag, active travel, household UI carry buffer). |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCommon[FB1CommonButtonData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1commonbuttondata)[FB1CommonButtonDesignData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1commonbuttondesigndata)[FB1CommonTerritory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1commonterritory)
