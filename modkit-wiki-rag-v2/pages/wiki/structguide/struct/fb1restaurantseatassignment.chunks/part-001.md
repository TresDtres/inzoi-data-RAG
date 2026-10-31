---
document_id: "f02e42f33809c68d16c3ceb3d28ca6384af658fd21008144f46bef8774109094"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1restaurantseatassignment"
title: "B1RestaurantSeatAssignment"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:25+00:00"
content_sha256: "3f3652eb5f3f4c248b9471ff23ea91acfc9adcdeeccd5f147170ddbe0133e133"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/structguide/struct/fb1restaurantseatassignment"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Restaurant seat assignment record - tracks which group is registered to which table (BL-58467, seat ownership). * Stored and serialized as a TArray on FB2HouseholdBiz. Kept independent of FB1RestaurantOrderTicket because * seat registration happens before any order exists (guide-to-seat precedes ordering). ** Two-phase gate: assignment alone does NOT open the seats (Restricted stays on for everyone, including the * assigned group, so a manually-possessed or wandering-in customer can never sit at a table that isn't theirs). * Only once bActivated is set (by the employee's guide-to-seat interaction) is Restricted lifted for these seats.
