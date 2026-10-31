---
document_id: "92087a7bb1be9bbac746d34fc31c8ea83e83b2c3b47124a18e2e2de97d330b53"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1arrestverdictaction"
title: "B1ArrestVerdictAction"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:24+00:00"
content_sha256: "3b8e781e9a639e71f82da1c88da732663265a5ff31689cb8d2a836c8c208f4b6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1arrestverdictaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

What an arrest does once its outcome has been decided. Both entries are optional and independent, so an outcome can run a script, open a choice card, do both, or nothing at all. The script runs first, with the officer as Self and the criminal as Target; the card is then sent from the officer to the criminal.

| PropertyTypeDescriptionMetadataScriptIdFNameScript to run. Use it for outcomes that settle on the spot, such as paying a fineCategory: B1ArrestVerdictAction Foreign: Script.IdChoiceCardIdFNameChoiceCard to open. Use it for outcomes that ask the criminal to decide, such as standing trial. Names a ChoiceCard row, not a ChoiceCardGroup - group level card selection and Sender/Receiver are bypassed, the card always goes officer to criminal. Reading an id off a script that uses OpenChoiceCardPopup will not work here, because those name groups; take the ChoiceCardId held inside the group instead.Category: B1ArrestVerdictAction Foreign: ChoiceCard.Id |
| --- |
| ScriptIdFNameScript to run. Use it for outcomes that settle on the spot, such as paying a fineCategory: B1ArrestVerdictAction Foreign: Script.IdChoiceCardIdFNameChoiceCard to open. Use it for outcomes that ask the criminal to decide, such as standing trial. Names a ChoiceCard row, not a ChoiceCardGroup - group level card selection and Sender/Receiver are bypassed, the card always goes officer to criminal. Reading an id off a script that uses OpenChoiceCardPopup will not work here, because those name groups; take the ChoiceCardId held inside the group instead.Category: B1ArrestVerdictAction Foreign: ChoiceCard.Id |
| ChoiceCardIdFNameChoiceCard to open. Use it for outcomes that ask the criminal to decide, such as standing trial. Names a ChoiceCard row, not a ChoiceCardGroup - group level card selection and Sender/Receiver are bypassed, the card always goes officer to criminal. Reading an id off a script that uses OpenChoiceCardPopup will not work here, because those name groups; take the ChoiceCardId held inside the group instead.Category: B1ArrestVerdictAction Foreign: ChoiceCard.Id |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
