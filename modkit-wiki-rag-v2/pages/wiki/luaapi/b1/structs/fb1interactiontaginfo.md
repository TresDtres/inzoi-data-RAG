---
document_id: "cb34cfdc7288b405ece2c02e4e900612a6914dedc6d34bd499e1d945d3b73b71"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1interactiontaginfo"
title: "FB1InteractionTagInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:12+00:00"
content_sha256: "1c1495f58e64ed468a342e254459525463dc84afc360d2bb9c8734ecf3cb9bf1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1interactiontaginfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines display information for an interaction tag. Contains the tag name, UI text, icon, tag type, and associated tooltip entries.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`DescTextId``string`Text ID for the description of this interaction tag.`Icon``UTexture2D`Icon texture displayed for this interaction tag.`InteractionTagType`[`EB1InteractionTagType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactiontagtype)The interaction tag type bitmask (e.g., SocialEvent, HouseholdBiz).`ListKey``string`Key used to group this tag entry in lists.`NameTextId``string`Text ID for the display name of this interaction tag.`TagName``string`The interaction bag tag name. References InteractionBag Tag JSON files.`TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
| --- |
| `DescTextId``string`Text ID for the description of this interaction tag.`Icon``UTexture2D`Icon texture displayed for this interaction tag.`InteractionTagType`[`EB1InteractionTagType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactiontagtype)The interaction tag type bitmask (e.g., SocialEvent, HouseholdBiz).`ListKey``string`Key used to group this tag entry in lists.`NameTextId``string`Text ID for the display name of this interaction tag.`TagName``string`The interaction bag tag name. References InteractionBag Tag JSON files.`TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
| `Icon``UTexture2D`Icon texture displayed for this interaction tag.`InteractionTagType`[`EB1InteractionTagType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactiontagtype)The interaction tag type bitmask (e.g., SocialEvent, HouseholdBiz).`ListKey``string`Key used to group this tag entry in lists.`NameTextId``string`Text ID for the display name of this interaction tag.`TagName``string`The interaction bag tag name. References InteractionBag Tag JSON files.`TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
| `InteractionTagType`[`EB1InteractionTagType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1interactiontagtype)The interaction tag type bitmask (e.g., SocialEvent, HouseholdBiz).`ListKey``string`Key used to group this tag entry in lists.`NameTextId``string`Text ID for the display name of this interaction tag.`TagName``string`The interaction bag tag name. References InteractionBag Tag JSON files.`TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
| `ListKey``string`Key used to group this tag entry in lists.`NameTextId``string`Text ID for the display name of this interaction tag.`TagName``string`The interaction bag tag name. References InteractionBag Tag JSON files.`TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
| `NameTextId``string`Text ID for the display name of this interaction tag.`TagName``string`The interaction bag tag name. References InteractionBag Tag JSON files.`TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
| `TagName``string`The interaction bag tag name. References InteractionBag Tag JSON files.`TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
| `TooltipInfos``FB1InteractionTagTooltipInfo[]`List of tooltip info entries displayed when hovering over this tag. |
