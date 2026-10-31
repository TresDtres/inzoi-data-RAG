---
document_id: "4c84e9f869150d48f15a82af8eb3ef6c2656dce6729d9ec64e5f34c32178913a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-craftdesk"
title: "[Filter]_CraftDesk"
section: "wiki/script-filter"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:47:49+00:00"
content_sha256: "6ee34f77af690d19edc417a865bc3e6fadfe20249ea7a877ba71853bdcbc28b4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-filter/filter-craftdesk"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Space target filter for crafting at the picked desk.

- If self has an in-progress CraftObject attached to this desk (HandCraft_Continue path), returns only the chair connected to the slot the CraftObject occupies. (BL-50472: prevents wrong-seat selection on multi-chair tables)
- For HandcraftTable01 template desks, returns occupiable interaction slots on the desk (stand crafting).
- For all other desks, returns selectable sit targets from connected chair slots.

[←Back to Filter FinderSearch and filter all 66 Script Filter documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/commands)See alsoObject & Inventory[CanPutPickedObjectInventory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-canputpickedobjectinventory)[CarriedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-carriedobject)[CoopHandOverObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-coophandoverobject)[EntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-entitytag)[FindInInvnetory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-findininvnetory)[GrabObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-grabobject)[InteractionBagCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-interactionbagcategory)[InteractionBagId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-interactionbagid)[InteractionBagIdDoNotCheckOccupyEntityId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-interactionbagiddonotcheckoccupyentityid)[ObjectId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-objectid)[ObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-objecttag)[ObjectTagMostExpensive](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-objecttagmostexpensive)
