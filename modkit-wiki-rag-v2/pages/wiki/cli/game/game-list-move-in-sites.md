---
document_id: "8763ddc0953e4791b40806af519453433a469c36f4a364a271b1a122552a1fb1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-list-move-in-sites"
title: "game.list_move_in_sites"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:00+00:00"
content_sha256: "c48a281c5489ccf9931f5e52ef3d0bf656398785ef4369192bc1dbb14645dd20"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-list-move-in-sites"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Lists unowned residence sites the current household could move into, cheapest affordable first. Reads the world map UI data when the map is open, otherwise falls back to UB1SiteManager (in which case prices come from the site table defaults and enough_money is reported optimistically as true). Returns an empty array before the initial site selection is ready - poll game.get_state until map_mode == 'select_init_house'.

# Metadata

| FieldValueDisplayList Move-In SitesCategory`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayList Move-In SitesCategory`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiononly_affordableboolnofalseOnly list sites the household can pay for without a mortgage.limitintno50Maximum number of entries to return [1-500]. |
| --- |
| only_affordableboolnofalseOnly list sites the household can pay for without a mortgage.limitintno50Maximum number of entries to return [1-500]. |
| limitintno50Maximum number of entries to return [1-500]. |

# Usage

```
await inzoi.cli.execute('game.list_move_in_sites', {  only_affordable: false, // optional  limit: 50, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
