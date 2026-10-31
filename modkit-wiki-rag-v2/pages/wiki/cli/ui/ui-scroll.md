---
document_id: "a14ff8792eec51f1861da8e6de082a092d517ebd6c2760c4249a59a04060a23b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ui/ui-scroll"
title: "ui.scroll"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:21+00:00"
content_sha256: "2302b1202c3bc48172f41cc680db899b6ee341365eaa2db2a5074f4a1e29905e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ui/ui-scroll"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Scrolls a scroll box or list view identified by a ref from ui.get_tree. By default it calls the scroll API directly, which lands on the target in one step and makes the result easy to verify; the response carries the resulting offset/max/pos/at_end so you do not have to re-query. Pass wheel=true with --delta to synthesize a real mouse wheel instead, which is what you want when the thing under test is wheel handling itself (nested scroll boxes, scroll propagation) - that path is animated, so the reported offset may still be settling. to=index only works on list views and is the reliable way to bring a virtualized item on screen: items outside the displayed range have no widget at all, so you must scroll them into view before ui.get_tree can see them or ui.click can touch them. For a scroll box the offset is in slate units; for a list view it is in items. Fails when there is no world or the ref is not scrollable.

# Metadata

| FieldValueDisplayScroll UI WidgetCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayScroll UI WidgetCategory`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`ui`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionrefstringno—Scroll box or list view ref from ui.get_tree.tostringnooffsetScroll destination. offset uses --offset or --delta; index uses --index (list views only).offsetfloatno—Absolute target offset for to=offset.deltafloatno—Relative offset change for to=offset; with wheel=true this is the wheel tick count (positive scrolls up).indexintno—Item index to bring into view for to=index.wheelboolnofalseSynthesize a mouse wheel event instead of calling the scroll API. |
| --- |
| refstringno—Scroll box or list view ref from ui.get_tree.tostringnooffsetScroll destination. offset uses --offset or --delta; index uses --index (list views only).offsetfloatno—Absolute target offset for to=offset.deltafloatno—Relative offset change for to=offset; with wheel=true this is the wheel tick count (positive scrolls up).indexintno—Item index to bring into view for to=index.wheelboolnofalseSynthesize a mouse wheel event instead of calling the scroll API. |
| tostringnooffsetScroll destination. offset uses --offset or --delta; index uses --index (list views only).offsetfloatno—Absolute target offset for to=offset.deltafloatno—Relative offset change for to=offset; with wheel=true this is the wheel tick count (positive scrolls up).indexintno—Item index to bring into view for to=index.wheelboolnofalseSynthesize a mouse wheel event instead of calling the scroll API. |
| offsetfloatno—Absolute target offset for to=offset.deltafloatno—Relative offset change for to=offset; with wheel=true this is the wheel tick count (positive scrolls up).indexintno—Item index to bring into view for to=index.wheelboolnofalseSynthesize a mouse wheel event instead of calling the scroll API. |
| deltafloatno—Relative offset change for to=offset; with wheel=true this is the wheel tick count (positive scrolls up).indexintno—Item index to bring into view for to=index.wheelboolnofalseSynthesize a mouse wheel event instead of calling the scroll API. |
| indexintno—Item index to bring into view for to=index.wheelboolnofalseSynthesize a mouse wheel event instead of calling the scroll API. |
| wheelboolnofalseSynthesize a mouse wheel event instead of calling the scroll API. |

# Usage

```
await inzoi.cli.execute('ui.scroll', {  ref: '', // optional  to: 'offset', // optional  offset: 0.0, // optional  delta: 0.0, // optional  index: 0, // optional  wheel: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
