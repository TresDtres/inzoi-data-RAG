---
document_id: "eac550d146814987d7723397485ac619ea59bc2f8a921f43f015de5ec6c360b2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-farmingplantseedrange"
title: "B2Action_FarmingPlantSeedRange"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:36+00:00"
content_sha256: "6a25100c98691c8b4ab07b17fb0a5a95c2d444e1f1f083265406e50134c70f72"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-farmingplantseedrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plants seeds from the character's grabbed seed object onto empty soil objects gathered in range, consuming one seed per soil planted. * =============== * Note: * OnInit(): resolves the seed/crop info from the grabbed object and collects target soil entities in range. * OnPlay(): delegates to base range FX start and hides the grabbed seed object visually. * OnFinish(): restores the grabbed object visibility, then plants the resolved seed on eligible empty soils until seeds run out. * OnCanceled(): restores the grabbed object visibility, then delegates to base.
