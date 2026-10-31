---
document_id: "d91e94d3a69e1c893ac51be157bd8087232f391f9baacd10758930ceedca062f"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/utility/fixup"
title: "Fix Up"
section: "modkit/utility"
breadcrumb: ["ModKit Documentation", "ModKit", "Utility"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:41+00:00"
content_sha256: "2cf1ed09968ba56901252e6c9f7910938a74db1dc99539c991128dfb18c199b7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/utility/fixup"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

If an existing mod is not compatible with the latest version, you can easily upgrade it through the following process.

---

## Fix up Mod Project

**How to Upgrade**

1. **Right-click on the mod project root**.
2. From the menu, select **`Utility > Fix up Mod Project`**.
3. The necessary assets will be automatically copied to the current mod project path, resolving any compatibility issues. MaterialParameterCollections are excluded from this copy — see [MPC](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/utility/fixup#mpc-materialparametercollection) below.
4. Afterwards, you can **package the updated mod** for distribution.

---

**Reference Video**

You can see the actual process in the video below:

Your browser does not support the video tag.

---

Summary

1. The `Fix up Mod Project` feature **automatically resolves compatibility issues** with existing mods.
2. You can **upgrade safely** with just a few clicks, without any separate manual work.
3. After the upgrade, package and distribute it as a new version.

---

## MPC (MaterialParameterCollection)

MPC is a special asset that contains values affecting the entire game environment, such as time and weather. For example, `BG_NightWindow_MaterialParameterCollection` is an MPC that controls the material properties of a window at night.

Never copy a game MPC into your mod

A mod must **reference the game's collection directly**. A copy carries the same identity as the original, so at runtime the game ends up with two collections claiming to be the same one, which can crash the game.

**What this means for you**

- Leave your material's MPC reference pointing at `/Game/...`. That is the supported setup, and nothing needs fixing.
- When a workspace copies the source assets into your mod, MPCs are **intentionally excluded** from that copy, so your materials keep referencing the game's collection.
- `Utility > Fix up Mod Project` does **not** migrate MPCs either.
- If your mod contains a collection with the **same name or the same GUID** as a game collection, **packaging is blocked** and the offending assets are shown in the Content Browser. Delete them from your mod and package again.

**Mods made with an older ModKit**

Mods created before this rule may already contain copies. Nothing needs to be done by hand: when you **open such a mod project** (or start packaging it), the ModKit reports what it found and, once you confirm, does the conversion for you.

1. Material and Material Function references are pointed back at the game's collections.
2. Materials and Material Instances that cache which collections they use are refreshed and saved.
3. The copies are then deleted, **but only once nothing references them any more**.

A report tells you what was deleted and what was kept. Anything listed as **Kept** could not be converted automatically - it is still referenced by an asset type the conversion does not handle, or the game has several collections with that name so the original cannot be identified. Rename or remove those by hand; packaging stays blocked until they are gone.

note

If the game later updates a collection, you may need to repackage the mod.

---

## Migrate to Mod Plugin

This feature replaces an asset **inside your mod plugin** with a copy of another asset you pick as the source. It is available from the right-click menu on Material, Material Instance, Material Function, and MPC assets that already live in a mod plugin.

Use it when an asset in your mod should be based on a different source asset: the source is duplicated into your mod under the name `<OriginalName>_Migrated`, and references to the old asset are pointed at that copy.

MPC is a special case

The copy is created under a **new name and a new GUID**, so it counts as a collection of your own rather than a copy of the game's - see [MPC](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/utility/fixup#mpc-materialparametercollection) above. Do not rename such a copy back to the game's collection name; packaging would then be blocked.

**How to Resolve**

1. In the Content Browser, select the asset in your mod plugin that you want to replace.
2. Right-click on the asset and select **[Migrate to Mod Plugin]** from the menu.
3. Pick the source asset, check the contents of the list that appears, and click **[Save Selected]** to complete the save.
4. In the **[Redirector Update Report]** window, click the **[Delete Unreferenced Redirectors]** button to clean up unnecessary files.
5. Check that **_Migrated** has been added to the end of the asset name, then right-click and run the **Reference Viewer** (shortcut: **[Shift+Alt+R]**) to confirm that the reference from your mod is correctly linked.
