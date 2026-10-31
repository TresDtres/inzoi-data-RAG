---
document_id: "b17f9156eb8a96c02883715d4534e20a446dc45d13fa313ea81ae0e62c4a8c69"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/character/character-possess"
title: "character.possess"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:53+00:00"
content_sha256: "2cf4e4386b6c6886f8bf03c35d93b89821c35dcf0e1f3651f93130eeaaaaff2d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/character/character-possess"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Switches play to the specified character. Same household -> avatar swap; different household -> household switch. Handles camera, spawn, and UI transition.

# Metadata

| FieldValueDisplayPossess CharacterCategory`character`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| --- |
| DisplayPossess CharacterCategory`character`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Category`character`Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Access`Public`Scope`B1Standalone`Tags—Aliases— |
| Scope`B1Standalone`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncharacter_identityIdyes—Character entity ID to possesshousehold_identityIdno—Household entity ID the character belongs to (optional, enables cross-household switch) |
| --- |
| character_identityIdyes—Character entity ID to possesshousehold_identityIdno—Household entity ID the character belongs to (optional, enables cross-household switch) |
| household_identityIdno—Household entity ID the character belongs to (optional, enables cross-household switch) |

# Usage

```
await inzoi.cli.execute('character.possess', {  character_id: 0,  household_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
