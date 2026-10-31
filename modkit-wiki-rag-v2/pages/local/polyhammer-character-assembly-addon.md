---
source: local
url: https://docs.polyhammer.com/character-assembly-addon/
title: "Addon Polyhammer Character Assembly: MetaHuman completo en Blender (grooms, ropa, materiales, fisica de pelo) + Poly Hammer Interchange"
generado: 2026-10-13
---

# Addon Polyhammer Character Assembly + Interchange (documentacion completa)

> Extraccion completa del sitio oficial docs.polyhammer.com (3 paginas del
> addon + plugin UE Interchange + instalacion via portal), 2026-10-13. Contenido
> en ingles VERBATIM.

**Que es:** trae un MetaHuman COMPLETO a Blender (materiales, outfit, grooms
simulables) a partir de un export del plugin UE "Poly Hammer Interchange"
(crea `CharacterAssemblyManifest.json`). Requiere Blender 5.2+ y Character DNA;
Interchange requiere Unreal Engine 5.8+.

**Contraste clave con inZOI:** el ModKit de inZOI es UE 5.6.1, asi que el
plugin Interchange NO puede instalarse dentro del ModKit tal cual [INFERRED,
requisito documentado UE 5.8+ vs ModKit 5.6.1]. El flujo export-UE→import-
Blender funciona con un proyecto UE 5.8 aparte (p. ej. para un MetaHuman
propio), no contra el editor del ModKit. La simulacion de pelo (XPBD,
Geometry Nodes, bake por personaje) es relevable como tecnica para pelo de
Zoi, pero en inZOI la fisica del pelo la resuelve el juego via PhysicsAsset
(ver pages/local/animar-cabello-largo.md).

**Verificado en el equipo del tester (2026-10-13, via Blender MCP):** Blender
5.2.1 LTS con `bl_ext.api_portal_polyhammer_com.character_assembly` instalado
y ACTIVO.


---

<!-- fuente: https://docs.polyhammer.com/character-assembly-addon/ -->

# (Getting Started)

# Getting Started

Bring a complete MetaHuman into Blender with its materials, outfit, and simulation-ready hair.
Export the character from Unreal Engine, then let Character Assembly put the pieces together.

(video/demo en la URL original)

## Requirements

| Requirement | Details |
| --- | --- |
| **Blender** | 5.2. This release requires at least Blender 5.2 and does not support earlier Blender versions. |
| **Character DNA addon** | Installed and enabled. The [free edition](https://polyhammer.com/character-dna-addon) is sufficient. |
| **Poly Hammer Interchange** | Install the [free Unreal Engine plugin](https://fab.com/s/820c139d9bc5) to export your MetaHuman. The export workflow requires Unreal Engine 5.8 or later. |

## Install the Addon

Create an account on the [Poly Hammer Portal](https://dashboard.portal.polyhammer.com/signup),
then follow the [Blender extensions server instructions](https://docs.polyhammer.com/poly-hammer-portal/blender-extension-repo)
to install Character Assembly.

## Import Your Character

1. Export your MetaHuman Blueprint using **Poly Hammer Interchange** in Unreal Engine.
2. Keep the exported folder together, including its DNA, grooms, clothing, and textures.
3. Drag **CharacterAssemblyManifest.json** into Blender's 3D Viewport. The import dialog opens.
4. Review the options and confirm the import. You can also use **File > Import > MetaHuman Assembly Manifest (.json)**.
5. Press `N` in the 3D Viewport and open the **Character Assembly** tab. Select your character in **Rig Instances**.

Character DNA imports the head and body. Assembly attaches the grooms and outfit and builds the
skin, eye, teeth, hair, and fabric materials, including facial wrinkle maps driven by OpenRigLogic.
You do not need to write the manifest or import each asset separately.

## Import Options

The defaults provide a starting point for rendering. Adjust these options in the import dialog:

| Option | What it does |
| --- | --- |
| **Hair / Clothing / Materials** | Choose which parts of the assembly to include. |
| **Lighting** | Add the bundled environment lighting. |
| **Camera** | Add a portrait camera and focus object. Available only when the scene has no camera. |
| **Collision Source** | Choose **Body, Head and Outfit** (default), **Body and Head**, or **Head Only** for generated hair collision. |
| **Skin Culling** | Hide skin beneath clothing using editable masks. **Auto Bake + Min** is the default; **Auto Baked** uses clothing coverage alone; **None** keeps skin unmasked. |
| **Apply Scene Settings** | Apply the selected render template to the scene. Currently, the importer offers Cycles. |
| **Apply Render Preferences** | Configure Blender's global Cycles GPU device preferences. Off by default. |

Camera and lighting options are independent of the render settings. After import, adjust the camera
and materials using Blender's usual tools.

Existing Character DNA rigs

Update Character DNA, open your saved file, and run its legacy migration operator if it appears
in the 3D Viewport sidebar. Save the migrated file before continuing.

## Next Steps

- Choose an environment and adjust its appearance — [Lighting](lighting/).
- Simulate hair, bake it, and set custom collision — [Physics](physics/).

---

<!-- fuente: https://docs.polyhammer.com/character-assembly-addon/ -->

# (Lighting)

# Lighting

Use bundled HDRI environments to light your character and check its materials. Lighting is shared
by the whole scene, so changing it affects every character.

(video/demo en la URL original)

## Choose an Environment

1. Open **Character Assembly > Lighting** in the 3D Viewport sidebar.
2. Enable the checkbox in the panel header.
3. Click the environment preview and choose an HDRI. The lighting updates immediately.

## Adjust the Lighting

| Control | What it does |
| --- | --- |
| **Rotation** | Turn the environment around the character. The rotation is kept when switching environments. |
| **Strength** | Brighten or dim the environment lighting. |
| **Show HDRI Background** | Show the environment behind the character instead of the flat background. |

Hiding the HDRI background still lets it light the character and appear in reflections. The
background choice also applies to final renders.

---

<!-- fuente: https://docs.polyhammer.com/character-assembly-addon/ -->

# (Physics (simulacion de pelo))

# Physics

Character Assembly prepares supported grooms for hair simulation using Geometry Nodes and Blender's
XPBD solver. Physics controls apply to the character selected in **Rig Instances**.

(video/demo en la URL original)

## Enable Hair Simulation

1. Open the **Character Assembly** tab and select your character in **Rig Instances**.
2. Enable the checkbox in the **Physics** panel header.
3. Play from the scene's start frame to preview the simulation.

Until you bake, hair simulation is calculated as the animation plays. Jumping directly to a later
frame does not calculate the frames before it.

If the panel says **No groom on this character can be simulated**, the imported character has no
simulation guides available. Check that the export includes a groom with simulation data and that
**Hair** was enabled during import.

## Bake the Simulation

1. Save your `.blend` file.
2. Set the scene's start and end frames to the animation range.
3. Set **Warm-up Frames** if the hair needs time to settle before the first frame.
4. Click **Bake Simulation** and wait for it to finish.

The bake stores this character's hair simulation on disk beside the saved file. You can then scrub
the timeline freely and render the animation. Keep the bake files with the `.blend` when moving
the project.

After changing animation, physics settings, or collision, click the trash button beside
**Bake Simulation** (**Delete Bake**), then bake again.

## Custom Collision

Assembly assigns an automatic collision mesh. In the import dialog, **Collision Source** selects **Body, Head and Outfit** (default), **Body and Head**, or **Head Only**. Reapplying the manifest and rebuilding collision detail retain that character's choice.

To use your own:

1. Prepare a mesh covering the surfaces the hair should collide with. Keep it simple to reduce
   simulation cost, and make sure it follows the character where needed.
2. Select the character and expand **Physics > Collision**.
3. Choose your mesh in the object picker.
4. Adjust **Margin**, preview the motion, and re-bake.

The selected mesh replaces the collider assignment for this character's simulated grooms. Clearing
the picker removes that assignment; it does not restore the automatic collider.

## Settings

| Control | What it does |
| --- | --- |
| **Stiffness** | Higher values hold the hair closer to its authored shape; lower values allow more movement. |
| **Gravity Preloading** | Higher values treat the authored shape as already settled under gravity. Lower values let it sag further. |
| **Warm-up Frames** | Simulate extra frames before the animation starts so the hair can settle. |
| **Margin** | Set the clearance between the hair and collision mesh. |
| **Edge Contacts** | Catch strands crossing a collision face between simulation steps. More accurate, but slower. |

## Groom Groups and Existing Scenes

New schema V2 exports keep each Unreal hair group's simulation settings and component overrides.
Groups enabled for simulation have independent guide objects, particle counts and caches. Static
strands still follow the attachment surface. Simulation remains off until you enable it in Blender.
The Blender solver has different material and iteration controls from Unreal; source values are
retained, but settings without a measured equivalent are not copied into unrelated Blender controls.

Surface bindings use a dedicated `CA_SurfaceBinding` map, so overlapping texture islands, UV seams
and missing texture UVs do not leave strands behind. The character's texture UVs are preserved.
Every render strand and guide binding is checked against Blender's UV sampler during attachment.

Re-export and re-import existing beta characters to use the corrected group settings and bindings.
Released V1 packages remain importable with their existing flat physics settings. Particle counts
above the validated 16-point limit are clamped with a warning on import.

---

<!-- fuente: https://docs.polyhammer.com/poly-hammer-interchange/getting-started/ -->

# (Poly Hammer Interchange — Getting Started, plugin UE)

# Getting Started

Export your MetaHuman from Unreal Engine and assemble it in Blender with Poly Hammer Interchange.

**[Get Poly Hammer Interchange free on Fab](https://fab.com/s/820c139d9bc5).**

Install and enable the plugin in your Unreal Engine project.

(video/demo en la URL original)

## 1. Export from Unreal Engine

Use Poly Hammer Interchange to export your MetaHuman Blueprint. It collects the DNA,
grooms, clothing, props, and textures into one folder and creates
`CharacterAssemblyManifest.json`. Keep the exported folder together.

## 2. Drop into Blender

Drag `CharacterAssemblyManifest.json` into Blender's 3D Viewport, review the import
options, and confirm. Character Assembly builds the character for you.

See [Character Assembly setup](../character-assembly-addon/index.md) for installation
and import options.

> Nota:
    **Requirements:** Unreal Engine 5.8+; Blender 5.2+ with
    [Character Assembly](../character-assembly-addon/index.md) and
    [Character DNA](../character-dna-addon/index.md) installed and enabled.
    The free edition of Character DNA is sufficient.

---

<!-- fuente: https://docs.polyhammer.com/poly-hammer-portal/blender-extension-repo/ -->

# (Poly Hammer Portal — Blender Extension Repo, instalacion)

# Blender Extension Repository

<div style="text-align: center;">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/WvJCRUxT5c0?si=xNvKp8uWGr9XyGV9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The [Poly Hammer Portal](https://dashboard.portal.polyhammer.com) hosts a Blender extension repository so you can install and stay up to date with your purchased add-ons directly from Blender.
> Note:
    This is how you will install our addons. You will need to create an account, or activate your account based on an email you would have received when you made your purchase.

## Get an API Key

1. Sign in to the [Poly Hammer Portal](https://portal.polyhammer.com) and open the product you own from the **Products** page.
2. Click **Install Now** to go to the **Keys** page.
    <div style="text-align: center;">
        (imagen en la URL original)
    </div>
3. Create a new API key and copy it.
    <div style="text-align: center;">
        (imagen en la URL original)
    </div>

## Add the Repository in Blender

1. In Blender, open `Edit > Preferences > Extensions`.
2. Add a new **Remote Repository**.
3. Paste your API key into the **Access Token** field.
4. Paste the repository URL shown on the portal's **Keys** page into the **URL** field.
5. (Optional) Enable **Check for updates on startup**.
6. Click **Create**.

<div style="text-align: center;">
    (imagen en la URL original)
</div>

## Install an Add-on

1. In the **Extensions** preferences, select your new remote repository and click **Refresh**.
2. Search for the add-on (for example, `Character Control Rig`) and click **Install**.

<div style="text-align: center;">
    (imagen en la URL original)
</div>

## Update an Add-on

When a new release is available, refresh the repository (or let Blender check on startup) and click **Update** next to the add-on to get the latest version.
