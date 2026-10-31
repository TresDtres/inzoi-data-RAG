---
document_id: "7bde63393238ec26004350d2d4c5100aa24a014a4177e0badd995df7a0688b7c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1deceasedfullinfo"
title: "FB1DeceasedFullInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:39+00:00"
content_sha256: "d8f7d4eba4eb8e28442b96eb81a9d31b8ab8a1f7876e4c1afb6c84c695b955e0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1deceasedfullinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- B2 extended struct storing full information about a deceased character, including entity ID, death age, death tick, relationships, and appearance.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1DeceasedBaseInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1deceasedbaseinfo) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1DeceasedBaseInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1deceasedbaseinfo) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1DeceasedBaseInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1deceasedbaseinfo) |
| Category`structs`Extends[`FB1DeceasedBaseInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1deceasedbaseinfo) |
| Extends[`FB1DeceasedBaseInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1deceasedbaseinfo) |

# Properties (5)

| NameTypeDescription`AppearanceSetting`[`FB1AppearanceSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancesetting)Snapshot of the character's appearance at the time of death.`CharacterEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the deceased character.`DeathAge``integer`Age of the character at the time of death.`DeathTick``integer`Game tick at which the character died.`RelationshipMap``table<FB1EntityId, FB1RelationshipData>`Snapshot of the character's relationships at the time of death. |
| --- |
| `AppearanceSetting`[`FB1AppearanceSetting`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1appearancesetting)Snapshot of the character's appearance at the time of death.`CharacterEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the deceased character.`DeathAge``integer`Age of the character at the time of death.`DeathTick``integer`Game tick at which the character died.`RelationshipMap``table<FB1EntityId, FB1RelationshipData>`Snapshot of the character's relationships at the time of death. |
| `CharacterEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the deceased character.`DeathAge``integer`Age of the character at the time of death.`DeathTick``integer`Game tick at which the character died.`RelationshipMap``table<FB1EntityId, FB1RelationshipData>`Snapshot of the character's relationships at the time of death. |
| `DeathAge``integer`Age of the character at the time of death.`DeathTick``integer`Game tick at which the character died.`RelationshipMap``table<FB1EntityId, FB1RelationshipData>`Snapshot of the character's relationships at the time of death. |
| `DeathTick``integer`Game tick at which the character died.`RelationshipMap``table<FB1EntityId, FB1RelationshipData>`Snapshot of the character's relationships at the time of death. |
| `RelationshipMap``table<FB1EntityId, FB1RelationshipData>`Snapshot of the character's relationships at the time of death. |
