---
document_id: "82906ba6456352440999f3ec4f9e7b4f271efa84954510c9684dbc90ef46b4d7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-set-language"
title: "gameplay.set_language"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:01+00:00"
content_sha256: "5ab428fb363456ea8974305b85b97dfd671058cb972d0462507e653cf1cc1ff7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/gameplay/gameplay-set-language"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change the game display language. Accepts Unreal culture names (ko-KR, en-US, zh-CN, zh-TW, ja-JP, ru-RU, es-ES, pt-BR, pt-PT, de-DE, fr-FR, it-IT, pl-PL), Steam names (koreana, schinese, ...), or short codes (ko, en, ja). Call gameplay.list_languages to see the exact set.

# Metadata

| FieldValueDisplaySet LanguageCategory`gameplay`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplaySet LanguageCategory`gameplay`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Category`gameplay`Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Access`ScriptCheat`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionvaluestringyes—Language identifier (row id, culture name, steam name, or 2-letter prefix) |
| --- |
| valuestringyes—Language identifier (row id, culture name, steam name, or 2-letter prefix) |

# Usage

```
await inzoi.cli.execute('gameplay.set_language', {  value: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsogameplay[gameplay.get_settings](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-get-settings)[gameplay.list_languages](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-list-languages)[gameplay.set_autosave](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/gameplay/gameplay-set-autosave)
