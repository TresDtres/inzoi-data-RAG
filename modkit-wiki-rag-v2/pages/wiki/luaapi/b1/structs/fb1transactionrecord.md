---
document_id: "e81a564e88243426fa8165bd36749dcdd82a9e4a9d6c098f572588289121ebd7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1transactionrecord"
title: "FB1TransactionRecord"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:43+00:00"
content_sha256: "776bd185525b1f8aebe46d965e1c2b01343ec1e13c90185da9a970b799ecc035"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1transactionrecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores a single transaction record for the household financial ledger, including participant, reason, and amount.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`Amount``integer`Currency amount of this transaction (positive for income, negative for expense).`BizId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the household business associated with this transaction, or Invalid if none.`CompanyId``string`Company ID associated with this transaction, if applicable.`FormatArgs``table<string, string>`Named format arguments for ledger description text (e.g. {OrderName}, {CraftingName}).`ParticipantId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the transaction participant (buyer, seller, or employer).`ParticipantName``string`Name of the participant retained for display even after the participant has died.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
| --- |
| `Amount``integer`Currency amount of this transaction (positive for income, negative for expense).`BizId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the household business associated with this transaction, or Invalid if none.`CompanyId``string`Company ID associated with this transaction, if applicable.`FormatArgs``table<string, string>`Named format arguments for ledger description text (e.g. {OrderName}, {CraftingName}).`ParticipantId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the transaction participant (buyer, seller, or employer).`ParticipantName``string`Name of the participant retained for display even after the participant has died.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
| `BizId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the household business associated with this transaction, or Invalid if none.`CompanyId``string`Company ID associated with this transaction, if applicable.`FormatArgs``table<string, string>`Named format arguments for ledger description text (e.g. {OrderName}, {CraftingName}).`ParticipantId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the transaction participant (buyer, seller, or employer).`ParticipantName``string`Name of the participant retained for display even after the participant has died.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
| `CompanyId``string`Company ID associated with this transaction, if applicable.`FormatArgs``table<string, string>`Named format arguments for ledger description text (e.g. {OrderName}, {CraftingName}).`ParticipantId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the transaction participant (buyer, seller, or employer).`ParticipantName``string`Name of the participant retained for display even after the participant has died.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
| `FormatArgs``table<string, string>`Named format arguments for ledger description text (e.g. {OrderName}, {CraftingName}).`ParticipantId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the transaction participant (buyer, seller, or employer).`ParticipantName``string`Name of the participant retained for display even after the participant has died.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
| `ParticipantId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the transaction participant (buyer, seller, or employer).`ParticipantName``string`Name of the participant retained for display even after the participant has died.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
| `ParticipantName``string`Name of the participant retained for display even after the participant has died.`TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
| `TransactionReason`[`EB1TransactionReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1transactionreason)Reason category for this transaction used in ledger classification. |
