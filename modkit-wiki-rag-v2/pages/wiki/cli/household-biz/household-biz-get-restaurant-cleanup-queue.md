---
document_id: "149eb065ae8ee0cf1b4c92b1e21355deb1f782a57f46d6f60ca2376f54fad192"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household-biz/household-biz-get-restaurant-cleanup-queue"
title: "household_biz.get_restaurant_cleanup_queue"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:04+00:00"
content_sha256: "c2b27a2f0f4f5f7afad860f7e7e81fdb3ae7c8feeac44f92b541857b61e29086"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household-biz/household-biz-get-restaurant-cleanup-queue"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the persistent FIFO of Dirty restaurant tables and their exact in-flight cleanup foods (BL-58476).

# Metadata

| FieldValueDisplayGet Restaurant Cleanup QueueCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Restaurant Cleanup QueueCategory`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`household_biz`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionhousehold_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |
| --- |
| household_biz_identityIdno—Target HouseholdBiz entity id (default: possessed) |

# Usage

```
await inzoi.cli.execute('household_biz.get_restaurant_cleanup_queue', {  household_biz_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
