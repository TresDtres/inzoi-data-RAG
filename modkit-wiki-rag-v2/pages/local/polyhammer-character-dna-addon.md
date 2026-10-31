---
source: local
url: https://docs.polyhammer.com/character-dna-addon/
title: "Addon Polyhammer Character DNA: documentacion completa (MetaHuman .dna en Blender, OpenRigLogic, face board, animacion, output)"
generado: 2026-10-13
---

# Addon Polyhammer Character DNA (documentación completa)

> Extraccion completa de la documentacion oficial (docs.polyhammer.com + repo
> github.com/poly-hammer/character-dna-addon), 2026-10-13. El contenido en
> ingles es VERBATIM de la fuente; no re-traducir al re-ingestar.

**Que es:** addon de Blender (4.5-5.2) que importa MetaHuman `.dna` en Blender
y evalua el rig facial en tiempo real con OpenRigLogic (runtime open-source de
Epic), con resultado 1:1 con Unreal Engine. Ediciones Free y Pro.

**Por que importa para inZOI:** los Zoi de inZOI son personajes basados en
MetaHuman; el propio ModKit integra MetaHuman Editor (CAZ Head/Body, flujo
"Meta56" en la wiki oficial) y el pipeline CAZ head legacy usa
MetaHuman-DNA-Calibration de Epic. Este addon es la via Blender del mismo
ecosistema .dna (la via Maya es la documentada por inZOI).

**Verificado en el equipo del tester (2026-10-13, via Blender MCP):** Blender
5.2.1 LTS con `bl_ext.api_portal_polyhammer_com.character_dna_pro` instalado
y ACTIVO (edicion Pro).


---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/index/ -->

# (Getting Started)

# Character DNA Addon

Bring MetaHuman characters into Blender and evaluate their face rigs in real time, exactly like Unreal Engine. The addon reads Epic Games' `.dna` files and drives them using the [OpenRigLogic](https://github.com/EpicGames/OpenRigLogic) runtime.

(video/demo en la URL original)

The addon comes in two editions:

- **Free** — Import, animate, bake data, and export your scene data to your MetaHuman's DNA.
- **Pro** — Everything in Free, plus advanced editors for users who need full control over the data structures that define DNA behavior.

Because of this, the documentation has been organized by Free or Pro features.

## Install the Addon

Create an account on the [Poly Hammer Portal](https://dashboard.portal.polyhammer.com/signup), then link the extensions server by following these [instructions](https://docs.polyhammer.com/poly-hammer-portal/blender-extension-repo).

Once installed, a `Character DNA` tab appears on the right side of the 3D Viewport (toggle with the `N` key). Most panels start hidden and become visible once a [Rig Instance](./terminology.md#rig-instance) exists in the scene.

## Import Your DNA

The fastest way to start is to drag and drop a `head.dna` file into the Blender viewport. You can also do this via `File > Import > MetaHuman DNA (.dna)` from Blender's header menu.

(video/demo en la URL original)

If a `Maps` folder sits alongside the `.dna` file, the importer automatically links matching textures.

> Nota:
    `.dna` files are a proprietary format from Epic Games and are core to the MetaHuman identity — they encode the complete shape and rig of a MetaHuman. You can obtain them by exporting them from [MetaHuman Creator](https://dev.epicgames.com/documentation/metahuman/metahuman-creator-export-tool-in-unreal-engine#dccexport){: target="blank"} via its DCC export.

## Next Steps

You now have a MetaHuman evaluating in real time in Blender.

- New to MetaHuman terms? Read the [Terminology](terminology.md) overview.
- Ready to learn the addon's features? Explore the [Free Features](./free-features/rig-instances.md) and [Pro Features](./pro-features/converter.md).
- Hitting a snag? Check the [FAQ](faq.md).

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/terminology/ -->

# (Terminology)

# Terminology

We use MetaHuman-specific lingo throughout these docs. This page defines the core concepts you need to know to use our addon. However, please always consult the official [MetaHuman Documentation](https://dev.epicgames.com/documentation/metahuman/metahuman-documentation) by Epic Games.

## DNA

MetaHuman DNA is a proprietary file format from Epic Games that stores the **complete description of a character's rig and geometry** — meshes, joints, blend shapes, skin weights, texture masks, and the RigLogic rules that tie them together. RigLogic reads a `.dna` file to evaluate a face or body.

## Rig Logic

The runtime that powers MetaHuman face rigs. [OpenRigLogic](https://github.com/EpicGames/OpenRigLogic) is open-sourced by Epic Games and is what this addon uses as the **evaluation module**, so results match Unreal Engine 1-to-1. Epic's [white paper](https://cdn2.unrealengine.com/rig-logic-whitepaper-v2-5c9f23f7e210.pdf){: target="blank"} gives a deep dive into the design of RigLogic.

![Rig Logic outputs](./images/terminology/1.png){: class="rounded-image center-image"}

The key idea: RigLogic converts a small set of high-level **inputs** into a large set of low-level **outputs**. One input layer drives many output layers.

**Inputs (face board GUI controls).** These GUI controls map to [Raw Control](https://dev.epicgames.com/documentation/metahuman/mh-standards-docs/mha_index) values when you pose the face board.

**Outputs (driven by the inputs):**

* **Bone Transforms** — RigLogic calls these *joints*; Blender calls them *bones*.
* **Shape Key Values** — RigLogic calls these *blend shapes*; Blender calls them *shape keys*.
* **Wrinkle Map Masks** — driven through the addon's [Texture Logic](#texture-logic) node.

Toggle each of these outputs on your [Rig Instance](#rig-instance) to see its individual contribution while an animation plays or when you move a control.

![Rig Logic outputs](./images/terminology/2.png){: class="rounded-image center-image"}

### How an expression is evaluated

Under the hood, RigLogic runs each pose through a few stages. You don't need to know the math to use the addon, but understanding the vocabulary helps:

* **PSDs (Pose Space Deformations)** — are expressions that represent complex poses and how they are corrected. They define how multiple different expressions should be combined together. This is why editing one shape can affect the final result of others (see the [Shape Key Editor](./pro-features/shape-key-editor.md)).

### LODs

A DNA stores multiple [Levels of Detail](https://en.wikipedia.org/wiki/Level_of_detail_(computer_graphics)) (LOD0–LOD7). LOD0 is the source of truth as far as the Blender addon is concerned. The addon calibrates lower LODs from your LOD0 edits.

> Nota:
    *Update LODs* is a Pro feature.

## Rig Instance

A Rig Instance is the data block the addon uses to tie together which scene data belongs to which RigLogic evaluation. You can have **multiple Rig Instances** in one scene, each reading from its own DNA file, and a single Rig Instance can hold more than one RigLogic evaluation (a head and a body, for example).

The `Character DNA` sidebar is **context-sensitive to the active Rig Instance** selected in the [Rig Instances](./free-features/rig-instances.md) panel — only the active instance's properties are shown and modified.

## Texture Logic

A special material node that blends 3 color-map and 3 normal-map variants based on the current RigLogic evaluation, producing animated wrinkle maps. The masks decide where each variant shows through:

**Black** — Base Map

**Red**{: class="red"} — Wrinkle Map 1

**Green**{: class="green"} — Wrinkle Map 2

**Blue**{: class="blue"} — Wrinkle Map 3

<div style="display:flex; gap:0; justify-content:center; align-items:flex-start;">
  (imagen en la URL original)
  (imagen en la URL original)
</div>

See [Customizing Materials](./workflows/customizing-materials.md) for setup and naming conventions.

## GUI Controls

The yellow pose bones on the face board object. These are the high-level **inputs** to RigLogic.

## Raw Controls

These are ultimately the true **inputs** to RigLogic but are conventionally driven by GUI Controls via a mapping defined in the DNA. All these **outputs** below are calculated based on the Raw Control values:

* Pose Bone Transforms
* Shape Keys
* Wrinkle Map Masks
* PSD Correctives (Which affect the combinations of the 3 things above)

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/faq/ -->

# (FAQ)

# FAQ

If your issue isn't covered here, search the [GitHub issues](https://github.com/poly-hammer/character-dna-addon/issues). Most likely, someone has hit it before. If not, open a new one with your Blender version, addon version, and any console output.

## Face Board & Evaluation

### My Face Board isn't evaluating

Check these in order:

1. The face board is an armature — select it and enter **Pose Mode** to grab the yellow controls.
2. A control is actually selected (bright yellow) before you move it.
3. Evaluation isn't disabled — check the toggles on the instance in the [Rig Instances](./free-features/rig-instances.md) list.
4. As a last resort, click **Force Evaluate** to reset and re-cache.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/free-features/rig-instances/ -->

# (Free: Rig Instances)

# Rig Instances

A [Rig Instance](../terminology.md#rig-instance) ties together components (i.e., head and body) which in turn trigger their own RigLogic evaluations per `.dna` file. This panel manages the list of instances in your scene and the data each one links to. The sidebar (and every editor panel in it) is context-sensitive to the **active** instance selected here.

![1](../images/rig-instances/1.png){: class="rounded-image center-image"}

## The Instance List

Each row is one Rig Instance. Per-row toggles control what RigLogic outputs for that instance:

| Toggle        | Output                                                                         |
| ------------- | ------------------------------------------------------------------------------ |
| Auto Evaluate | Master switch — evaluate this instance live                                    |
| Bones         | Bone transforms                                                                |
| Shape Keys    | Shape key values                                                               |
| Texture Masks | Wrinkle map masks on the [Texture Logic](../terminology.md#texture-logic) node |
| RBFs          | Radial Basis Function corrective poses (body)                                  |

Use the side buttons to **Add**, **Remove**, **Duplicate**, and reorder instances.

> Consejo:
    Always use **Duplicate** to copy an instance — it re-links all data and constraints. Manually duplicating the objects will leave the new head and body disconnected from their underlying DNA relationships.

## Linked Data

Expand the **Head** and **Body** sub-panels to assign the objects each RigLogic evaluation reads from. The header checkbox on each enables auto-evaluation for that component.

### Head

| Field         | Purpose                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------- |
| Head DNA File | The `.dna` file RigLogic reads for the head                                              |
| Face Board    | The armature RigLogic reads [GUI control](../terminology.md#gui-controls) positions from |
| Head Mesh     | The mesh whose shape keys are evaluated                                                  |
| Head Rig      | The armature whose bones are evaluated                                                   |
| Head Material | The material carrying the [Texture Logic](../terminology.md#texture-logic) node          |

### Body

| Field         | Purpose                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| Body DNA File | The `.dna` file RigLogic reads for the body                                                                         |
| Control Rig   | When this is set, the body rig listens for dependency graph updates from this object, which trigger RigLogic updates|
| Body Mesh     | The body mesh                                                                                                       |
| Body Rig      | The body deform armature                                                                                            |
| Body Material | The body material                                                                                                   |

> Nota:
    A red/alerted field means required data is missing or a DNA file can't be found on disk. Fields are filled in automatically when you import a DNA file, but you can adjust and re-link data manually. This is important to keep in mind when moving your `.blend` file location, since the `.dna` files are a dependency for the rigs. You can use Blender's relative path syntax to help with this. For example, `//head.dna`, `//body.dna`, etc.

## Head to Body Constraint Influence

When a head and body are imported together, the head is constrained to follow the body's bones. This slider controls how strongly the head follows the body. Setting it to zero detaches it completely from the body.

## Force Evaluate

Forces evaluation for the active [Rig Instance](../terminology.md#rig-instance) and resets its cache. This is the catch-all for refreshing your RigLogic connections and references in case something changed or data is stale.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/free-features/view-options/ -->

# (Free: View Options)

# View Options

Controls what's visible in the viewport for the active [Rig Instance](../terminology.md#rig-instance). These settings are display-only. They don't change your DNA or exported data and are purely there to help you navigate the viewport.

![1](../images/view-options/1.png){: class="rounded-image center-image"}

## Head Material Color

Preview which map the head material shows:

- **Combined** — the final shaded result
- **Masks** — the wrinkle map masks
- **Normals** — the normal maps

This can be useful when debugging your wrinkle maps.

## Active LOD

Switch the visible head mesh between its Levels of Detail (**LOD0–LOD7**) and the body mesh between its Levels of Detail (**LOD0–LOD3**).

## Bone Visibility

| Toggle | Effect |
| ------ | ------ |
| Head Bones | Show/hide the head rig's bones |
| Body Bones | Show/hide the body rig's bones |
| Hide Volume | Hide the non-skinned volume/leaf bones to reduce clutter |
| Solo Internal | Hide surface bones to inspect the internal skeleton only |
| Show Matching | Highlight bones that match the active bone (helpful when trying to identify the same bone in another Rig Instance) |

## Control Visibility

| Toggle | Effect |
| ------ | ------ |
| Face Board | Show/hide the face board control rig |
| Control Rig | Show/hide the body control rig |

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/free-features/face-board/ -->

# (Free: Face Board)

# Face Board

The face board is another Blender armature object, but more importantly, its pose bones are the [GUI Controls](../terminology.md#gui-controls) that RigLogic evaluates into a facial expression. This panel drives it with ready-made poses and options for eye and head behavior.

To pose the board by hand, select the face board armature, enter **Pose Mode**, and grab the yellow controls.

(video/demo en la URL original)

## Pose Library

Pick a pose from the thumbnail preview or the dropdown to set the face board controls to that expression. Poses cover **visemes, emotions, wrinkle map bases, and scan reference** shapes. These are a fast way to understand what a MetaHuman's rig can do, and what data you need to extract from your scans.

- **Category** filters the list (All, Visemes, Emotions, Wrinkle Maps, Scan Reference).
- The **filter** popover (funnel icon) narrows poses by tag, matching **All** or **Any** of the selected tags.
- The **search** button (magnifier) opens a searchable pose picker.

> Consejo:
    The wrinkle map poses (`wrinkle_map_01`–`03`) make good base shapes for high-poly sculpts or scans that you later bake down to the texture maps in your material.

## Eye & Head Options

| Option | Effect |
| ------ | ------ |
| Use Eye Aim | Drive the eyes with an aim target instead of the GUI eye controls |
| Eyes Follow Head | Make the eye aim follow head movement |
| Face Board Follow Head | Make the GUI controls follow head movement |

## Importing Animation

Importing face board animation from MetaHuman Animator is done under the [Animation](./animation.md) panel.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/free-features/animation/ -->

# (Free: Animation)

# Animation

Import MetaHuman performances onto your character and bake them to plain Blender data for rendering or simulation. The panel has a **Face Board** section and a **Body Animation** section, each with **Import** and **Bake**.

## Face Board Animation

Import facial performance curves — for example from **MetaHuman Animator** — onto the face board.

(video/demo en la URL original)

- **Export from Unreal** — check out [this video](https://youtu.be/j59ftPt7MUY?si=fyU8Z9BMiQ3MqU-X&t=269) on how to do this.
- **Import to Blender** — load a face board animation exported from an Unreal Engine Level Sequence.
- **(Optional) Bake** — write the active face board action down to keyframes on the pose bones, shape key values, and [Texture Logic](../terminology.md#texture-logic) node mask values.

## Body Animation

Import body performances — from MetaHuman Animator or any re-targeted animation — onto the body rig.

(video/demo en la URL original)

- **Export from Unreal** — check out [this video](https://youtu.be/V4mWGrTJqFg?si=42fupxfBvWyVLK9D&t=265) on how to do this.
- **Import to Blender** — load a body animation onto the character's skeleton.
- **(Optional) Bake** — write the evaluated transforms of the RBF corrective bones down to keyframes.

## Why Bake?

(video/demo en la URL original)

This can be useful for simulations or exporting to other software.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/free-features/output/ -->

# (Free: Output (exportar a .dna))

# Output

Export your changes back to the `.dna` file format so you can update your MetaHuman in Unreal Engine.

(video/demo en la URL original)

## Component

Choose which component to export — **Head** or **Body**. The asset list and options update to match.

## Method

| Method                         | When to use                                                                                                      |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Calibrate** *(recommended)*  | Your vertex indices and bone names match the original DNA. Calibrates your bone and mesh changes into a new DNA. |
| **Overwrite** *(experimental)* | Your vertex indices or bone names differ from the original DNA. Only use when calibration isn't possible.        |

> Aviso:
    **Overwrite** is new and experimental — it doesn't work in every case yet.

## Asset List

Lists the meshes, armatures, and images that will be exported. Uncheck any asset to exclude it, and edit the name on the left inline.

> Nota:
    Mesh names must follow the MetaHuman **LOD naming convention** so the exporter knows which LOD each mesh belongs to.

## Options

- **Run Validations** — check the data before writing the DNA.
- **Update LODs** *(Pro)* — recalibrate lower LODs from your LOD0 changes.
- **Align Head and Body** *(Calibrate)* — align overlapping head/body bones to avoid a seam.

## Output Folder

A single folder where everything is written. The `.dna` components go here, and textures export to a `Maps` subfolder.

> Nota:
    If your `.blend` is saved, you can use Blender's relative path syntax to help standardize your export folder. For example, setting `//Ada` will output your `head.dna`, `body.dna`, and `Maps` folder into a folder named `Ada` next to your `.blend` file.

## Export Buttons

- **Only Component** — export just the selected component (head or body) to a single DNA file, with no textures or supporting files. Fast when you only need to update one component's DNA.
- **MetaHuman Creator** — export the head and body DNA plus textures in a format MetaHuman Creator accepts. This is the best way to output all the data for your MetaHuman.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/pro-features/converter/ -->

# (Pro: Converter)

# Converter

> Pro Feature
    The Converter is part of the **Pro** edition and only appears when Pro is installed.

Re-fit a base MetaHuman DNA onto your own head and body meshes, producing a new `.dna` calibrated to your geometry.

(video/demo en la URL original)

This uses the UV layout of your wrapped mesh to relocate the DNA's bones and shapes to match.

## Basic Setup

| Field | Purpose |
| ----- | ------- |
| Base DNA | The source `.dna` to convert from |
| Name | Filename for the new DNA |
| Output | Folder the new DNA is written to |
| Head | Your head mesh to fit |
| Body | Your body mesh to fit |

> Aviso:
    Auto-fitting is **UV based**. Your mesh must share the base MetaHuman UV layout with no overlapping or extra islands, or the fit won't be correct. See [Mesh Wrapping](../workflows/mesh-wrapping.md) for how to produce a compatible mesh.

## Advanced

Expand **Advanced** for finer control:

- **Extra Meshes** — additional base-DNA meshes (eyes, teeth, etc.) to fit during conversion. Each can use a **Wrap** or **Relative** fit method.
- **Maps Folder** — textures used when fitting auxiliary meshes.
- **Constrain Head to Body** — align overlapping head/body bones so the two components meet cleanly (avoids a seam).
- **Zero Shape Deltas** — reset shape key deltas during conversion.
- **Validate UVs** / **Tolerance** — check UV consistency within a tolerance before fitting.

## LOD Calibration

The Converter calibrates lower LODs from your LOD0 mesh automatically when the DNA conversion happens. This keeps all levels in sync with that initial `Convert to DNA` operation.

(video/demo en la URL original)

## Convert to DNA

Runs the conversion and writes the new `.dna` files in a similar fashion to the **MetaHuman Creator** DCC export process.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/pro-features/mesh-editor/ -->

# (Pro: Mesh Editor)

# Mesh Editor

> Pro Feature
    The Mesh Editor is part of the **Pro** edition and only appears when Pro is installed.

Symmetry and data-transfer tools for working with MetaHuman meshes.

(video/demo en la URL original)

## Mesh Operations

Set the **Mirror Direction** (Left↔Right or Right↔Left), then use:

| Operation | Effect |
| --------- | ------ |
| Mirror | Mirror the mesh across the symmetry axis |
| Flip | Flip the mesh across the axis |
| Transfer | Transfer shape from a selected source mesh onto the target |

## Data Transfer

Expand **Data Transfer** to copy rig data between meshes — useful when moving weights and shapes onto a custom mesh.

- **Mode** — work from meshes in the current **Scene**, or from a cached topology **Shim**.
- **Shim Folder** — where topology shim (`.npz`) caches are stored.

**Scene mode** pairs a source DNA mesh with your custom target mesh, with options for deleting existing data and the space-transfer method.

| Button | Effect |
| ------ | ------ |
| Transfer Weights | Copy bone/vertex weights onto the target mesh |
| Transfer Shape Keys | Copy shape keys onto the target mesh |
| Save Topology Shim | Cache the topology mapping for reuse |

> Consejo:
    Save a topology shim once, then reuse it to transfer data quickly onto meshes that share the same topology.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/pro-features/raw-editor/ -->

# (Pro: Raw Editor)

# Raw Editor

> Pro Feature
    The Raw Editor is part of the **Pro** edition and only appears when Pro is installed.

Edit the [Raw Controls](../terminology.md#raw-controls) — more specifically **where** bones are posed when a [Raw Control](../terminology.md#raw-controls) is activated to a value of 1.

(video/demo en la URL original)

## Choosing a Raw Control

The list shows every raw control, plus a **Rest Pose** row at the top called `default` for editing the neutral shape. Filter the list by:

- **Mesh** — scope controls to a specific LOD0 mesh.
- **Name** — search a control by name.
- **Non-Zero** — hide-zero-value controls. (This can be useful to find which controls are activated.)
- **Value Sort** — sort by value so you can see which controls have the highest values.
- **Side** — a side filter (Left / Right / Center). Helpful if you only want to work on one side of the face.
- **Freeze** — the snowflake button locks the current list order and filtering in place so rows do not reshuffle while you scrub the raw control values.

Select a control and click **Edit** to open an editing session for that expression's pose.

> Nota:
    Some raw controls like `jawOpenExtreme` are "corrective" expressions, so they activate the expressions they add onto (for example, `jawOpen`).

## Editing a Pose

While editing, you have two options: work on **target meshes** (LOD0 sculpt targets) or re-pose the head's **pose bones** directly. The available tools depend on the mode you're in:

**Editing the Target Mesh** — Mirror, Flip, Reset to Neutral, Reset to DNA, Transfer shape from a selected mesh, and (Rest Pose only) Transfer to Head. A **Strength** slider blends the operation result.

**Editing the Pose Bones Directly** — Mirror/Flip bones, Reset to Rest Pose, Reset to DNA, Mirror/Flip selection, and (Rest Pose only) Snap Bones to Surface.

When done, **Commit** writes the change into the DNA, or **Revert** discards it. Options let you mirror on commit and, for Rest Pose edits, update the mesh and auto-update LODs.

## Bone Matching Solver

Instead of posing bones by hand, let the solver find the bone transforms that best fit a target mesh sculpt.

(video/demo en la URL original)

Sculpt your target mesh, then click **Match Bones to Mesh**. It runs a hyper-optimization algorithm to solve the bone transforms that reproduce your sculpt. The **Solver Settings** popover exposes the hyperparameters:

| Setting | Purpose |
| ------- | ------- |
| Iterations | Number of optimization steps |
| Learning Rate | Optimization step size |
| Rotation / Translation Reg | Regularization to keep the solve stable |
| Warm Weight Threshold | Threshold for warm-start weighting |
| Huber Delta (cm) | Robustness of the loss to outliers |
| Convergence Tolerance | When to stop early |

Enable **Reset Pose** to start each solve from the DNA pose, or disable this to start the solve from the current pose bone positions in the Blender scene.

> Consejo:
    Start with the defaults. If the fit undershoots, raise iterations or learning rate; if it gets unstable or spiky, raise the regularization.

## Setup and Hardware

The bone matching process happens in another Python subprocess that utilizes [PyTorch](https://pytorch.org/) for accelerating compute on your hardware. This includes options for `CPU`, `CUDA`, and `MPS` on macOS. Setting this to `AUTO` will try to install the dependencies for the most optimal hardware that you have available.

![hardware settings](../images/raw-editor/hardware_settings.png){: class="rounded-image center-image"}

You will have to run the installation process once before you can use the `Match Bones to Mesh` operator. If you have a preference for where the virtual environments should be on disk (these can be several GB), you can set that in the **Solver Environments Folder** preference.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/pro-features/shape-key-editor/ -->

# (Pro: Shape Key Editor)

# Shape Key Editor

> Pro Feature
    The Shape Key Editor is part of the **Pro** edition and only appears when Pro is installed.

Edit the blend shapes (shape keys) a DNA drives. With this editor, you will sculpt directly onto the activated shape key while locking all others.

> Nota:
    A basic shape key like `jaw_open` sits on top of a single `jawOpen` Raw Control value and its posed bones. Other shape keys like `MCornerDepress_NSwrinkle_Jopen_R` are only visible as correctives that activate in the face when other raw controls or shape keys are active as well.
    Thus, entering editing mode activates the dependents backward from the desired shape key you want to edit.

(video/demo en la URL original)

## Importing Shape Keys

If you just imported your MetaHuman, then you need to run the **Import Shape Keys** operator to actually load them from the DNA into the Blender scene. Enable **Generate Neutral** to auto-generate neutral shapes during import if you want to work with a clean slate.

## Choosing a Shape Key

The list shows every shape key channel. Filter by:

- **Mesh** — scope shape keys to a specific LOD0 mesh.
- **Name** — search a shape key by name.
- **Non-Zero** — hide-zero-value shape keys. (This can be useful to find which shape keys are activated.)
- **Value Sort** — sort by value so you can see which shape keys have the highest values.
- **Side** — a side filter (Left / Right / Center). Helpful if you only want to work on one side of the face.
- **Deltas** — the ghost button is a filter to hide shape keys that do not actually contain vertex changes (a sculpted offset different from the basis). This so you can quickly spot which shape keys hold edits. This is handy when sculpting a custom character where most shape keys have been zeroed out from the beginning.
- **Freeze** — the snowflake button locks the current list order and filtering in place so rows do not reshuffle while you scrub shape key values.

## Editing with Dependencies

Select a channel and click **Edit**. Because expressions combine through [PSDs](../terminology.md#how-an-expression-is-evaluated), a shape key often depends on other shapes and raw controls. The editor shows a **dependency list** so you can see exactly what contributes to the shape you're editing:

- The dependencies are **locked** (read-only context).
- The edited key is **unlocked**.
- Toggle each dependency's visibility to diff what you're sculpting vs what is below it.

You can make changes in **Sculpt** or **Edit** mode, using Mirror / Flip / Reset as needed, then **Commit** to write the change into the DNA or **Revert** to discard it.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/pro-features/rbf-editor/ -->

# (Pro: RBF Editor)

# RBF Editor

> Pro Feature
    The RBF Editor is part of the **Pro** edition and only appears when Pro is installed.

Modify, add, and delete corrective bone poses on your MetaHuman's **body**. These correctives interpolate between one another using **Radial Basis Functions (RBF)**. As a `driver` bone on the body moves, the corresponding `driven` corrective bones blend into position via a falloff function.

(video/demo en la URL original)

## Solvers & Poses

- The **Solvers** list holds the RBF solvers on the body. (This also defines the joints in a joint group in DNA.)
- The **Poses** list holds the `driven` corrective bone poses for the active solver. You can have as many or as few poses as needed to make your solver interpolate to all the corrective positions.

Click **Edit** to modify a solver. While editing, you can **Add**, **Remove**, and **Mirror** solvers (mirroring maps the driving bones left ↔ right).

## Settings

Expand **Settings** while editing to choose the **Function Type**, the RBF kernel (e.g. Gaussian, Linear), with a live curve preview showing how the interpolation falls off.

## Committing

**Commit** writes your changes into the body DNA; **Revert** discards them.

> Nota:
    While in RBF editing mode, you must click **Apply Pose Transform Edits** before switching to another pose. This is how you associate the changes with a pose. Please note these are still ephemeral until committed to the DNA.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/pro-features/backup-manager/ -->

# (Pro: Backup Manager)

# Backup Manager

> Pro Feature
    The Backup Manager is part of the **Pro** edition and only appears when Pro is installed.

Automatically snapshots your `.dna` before and after changes are committed, giving you a fast way to roll back to a previous state.

(video/demo en la URL original)

## Backup Events

A backup is taken automatically around every point where your DNA could change, plus whenever you save your `.blend` file:

| Event | Fires |
| ----- | ----- |
| Blender File Saved | Every time you save the `.blend` file |
| Pre Raw Editor Commit | Right before committing an edit from the [Raw Editor](./raw-editor.md) |
| Post Raw Editor Commit | Right after committing an edit from the [Raw Editor](./raw-editor.md) |
| Pre Raw Editor (Rest Pose) Commit | Right before committing a Rest Pose (bind pose) edit from the [Raw Editor](./raw-editor.md) |
| Post Raw Editor (Rest Pose) Commit | Right after committing a Rest Pose (bind pose) edit from the [Raw Editor](./raw-editor.md) |
| Pre RBF Editor Commit | Right before committing an edit from the [RBF Editor](./rbf-editor.md) |
| Post RBF Editor Commit | Right after committing an edit from the [RBF Editor](./rbf-editor.md) |
| Pre Shape Key Editor Commit | Right before committing an edit from the [Shape Key Editor](./shape-key-editor.md) |
| Post Shape Key Editor Commit | Right after committing an edit from the [Shape Key Editor](./shape-key-editor.md) |
| Manual Backup | Whenever you click **Add** in the Backup Manager panel |

Taking both a "pre" and "post" snapshot around each editor commit means you can always roll back to either side of a change — the state right before you committed, or the freshly committed result.

> Nota:
    Automatic backups can be turned off entirely from the addon preferences (see [Preferences](#preferences) below). Manual backups are always available regardless of that setting.

## The Backup List

Each entry is a timestamped snapshot with a description and type (for example, taken before or after a commit). Use the side buttons to:

- **Refresh** — rescan the backups folder.
- **Folder** — open the backups folder in your file explorer.
- **Add** — create a manual backup right now.

## Restoring

Select a backup and click **Restore**. Choose what to bring back:

| Option | Restores |
| ------ | -------- |
| Reimport Meshes | Mesh geometry |
| Reimport Bones | Bone/rig data |
| Reimport Shape Keys | Shape keys |

**Delete** removes the selected backup.

> Consejo:
    It's good practice to create manual backups with clear descriptions as you make changes to your DNA files.

## Preferences

Backup behavior is configured in the addon's preferences:

| Setting | Purpose |
| ------- | ------- |
| Enable Auto DNA Backups | Master switch for the automatic backups listed above. Turning this off stops new automatic backups from being created — manual backups are unaffected. |
| DNA Backup Folder | Where backups are stored. Defaults to a folder in your system's temp directory. You can point this at any absolute path, or use Blender's `//` relative-path syntax (e.g. `//backups`) to store backups in a folder next to the current saved `.blend` file. |
| Maximum Backups to Keep | The retention policy — the number of **automatic** backups to keep per Rig Instance before the oldest are deleted. Manually created backups are never deleted automatically, regardless of this setting. |

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/workflows/append-link/ -->

# (Workflow: Append & Link)

# Append & Link

On a production, you'll often set up an asset in one `.blend` file and then bring it into another `.blend` file. For MetaHumans, you need to use the **Append** or **Link** operation to do this correctly since there is more than just Blender data involved, and the DNA file relationships need to be reconfigured.

## How To

Open **File → Import → MetaHuman Append/Link (.blend)** and select a `.blend` file instead of a `.dna`. You'll see a list of MetaHumans available in that file. Pick one and choose the operation:

- **Append** — copy the MetaHuman into the current file (independent copy).
- **Link** — reference the MetaHuman from the source file (updates propagate).

![Append/Link a MetaHuman from a .blend](../images/append-link/file_dialog.png)

When linking, there is an option `Editable Rig` that can be turned on. This make's the linked MetaHuman's face board and control rig native to the blender scene, thus allowing you to pose and animated with the rigs while not being able to edit the other data on the MetaHuman objects.

## Keep the Collection Names Intact

> Aviso:
    Append/Link only works when the MetaHuman keeps the **collection names** the importer created. Renaming or re-nesting those collections breaks this operator's ability to append or link all data correctly.

If you need to organize your outliner, do it **without renaming** the MetaHuman's generated collections or moving its rigs out of them. You can change a MetaHuman's name directly on its entry in the [Rig Instances](../free-features/rig-instances.md) panel.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/workflows/mesh-wrapping/ -->

# (Workflow: Mesh Wrapping)

# Mesh Wrapping

To convert a custom head into a MetaHuman DNA with the [Converter](../pro-features/converter.md), your mesh must share the MetaHuman topology and UV layout. **Wrapping** is how you get there: you deform a copy of the base MetaHuman head and body meshes so they conform to your scan, sculpt, or alternative topology.

## Why Wrap?

The [DNA auto-fitting](../pro-features/converter.md) algorithm is **UV based**. It only produces a correct fit when your mesh uses the base MetaHuman UV layout with **no overlapping or extra islands, or distorted points**.

<div style="display:flex; gap:0; justify-content:center; align-items:flex-start;">
  (imagen en la URL original)
  (imagen en la URL original)
</div>

<div style="display:flex; gap:0; justify-content:center; align-items:flex-start;">
  (imagen en la URL original)
  (imagen en la URL original)
</div>

Wrapping preserves that layout because you start from the base MetaHuman head and body meshes and only move their vertices. Never change their vertex count or UVs.

## Methods

There are several ways to produce a wrapped, topology-matched head and body. Pick whichever fits your pipeline.

### 1. Face Form Wrap

A dedicated wrapping tool that is a fast and accurate way to conform the base MetaHuman head and body meshes onto your target scan or sculpt while preserving topology and UVs.

<div style="max-width:100%; margin:0 auto;">
  <iframe width="100%" style="aspect-ratio:16/9; border:0;" src="https://www.youtube.com/embed/813BCbIwGiE" title="Face Form Wrap tutorial" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### 2. Mesh to MetaHuman (Unreal Engine 5.8)

Epic's built-in **Mesh to MetaHuman** tool fits a MetaHuman topology onto your custom mesh directly in Unreal, then hands it back through MetaHuman Creator. Export the resulting DNA and bring it into Blender.

- [MetaHuman Creator from custom mesh tool in Unreal Engine](https://dev.epicgames.com/documentation/metahuman/metahuman-creator-from-custom-mesh-tool-in-unreal-engine)

### 3. Blender (Proportional Editing, Sculpt, Shrinkwrap)

Wrap entirely in Blender by reshaping a copy of the base MetaHuman head and body:

1. Use **Proportional Editing** to block in the overall shape toward your target.
2. Refine with **Sculpt** brushes for finer detail.
3. Systematically add **[Shrinkwrap modifiers](https://docs.blender.org/manual/en/latest/modeling/modifiers/deform/shrinkwrap.html)** targeting your reference mesh, scoping each to a **vertex group** so you can conform specific regions (cheeks, brow, jaw) without disturbing the rest. Apply as you go.

You can even combine these methods to achieve your desired result, using free or paid tools as needed.

## Convert

Once you have a wrapped head and body mesh, run **Convert to DNA**.

> Consejo:
    Wrapping the character in a neutral position with the mouth slightly open and eyes slightly closed can be ideal for transferring textures or vertex group data. You can then edit the `default` item in the [Raw Editor](../pro-features/raw-editor.md) to close the mouth and fully open the eyes, defining the character's rest pose.

---

<!-- fuente: https://docs.polyhammer.com/character-dna-addon/workflows/customizing-materials/ -->

# (Workflow: Customizing Materials)

# Customizing Materials

Textures feed the [Texture Logic](../terminology.md#texture-logic) node, which blends color and normal map variants to produce animated wrinkle maps as RigLogic evaluates.

<div style="display:flex; gap:0; justify-content:center; align-items:flex-start;">
  (imagen en la URL original)
  (imagen en la URL original)
</div>

## Custom Materials

You can build a fully custom material node tree. Just add one [Texture Logic](../terminology.md#texture-logic) node to the graph (`Add > Rig Logic > Head Texture Logic` in Blender's Shader Editor) and link your material in the [Rig Instance](../free-features/rig-instances.md) outputs.

![Custom material with Texture Logic node](../images/customizing-materials/add-texure-logic-node.gif){: class="rounded-image center-image"}

With that connected, RigLogic updates the wrinkle map masks for you as the GUI controls are evaluated.

## Importing Textures

When importing or converting a mesh, you can set the `Maps` folder location. By default, if a `Maps` folder sits alongside the `.dna` file, the importer uses it; otherwise, point it at your folder.

![Maps folder option](../images/customizing-materials/custom-maps-folder.png){: class="rounded-image center-image" style="width:500px"}

The importer links any `.tga` or `.png` textures to the [Texture Logic](../terminology.md#texture-logic) node inputs that follow one of these naming patterns:

### Pattern 1

| Texture File                    | Maps To     |
| ------------------------------- | ----------- |
| Head_Basecolor.png              | Color_MAIN  |
| Head_Basecolor_Animated_CM1.png | Color_CM1   |
| Head_Basecolor_Animated_CM2.png | Color_CM2   |
| Head_Basecolor_Animated_CM3.png | Color_CM3   |
| Head_Normal.png                 | Normal_MAIN |
| Head_Normal_Animated_WM1.png    | Normal_WM1  |
| Head_Normal_Animated_WM2.png    | Normal_WM2  |
| Head_Normal_Animated_WM3.png    | Normal_WM3  |

### Pattern 2

| Texture File    | Maps To     |
| --------------- | ----------- |
| Color_MAIN.tga  | Color_MAIN  |
| Color_CM1.tga   | Color_CM1   |
| Color_CM2.tga   | Color_CM2   |
| Color_CM3.tga   | Color_CM3   |
| Normal_MAIN.tga | Normal_MAIN |
| Normal_WM1.tga  | Normal_WM1  |
| Normal_WM2.tga  | Normal_WM2  |
| Normal_WM3.tga  | Normal_WM3  |

### Pattern 3

| Texture File            | Maps To     |
| ----------------------- | ----------- |
| head_color_map.tga      | Color_MAIN  |
| head_cm1_color_map.tga  | Color_CM1   |
| head_cm2_color_map.tga  | Color_CM2   |
| head_cm3_color_map.tga  | Color_CM3   |
| head_normal_map.tga     | Normal_MAIN |
| head_wm1_normal_map.tga | Normal_WM1  |
| head_wm2_normal_map.tga | Normal_WM2  |
| head_wm3_normal_map.tga | Normal_WM3  |
