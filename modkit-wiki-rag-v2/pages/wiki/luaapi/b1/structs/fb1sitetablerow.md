---
document_id: "a8a6d8710485fa59032ef8dd59ae243e5e50556ce81f047ea93fa7b787f20e44"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitetablerow"
title: "FB1SiteTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:28+00:00"
content_sha256: "8ed2b880e1acefef85e74c7e6032bad9e59ae7d61f12ccf545a2e45656ee3108"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1sitetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a site data table row. Contains default site configuration, action triggers, tax immunity flag, buff tag, and biz modifier.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (9)

| NameTypeDescription`AutonomyRule`[`EB1SiteAutonomyRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1siteautonomyrule.md)Autonomy collection rule for this site. Auto resolves based on SiteType at runtime.`BizModifierId``string`Biz modifier ID applied when a business is set up at this site.`CustomSchedulePresetId``string`CustomSchedulePreset ID to apply for site-driven NPC behavior (e.g. VIP Lounge).`DefaultInfo`[`FB1SiteDefaultInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitedefaultinfo)Default configuration data for this site.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category worn at this site. Crowds spawn already wearing it, and characters change into it on arrival. None means this site drives no outfit change. (BL-60067)`SiteActionTriggers``FB1SiteActionTrigger[]`List of timed condition-based action triggers associated with this site.`SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| --- |
| `AutonomyRule`[`EB1SiteAutonomyRule`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1siteautonomyrule.md)Autonomy collection rule for this site. Auto resolves based on SiteType at runtime.`BizModifierId``string`Biz modifier ID applied when a business is set up at this site.`CustomSchedulePresetId``string`CustomSchedulePreset ID to apply for site-driven NPC behavior (e.g. VIP Lounge).`DefaultInfo`[`FB1SiteDefaultInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitedefaultinfo)Default configuration data for this site.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category worn at this site. Crowds spawn already wearing it, and characters change into it on arrival. None means this site drives no outfit change. (BL-60067)`SiteActionTriggers``FB1SiteActionTrigger[]`List of timed condition-based action triggers associated with this site.`SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `BizModifierId``string`Biz modifier ID applied when a business is set up at this site.`CustomSchedulePresetId``string`CustomSchedulePreset ID to apply for site-driven NPC behavior (e.g. VIP Lounge).`DefaultInfo`[`FB1SiteDefaultInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitedefaultinfo)Default configuration data for this site.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category worn at this site. Crowds spawn already wearing it, and characters change into it on arrival. None means this site drives no outfit change. (BL-60067)`SiteActionTriggers``FB1SiteActionTrigger[]`List of timed condition-based action triggers associated with this site.`SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `CustomSchedulePresetId``string`CustomSchedulePreset ID to apply for site-driven NPC behavior (e.g. VIP Lounge).`DefaultInfo`[`FB1SiteDefaultInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitedefaultinfo)Default configuration data for this site.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category worn at this site. Crowds spawn already wearing it, and characters change into it on arrival. None means this site drives no outfit change. (BL-60067)`SiteActionTriggers``FB1SiteActionTrigger[]`List of timed condition-based action triggers associated with this site.`SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `DefaultInfo`[`FB1SiteDefaultInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1sitedefaultinfo)Default configuration data for this site.`OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category worn at this site. Crowds spawn already wearing it, and characters change into it on arrival. None means this site drives no outfit change. (BL-60067)`SiteActionTriggers``FB1SiteActionTrigger[]`List of timed condition-based action triggers associated with this site.`SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `OutfitCategory`[`EB1OutfitCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1outfitcategory)Outfit category worn at this site. Crowds spawn already wearing it, and characters change into it on arrival. None means this site drives no outfit change. (BL-60067)`SiteActionTriggers``FB1SiteActionTrigger[]`List of timed condition-based action triggers associated with this site.`SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `SiteActionTriggers``FB1SiteActionTrigger[]`List of timed condition-based action triggers associated with this site.`SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `SiteHint``string`Hint name used to display contextual UI hints for this site.`bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `bIsImmunePropertyTax``boolean`Whether this site is exempt from property tax.`bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
| `bUseBizRoleObjectTag``boolean`Whether business role restriction object tags (staff forbidden / customer only) apply at this site. |
