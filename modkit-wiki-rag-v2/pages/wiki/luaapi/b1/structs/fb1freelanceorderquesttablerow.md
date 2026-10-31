---
document_id: "212cfd0a4c298b1d62f35bea2fe01c427681a65ddadbefef2565a05ec43940e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceorderquesttablerow"
title: "FB1FreelanceOrderQuestTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:55+00:00"
content_sha256: "300f6cc9bb6b31406cb7b48961490c6f1da5bb6d876215405139b834ef3f5ac6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1freelanceorderquesttablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a freelance order quest, including the client pool, recipient pool, mission quest ID, and whitelist buff ID.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`ClientPool`[`FB1FreelanceClientPool`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclientpool)Client-item pool (used in Delivery/Creation).`MissionQuestId``string`Connected mission Quest ID.`RecipientPool`[`FB1FreelanceRecipientPool`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerecipientpool)Recipient pool (used in Delivery/Creation).`WhiteListBuffId``string`WhiteList Buff ID applied to NPC Client/Recipient during order execution. |
| --- |
| `ClientPool`[`FB1FreelanceClientPool`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelanceclientpool)Client-item pool (used in Delivery/Creation).`MissionQuestId``string`Connected mission Quest ID.`RecipientPool`[`FB1FreelanceRecipientPool`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerecipientpool)Recipient pool (used in Delivery/Creation).`WhiteListBuffId``string`WhiteList Buff ID applied to NPC Client/Recipient during order execution. |
| `MissionQuestId``string`Connected mission Quest ID.`RecipientPool`[`FB1FreelanceRecipientPool`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerecipientpool)Recipient pool (used in Delivery/Creation).`WhiteListBuffId``string`WhiteList Buff ID applied to NPC Client/Recipient during order execution. |
| `RecipientPool`[`FB1FreelanceRecipientPool`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1freelancerecipientpool)Recipient pool (used in Delivery/Creation).`WhiteListBuffId``string`WhiteList Buff ID applied to NPC Client/Recipient during order execution. |
| `WhiteListBuffId``string`WhiteList Buff ID applied to NPC Client/Recipient during order execution. |
