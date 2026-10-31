---
document_id: "16c9ea695891e709552a4565d5cf78ae14f9ff6b9312f33a980750d4547060b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantcleanupentry"
title: "B1RestaurantCleanupEntry"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:24+00:00"
content_sha256: "442895bf95be89d0509d6e67d4ece91fb67acfe1caff7dce7e9eaeba1b505819"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1restaurantcleanupentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Persistent FIFO cleanup work for one restaurant table. * TargetFoodEntityIds keeps in-flight plates authoritative after a waiter detaches them from the table.

| PropertyTypeDescriptionMetadataTableEntityIdFB1EntityIdRestaurant table blocked in the Dirty service-unit state until every target food is gone.TargetFoodEntityIdsTArrayExact restaurant ServedFood entities that must be disposed before the table becomes Empty.EnqueuedTicksint64Game tick when this table first became Dirty; persisted FIFO ordering uses this value. |
| --- |
| TableEntityIdFB1EntityIdRestaurant table blocked in the Dirty service-unit state until every target food is gone.TargetFoodEntityIdsTArrayExact restaurant ServedFood entities that must be disposed before the table becomes Empty.EnqueuedTicksint64Game tick when this table first became Dirty; persisted FIFO ordering uses this value. |
| TargetFoodEntityIdsTArrayExact restaurant ServedFood entities that must be disposed before the table becomes Empty.EnqueuedTicksint64Game tick when this table first became Dirty; persisted FIFO ordering uses this value. |
| EnqueuedTicksint64Game tick when this table first became Dirty; persisted FIFO ordering uses this value. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRestaurant[FB1RestaurantDishBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatch)[FB1RestaurantDishBatchEntry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatchentry)[FB1RestaurantDishBatchId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatchid)[FB1RestaurantGroupOrderContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantgroupordercontext)[FB1RestaurantGroupOrderSubmission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantgroupordersubmission)[FB1RestaurantOrderMemberContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantordermembercontext)[FB1RestaurantOrderSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantorderselection)[FB1RestaurantOrderTicket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantorderticket)[FB1RestaurantSeatAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantseatassignment)[FB1RestaurantSettlementGroupId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantsettlementgroupid)
