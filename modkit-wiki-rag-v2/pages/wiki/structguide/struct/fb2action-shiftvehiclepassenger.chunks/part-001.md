---
document_id: "7d6cfe33042d45539df81c23593e34df2fa751c8e0a853aad842d5b56b4e3181"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-shiftvehiclepassenger"
title: "B2Action_ShiftVehiclePassenger"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:45+00:00"
content_sha256: "f2ce6852c6ac2f76b416e81701899fd69db44b4ea5e419eba040867907244e65"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-shiftvehiclepassenger"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Moves the self character to a different passenger seat/object within the vehicle it is currently riding, occupying the target seat slot and teleporting self into position. * =============== * Note: * OnInit(): Validates self is riding a vehicle and that the target seat belongs to that same vehicle, canceling the interaction if the target seat is already occupied by someone else or identical to self's current seat. * OnPlay(): Finds and occupies the closest available slot on the target seat, then shifts self character to it and teleports self into the resolved slot location/rotation.
