---
document_id: "554f0fd878e2a9ac29928cb9ad668e745dd9710854e36fcc4b0b525351cce263"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatchentry"
title: "B1RestaurantDishBatchEntry"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:24+00:00"
content_sha256: "56dd18bde8e5c7188a2300244938bd554872ad0046b0e524bd0d8dacaace836c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1restaurantdishbatchentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Stores one ordered seat's immutable eater/seat/recipe identity and the quality rolled when cooking starts. * It is persisted inside FB1RestaurantDishBatch so serving never has to infer the order from current table occupants.

| PropertyTypeDescriptionMetadataEaterIdFB1EntityIdCustomer entity that owns this ordered dish.EaterHouseholdEntityIdFB1EntityIdCustomer household entity snapshotted when the order is committed.SeatEntityIdFB1EntityIdSeat entity where this ordered dish must be served.RecipeIdFNameConcrete Served-type recipe selected for this seat.QualityGradeEB1QualityQuality grade rolled once when a chef claims this cooking batch. |
| --- |
| EaterIdFB1EntityIdCustomer entity that owns this ordered dish.EaterHouseholdEntityIdFB1EntityIdCustomer household entity snapshotted when the order is committed.SeatEntityIdFB1EntityIdSeat entity where this ordered dish must be served.RecipeIdFNameConcrete Served-type recipe selected for this seat.QualityGradeEB1QualityQuality grade rolled once when a chef claims this cooking batch. |
| EaterHouseholdEntityIdFB1EntityIdCustomer household entity snapshotted when the order is committed.SeatEntityIdFB1EntityIdSeat entity where this ordered dish must be served.RecipeIdFNameConcrete Served-type recipe selected for this seat.QualityGradeEB1QualityQuality grade rolled once when a chef claims this cooking batch. |
| SeatEntityIdFB1EntityIdSeat entity where this ordered dish must be served.RecipeIdFNameConcrete Served-type recipe selected for this seat.QualityGradeEB1QualityQuality grade rolled once when a chef claims this cooking batch. |
| RecipeIdFNameConcrete Served-type recipe selected for this seat.QualityGradeEB1QualityQuality grade rolled once when a chef claims this cooking batch. |
| QualityGradeEB1QualityQuality grade rolled once when a chef claims this cooking batch. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRestaurant[FB1RestaurantCleanupEntry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantcleanupentry)[FB1RestaurantDishBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatch)[FB1RestaurantDishBatchId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatchid)[FB1RestaurantGroupOrderContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantgroupordercontext)[FB1RestaurantGroupOrderSubmission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantgroupordersubmission)[FB1RestaurantOrderMemberContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantordermembercontext)[FB1RestaurantOrderSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantorderselection)[FB1RestaurantOrderTicket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantorderticket)[FB1RestaurantSeatAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantseatassignment)[FB1RestaurantSettlementGroupId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantsettlementgroupid)
