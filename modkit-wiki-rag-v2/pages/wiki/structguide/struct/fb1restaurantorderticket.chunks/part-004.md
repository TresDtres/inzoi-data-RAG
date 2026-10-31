---
document_id: "bce556decfd7e32575e47c670e74dfe5d152fb78c0afcfa5a3e5ea2a24a9945c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantorderticket"
title: "B1RestaurantOrderTicket"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:25+00:00"
content_sha256: "79a9e7c220469e04ad4210ff2ed3ac569e2c8dda01a277b0796430c2fd480ae5"
chunk: 4
chunk_count: 4
page_type: "article"
route: "wiki/structguide/struct/fb1restaurantorderticket"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

partureboolSet when the ticket is cancelled because its eater left the site mid-service. The order is still charged to the party, so IsBillable() keeps it in the settlement total even though the meal was never completed. |
| QualityGradeEB1QualityQuality grade rolled once when a chef claims the cooking batch; None while the ticket is still Ordered.StateEB1OrderStateCurrent order state in the ticket state machine.StateEnterTicksint64Game tick when the ticket entered the current state; used for ordering and restored-state bookkeeping.bMealFinishedboolSet when the eater's RestaurantEat action finished. The restaurant reconciler is the only writer of State, so it converts this flag into Eaten instead of the action doing the transition itself.bBilledOnDepartureboolSet when the ticket is cancelled because its eater left the site mid-service. The order is still charged to the party, so IsBillable() keeps it in the settlement total even though the meal was never completed. |
| StateEB1OrderStateCurrent order state in the ticket state machine.StateEnterTicksint64Game tick when the ticket entered the current state; used for ordering and restored-state bookkeeping.bMealFinishedboolSet when the eater's RestaurantEat action finished. The restaurant reconciler is the only writer of State, so it converts this flag into Eaten instead of the action doing the transition itself.bBilledOnDepartureboolSet when the ticket is cancelled because its eater left the site mid-service. The order is still charged to the party, so IsBillable() keeps it in the settlement total even though the meal was never completed. |
| StateEnterTicksint64Game tick when the ticket entered the current state; used for ordering and restored-state bookkeeping.bMealFinishedboolSet when the eater's RestaurantEat action finished. The restaurant reconciler is the only writer of State, so it converts this flag into Eaten instead of the action doing the transition itself.bBilledOnDepartureboolSet when the ticket is cancelled because its eater left the site mid-service. The order is still charged to the party, so IsBillable() keeps it in the settlement total even though the meal was never completed. |
| bMealFinishedboolSet when the eater's RestaurantEat action finished. The restaurant reconciler is the only writer of State, so it converts this flag into Eaten instead of the action doing the transition itself.bBilledOnDepartureboolSet when the ticket is cancelled because its eater left the site mid-service. The order is still charged to the party, so IsBillable() keeps it in the settlement total even though the meal was never completed. |
| bBilledOnDepartureboolSet when the ticket is cancelled because its eater left the site mid-service. The order is still charged to the party, so IsBillable() keeps it in the settlement total even though the meal was never completed. |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoRestaurant[FB1RestaurantCleanupEntry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantcleanupentry)[FB1RestaurantDishBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatch)[FB1RestaurantDishBatchEntry](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatchentry)[FB1RestaurantDishBatchId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantdishbatchid)[FB1RestaurantGroupOrderContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantgroupordercontext)[FB1RestaurantGroupOrderSubmission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantgroupordersubmission)[FB1RestaurantOrderMemberContext](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantordermembercontext)[FB1RestaurantOrderSelection](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantorderselection)[FB1RestaurantSeatAssignment](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantseatassignment)[FB1RestaurantSettlementGroupId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantsettlementgroupid)
