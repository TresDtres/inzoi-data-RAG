---
source: local
url: https://docs.polyhammer.com/character-control-rig-addon/
title: "Addon Polyhammer Character Control Rig: Rigify/Auto-Rig Pro sobre MetaHuman, import/export de animaciones (Mixamo incluido), documentacion completa"
generado: 2026-10-13
---

# Addon Polyhammer Character Control Rig (documentacion completa)

> Extraccion completa del sitio oficial docs.polyhammer.com/character-control-rig-addon/
> (5 paginas publicadas a 2026-10-13), contenido en ingles VERBATIM.

**Que es:** genera un control rig (Rigify o Auto-Rig Pro 3.78.34+) sobre el
MetaHuman importado por Character DNA; OpenRigLogic sigue evaluando el DNA
mientras se anima. Importa animaciones FBX/NPZ con deteccion AUTOMATICA de
esqueleto fuente (plantillas: MetaHuman, UE5 Manny/Quinn, UE4 mannequin,
**Mixamo**, Reallusion CC/AccuRig, Rokoko, Xsens, SOMA) y las retargetea a los
controles FK. Exporta animacion de cuerpo y face board a FBX con convenciones
de Unreal (Z-up, 100x, root bone `root`).

**Verificado en el equipo del tester (2026-10-13, via Blender MCP):** Blender
5.2.1 LTS con `bl_ext.api_portal_polyhammer_com.character_control_rig`
instalado y ACTIVO; Auto-Rig Pro 3.78.63 (cumple el requisito >=3.78.34);
Rigify presente pero NO habilitado (hay que activarlo en preferencias si se
quiere usar como framework).


---

<!-- fuente: https://docs.polyhammer.com/character-control-rig-addon/ -->

# (Home / Getting Started)

# Getting Started

Generate a control rig for any MetaHuman brought into Blender by the
[Character DNA](https://docs.polyhammer.com/character-dna-addon/) addon. Import re-targeted motion capture onto it in one click, animate the body
with IK/FK controls, and export body and face board
animation straight back to Unreal Engine.

(video/demo en la URL original)

## Requirements

| Requirement | Details |
| --- | --- |
| **Blender** | 4.5 through 5.2. |
| **Character DNA addon** | Required. It imports the MetaHuman and provides the rig instance this addon builds on. ([free here](https://www.polyhammer.com/character-dna-addon)) |
| **A rig framework** | Rigify or Auto Rig Pro 3.78.34+ |

## Install the Addon

Create an account on the [Poly Hammer Portal](https://dashboard.portal.polyhammer.com/signup),
then link to our Blender extensions server by following these
[instructions](https://docs.polyhammer.com/poly-hammer-portal/blender-extension-repo).

Once installed, a `Character Control Rig` tab appears on the right side of the 3D Viewport
(toggle it with the `N` key). The panels are disabled until a Character DNA rig instance
exists is [imported to your scene](https://docs.polyhammer.com/character-dna-addon/#import-your-dna).

## Your First Control Rig

1. Import a MetaHuman `.dna` file with the Character DNA addon.
2. Open the **Character Control Rig** tab and select the character in the **Rig Instances**
   list.
3. Open **Rig Generation** and choose a **Rig Framework**.
4. Click **Generate Metarig**. The framework's editable reference rig is snapped to the
   MetaHuman's skeleton.
5. *(Optional)* Adjust the metarig in Edit Mode.
6. Click **Generate Control Rig**. The final rig is generated and constrained to the
   MetaHuman.
7. Select the control rig, enter Pose Mode, and animate.

## Next Steps

- Choosing a framework, editing the metarig, and working with several characters at once —
  [Rig Building](rig-building/).
- Bringing motion capture and existing clips onto the rig — [Import Animation](import-animation/).
- Getting animation back into Unreal Engine — [Export Animation](export-animation/).
- Hitting a snag? Check the [FAQ](faq/).

---

<!-- fuente: https://docs.polyhammer.com/character-control-rig-addon/ -->

# (Rig Building)

# Rig Building

The addon builds a control rig for a MetaHuman and binds it to the body skeleton that the
Character DNA addon imported from a `.dna` file. You pose the control rig, and OpenRigLogic
keeps evaluating against the DNA. This make the MetaHuman body deform exactly as it does in Unreal Engine, while giving you an animator friendly rig.

## Supported Rig Frameworks

| Framework | Requirement | Notes |
| --- | --- | --- |
| **Rigify** | Enable it in Blender's addon preferences | Free and bundled with Blender. Full IK/FK body controls. |
| **Auto Rig Pro** | Auto Rig Pro **3.78.34+**, enabled | This is also a popular framework, but it is paid and made by another third party. [get here](https://superhivemarket.com/products/auto-rig-pro). |

Pick the framework from the **Rig Framework** dropdown in the **Rig Generation** panel
before generating.

Whichever framework you choose, Character DNA remains responsible for the evaluating the MetaHuman face board and the secondary twist, swing, and RBF corrective bones.

## The Two-Phase Workflow

(video/demo en la URL original)

Rig generation is split into two steps so you get a chance to adjust the metarig after the bone snapping phase, but before the final control rig is
created.

1. **Generate Metarig** — snaps the framework's editable reference rig to the source
   skeleton. The metarig stays in the scene.
2. *(Optional)* **Adjust the metarig** in Edit Mode.
3. **Generate Control Rig** — generates the final rig from the metarig, constrains it to
   the source skeleton, and removes the metarig.

## Adjusting the Metarig

Between the two phases you can fix anything the automatic snapping got slightly wrong. This should work perfectly if your head and body meshes match the MetaHuman topology. However, if you have a custom mesh turn of `Snap Bones to Mesh`, then adjust the leaf bones for finger, toe, spine, or jaw placement.

Safe to change in Edit Mode:

- Bone head and tail positions
- Bone lengths and roll

Do not change:

- Bone names — generation resolves bones by name
- Rigify bone parameters or rig types
- The bone hierarchy, or adding and deleting bones

Warning

The metarig is consumed when you click **Generate Control Rig**. To change it
afterwards, remove the control rig and generate again.

## Multi-Character Scenes

(video/demo en la URL original)

Every generated object is name-spaced with its rig instance name, so any number of
characters can coexist in one scene:

| Object | Name |
| --- | --- |
| Metarig | `{name}_metarig` |
| Control rig | `{name}_control_rig` |

Generation, animation import, export, and removal all act on whichever rig instance is
selected in the **Rig Instances** list, so each character is managed independently.

---

<!-- fuente: https://docs.polyhammer.com/character-control-rig-addon/ -->

# (Import Animation)

# Import Animation

Import a body animation from an FBX or NPZ file and retarget it onto the FK controls of
your control rig. The source skeleton is detected automatically, and the result is a
regular Blender Action you can keyframe over.

(video/demo en la URL original)

## Import a Body Animation

1. Select the rig instance and make sure its control rig has been generated.
2. Open the **Animation** panel.
3. Under **Body FK Animation**, click **Import**.
4. Choose an `.fbx` or `.npz` file.
5. Confirm. The animation lands on the control rig's FK controls as a new Action.

Select the control rig and enter Pose Mode to play it back.

## Import Options

| Option | Default | Effect |
| --- | --- | --- |
| **Source Frame Rate** | `30` | Rate assumed for formats that don't declare one, such as NPZ. Ignored when the file does. |
| **Match Frame Rate** | On | Re-times the source samples onto the current scene frame rate. |
| **Round Sub-frames** | On | Rounds re-timed samples to whole scene frames. |
| **Prefix Instance Name** | On | Prefixes the Action name with the rig instance name, avoiding collisions between characters. |
| **Prefix Component Name** | Off | Prefixes the Action name with `body`. |
| **Replace Existing** | On | Overwrites an Action of the same name. When off, the import is cancelled instead. |

## Supported Animation Templates

The source skeleton in your file is matched against these templates automatically:

| Template | Typical source |
| --- | --- |
| **MetaHuman** | MetaHuman body animation from Unreal Engine |
| **UE5 Mannequin (Manny/Quinn)** | Unreal Engine 5 Manny and Quinn |
| **UE4 Mannequin** | Unreal Engine 4 mannequin |
| **Mixamo** | Adobe Mixamo clips |
| **Reallusion Character Creator** | Character Creator and AccuRig |
| **Rokoko** | Rokoko Studio suit capture |
| **Xsens** | Xsens suit capture |
| **SOMA** | Generated motion from Kimodo on SOMA rig |

Note

The addon has its own source skeleton detection algorithm that will choose the right retargeting steps for you if the animation you are importing is supported.

Tip

You can export from the processed full body performance by right-clicking `MetaHuman_ControlRig_Simple` to export the body track with **Export Control Rig FBX** instead of baking an animation sequence.

## Face Board Animation

The **Face Board** section of the same panel has its own **Import** button. You can import your Face Board animations the you exported from MetaHuman Animator in a single click.

(video/demo en la URL original)

Tip

Check out [this video](https://youtu.be/j59ftPt7MUY?si=fyU8Z9BMiQ3MqU-X&t=269) on how to do this.

---

<!-- fuente: https://docs.polyhammer.com/character-control-rig-addon/ -->

# (Export Animation)

# Export Animation

Export body and face board animation to FBX in one-click, ready to import into Unreal Engine. No more guessing the correct settings.

(video/demo en la URL original)

## Export Body Animation

1. Select the rig instance and open the **Animation** panel.
2. Under **Body FK Animation**, click **Export**.
3. Set the file path and, if needed, the **Bake Step**.
4. Confirm.

The exporter bakes the rig's *visual* transforms so what your see in the Blender viewport is what will be exported.

| Setting | Effect |
| --- | --- |
| **Bake Step** | Frame step to sample at. `1` bakes every frame, `2` every other frame. (how sparse keys are in Unreal) |
| **Frame range** | This is inferred from the scene's **Start** and **End** frames. Set them first. |

### Importing into Unreal Engine

The FBX is already written in Unreal's conventions, so no import-time conversion is needed.

| Property | Value |
| --- | --- |
| Coordinate system | Right-handed, Z-up |
| Scale | 100× (centimeters) |
| Root bone | `root` |

In Unreal's FBX import dialog, set the skeleton to your MetaHuman's body skeleton.

Warning

You should import the animation onto the same proportioned skeleton in unreal as you used when creating the animation in Blender.
Otherwise, relative animation transforms won't match what you are expecting.

## Export Face Board Animation

1. Select the rig instance and open the **Animation** panel.
2. Under **Face Board**, click **Export**.
3. Choose a file path and confirm.

In your Unreal Level Sequence, right-click the track `Face_ControlBoard_CtrlRig` then left-click `Import Control Rig FBX` and be sure to choose the `MetaHuman Control Mappings` option from the Control Mappings Preset dropdown.

Tip

Look at the animation at the top of this page to see how this is done.

---

<!-- fuente: https://docs.polyhammer.com/character-control-rig-addon/ -->

# (FAQ)

# FAQ

If your question isn't answered here, browse the
[Character Control Rig discussions](https://github.com/orgs/poly-hammer/discussions/categories/character-control-rig-addon).

## Choosing a Rig Framework

## Why use this addon instead of Auto Rig Pro's Quick Rig?

Quick Rig constrains the RBF corrective bones as well as the swing and twist bones, and
does its own setup for them. That setup does not match what the MetaHuman bones do in
Unreal Engine.

The Character Control Rig addon instead gives you a control rig to pose and animate with,
while piping the dependency graph updates to OpenRigLogic so the body evaluates against what is
configured in the DNA. This is a 1-to-1 match with how the MetaHuman rig works in Unreal Engine
and gives you high quality corrective deformations.

## Exporting

### Which skeleton do exported body animations target?

The exported skeleton is the body armature imported from the DNA, not the FK controls of
the control rig. Import the FBX in Unreal Engine against that same MetaHuman body skeleton
directly.

If the result looks off, double check which skeleton you selected in Unreal when importing the animation. If your animation is being applied to a
body with different proportions use Unreal Engine's [Retargetor](https://dev.epicgames.com/documentation/unreal-engine/animation-retargeting-in-unreal-engine?lang=en-US).

## Scene Setup

### Should I change Blender's unit scale to match Unreal Engine?

No. Work at scene scale `1`. The exporter reads the visual transforms and applies the
Unreal Engine conversion itself.

Authoring at 100× to satisfy Blender's built-in FBX exporter leaves non-1 scale factors in
the bind pose and breaks physics and other Blender features.
