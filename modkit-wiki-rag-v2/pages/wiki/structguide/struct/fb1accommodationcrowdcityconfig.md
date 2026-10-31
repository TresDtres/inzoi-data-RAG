---
document_id: "6fb8277b8444fb10118a0f1b8614d13dde309e6f70eb70dd5444e5116b567d05"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1accommodationcrowdcityconfig"
title: "B1AccommodationCrowdCityConfig"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:07+00:00"
content_sha256: "747cd808aa134dd72f2b593b40bc94acefe255d9be704db232395cba378d6309"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1accommodationcrowdcityconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Per-city target range for how many accommodation rooms the crowd system should keep occupied. * Cities without an entry here are opted out of the accommodation crowd system entirely.

| PropertyTypeDescriptionMetadataCityIdFNameCity this config applies to.Category: Accommodation Foreign: Map.IdMinOccupiedRoomCountint32Minimum number of rooms this city should try to keep occupied by the crowd system, per cycle. Must be > 0 (0 = don't add an entry for this city).Category: Accommodation ClampMin: 1MaxOccupiedRoomCountint32Maximum number of rooms this city should try to keep occupied by the crowd system, per cycle. Must be > 0 (0 = don't add an entry for this city).Category: Accommodation ClampMin: 1 |
| --- |
| CityIdFNameCity this config applies to.Category: Accommodation Foreign: Map.IdMinOccupiedRoomCountint32Minimum number of rooms this city should try to keep occupied by the crowd system, per cycle. Must be > 0 (0 = don't add an entry for this city).Category: Accommodation ClampMin: 1MaxOccupiedRoomCountint32Maximum number of rooms this city should try to keep occupied by the crowd system, per cycle. Must be > 0 (0 = don't add an entry for this city).Category: Accommodation ClampMin: 1 |
| MinOccupiedRoomCountint32Minimum number of rooms this city should try to keep occupied by the crowd system, per cycle. Must be > 0 (0 = don't add an entry for this city).Category: Accommodation ClampMin: 1MaxOccupiedRoomCountint32Maximum number of rooms this city should try to keep occupied by the crowd system, per cycle. Must be > 0 (0 = don't add an entry for this city).Category: Accommodation ClampMin: 1 |
| MaxOccupiedRoomCountint32Maximum number of rooms this city should try to keep occupied by the crowd system, per cycle. Must be > 0 (0 = don't add an entry for this city).Category: Accommodation ClampMin: 1 |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAccommodation[FB1AccommodationBookingLookup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1accommodationbookinglookup)[FB1AccommodationRoomKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1accommodationroomkey)
