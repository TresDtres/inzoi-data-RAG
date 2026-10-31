---
document_id: "e54fc73315014037d0b3bc0b8c7bc527de578a52fffe2ae6077adeb30810f039"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1accommodationbookinglookup"
title: "B1AccommodationBookingLookup"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:07+00:00"
content_sha256: "c93d7ca2494f6f1875f2c73a82554dac4ee9da12c5dd9bab471c87401be410c2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1accommodationbookinglookup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Identifies the accommodation business and room reserved by a guest. * B2 owns the authoritative guest lookup; B1 keeps a synchronized copy for UI routing.

| PropertyTypeDescriptionMetadataHouseholdBizIdFB1EntityIdRoomKeyFB1AccommodationRoomKeybBlocksPlayerBookingboolTrue when this guest belongs to a household the player has possessed at least once, so the room must not be offered for the player to book over. Other guests (waiting families, crowd guests) can be pushed out. Snapshot taken when the booking is created; it is not refreshed if the household is possessed later on. |
| --- |
| HouseholdBizIdFB1EntityIdRoomKeyFB1AccommodationRoomKeybBlocksPlayerBookingboolTrue when this guest belongs to a household the player has possessed at least once, so the room must not be offered for the player to book over. Other guests (waiting families, crowd guests) can be pushed out. Snapshot taken when the booking is created; it is not refreshed if the household is possessed later on. |
| RoomKeyFB1AccommodationRoomKeybBlocksPlayerBookingboolTrue when this guest belongs to a household the player has possessed at least once, so the room must not be offered for the player to book over. Other guests (waiting families, crowd guests) can be pushed out. Snapshot taken when the booking is created; it is not refreshed if the household is possessed later on. |
| bBlocksPlayerBookingboolTrue when this guest belongs to a household the player has possessed at least once, so the room must not be offered for the player to book over. Other guests (waiting families, crowd guests) can be pushed out. Snapshot taken when the booking is created; it is not refreshed if the household is possessed later on. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAccommodation[FB1AccommodationCrowdCityConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1accommodationcrowdcityconfig)[FB1AccommodationRoomKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1accommodationroomkey)
