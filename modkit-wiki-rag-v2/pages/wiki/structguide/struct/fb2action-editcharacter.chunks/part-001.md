---
document_id: "05ad94c12924a6f7d0cd1c67435a80608bb8d74928c76466cb5d0e08891c9e80"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-editcharacter"
title: "B2Action_EditCharacter"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:33+00:00"
content_sha256: "fb16eca099cf07bea5bed7b564b9753da91fda3413825028129fe9b3ba7c7546"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-editcharacter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens the character customization (CAZ) UI on the base object, temporarily reverting any override skin first, and finishes immediately since actual completion is driven externally by the customization UI closing. * =============== * Param: * S1: Customization category to open, parsed to EB1CharacterCustomizationCategory * S2: Item id to focus on when the customization UI opens * F1: - * F2: - * Note: * OnInit(): Parses CharacterCustomizeCategory and StartupFocusItemId from the action's S1/S2 params. * OnPlay(): Temporarily reverts the base object's override skin and sends the start-customization packet with the resolved category and focus item. * OnTick(): Finishes the action immediately on the first tick.
