---
document_id: "37499aa8120c05551a13dbcd5d69f2650a87e90144902d97b33256814fa45f9f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-possess"
title: "household.possess"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "3a20cb7b5d076cb66c078a6113ccc60e117b28db06f32032cb281b7b14dcaa3f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/household/household-possess"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Switches play to the specified household via normal client flow. Handles camera, spawn, and UI transition.

# Metadata

| FieldValueDisplayPossess HouseholdCategory`household`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayPossess HouseholdCategory`household`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`household`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionhousehold_identityIdyes—Household entity ID to switch to |
| --- |
| household_identityIdyes—Household entity ID to switch to |

# Usage

```
await inzoi.cli.execute('household.possess', {  household_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsohousehold[household.add_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-add-member)[household.create](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-create)[household.get_members](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-get-members)[household.list](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-list)[household.remove_member](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/household/household-remove-member)
