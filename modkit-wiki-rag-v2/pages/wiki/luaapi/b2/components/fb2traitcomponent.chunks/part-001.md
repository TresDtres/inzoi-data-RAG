---
document_id: "fcb494d2925a1e44595dbffdb2c5aae8e8f0e8a08767620aa9e00bbad7c3c138"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2traitcomponent"
title: "FB2TraitComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:16+00:00"
content_sha256: "9c988f7896c449e0ec00af969f2987c18c3520258ad1db5599f6cae7cc334bdc"
chunk: 1
chunk_count: 9
page_type: "article"
route: "wiki/luaapi/b2/components/fb2traitcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages traits (personality traits).

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TraitComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TraitComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TraitComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TraitComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TraitComponent')` |
| Require`require('Components.B2TraitComponent')` |

# Properties (9)

| NameTypeDescription`AccumulatedTriggerCountMap``table<string, integer>`Per-trait AccumulatedTrigger counter (saved/loaded). Key: TraitId.`AccumulatedTriggerTimeMap``table<string, integer>`Per-trait last AccumulatedTrigger time (saved/loaded). Key: TraitId.`Aptitudes``string[]``CachedPersonalityId``string``Characteristics``string[]``CrowdGroupId``string`Id of the group the character belongs to while existing as a crowd member. Reset when changed to a SiteRoleNpc/CompanyRoleNpc group, and re-set when returning to the Crowd group.`TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| --- |
| `AccumulatedTriggerCountMap``table<string, integer>`Per-trait AccumulatedTrigger counter (saved/loaded). Key: TraitId.`AccumulatedTriggerTimeMap``table<string, integer>`Per-trait last AccumulatedTrigger time (saved/loaded). Key: TraitId.`Aptitudes``string[]``CachedPersonalityId``string``Characteristics``string[]``CrowdGroupId``string`Id of the group the character belongs to while existing as a crowd member. Reset when changed to a SiteRoleNpc/CompanyRoleNpc group, and re-set when returning to the Crowd group.`TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `AccumulatedTriggerTimeMap``table<string, integer>`Per-trait last AccumulatedTrigger time (saved/loaded). Key: TraitId.`Aptitudes``string[]``CachedPersonalityId``string``Characteristics``string[]``CrowdGroupId``string`Id of the group the character belongs to while existing as a crowd member. Reset when changed to a SiteRoleNpc/CompanyRoleNpc group, and re-set when returning to the Crowd group.`TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `Aptitudes``string[]``CachedPersonalityId``string``Characteristics``string[]``CrowdGroupId``string`Id of the group the character belongs to while existing as a crowd member. Reset when changed to a SiteRoleNpc/CompanyRoleNpc group, and re-set when returning to the Crowd group.`TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `CachedPersonalityId``string``Characteristics``string[]``CrowdGroupId``string`Id of the group the character belongs to while existing as a crowd member. Reset when changed to a SiteRoleNpc/CompanyRoleNpc group, and re-set when returning to the Crowd group.`TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `Characteristics``string[]``CrowdGroupId``string`Id of the group the character belongs to while existing as a crowd member. Reset when changed to a SiteRoleNpc/CompanyRoleNpc group, and re-set when returning to the Crowd group.`TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `CrowdGroupId``string`Id of the group the character belongs to while existing as a crowd member. Reset when changed to a SiteRoleNpc/CompanyRoleNpc group, and re-set when returning to the Crowd group.`TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `TraitForHopeId``string``TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `TraitIdList``string[]``UnreadAptitudeIds``string[]` |
| `UnreadAptitudeIds``string[]` |

# Functions (32)
