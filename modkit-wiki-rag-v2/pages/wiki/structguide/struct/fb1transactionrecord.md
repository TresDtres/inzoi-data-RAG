---
document_id: "53e97a462e1fc1c8f99bd368fbdcbd3b6c8d455077f1ddb2148d1b67a053cdfc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1transactionrecord"
title: "B1TransactionRecord"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:14+00:00"
content_sha256: "eb60e8c1d0c19bc866a1cd2146956d1ed72dc136884908d62680dfe6ea3338e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1transactionrecord"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Stores a single transaction record for the household financial ledger, including participant, reason, and amount.

| PropertyTypeDescriptionMetadataParticipantIdFB1EntityIdEntity ID of the transaction participant (buyer, seller, or employer).ParticipantNameFStringName of the participant retained for display even after the participant has died.CompanyIdFNameCompany ID associated with this transaction, if applicable.Foreign: Comapny.IdTransactionReasonEB1TransactionReasonReason category for this transaction used in ledger classification.Amountint64Currency amount of this transaction (positive for income, negative for expense).BizIdFB1EntityIdEntity ID of the household business associated with this transaction, or Invalid if none.FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |
| --- |
| ParticipantIdFB1EntityIdEntity ID of the transaction participant (buyer, seller, or employer).ParticipantNameFStringName of the participant retained for display even after the participant has died.CompanyIdFNameCompany ID associated with this transaction, if applicable.Foreign: Comapny.IdTransactionReasonEB1TransactionReasonReason category for this transaction used in ledger classification.Amountint64Currency amount of this transaction (positive for income, negative for expense).BizIdFB1EntityIdEntity ID of the household business associated with this transaction, or Invalid if none.FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |
| ParticipantNameFStringName of the participant retained for display even after the participant has died.CompanyIdFNameCompany ID associated with this transaction, if applicable.Foreign: Comapny.IdTransactionReasonEB1TransactionReasonReason category for this transaction used in ledger classification.Amountint64Currency amount of this transaction (positive for income, negative for expense).BizIdFB1EntityIdEntity ID of the household business associated with this transaction, or Invalid if none.FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |
| CompanyIdFNameCompany ID associated with this transaction, if applicable.Foreign: Comapny.IdTransactionReasonEB1TransactionReasonReason category for this transaction used in ledger classification.Amountint64Currency amount of this transaction (positive for income, negative for expense).BizIdFB1EntityIdEntity ID of the household business associated with this transaction, or Invalid if none.FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |
| TransactionReasonEB1TransactionReasonReason category for this transaction used in ledger classification.Amountint64Currency amount of this transaction (positive for income, negative for expense).BizIdFB1EntityIdEntity ID of the household business associated with this transaction, or Invalid if none.FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |
| Amountint64Currency amount of this transaction (positive for income, negative for expense).BizIdFB1EntityIdEntity ID of the household business associated with this transaction, or Invalid if none.FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |
| BizIdFB1EntityIdEntity ID of the household business associated with this transaction, or Invalid if none.FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |
| FormatArgsTMapNamed format arguments for ledger description text (e.g. {OrderName}, {CraftingName}). |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTransaction[FB1TransactionRecordArray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1transactionrecordarray)[FB1TransactionSystemData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1transactionsystemdata)[FB1TransactionTypeTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1transactiontypetablerow)
