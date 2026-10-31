---
document_id: "5bfe95fe01353b84ac2e0b328a01d6baa927834602a33ec79d8cee80552e30f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-click-popup-button"
title: "ui.click_popup_button"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:19+00:00"
content_sha256: "8614ee0fce947bcc3b0f41d1f6771734c690c9e384a2a222dcf63c01b809d25d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-click-popup-button"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Clicks a button on an opened popup through the normal path (closes the popup, runs the bound script and delegate). 'index' is a BUTTON index within one popup - it is NOT the 'index' field of ui.get_blocking's popups[] array. The only popup selector is popup_id; without it the first enumerated open popup is used (enumeration order is UObject creation order, not z-order). Prefer list_key over index: the button order in Popup.json can change. A single positional argument binds to popup_id, so 'ui.click_popup_button NoticeBirth' selects that popup. A non-numeric index is rejected instead of being coerced to 0. Use ui.get_blocking to discover popup ids and button list_keys.

# Metadata

| FieldValueDisplayClick Popup ButtonCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayClick Popup ButtonCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionpopup_idnameno—Id of the popup to act on. Omit to use the first enumerated open popup.list_keystringno—ButtonDetail.ListKey of the button to click (e.g. 'btn0'). Takes precedence over index.indexintno0Button index within the popup to click when list_key is not given. Must be a non-negative integer |
| --- |
| popup_idnameno—Id of the popup to act on. Omit to use the first enumerated open popup.list_keystringno—ButtonDetail.ListKey of the button to click (e.g. 'btn0'). Takes precedence over index.indexintno0Button index within the popup to click when list_key is not given. Must be a non-negative integer |
| list_keystringno—ButtonDetail.ListKey of the button to click (e.g. 'btn0'). Takes precedence over index.indexintno0Button index within the popup to click when list_key is not given. Must be a non-negative integer |
| indexintno0Button index within the popup to click when list_key is not given. Must be a non-negative integer |

# Usage

```
await inzoi.cli.execute('ui.click_popup_button', {  popup_id: '', // optional  list_key: '', // optional  index: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
