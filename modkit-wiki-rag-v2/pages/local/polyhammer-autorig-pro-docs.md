---
source: local
url: https://www.lucky3d.fr/auto-rig-pro/doc/
title: "Auto-Rig Pro: docs oficiales (Remap retargeting Mixamo/Rokoko/Xsens, Game Engine Export FBX/UE, rigging)"
generado: 2026-10-13
---

# Auto-Rig Pro: documentacion oficial (Remap/retarget, Game Engine Export, Auto-Rig)

> Extraccion de la documentacion oficial de Auto-Rig Pro
> (lucky3d.fr/auto-rig-pro/doc, docs publicas del addon de pago de Superhive),
> 2026-10-13. Contenido en ingles VERBATIM de las paginas Remap, Game Engine
> Export y Auto-Rig.

**Que es:** addon de rigging/animacion de pago para Blender (Superhive).
Rigging automatico (Quick Rig/smart), Remap (retarget entre esqueletos, con
presets para fuentes mocap: Mixamo, Rokoko, Xsens...) y export a game engines
(FBX/Unity/UE/Godot con root motion, escala y convenciones resueltas por el
propio addon).

**Relacion con los addons Polyhammer:** Character Control Rig soporta ARP
3.78.34+ como framework de control rig sobre MetaHuman (ver
pages/local/polyhammer-character-control-rig-addon.md). El FAQ del Control Rig
explica por que conviene su integracion frente al Quick Rig de ARP para
MetaHumans (RigLogic/DNA evalua las correctivas igual que en UE).

**Verificado en el equipo del tester (2026-10-13, via Blender MCP):**
Auto-Rig Pro 3.78.63 + ARP Tools 3.78.51 instalados y ACTIVOS en Blender
5.2.1 LTS (satisfacen el requisito >=3.78.34 del Character Control Rig).


---

<!-- fuente: https://www.lucky3d.fr/auto-rig-pro/doc/remap_doc.html -->

# (Remap / Retargeting)

# Auto-Rig Pro — Remap (Retargeting)

- Remap
- [View page source](_sources/remap_doc.rst.txt)

---

# Remap

## Overview

### What’s that?

The Remap tool is useful to re-target an armature animation to another one.
You can import for example a BVH motion capture file and transfer it to a rigged character.

### Euler Support

The “Interactive Tweaks” tool only works with **Euler** rotation mode at the moment.
This tool can be used to tweak the bones rotation after retargetting.
If you wish to use it while the target armature is set up with **Quaternions**, you can do the following:

- Select all bones (A key) in Pose Mode, and hold **Alt key** while clicking the **XYZ Euler** switch instead of Quaternion in the transform tab (holding Alt apply the action for all selected bones)

Note

If you don’t use the “Interactive Tweaks” tool, you can ignore this warning.
It’s also possible to tweak the bones transforms after retargetting, using an additive animation strip.

## Workflow

The *Target* armature (the one that will receive the animation) must be in the scene. It can be any type of armature (Auto-Rig Pro, Rigify, custom rig…). However, the built-in mapping [Presets](#remappresets) are made specifically for Auto-Rig Pro armatures as *Target*.

Important

Make sure to zero-out the armature object **Location** and **Rotation** coordinates, errors may raise otherwise.
Press Alt-G and Alt-R to reset, or manually set the values to zero.

### Import the Source Animation

- Import the animated skeleton file (typical formats are FBX, BVH…): File > Import > select the file. This animated skeleton will be called the *Source* armature.

Tip

When importing **FBX** format, check **Automatic Bones Orientations** in the import settings to ease the retargetting process. Otherwise, bones may be imported with weird axes, making it harder to visualize the animation.

Then it’s time to configure the Remap settings!

### Set Source and Target Armatures

- First select the *Source* armature and assign it in the dedicated field at the top of the menu
- Then the *Target* armature and assign it below
- Push **Auto-Scale** to adjust the source armature scale to the target automatically. Scale it manually (S key) otherwise.
- Use the **In Place** option to keep a looping animation in place (e.g. walking, running…)

### Multiple Animations

The current animation of the *Source* armature will be used as input.

However, it is possible to retarget multiple animations by clicking the **Multiple Source Anim…** button.

Select all actions/animations that must be transferred to the target armature in the pop-up menu:

### Build Bones List

Now, configure the bones mapping list.

- Click **Build Bones List**

A list of *Source* and corresponding *Target* bones has been generated.

A function has tried to guess what target bone should match each source bones, based on their names. However, it can be wrong!

The bones list must be carefully checked and set, either manually or from a preset.

- Preset:
  :   If the *Target* armature is an Auto-Rig Pro one, a preset may be used. [Presets](#remappresets) embedded with this add-on are made for traditional mocap skeletons, such as Mixamo, Rokoko, XSens, etc… For example, if the *Source* armature is from Mixamo, select the Mixamo preset.
- Manual:
  :   If no preset exists yet for the *Source* and *Target* armatures, the bones list must be set manually. It can be exported/imported as a new preset later.

      Check and modify if necessary the mapping, by changing the target bone for each source bone.

      It can be a tedious process for sure, but not hard at all. See this [video tutorial](https://drive.google.com/file/d/1ricqGXQ-U-e_MxifU50c9Tzz7v2oa1Ia/view?usp=sharing)

- Click this button to quickly select in the bones list the bone that is selected in the viewport:

### Presets

- The bones mapping (source and target bone names in the list) can be imported and exported with the **import/export** buttons.
- Built-in presets can be imported using the downarrow button. The default embedded presets are made for Auto-Rig Pro *Target* armatures, and traditional *Source* mocap skeletons such as Mixamo, Rokoko…
- The **Replace Namespace** is a search and replace function when presets have different prefix names than the current bone names (e.g: mixamorig:Hips > matthew:Hips)

### Bones Settings

#### Root Bone

**Set as Root**: Define this bone as the root bone, typically the first or second bone of the hierarchy (hips or pelvis).
Setting it as *Root* will retarget translation + rotation, while only rotation is used otherwise.

#### IK settings

**IK:** Useful for accurate feet and hands animations. It enables translation retargeting, and IK pole settings.

When retargeting to Rigify or similar control rigs, make sure to switch to IK mode the controllers of these rigs (e.g., foot, hands…). This is automatically performed for Auto-Rig Pro rigs.

*IK feet, no sliding*

*FK feet, noticeable sliding*

**Pole:** Pole bone of the IK chain. When retargeting, the IK pole position is calculated and this bone will be keyframed. If not set, the IK pole position is skipped.

**IK Pole Mode:** Defines how the IK pole should be evaluated.
:   **Absolute**: Evaluate the exact IK pole position based on the real IK pole vector as defined by the bones geometric plane. Ideal if the input skeleton has high quality, refined animation data.

    **Relative: Target** : The IK pole is treated as a child of the target bone (e.g the foot). Less accurate than absolute, but great if the source animation doesn’t comply with IK constraints requirement, such as broken geometric plane (stretched out leg, arm).

    **Relative: Chain**: The IK pole is treated as a child of the IK bones chain. Less accurate than absolute, but great if the source animation doesn’t comply with IK constraints requirement, such as broken geometric plane (stretched out leg, arm).

**IK World Space**: Use world IK coordinates instead of relative/local, works better under certain circumstances, for example if the character is spinning.

**Add IK Constraints:** If enabled, add automatically IK constraints to the target bones when retargeting . Should only be enabled for simple skeleton that are not rigged with constraints yet. Works if the target bones IK hierarchy is valid, e.g. foot parented to calf, calf parented to thigh bone.

**IK Axis Correc**: Axis used to correct IK bones alignment if necessary, in World Space coordinates. Typically, characters facing the Y axis should have this values set to Y. If facing X, set to X.

#### Others

**Location**: Click this checkbox to enable location retargeting in local space (relative to the parent bone).

This is especially useful for facial animation, when bones are animated in translation/location instead of rotation (e.g. eyelids, lips bones).

To adjust the strength of the location retargetting, use the **Interactive Tweaks** > **Location Multiplier** (see [Interactive Tweaks](#interactivetweaks))

### Armatures Rest Pose

- Make sure both source and target armatures are facing the same direction in rest pose: select them and enter Edit mode (Tab key) to check the rest pose. Retargetting is a picky technical process, things should be in a plain boring state to work properly. If they are not facing the same direction, rotate the whole armature object manually.

- Check the source armature rest pose: if it’s the same as the target armature rest pose (same arms, legs orientations), go to the next step. If not, see below:

From the picture above we can see the source armature, on the left, has a different rest pose than the target armature on the right (A-pose versus T-pose).
So we’ll need to redefine the rest pose of the source armature. No worries, it’s easy! We’re almost done, I promise.

- Click the **Redefine Rest Pose** button

- A pop-up menu will show. Tick the **Preserve** checkbox in order to maintain the current rest pose of the armature, but a new rest pose will be saved internally, hidden in the armature data. This is recommended to keep the armature untouched.

- Below are 3 parameters: **Rest Pose**, **Current Pose**, **Saved**.
  :   The first one *Rest Pose* will use the actual rest pose of the armature as the new base editable pose.

      The second one *Current Pose* will take a snapshot of the current pose as shown in the viewport and will use it as the base editable pose.

      The third *Saved* will backup the latest rest pose, if it was saved with this tool earlier.

The pose will remain editable until clicking **Apply**. This only defines the base pose to start with.

Select the bones that are not oriented like the target armatures bones (in this case the arms and legs) and click **Copy Selected Bones Rotation**, wich will copy the corresponding bone direction automatically from the target armature (may not work properly if the poses are too much different, in this case do this manually). Then click **Apply** to complete.

### Retargeting

Okay, here we are! Ready to fire the engine.

- Click **Re-Target** to transfer the animation.

If the bones list was all set with correct settings, and if the rest poses are OK => animation should have been transferred *nicely*!

If the source and target armatures have very different proportions, it may be necessary to apply some tweaks.

### Interactive Tweaks

Interactive tweaks are useful to adjust the bones rotation and position quickly after retargetting, to refine the result.

Note

It’s also possible to tweak the result using additive animation layers, called NLA strips in Blender. More informations in the Blender documentation.

And this add-on makes it even easier, highly recommended if you process a lot of mocap : [Animation Layers](https://blendermarket.com/products/animation-layers?ref=46)

Interactive Tweaks are per-bone settings. It means each bone can be tweaked independently.

Examples:

- After retargetting, the root/pelvis bone is too high, we need it lower: select the pelvis bone in the bones list, set the **Additive Location** value, and click **-Y** to move it along the Y axis downward (assuming this bone in your skeleton has its Y axis pointing up).

- When remapping facial animations, lips bones are moving too much: select a lip bone, set the **Location Multiplier** value to 0.5 to reduce motions by 50%, and click **Set**. Repeat the process for each lips bone.

- Click the **X** button next to **Interactive Tweaks** to revert all tweaks applied.

---

<!-- fuente: https://www.lucky3d.fr/auto-rig-pro/doc/ge_export_doc.html -->

# (Game Engine Export)

# Auto-Rig Pro — Game Engine Export

- Game Engine Export
- [View page source](_sources/ge_export_doc.rst.txt)

---

# Game Engine Export

[](_images/game_engine_header.jpg)
[](_images/godot_logo.png)

Warning

> **This warning only applies to older versions of Auto-Rig Pro. It was fixed in version 3.78.49**

To fix bind pose import issues in Unreal Engine:

the skeletal mesh and animations must be exported separately.

1) One FBX file containing the skeleton + meshes in rest/bind pose. No animations.

2) One or multiple FBX files containing the animated skeleton (+ the meshes in case of animated morph targets/ shape keys)

Or, use the “TO As Ref Pose” import setting, and always key the frame 0 of each animation in a rest pose

## Overview

- Once the character is rigged and skinned, select its armature and go to **File > Export > Auto-Rig Pro FBX/GLTF**
- Or, click the export button in the **Auto-Rig Pro: Export** tab

Two types of skeleton can be exported: **Humanoid** for human characters, **Universal** for any skeletons.

Shape keys are exported, with option to apply them on top of existing modifiers.

Full support in Unity, Unreal Engine, Godot, and probably other game engines supporting similar formats.

Important

GLTF requires Bender 3.4 and higher.

UE 5.5/5.6 don’t import GLTF morph targets and animations properly. Works in 5.7.

Note

Although it’s not officially supported, it’s still possible to export to other formats by importing back the file in Blender, and exporting with built-in Blender exporters (DAE for example)

## Export Requisites

### Scale

Ensure the character is not too small, or too big. Unit scale issues may lead to issues, such as bad animation retargeting.

One meter = one grid unit in Blender.

For best compatibility with the UE Mannequin, the character’s height should be about 1.80 meters.

- Scale the rig with **S key** if necessary. Initializing the armature scale values to 1 is not mandatory, it is performed on the fly when exporting.

- Make sure that the scene **Unit Scale** is normalized to 1:

### Custom Bones

[Custom Bones](auto_rig.html#adding-custom-bones) (new bones created in the rig manually, such as clothes, hair, props…) are not exported by default.
To export them, they must be tagged as custom bones:

- Select the custom bones and click the related button:

- Or, their name must starts with **‘cc\_’** (stands for custom controller, e.g. ‘cc\_sword’).
- Or, tag them with a **‘cc’** or **‘custom\_bone’** property, by adding a custom property to the bone

Note

As a rule of thumb, make sure to parent them directly deforming bones (in the Deform [Collection](rig_behaviour_doc.html#armature-layers)).

This said, the export function comes with built-in routines to retarget the parent: if they are parented to an FK bone, they will be parented to the deforming bone automatically at export time.

E.g, if *cc\_watch* is parented to *c\_forearm\_fk*, it will be parented to *forearm\_stretch* which is the exported deforming bone. If *cc\_hat* is parented to *c\_head.x*, it will be parented to *head.x*.

### Stretch - Scale

Stretching, scaling bones is not properly handled by the Fbx format, since the children bones always inherit the scale from their parent bones, leading to transform issues when scaling axes non-uniformly.
For this reason, either disable stretch deformations when animating, or follow the guidelines below:

No stretch:

- Make sure to set to zero out the **Auto-Stretch** and **Stretch Length** values of the arms and legs, and do not move the **c\_stretch** controllers (elbows, knees). Clicking **Fix Rig** in the export panel will perform these operations automatically.

If stretchy bones are required:

- Use the **No Parents** feature, see [Export Settings](#exportsettings), to flatten the exported hierarchy (bones will have no parent)
- Or, use the **Soft-Link** feature:

  Select deforming bones that are stretched (for example arm bones) and click **Set Soft-Link Bones**.

  This will preserve scale values to 1 (no scale), while keeping their actual stretched position. This especially works well with multiple twist bones (more than 2), giving the illusion that bones are scaled, while they are only translated.

### Preserve Volume

In game engines, dual quaternions skinning is generally not supported, unlike Blender does with the “Preserve Volume” feature in the armature modifier. Then, make sure to uncheck **Preserve Volume** in the armature modifier in Blender to see the effective deformations in game engines.

It is generally best to use multiple twist bones for the arms and legs, see [Arm Options](auto_rig.html#armsoptions)

### Shape Keys

Animations of shape keys are exported automatically.

Topology changing modifiers (e.g Solidfy, Mask, Subdivision Surface…), are supported by the **Apply Modifiers** feature in the **Misc** export tab.

- If a single animation is exported, it is possible to simply keyframe the shapes.
- However, the best practice is to create custom properties.

  In example, for facial shape keys, create them on the head control (c\_head.x), and setup drivers so that the properties drive the shape keys values (for example a property “smile” drives the “smile” shape key value).

  Right click the property > **Copy as New Driver**, then right click the shape key value > **Paste Driver**.

This way, the shape keys animations are stored in the same action as the control rig since they’re connected to the bone’s properties, allowing export of multiple actions/animations correctly.

Without properties, shape keyframes are stored in separate actions dedicated to shape keys, without any link declared between the rig action and shape keys action.

Blender 4.4 and higher versions do support shape keys as action slot, thus somewhat establishing the connection between the shape key animation and the rig animation, however this is not yet supported by the Auto-Rig Pro exporter. Also, if the action contains multiple slots for the rig animation, there is no way in that case to declare a link between them and the shape keys slots, then make sure to setup the properties method explained above to resolve all issues.

### Root Motion

#### Unity Humanoid

In Unity, root motion is automatically computed when importing **Humanoid** skeletons.

Unity evaluates the body orientation, center of mass on each frame to deduce root motion.

No extra export step required, settings can be adjusted in Unity.

#### Unity Generic and Unreal Engine

For Unity **Generic** skeletons and for **Unreal Engine**, the armature (rig) object itself must be animated, since this is the root node of the FBX file.

But animating the armature object is not practical, animating bones/controllers is easier and more streamlined.

Then, Auto-Rig Pro comes with an option to transfer and bake the **c\_traj** controller animation to the armature object at export time:

The **c\_traj** motion can either be animated manually, extracted, or constrained.

See [Extract Root Motion](rig_behaviour_doc.html#extractrootmotion), [Free Root Motion](#freerootmotion), [Constrained Root Motion](#constrainedrootmotion)

**Enabling Root Motion in Unity (Generic):**

- Set **Avatar Definition** to **Create From This Model**
- Set **Root Node** to **root**

  There used to be other settings to select a custom root bone in option, but in recent Unity version -2023 and higher- it seems broken.

**Enabling Root Motion in Unreal Engine:**

- Tick **EnableRootMotion** in the Animation window/ Asset Details:

#### Godot

To export root motion for Godot, in the export settings:

- Enable **Export Root Bone (c\_traj)**
- Enable **Godot Root Axes**

#### Root Motion Extraction

To extract the c\_traj motion from an animated rig, see [Extract Root Motion](rig_behaviour_doc.html#extractrootmotion).

#### Free Root Motion

By default, the IK feet and pelvis (**c\_root\_master.x**) controllers are parented to the **c\_traj** bone.
Animators may prefer to unparent them, so that **c\_traj** can move independently. To do so:

- Select the IK feet bones (**c\_foot\_ik**) and set their Child Of constraint influence to 0.
- Same for the IK poles (mute the constraints if their influence is driven).

- Select the **c\_root\_master.x** bone, enter Edit Mode (Tab key), clear its parent bone.

- **Edit Reference Bones** > select a spine bone, set the **Parent Fallback** to nothing in **Limb Options**, instead of **c\_traj**.

  This way, the parent won’t reset to **c\_traj** when Match to Rig.

- In option, consider adding a **Child Of** constraint to **c\_root\_master.x** with **c\_traj** as target, in order switch parent on the fly when animating, since constraints are animatable.

#### Constrained Root Motion

After freeing the **c\_traj** hierarchy as explained above, animators may also prefer automatic tracking using a constraint:

- Add a **Copy Location** constraint to **c\_traj**, with the rig and **root.x** bone as target
- Disable Z axis to keep it on the ground level

### Custom Master Bones

Sometimes, the game engines may require a specific skeleton hierarchy, with a dedicated root/master bone at the base.

- For example:

  ```
  MyRootBone
      L pelvis
          L spine...
  ```

In this case, follow these guidelines.

By default, Auto-Rig Pro will not export the **c\_pos** and **c\_traj** master controllers:

```
c_pos
    L c_traj
        L c_root_master.x
            L c_spine_01.x...
```

To add a custom master bone that will be exported, create a new bone ( *Tab key > Edit mode > Shift-A*) and insert it in the hierarchy as below (parent it to **c\_traj**, and parent **c\_root\_master.x** to it):

```
c_pos
    L c_traj
        L MyRootBone
            L c_root_master.x...
```

- Go to the **ChildOf** constraints of **c\_foot\_ik** and **c\_hand\_ik**, replace the target bone (c\_traj) with the new custom one
- Finally, register the new custom master as a [Custom Bone](#custombonesexport) for export.
- The exported hierarchy will be the following:

```
MyRootBone
    L pelvis
        L spine...
```

### Animations Export

#### Actions

In Blender, animations are called *Actions* and multiple actions can be created for a character.

By default, only the active action is exported.

Disable **Only Active** to enable or disable other actions.

#### Actions Linker

The **Actions Linker** is required only if multiple characters will be exported, and if they rely on each other.

For example, if two characters are holding each other’s hands, the hands are constrained with a ChildOf constraint.

In that case, to export properly, the actions of the two characters must be declared as linked, in the Actions Linker.

Example:

- Click **Actions Linker…** (**Show Advanced** must be enabled)
- Click the **+** button to add a new relation
- Under the **Rig A** label, set the armature of the first character, and under **Rig B**, set the other armature.
- Click the **+** button below to add Rig A’s action, and the corresponding Rig B’s action

#### Keyframes Interpolation

Bones animations are baked when exporting, one keyframe per frame, in order to export correct transforms out of the control rig that is driven with complex mechanics, constraints.
The default keyframe interpolation is set to Linear by default, which interpolates smoothly from one frame to the next.

For blocky animation style (stop-motion like), Constant interpolation can be used instead of Linear.

- For FBX, constant interpolation is supported as a per-bone setting (applied to all animations for the given bones), via the **Set Const. Bones** button in the export menu, that is applied to all selected deforming bones.
- For GLTF, set **Sampling Interpolation** to **Step** in the export settings.

## Check-Fix Rig

These tools are useful to identify and fix quickly possible problems with the rig, that would make it not compatible with export, especially bones stretch issues.

The **Check Rig** buttons only reports issues in a pop-up window, while the **Fix Rig** button will apply the following changes:

- Disable all possible arms and legs stretches (c\_stretch controller set to location 0, disable auto-stretch, set stretch length to 0…)
- Disable the *Preserve Volume* option of the armature modifiers of skinned meshes, to show the actual exported deformations in Blender.

This may change somehow the result, then it’s recommended to check that animations still look good in the scene, correct them if necessary.

## Export Types

Use the dropdown list at the top to select the target game engine:

- **Unity**
- **Unreal Engine**
- **Godot**
- **Others**

This will hide or show the export options dedicated to each engine.

Below, the export type can be selected:

- **Universal**: Exports the deforming skeleton for any creature: bipeds, quadrupeds, spiders, centaurs…
- **Humanoid**: For human, bipeds rigs only. Exports the deforming skeleton, plus the following options:

  > - Export basic or full facial bones. Automatic weights tranfer to the head if basic
  > - Metacarpal fingers: include or exclude them from export. Automatic weights transfer to the hand if disabled
  > - UE Mannequin bones axes orientation
  > - UE Mannequin bones naming
  > - UE Mannequin IK Bones
  > - Godot Humanoid bones naming

The Humanoid skeleton is required for animation retargeting, root motion in game engines…

The drawback of this type is it’s a predefined skeleton template. It can be more restrictive.

See [Unity Humanoid](#unityhumanoid)

## Export Settings

### Rig

#### Selected Objects Only

By default, all skinned objects are exported. If enabled, only the selected ones will be exported. Useful if you only need to export animation data for example (select only the rig), or specific meshes (select the rig + meshes).

#### Selected Bones Only

By default, all deforming bones are exported. If enabled, only the selected ones will be exported.

#### Full Facial

**[Humanoid Only]** Exports all facial bones, otherwise only the main ones are exported (jaw, eyes…) and facial bones weights that are not exported are transferred onto the head weights.

#### Advanced

Exports the bend/secondary bones (especially useful for cartoon characters to curve the arms, legs).

Note

Arms and legs **Secondary Controllers** are automatically exported if they’re set to **Twist** (see [Secondary Controllers](auto_rig.html#secondarycontrollers))

#### Push Additive

If **Secondary Controllers** are set to **Additive** mode, compensate the weight loss of the additive bend bones, since the additive armature is not exported.

#### Export Twist

Exports twist bones.

**Twist Amount**: A percentage can be defined to set the amount of twist. Generally 0.5 gives best results. This setting is only active if there is a single twist bone.

> 1.0
>
> >
> 0.5
>
> 
Note

Unity internally handles the hand twist by twisting the forearm bone without using a dedicated twist bone, unless an additional script/plugin is used to handle the twist bone.

#### No Parents

Natively, bone stretching/scaling is poorly supported when exporting, since the children bones always inherit the scale from their parent, leading to weird effects.

To workaround that, enabling the **No Parents** setting will export a flat hierarchy, bones are not parented, leading to correct stretchy animated bones.

#### Rename Bones

Not happy with the default bone names of Auto-Rig Pro? Gotcha.

Rename bones with custom names!

Create a .txt file, or write a new text block in the Blender’s Text Editor.

Then define the custom names by writing:

base\_name (default export name) = new\_name, one per line:

```
root.x = pelvis
spine_01.x = spine1
spine_02.x = spine2
...
```

This .txt file path must be set in the **Rename Bones from File** field in the **Auto-Rig Pro: Export** panel.
If the text was written in the Blender’s Text Editor, enter the name of the text block here:

#### Custom Export Script

A python script can be written to execute post-instructions on the export skeleton.

It is run after generating the export skeleton, and before baking actions.

Set the script file path in the **Custom Export Script** field in the **Auto-Rig Pro: Export** panel.

It can be a text datablock written with the Blender’s text editor as well, in that case enter the text name only.

Example to print bone names:

```
import bpy

rig_export = bpy.context.active_object
print(rig_export.name)

bpy.ops.object.mode_set(mode='POSE')

for pb in rig_export.pose.bones:
    print(pb.name)
```

Remove some bones from the skeleton:

```
import bpy

rig_export = bpy.context.active_object
to_delete = ['c_eye_target.l', 'c_eye_target.r']

bpy.ops.object.mode_set(mode='EDIT')

for bone_name in to_delete:
    b = rig_export.data.edit_bones.get(bone_name)
    rig_export.data.edit_bones.remove(b)
```

Note

The rig object name must not be changed with custom script. It’s defined by the [Rig Name](#rigname) setting in the Misc tab.
These custom instructions are “use it at your own risks”, they should be written carefully

#### Rig Name

Set the name of the exported skeleton.

For compatibility with the UE Mannequin, always set it to **root**.

Warning, to avoid name clashing, mesh objects names must all be different and cannot be named like the rig.

#### Units x100

Game engines like Unity, Unreal, have a different scale factor than Blender.

Units must be multiplied by 100 for correct compatibility.

Allows retargeting in Unreal, and initialized scale transform in Unity as well (1.0).

#### UE4 Legacy

**[Unreal Only]** Must be enabled when exporting to the older UE4 version. Metacarpal finger bones are not exported.

#### Rename for UE

**[Unreal Only]** Rename bones according to the Unreal Engine’s humanoid naming. Unity will handle the default names properly so this checkbox is not visible when Unity is chosen.

#### Mannequin Axes

**[Unreal Only]** Match the bones axes of the Unreal Mannequin.
If enabled, allows to directly import the skeleton as the Mannequin skeleton in Unreal.

- 4 spine bones and 1 neck bone are required to match the **UE4** Mannequin.
- 6 spine bones and 2 neck bones are required to match the **UE5** Mannequin.

It’s also best to export the character in A-Pose when exporting to UE, see [Changing the Rest Pose](auto_rig.html#changerestpose), but in latest UE versions, animation retargeting does not really depend anymore on the pose.

#### Root Motion

Transfer the **c\_traj** bone animation to the armature object animation (root node in Fbx file) when exporting, in order to support root motion in game engines.

See [Root Motion](#rootmotion) requirements for more details.

#### Add IK Bones

**[Unreal Only]** Add the Unreal Mannequin IK bones:

- **ik\_foot\_root**
- **ik\_foot\_l**
- etc…

### Animations

#### Bake Animations

Enable animation/action export. See [Animations Export](#exportactions) requirements for more details.

#### Type

Type of actions to export.

**Actions** will export individual actions

While **NLA** will export a single animation for the whole scene as defined in the NonLinearAnimation editor.

#### As Multiple FBX/GLTF Files

To export one file per action

#### One File per Actions List

[Only if the [Actions Manager](#actionmanager) is enabled]

If enabled, one file per **Action List** is exported. Each **Action List** (each file) contains a list of actions, as defined in the **Actions Manager**.

#### Frame Range

To define the frame range that will be exported for each action (start and end frames).

The **Markers** setting allows to export frames between two markers named **start** and **end** inserted at the desired frames in the action.

Important

Only works with **Action** markers.
To convert **Scene** markers to **Action**, select them and click the **Marker** menu > **Make Markers as Local**

#### Action Names

Set the formatting of exported action names.

The default name format is:

RigName|ActionName.

The default **|** separator can be changed in the dropdown list, such as **-** :

RigName-ActionName

**Only Action Name** will export only the name of the action, getting rid of the skeleton name.

#### Simplify Factor

Animations data can be huge, leading to write large files, because of the numerous keyframes values.

To mitigate this problem, this setting will compress/simplify the values at a given threshold.

Higher value will decrease the file size at the expense of the quality. Lower values are recommended to fix animation inaccuracies such as “floating” feet effects.

#### Actions Manager

If enabled, the actions manager will be used to define which actions are exported.

Actions can be grouped together in a list, and each list can be enabled or disabled for export.

Can be useful when having multiple characters in the same file: create one list of actions per character, and populate each list with the related actions belonging to each character.

Then, when eporting, only enable the corresponding group related to the selected character.

#### Only Active

To export only the current, active action linked to the rig.

#### Ignore Linked Actions

When linking rigs fom an external file, linked actions may be imported too, if the source rig file contains actions.

Linked actions can be a problem, because they cannot be edited, unless they are in an overridden state.

The “Exportable” checkbox that is stored on each action cannot be edited either. So, if this setting is enabled, it simply ignores and hides the linked actions to avoid problems when exporting linked actions.

#### Search field

To export only actions including the given keyword in their name.

E.g. setting “soldier” will export the action “soldier\_walk” but won’t export “john\_walk”. Useful when dealing with multiple actions in the scene.

Actions can be included/excluded from export by ticking or unticking the boxes, and removed from the file by clicking the **X** button.

### Misc

#### Global Scale

Apply a global scale to the exported character.

Warning

This may lead to issues in game engines, use it carefully. A safer option is to scale the armature and meshes manually before exporting.

#### Smoothing

Polygons smoothing options (normals data), **Normals Only, Face, Edge**.

Choose **Edge** to avoid import warning message in UE (the warning message is benign though).

#### Apply Modifiers

Apply modifiers when exporting. Supports topology changing modifiers (e.g Solidify, Bevel, Mirror…).

Shape keys + modifiers are supported. They are re-baked internally on top for correct export.

Warning

Modifiers are not allowed to change the amount of vertices on each frame, it must remain constant (such as a Bevel modifier that generate different vertices while the polygon angle is changing on each frame). If it does, the modifier will fail to apply when exporting.

#### Apply Subsurf Modifiers

Apply Subsurf modifiers when exporting.

#### Triangulate

Triangulate all polygons when exporting.

#### Vertex Colors

Set the vertex color space. Can be specific to game engines/shader used.

#### Fix Rotation

Add imperceptible jitter to bones position to avoid rotation issues when exporting animations.
Should be enabled only when necessary in case of buggy rotations, due to an inaccurate decimal value in the transform matrix evaluation.

#### Fix Matrices

Use an alternative method to evaluate bones matrices, to avoid rotation buggy issues when exporting animations.

#### Add Dummy Mesh

When no meshes are exported, only the skeleton, it can be useful to add an empty/dummy mesh object that has no vertices, no polygons, so that the animated skeleton can still be imported in game engines.

For example, Unreal Engine needs it, since it does not allow import of skeletons without meshes.

#### Force Rest Pose Export

By default the bind pose/rest pose is not exported if no meshes are exported along the skeleton.

This will force the export of the rest pose data anyway.

#### Initialize Fbx Armature Rotation

If the skeleton object has non-zeroed out rotations values in the game engine, and if this is a problem for your project, enable this setting.

#### Initialize Fbx Meshes Rotation

If the meshes objects have non-zeroed out rotations in the game engine, and this is a problem for your project, enable this setting.

#### Bake Axis Conversion

**[Unity Only]** Enables special axes and scale values when exporting, to comply with the Bake Axis Conversion attribute of Unity.

#### Bones Axes

Set custom primary and secondary axes of bones when exporting.

Should usually not be changed to avoid issues, unless specific axes are required by your game project for some reasons.

The primary axis in Blender is the bone’s Y axis, defined by the Head-Tail vector of the bone. The secondary axis is either the bone’s X or Z axis.

#### Embed Textures

Force textures to be embedded in the FBX file.

Important

May not work if shaders are different from a Principled BSDF shader, with simple textures connections.

## Export by Script API

To export by script, here are examples.

These snippets can be copy-pasted in the Blender text editor, then click **Run Script** in the editor header menu.

- Export a character:

  ```
  import bpy
  import os

  # set the file path output here
  file_output = "F:\\MyExportFbx.fbx"

  # set some settings...
  scn = bpy.context.scene
  scn.arp_export_rig_type = 'UNIVERSAL'# or 'HUMANOID'
  scn.arp_engine_type = 'UNREAL'
  # others...
  # scn.arp_keep_bend_bones = True
  # scn.arp_units_x100 = True
  # scn.arp_bake_actions = True
  # scn.arp_export_name_actions = True
  # scn.arp_export_name_string = "test"
  # scn.arp_mesh_smooth_type = 'EDGE'
  # scn.arp_ue_root_motion = True
  # scn.arp_export_noparent = True
  # scn.arp_export_twist = True

  # run export
  bpy.ops.arp.arp_export_fbx_panel(filepath=file_output)
  ```

- Batch export all selected rigs:

  ```
  import bpy
  import os

  character_names = [i.name for i in bpy.context.selected_objects]

  def set_active_object(object_name):
      bpy.context.view_layer.objects.active = bpy.data.objects.get(object_name)
      bpy.data.objects.get(object_name).select_set(state=1)

  for char_name in character_names:
      bpy.ops.object.select_all(action='DESELECT')
      set_active_object(char_name)
      # set the file path output here
      file_output = "F:\\"+char_name+".fbx"
      # export it
      bpy.ops.arp.arp_export_fbx_panel(filepath=file_output)
  ```

- Batch export character meshes as separate Fbx files (including the skeleton):

  ```
  import bpy
  import os

  mesh_names = ['Cube.001', 'Cube']# add your mesh object names to the list here
  rig_name = 'rig'# set here your armature name

  bpy.context.scene.arp_ge_sel_only = True

  def set_active_object(object_name):
      bpy.context.view_layer.objects.active = bpy.data.objects.get(object_name)
      bpy.data.objects.get(object_name).select_set(state=1)

  for mesh_name in mesh_names :
      bpy.ops.object.select_all(action='DESELECT')
      set_active_object(mesh_name)
      set_active_object(rig_name)
      # set the file path output here
      file_output = "F:\\"+mesh_name+".fbx"
      # export it
      bpy.ops.arp.arp_export_fbx_panel(filepath=file_output)
  ```

The export settings are located on the scene datablock (e.g bpy.context.scene.arp\_units\_x100).
Wrapping them into a custom function is possible for convenience, e.g:

```
def arp_export(output='', rig_type='UNIVERSAL', engine='UNREAL',..):
    # set parameters
    scn = bpy.context.scene
    scn.arp_export_rig_type = rig_type
    scn.arp_engine_type = engine
    # export...
    bpy.ops.arp.arp_export_fbx_panel(filepath=output)

arp_export(output='F:\\MyExportFbx.fbx', rig_type='HUMANOID')
```

## Unreal Engine Tips

### Import specifications

If the mesh have shape keys, importing with **Use TOAs Ref Pose** enabled may lead to incorrect blend shapes in Unreal.
If this happens, make sure to turn it off.

### Retargeting

#### Troubleshoot UE Anim Retargeting

Auto-Rig Pro features UE settings to export correct bone names and axes for UE, but this is only the first half of the work.
For best results, UE needs the imported character to have a very similar skeleton to the UE Mannequin skeleton.

When retargeting animations, UE will move and rotate the bones of the imported skeleton, so that they are close to the Mannequin skeleton.
Then, if there are important differences in the location and rotation of bones, the animations will suffer from them.

Typical issues reside in spine and shoulder bones.

Below is the UE Quinn skeleton for reference. Notice the spine and shoulders shape:

Now, the reference bones of our character look like this. We can see the spine and shoulders shapes are too far from the expected Quinn skeleton.
So they must be corrected!

After re-shaping the reference bones, animations will work out right of the bat in UE, without unexpected distortions.

Important

The character may be modelled in a pose that is too far from the UE Mannequin. In that case, it’s best to reshape the model too.

Note

Alternatively, retargeting can be improved by adjusting the translation type in UE. See the chapter below.

#### Retargeting Translation Type

As mentioned above, animations will retarget fine in UE, only if the imported skeleton and the UE skeleton are very similar.
If they are too different, try setting their translation type to **Skeleton**.
That will help to reduce undesired distortions.

- Display the retargeting options by clicking this in the bones tree:

Then set to Skeleton this property:

### Rotation Offsets

Sometime, because of differences in the rest position of the source and target rig, or because the animation itself contains artefacts, it’s necessary to apply rotation offset over the retargetted animation for better results.

It’s especially true for the fingers. Here is how to fix wrong fingers rotations of the ThirdPersonRun included in UE:

- Select and rotate the bones in the 3d viewport (animation window)

- Select all the bones you’ve modified in the Skeleton Tree:

- Click the **Key** cross button then the **Apply** button.

- Save your asset and you’re done!

### Control Rig

While there is no tool yet in Auto-Rig Pro that would generate a control rig in UE for any rigs, the UE default control rig can be attached to any humanoids skeletons easily.
Here is a quick example in UE 5.4, the workflow may differ in more recent versions though.

- Export the rigged character to FBX with UE Humanoid settings
- In a third person UE project, import it as a Mannequin skeleton
- Duplicate the default **Control Rig** asset

- Open the duplicated Control Rig, and change the preview mesh to the imported character, save it

Animation editing and baking:

- The control rig can now be dragged and dropped in the 3D viewport. The Sequencer window should automatically open after dropping it.
- Click the **+** button next to the *Animation* track, to add an existing animation, for example a walk cycle
- Mute the ControlRig track, then the animation should show and play without the control rig

- To bake the animation to the control rig, right click the top control rig track > **Bake to Control Rig** > select the duplicated asset

- Done, but it may be necessary to mute the animation track to show the baked animated control rig

## Unity Tips

### Humanoid System

Unity’s Humanoid rig comes in very handy when retargeting animations to multiple characters.
However, there are certain drawbacks when compared to Generic rigs:

- Does not support extra bones by default. For example, only the jaw and eye bones are supported as facial bones. To add more, extra steps are required using masks (see Unity documentation, [forum](https://discussions.unity.com/t/humanoid-rigs-and-extra-bones/601395/2)).

- No twist bones. Arms and legs twist bones are not natively supported, leading to poorer deformation when twisting arms/legs. However, they can be handled with additional code, plugins.
- The skeleton is automatically set to a reference T-pose. This may lead to slight offsets in bones rotations.

### Skin Weights

In Unity, the **Skin Weights** setting in the **Quality** panel defines the maximum number of deforming bones per vertex.
This is useful to keep high realtime performances since too many deforming bones can slow down calculations.
However, this may lead to bad deformations, if this value doesn’t match the number of deforming bones in the Blender rig.
For example, if some vertices are deformed by 5 bones while the Unity limit is set to 2, this is going to lead to some serious deformation issues.

- If you’re concerned with in-game performances, then make sure to keep the **Skin Weights** value to 4 bones or less.
  :   In Blender, ensure vertices have no more than 4 deforming bones.
      This can be automatically done with the [Limit Total Vertex Groups](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/cleanup.html?highlight=limit%20total#limit-total-vertex-groups) setting. Then ensure deformations are still correct after this, and tweak weights if necessary.

- If performances are not a deal breaker, set **Skin Weights** to **Unlimited** in Unity to ensures all weights are taken into account

---

<!-- fuente: https://www.lucky3d.fr/auto-rig-pro/doc/auto_rig.html -->

# (Auto-Rig / rigging)

# Auto-Rig Pro — Auto-Rig (rigging)

- Auto-Rig
- [View page source](_sources/auto_rig.rst.txt)

---

# Auto-Rig

## Overview

Important

The DO NOTs!

- **Do not delete** any objects or bones that Auto-Rig Pro has generated
- **Do not rename** Auto-Rig Pro bones
- **Do not edit the bones collections, hierarchy**

… It would break Auto-Rig Pro *and generate earthquakes*.

## Setup

### Setting up the model

- The character model must be in the center of the world (0,0,0) (as if he is… the master of the world!)
- It must face the -Y world axis. It means the face and feet must point toward the front view (numpad 1). This orientation is a common standard when rigging 3D character.

  Rotate it by 90° steps if it’s not (**R** key to rotate, then **Z** key to select the Z axis, then type **90** on numpad keys).

Note

You can also use the **Turn** buttons of the **Smart** tools to rotate the model, so that it faces the camera (read below the Smart tool instructions).

- (Optional) Initialize the mesh transforms for a clean start: **Ctrl-A > Position, Ctrl-A > Rotation & Scale**

### Add the Armature

- To rig humanoids quickly with the Smart feature, skip this and go to: [Smart](#smartfeature)
- Press **N key** to enable the properties panel in the 3d view right area.
- Look for the **ARP** tab

- Press the **Add Armature** button in the Rig tab.

- Choose a rig preset in the list (Human, Dog…)

  This documentation covers **Human** rigs only, but the same principles apply to the other types (Dog, Horse…).
- To rig creatures that are not contained in the presets list, select the **Empty** preset, then add limbs one by one: arm, leg, spine… by clicking the **Add Limbs** button.

---

## Smart

The Smart feature is useful to quickly place the reference bones within a few clicks.

- It only works with humanoids. If the character is not, skip this and go to: [Rig Definition](#rigdefinition)

Note

**Smart requirements**:

- The character can be in **T-Pose** or **A-Pose**

For best results with fingers detection:

- Fingers spread apart
- The palm must face the floor
- Not too low-poly

### Mac Warning

Warning

A small percentage of Mac users have reported crashes when setting up the markers, due to a graphical memory leak on certain Mac systems.

These issues could not be reproduced locally on a MacBook Pro 2020 (Intel) and a Mac Mini M2, consequently they seem to be tied to specific Mac settings.

If this happens to you, tick **Disable Smart FX** in the addon preferences, or tick the checkbox when prompted in the Smart menu. The markers will be replaced by safe Blender’s Image objects instead of using the GPU API, preventing any issues.

### How to use

- **Facial [Optional]**: To setup facial, the eyeballs must be a separate object (one for both or two). If they’re not, select their vertices (press **L** key to select all linked vertices) and **P** key to separate. In option, the teeth and tongue can also be separate objects for better results.

- If the ARP panel is not visible at the right of the viewport, press **N** key to show it. Then look for the **ARP** tab, **Auto-Rig Pro: Smart** menu.

- Select all of the body objects. Avoid selecting props, clothing objects if they’re not necessary.
- Click **Get Selected Objects** in the **Auto-rig Pro: Smart** panel

The camera will frame the character in front view.

- If the character doesn’t face the camera, you can use the **Turn** arrow buttons to rotate by 90° steps

#### Guess Markers

An AI model has been implemented in option, to setup automatically the markers.

Note

*AI files must be installed, see* [AI files (Smart tool)](install.html#aiinstall)

Only for symmetrical characters for now.

It is expected to work with usual characters, but the results may not be accurate with stylized, original character shapes.

Refine the position of the markers manually if they’re incorrect.

#### Without Guess Markers (manual)

- **Mirror** is enabled by default for symmetrical characters: the left markers/bones are mirrored to the right (right from the character’s perspective, screen-left). If the character is not symmetrical, uncheck it.
- Add markers: click the **Add Neck** button. A new circle shaped marker is added, move the mouse cursor to position it at the root of the neck, and repeat until all markers are set

---

#### Fingers

- Set the number of fingers of the character:

Two engines are available to detect fingers joints:

- AI
  :   (*AI files must be installed, see* [AI files (Smart tool)](install.html#aiinstall))

      It’s a good all-rounder solver. It can solve complex topology cases such as intricated geometry (robots, ball joints…). It may still fail though with complex, weird fingers.

      Click **Guess Fingers** to predict the fingers joints and tweak them if necessary.

      Or, just click the **Go!** button to start the whole process, including fingers.

- Voxel Centroid
  :   Works best with slick, simple fingers shapes. But is more fragile and prone to error when something goes wrong during the voxelization process.

      It is run automatically when clicking the **Go!** button

Note

**Fingers detection failure**:

The fingers recognition should run fine with most characters, however it may fail sometimes.

When using AI engine, try increasing the **AI Samples**, and decreasing the **Error Threshold** to allow more tolerant predictions.

When using Voxel Centroid, try increasing **Finger Thickness** if the fingers are thicker than average human fingers, and tweak **Voxel Precision**.

If it still does not work, something unexpected in the hands design prevents the detection to work.

Consider placing the fingers manually: [Positionning the Reference Bones](#editref).

---

#### Facial

[Facial markers](https://youtu.be/28gJhqCQyxE?t=38) can be set up to rig the face.

- Push the **Add Facial** button

- Position the markers vertices:

- Enter the eyeball object name in the dedicated input field

- Other optional teeth and tongue objects can be set to position the bones more accurately, and help automatic skinning later.
- Click **OK**
- Click **Go!**

After a few seconds, the references bones should be properly positionned on the model.

Refine manually if necessary.

## Rig Definition

### Limbs Setup

It is now time to configure and define the skeleton.

- Select the armature object
- If you don’t use **Auto-rig Pro: Smart**, first scale the armature object so that it fits the character height
- Show the ARP interface: press **N key** to display the properties panel at the right of the viewport, look for the **ARP** tab
- **Auto Rig Pro** > **Rig** tab > click **Edit Reference Bones**

Tip

Reference bones can be edited anytime after the rig completion by clicking **Edit Reference Bones** again

- Limbs can be added one by one using the **Add Limb** button.

### Biped - Multiped

For quadrupedal creatures (dog, cat, horse…), switch to **Multi-Ped** type instead of the default **Biped**.

As Biped, the spine controller shapes are oriented vertically. As Multi-Ped, their orientation is free, since a quadruped/multi-ped stands with his “hands” on the ground.

This setting only affects the visual shape though, the actual bones may be oriented in any directions.

Note

[Dog Rig](https://youtu.be/Xm2ng33Io6I) tutorial by CGDive.

---

### Limb Options

Limbs have various options to fit… various needs!

To access options of a limb, select a bone from it and click **Limb Options**. For example, select an arm bone and click **Limb Options** to enable or disable the fingers.

To disable, add or duplicate a specific limb, see chapter [Duplicate - Disable Limbs](#duplilimb)

### Head Options

#### Skulls

Add skulls controllers to manipulate independently:

- the lower facial bones **mouth, jaw** with **c\_skull\_01**
- the mid facial bones **nose, eyes, eyebrows** with **c\_skull\_02**
- the **top of the head** with **c\_skull\_03**

---

#### Facial

Global switch to turn on and off all facial controllers.

There are typically two routes to rig facial: bones or shape keys.
And for edgy riggers, mixing bones and shape keys is an option too!

- **Bones**:
  :   Ideal for high-end rigs and animations, because it allows fine control over the facial expressions, highly customizable.

      But this is not ideal for game engines because of the numerous bones that will impact realtime performances. When choosing bones, make sure to enable most of the facial controllers/setings below in the facial **Limb Options** menu.
- **Shape Keys**:
  :   Ideal for game engines purposes. This is generally lighter than a full bones facial rig, will comply easily with game engines.

      Shape keys are sculpted facial expressions that will deform vertices when enabled (e.g. smile, jaw open, blink shape keys…).

      When choosing shape keys, it is not necessary to enable the facial options below. Shape keys must be created manually, and driven by custom properties (see [Shape Keys](ge_export_doc.html#shapekeysexport) export).

      Alternatively, they can be driven by controllers, for example the “open\_jaw” shape can be driven by the jaw controller position. In that case, the facial settings/controllers can be enabled, but the facial bones should not deform the mesh -make sure to remove any facial vertex groups, the whole head should be skinned to the *head.x* bone.

#### Eyebrows Right, Eyebrows Left

Enable or disable the eyebrow bones

#### Eyebrow Masters

Add master controllers (yellow boxes in the Gif below) at the root and tip of the eyebrow, to ease eyebrow posing

#### Soft Eyebrows

Eyebrow bones will move “softly” when moving the main controller (c\_eyebrow\_full).

The influence is strongest at the root of the eyebrow, and decreases toward the tip.
The **Linear** setting below defines the curvature of the eyebrow line, when moving the main controller.
-1 = Very curved, 1 = Straight

The **Soft-Rigid** setting defines the amount of the soft effect.
0 = totally soft, 1 = hard (same as disabling **Soft Eyebrow**)

The influence can be tweaked by modifying the custom property **eyebrow\_soft** located on the reference bones.
This value will be applied when **Match to Rig**.

1 = normal, 0 = no influence.

#### Eyelids Tweak Controllers

Add a controller in the upper and lower eyelids areas, to control the shape/curviness

#### Eyelids Amount

Number of eyelid bones per upper/lower eyelids.

Example below with Eyelids Amount set to the very high amount of 16:

16 upper eyelids, 16 lower eyelids, 2 corners

For full bones facial rigs, a good practice is to create one eyelid bone per vertex.

Eyelids should have identical numbers of vertices for the upper and lower eyelids.

This brings maximum control over the deformations of the eyelids shapes, when defining the [Blink Pose](#blinkpose)

#### Eyelids Masters Freq

In case of numerous eyelid bones, eyelid masters are useful to drag multiple bones at once.

This value defines the interval between two master bones.

1 = No masters (adding one master per bone would not make sense…)

2 = One master every 2 bones

3 = One master every 3 bones…

Below is an example with **Eyelids Masters Freq** = 2.
One master (yellow box) is added every 2 bones, influencing 2 other neighbour eyelids:

#### Eye Targets Distance

Adjust the eye target controller (**c\_eye\_target.x**) distance from the head.

#### Align Eyelids

If on (default), **c\_eyelid\_top/bot** controllers are always aligned automatically when clicking **Match to Rig**.

If off, only the head of these bones is aligned, the tail remains free. Useful to give custom rotation/scale to eyelid controllers.

---

#### Mouth

Global toggle to enable or disable all mouth features.

#### Lips Offset Controller

Add a lips offset controller, to move all lips bones at once.

#### Muzzle Controller

Add a muzzle controller, to move the whole mouth + nose (optional) together.
Typically useful for animals.
The nose bones remain parented to the head or skull\_02 bones, they are dragged with the muzzle controller through constraints.

#### Lips Roll Constraints

Add lips roll constraints so that lips bones will rotate automatically when moving the c\_lips\_roll\_top/c\_lips\_roll\_bot controllers.
The constraints influence will decrease smoothly as the bones are located closer to the mouth corners.

Tip

The **roll\_speed** property located on lips reference bones can be adjusted to fine tweak the roll influence for each lip bone

#### Lips Roll Speed

Global factor to adjust the amount/speed factor of all lips bones when moving the **c\_lips\_roll\_top/c\_lips\_roll\_bot** controllers.

#### Lips Amount

Number of lips bones per quadrant, excluding middle and corner bones.

Lips Amount set to 7

When this value is changed, the lips reference bones positions will always be reset, in a grid alignment shape.
To force the grid alignment, enable **Update Transforms** next to it.

#### Lips Masters Freq

Interval between two lips masters.

If set to 1, no masters are generated.

If set to 2, a lip master will be generated every 2 bones, if set to 3 every 3 bones, and so on.

Lips Masters Freq set to 3

The lips masters controllers will softly drag the lips bones around them when they are translated or rotated:

#### Linear (Masters)

If set to 0, the masters will drag the lips bones with a smooth interpolation.

If set to 1, linear interpolation.

Linear (Masters) set to 0

Linear (Masters) set to 1

#### Soft Lips

Enable lips elasticity effect for more natural deformations when opening the jaw (**c\_jawbone**) or moving the corners (**c\_lips\_smile**)

#### Linear Y

Adjust the curvature of the lips shape, when moving vertically the corner (**c\_lips\_smile**)

-1 = Very Curved

0 = Curved

1 = Linear/Straight

#### Linear Z

Adjust the curvature of the lips shape, when moving horizontally the corner (**\_lips\_smile**)

-1 = Very Curved

0 = Curved

1 = Linear/Straight

Tip

Additionally, the effect can be tweaked by modifying the custom properties located on the lips reference bones, from -1 to 1.

Applied when **Match to Rig**

#### Linear (Jaw)

Adjust the curvature of the lips shape, when opening the jaw.

-1 = Very Curved

0 = Curved

1 = Linear/Straight

#### Limit (Corners/Jaw)

Limit the soft lips effect to a specified range near the mouth corners.

0 = no limits.

Limit (Corners) set to 3, then 0 (infinite, reaching the middle lips bones)

Limit (Jaw) set to 3, then 0 (infinite, reaching the middle lips bones)

Tip

The **autolips** property located on lips controllers can be adjusted after **Match to Rig**, when posing the character, to increase or decrease the jaw influence when moving the **c\_jawbone** controller.

#### Soft Lips: Visual Only

The soft lips effect will be only visual, it won’t deform except the lips corner. Useful when using shape keys as lips deformations.

#### Sticky Lips

The lips will remain sealed when the jaw is moving up, acting as if the upper lips are colliding with the lower lips.
After **Match to Rig**, there are additional settings in the **Rig Main Properties** tab to control the effect, see: [Lips](rig_behaviour_doc.html#lipssettings)

---

#### Soft Cheeks

Fore more natural deformations, the cheek bones can simulate elasticity if **Soft Cheeks** is enabled.

Two cheek reference bones are added:

- **cheek\_push\_ref**, located inside the mouth, pointing at the main cheek bone. Can be tweaked to define the direction that the cheek should be pushed toward (+Y axis)

- **cheek\_pole\_ref**, should be positioned on the skin, in the the middle of the eyes and the ear (cheek bones area) for best results

---

### Neck Options

#### Count

Number of neck bones

Note

To export to Unreal Engine as a humanoid rig:

- 1 neck bone is required to match the UE4 Mannequin
- 2 neck bones are required to match the UE5 Mannequin

#### Twist Bones

Add neck twist bones, for better deformations when the head twists (rotates along the Y axis).

#### Bendy Bones

Use multiple bendy bones segments to smoothen the neck twist deformation

Important

Warning, Bendy-Bones are unfortunately not export compliant! Should be used for internal Blender projects only.

---

### Spine Options

#### Count

Number of spine bones, from 1 to 64.

Note

To export to Unreal Engine as a humanoid rig:

- 4 spine bones are required to match the UE4 Mannequin skeleton (1 pelvis + 3 spines)
- 6 spine bones for UE5 Manny/Quinn skeletons (1 pelvis + 5 spines)

#### Spine Master Controller

Add a spine master controller to rotate and move all spine bones at once, with optional Stretch and Squash effect.

#### Space

**Local** space rotates spine bones from their true pivot when rotating the master controller.

**Spine Master** space rotates spine bones from the spine master controller, then a translation is applied when rotating.

#### Bottom

Add two bottom (buttock) bones at the left and right sides.

#### Align Root Master

Align the **c\_root\_master** bone automatically when **Match to Rig** if enabled.

If disabled, let it free, allowing manual alignment in Edit mode after **Match to Rig**.

#### Align Bend Controllers

Likewise, for **c\_spine\_bend\_xx** bones.

#### Reversed Spine

If enabled, a switchable reversed spine chain is added.

The default spine chain hierarchy works in a *forward* mode:
this means that when rotating the first spine, the second spine will rotate too since it is a child of the first spine, and so forth.
While the reversed spine chain works the opposite way, the tip of the spine is the root of the chain, and the second to last bone is the child, and so forth.

While it’s not common, the reversed spine can be nonetheless the only way to animate some gymastic motions properly.
For example, when the body is hanging from a bar, with the two hands attached to it, the rotation should originate from the chest:

The reversed spine mode is switchable, this means it can be disabled or enabled on the fly when animating, with automatic snap tools as well (like IK-FK) to switch between forward and reversed mode.

#### Update Existing Vertex Groups

This allows to automatically rename the vertex groups of all skinned meshes, so that the changes in the spine *Limb Options* won’t break the previous skinning. If disabled, a manual re-bind may be necessary after changing the options, since the deforming bones names may have changed.

Note

The Spine limb can be replaced with an **IK Spline** for rubber style, stretchy effects. See [Spline IK Options](#splineikoptions)

---

### Arm Options

#### Arm FK Lock-Free

Add an **Arm Lock** setting to the FK upperarm controller, to switch parent space. See [Arm FK Lock](rig_behaviour_doc.html#armfklock)

#### Twist Bones

Number of twist bones.

- If the rig is not exported to game engines, 1 can be enough since the Blender armature modifier handles dual quaternions skinning (**Preserve Volume**).

  Multiple twist bones are still recommended for cartoon rigs, when using **Twist** as [Secondary Controllers](#secondarycontrollers) to curve arms and legs
- When exporting to game engines, multiple twist bones are recommended for best deformations (3 is a good start) since **Preserve Volume** is not supported by game engines.

  Multiple twist bones totally solve the candy paper wrap issue when twisting hands or feet. Above one twist bone, below 4 twist bones in Unreal Engine, notice the shrinking issue:

- However, 1 twist bone is required to match the Unity’s humanoid rig.

  Unreal’s humanoid rig support multiple twist bones.

#### IK Pole Distance

Adjust the IK pole controller default distance from the elbow:

#### Soft IK

This setting helps to avoid the typical elbow “pop” when the arm is switching from stretched-out to flexed pose.

Note

Do not enable this setting if the rig must be exported later, prone to error.

There are unfortunately drawbacks when it is enabled: the bones will be slightly stretched by default, **Auto-Stretch** will always be enabled, and IK-FK snap won’t match perfectly

#### Auto IK Roll

Automatically align IK bones axes for coherent rotation axes and perfectly lined up IK pole.
If disable, the IK bones roll can be freely set. It’s recommended to keep it enabled, but in case the model has special arms rotations, it can be useful to disable it.

#### Hand IK Offset Controller

Add another hand IK controller, as a child of the main one:

```
c_hand_ik
    L c_hand_ik_offset
```

Useful to layer animations/keyframes on two different controllers, e.g: the main controller is used for global positioning, while the offset is used for subtle motions (shaking, fine-tuning…)

#### Hand IK Pivot Controller

Add a hand pivot controller, to rotate the hand from a custom pivot point, that can be adjusted live when animating.

#### Rotate Fingers from Scale

Fingers phalanges can rotate when scaling the first one.

Set this parameter to either rotate all three phalanges, only the last two, or none.

Note

This is strictly an FK setting, IKs fingers don’t comply with it.

#### Fingers Shapes

Default shape for the fingers controllers: boxes, circles

#### Fingers

Add fingers (thumb, index, middle, ring, pinky)

#### Fingers IK-FK

If **Fingers IK-FK** is enabled, IK chains will be generated for each fingers.

They come with IK-FK switch and snap settings, and all tools dedicated to manipulate IK fingers.

See [Fingers IK-FK](rig_behaviour_doc.html#fingersik-usage)

- **IK Parent**: Parent bone of the IK target controllers (**Child Of** constraint)
- **Pole Parent**: Parent bone of the IK pole controllers (**Child Of** constraint)
- **IK Root Shape**: Custom shape of the IK Root target controller, located at the root of the third phalange
- **Pole Shape**: Custom shape of the IK Pole controller, located above the second phalange bone
- **IK Pole Distance**: Distance from the second phalange to the IK pole

For fingers IK to work properly, it’s best to make sure that finger bones (reference bones) are slightly curved upward. Otherwise, the IK direction will be inverted and fingers can fold in the wrong direction:

*Correct fingers curvature*

*Wrong fingers curvature that leads fingers to fold in the wrong direction*

---

#### Joints Fans

**Joints Fans** are secondary bones, dedicated to hold volume in the elbow and wrist areas.

Useful for accurate control over the deformations in these areas.

And especially true if the **Armature** modifier’s **Preserve Volume** setting is disabled, or when exporting to game engines that only support linear skinning, leading to shrink volume.

An arbitrary amount of bones can be set between 1 and 32.

Elbow In and Elbow Out enabled

**Bulge:** A bulge effect can be applied to the joints, to expand or shrink as the bone rotates.

- If **Set** is enabled, the bulge constraints values are set automatically when clicking **OK**. If disabled, the values remain untouched, they can be freely edited manually after **Match to Rig**.
- The bulge effect can be either **Location** based (translating the bone on its Y axis), or **Scale** based (stretching the bone along its Y axis).

Bulge enabled in Location

#### Wings

Add feathers bones to the arm, forearm and hand bone.

Note

Make sure to check this [Wings Video Tutorial](https://youtu.be/phYsIRXrsF0), brought to you by the amazing **CGDive**!

- **Arm Feathers**: amount of feathers tied to the arm bone
- **Forearm Feathers**: amount of feathers tied to the forearm bone
- **Hand Feathers**: amount of feathers tied to the hand bone
- **Feather Subdivisions**: amount of bones per feathers, to curve its shape (example below with 4 subdivisions)

- **Feather Layers**: Amount of layers/rows of feathers, on top of each other (example below with 3 layers)

- **Update Existing Feathers Transforms**:

  If enabled, update existing reference feather bones transforms when clicking the **OK** button (grid align).

  If disabled, existing feathers won’t move: useful to add new feathers while preserving existing ones.
- **Parent Feathers Layers**:

  If enabled, feathers layers will parented to each others.

  If disabled, feather layers move independently.
- **Add Wings Fold Controller**:

  Add a controller to fold the arms and feathers by scaling it.

  Requires an action containing **rig\_wings\_fold** in its name, rest pose at frame 0, folded pose at frame.

  Example below:

Note

- Create a new action named **rig\_wings\_fold**
- Keyframe arm and feather bones controllers in reset pose (rest pose) at frame 0, folded pose at frame 10
- Click **Edit Reference Bones**
- Select an arm bone and click **Limb Options**
- Enable **Add Wings Fold Controller**
- Click **OK**
- Click **Match to Rig**
- You can now unlink the **rig\_wings\_fold** action from the rig and test the controller by scaling it

**Naming**:

Feather bones are named this way:

```
bone_type + 'feather' + feather number + layer number + subdivision number + side
```

For example: **c\_hand\_feather\_02\_03\_02.l**

---

### Leg Options

#### Thigh FK Lock-Free

Add a **Leg Lock** setting to the FK thigh controller, to switch parent space.

See [Leg FK Lock](rig_behaviour_doc.html#legfklock)

#### Twist Bones

Number of twist bones.

- If the rig is not exported to game engines, 1 can be enough since the Blender armature modifier handles dual quaternions skinning (**Preserve Volume**).

  Multiple twist bones are still recommended for cartoon rigs, when using **Twist** as [Secondary Controllers](#secondarycontrollers) to curve arms and legs
- When exporting to game engines, multiple twist bones are recommended for best deformations (3 is a good start) since **Preserve Volume** is not supported by game engines.

  Multiple twist bones totally solve the candy paper wrap issue when twisting hands or feet.
- However, 1 twist bone is required to match the Unity’s humanoid rig.

  Unreal’s humanoid rig support multiple twist bones.

#### Soft IK

This setting helps to avoid the typical knee “pop” when the leg is switching from stretched-out to flexed pose.

Note

Do not enable this setting if the rig must be exported later, prone to error.

There are unfortunately drawbacks when it is enabled: the bones will be slightly stretched by default, **Auto-Stretch** will always be enabled, and IK-FK snap won’t match perfectly

#### Auto IK Roll

Automatically align IK bones axes for coherent rotation axes and perfectly lined up IK pole.

If disable, the IK bones roll can be freely set. It’s recommended to keep it enabled, but in case the model has special legs rotations, it can be useful to disable it.

#### Foot Roll Break

If enabled, the foot will rotate first from the **ball** pivot when raising the c\_foot\_roll\_cursor, then from the **tip** toes pivot when reaching a given value.

Settings can then be adjusted live when animating, in the Rig Main Properties tab, see [Foot Roll Break](rig_behaviour_doc.html#footrollbreak)

#### 3 Bones Leg

If enabled, add an extra bone at the root of the chain, typically used to rig quadrupedal, digitigrade creatures (dogs, cats, T-rex…)

- **Type 1**: Comes with an IK rotation controller at the root of the chain (**c\_thigh\_b**), and togglable 2-3 bones IK chain, see ([Legs 3 Bones](rig_behaviour_doc.html#ikbones))

- **Type 2**: The IK rotation controller is located at the calf joint, and extra stretch controller for the upper thigh. IK Stiffness settings can be defined live when posing the character, to adjust the IK chain response.

#### Smart IK Pole

By default, the leg IK pole is simply parented (**Child Of** constraint) to the foot, which can cause leg flips, undesired results when rotating the foot up and down.

By using more sophisticated mechanics, the Smart IK pole option is useful to steady the IK pole position when tilting the foot.

Note

The IK pole can also be unlocked when animating, so that it doesn’t follow the foot at all.

See [Snap Pole Parent (IK only)](rig_behaviour_doc.html#snappoleparent)

#### Foot IK Offset Controller

Add an extra IK controller for the feet, acting as another layer of control as a child of the main one.

Useful to layer animations/keyframes on two different controllers, e.g: the main controller is used for global positioning, while the offset is used for subtle motions (shaking, fine-tuning…)

```
c_foot_ik
  L c_foot_ik_offset
```

#### Foot IK Pivot Controller

Add a foot pivot controller, to rotate the foot from a custom pivot point, that can be adjusted live when animating.

#### Toes IK-FK

Enables IK-FK chains for toes.

Additional settings to set the IK pole distance from the toes, and IK-FK switch default value.
Useful for quadrupedal creatures walking on toes, birds…

For toes IK to work properly, make sure that toes reference bones are slightly curved upward or downward.
Perfectly straight chains will prevent IK constraints from working at all.
For example, for birds you generally want to curve the toes phalanges downward so that the toes bend properly when raising the foot:

The toes direction can also be inverted on the fly when animating using the **Invert IK Dir** setting:

#### Toes (individuals)

Add individual toes bones (thumb, index, middle, ring, pinky)

#### Toes Metatarsal

Add metatarsal toes bones, that is the root bone before the first toe phalange.

Also adds automatically a **pinky\_auto** bone that rotates all metatarsal along (similar to fingers)

#### Toes Parent Foot

Parent the metatarsal to the foot instead of the default main toe bone.

Relevant for quadrupedal creatures walking on toes, birds…

Leads to natural toes motion when IK is on, and when raising the IK foot with **c\_foot\_01**

#### Toes Pivot Controller

Add a controller to rotate the whole foot from the ball

#### IK Pole Distance

Adjust the IK pole controller distance from the knee.

#### Joints Fans

**Joints Fans** are secondary bones, dedicated to hold volume in the thigh/buttocks and knee areas.

Useful if the **Armature** modifier’s **Preserve Volume** setting is disabled, or when exporting to game engines that only support linear skinning.

An arbitrary amount of bones can be set between 1 and 32.

**Bulge:** A bulge effect can be applied to the joints, to expand or shrink the deformations as the bone rotates.

- If **Set** is enabled, the bulge constraints values are set automatically when clicking **OK**.

  If disabled, the values remain untouched, they can be freely edited manually after **Match to Rig**.
- The bulge effect can be either **Location** based (translating the bone on its Y axis), or **Scale** based (stretching the bone on its Y axis).

Knee Out Bulge, location based

---

### Tail Options

#### Count

Set the amount of tail bones.

#### Master Controller at Root

Set the tail master controller, which rotates all tail bones at once, at the root position of the tail.

---

### Ear Options

#### Count

Set the number of ear bones.

---

### Spline IK Options

**IK Splines** are dedicated to rig ropes, tentacles…

They can also replace the default **Spine** and **Neck** limbs, if you need something more stretchy and IK based. Practical examples are explained lower on this page.

A **Spline FK** chain can be added on top of the IK, see options below.

- **IK Spline Count**:

  Number of bones in the IK spline chain
- **Bendy Bones Count**:

  Number of bendy-bones per bone, to smooth out deformations

Warning

Bendy-Bones are not exportable

- **Curve Smoothness**:

  Increase or decrease the curve smoothness

  Decreasing it is advised if spline bones end up having different locations between rest/pose position due to NURBS smoothing.

  A good practice is to always rig with straight chains (straight tails, straight ropes…) to avoid such issues.
- **Name**:

  Name of the Spline IK limb, affecting bone names
- **Side**:

  Define the side (middle **.x**, left **.l**, right **.r**) of the chain, by renaming bones with the chosen suffix.
- **IK-FK Chain**

  Generate an FK chain as well if enabled, with IK-FK switch and snap settings.

  See [Spline IK](rig_behaviour_doc.html#splineiksettings)

- **Update Vertex Groups**:

  Automatically rename the vertex groups if any, so that it’s not necessary to re-bind the mesh.

  For example, when enabling **IK-FK Chain**, the deforming bones names will be different from the previous names when **IK-FK Chain** is disabled, then this setting allows automatic renaming of vertex groups.

  Usually, this setting should be enabled.
- **Deform**

  Enable or disable weight deformation of the Spline IK bones. Disabling it may be useful when creating more bones (by hand) over the existing ones, to set new bones as the deforming ones instead of the base spline IK bones.
- **Update Transforms**

  Change the existing spline reference bones position when clicking OK (grid align). Disable it to preserve their position. If the spline count is changed, enabled automatically.

#### Advanced Mode

The **Advanced** mode enables more options to fine tweaks the curve shape with master, inter, and individual controllers.

- **Controllers Frequency**

  The interval defining the **master** controllers spacing along the bones chain.

  For example, setting to 2 will add a master controller every 2 bones.
- **Interpolation**

  Interpolation type for the **inter** controllers, between two master controllers. Linear produces straight lines, while Smooth leads to curved lines.

- **c\_spline\_master parent**

  Parent of the **c\_spline\_master** bone.

  Setting it to **None** allow free parent, by manually setting it after **Match to Rig**
- **c\_spline\_master tip parent**

  Parent of the last **c\_spline\_master** bone at the tip of the chain.

  By default parented to the tip controller, however it can produces interesting effects for ropes when parenting to the root.

  If set to **None**, the parent can be freely changed after **Match to Rig**.
- **c\_spline\_tip parent**

  Parent of the tip controller of the chain **c\_spline\_tip**

  By default parented to the root **c\_spline\_root**

  Setting it to **None** allow free parent, it can be set manually after **Match to Rig**

Note

IK Splines are exportable, but bone **scale/stretch** and **bendy-bones are not exportable**.

#### IK Spline example to rig a Spine

IK Splines can replace the default **Spine** limb, for kind of a… chewing-gum effect.

Starting from a default Human preset:

- Select a spine reference bone, then in **Limb Options**, set the **Count** to 1
- Move the tail/tip of the **root\_ref.x** bone lower (pelvis area), making room for the **Spline IK** above (chest)
- Add a **Spline IK** limb

- Enable the **Add Tail Bone** option. This is necessary to ensure that shoulders and neck won’t inherit rotation and scale from the spline
- Parent the first **reference** bone of the **Spline** chain to **c\_root\_master.x**

- Parent the shoulder and neck reference bones to the Spline tail reference bone **spline\_tail\_ref.x**
- If done this way, the Spline IK remains exportable as a **Humanoid** skeleton, the spline bones will be automatically renamed as a typical human spine for compatibility with skeletons in game engines (UE Mannequin, Unity Humanoid…)

To twist the chest when rotating **c\_spline\_tip.x**:

- Enable **Advanced** in the **Spline IK** options
- Enable **Twist**, with **c\_spline\_tip.x** as target

#### IK Spline example to rig an IK Neck

It can be convenient to rig creatures that have long necks with an IK spline, instead of the default FK Neck limb.
The typical setup would be the following:

- Add a **Head** limb
- Add a **Spline IK** limb
- In **Limb Options**, enable **Advanced** > **Add Tail Bone**
- Enable **Twist** > **Custom** > **c\_head.x** as target
- Enable **IK-FK** to generate a switchable IK-FK chain
- Parent the neck reference bone to the Spline Tail: **spline\_tail\_ref.x**

- After **Match to Rig**, the neck bone should now be parented to the Spline IK, and Spline bones will twist when rotating the head

---

### Bendy-Bones Options

Bendy-Bones chains are useful to rig stretchy components, hair, snakes…
Each bone is subdivided into multiple segments, allowing smooth, consistent deformations.

Note

Bendy-bones chains are not exportable to Fbx! May be supported later.

- **Bendy Bones Count**

  Amount of bones in the chain
- **Bendy Bones Segments**

  Number of bendy-bones segments per bone
- **Controller Scale**

  Scale of the controller shapes
- **Side**

  Define the side (middle **.x**, left **.l**, right **.r**) of the chain, by renaming bones with the chosen suffix.

---

### Kilt Options

The Kilt limb is designed to rig dresses, skirt, and other kilt-like clothes.

Note

Check out the [CGDive Tutorial](https://youtu.be/AymlGJW1Ej8?si=wq3goSpYO6hj6G8R).

It supports automatic constrained collisions with legs, and master controllers to drag multiple controllers at once, for easy tweaking.

While the constrained collision system will never be as nice as true simulated clothes dynamics, on projects that don’t require high-end clothes it can be really valuable.
Since collision are evaluated on a fixed distance along the bone, there may be clipping here and there with legs, that can be fixed by tweaking the controllers.

Note

The Kilt constrained collisions will work best with loose clothing. Tight clothing will be difficult to handle, since collisions are not accurate, leading to clipping when legs are rotating.
In that case, consider using an alternative custom rig, or true clothes simulation.

#### Count (per side)

The number of kilt bones.

For symmetrical limbs (.x), this defines the number per side, the total amount is then multiplied by 2.

Tip

A good practice is to create one bone per vertex/loop. If the model is high-poly (e.g. 100 vertices per row), using one bone every 2 or 4 vertices can be enough.

#### Preserve Shape

If enabled, preserves the shape formed by the existing reference bones when the Count or Subdivisions values are changed.

Otherwise, bones will be aligned in a standard perfect circle shape.

*Before changing the Count*

*After Count reduction by 2, Preserve Shape enabled. Same thing with less bones.*

*After Count reduction by 2, Preserve Shape disabled. The bones are positioned differently, they are set in a perfect circular shape instead of preserving the original shape*

#### Master Controllers (columns)

If enabled, add master controllers every Nth bone (frequency setting below).

Master controllers are useful to drag multiple bones at once when tweaking the pose.

*Master controller (in red) selected and rotated, dragging other bones in the neighbourhood*

#### Master Frequency

Defines the interval/spacing between master bones.
For example, 4 will add a master every 4 bones.

#### Subdivisions

Number of subdivision per bone.

*Subdivisions set to 3, leading to 3 rows of controllers*

#### Subdivide Reference Bones

Whether or not reference bones should be subdivided.

If not, the subdivided final rig bones are simply aligned along the head-tail axis of the reference bone (Y axis).

If enabled, allow specific alignment, for example useful for curvy surfaces.

*Reference bones subdivided, 3 divisions*

#### Master Controllers (row)

If enabled, add master controller for each subdivision/row, as a large circle shape controller.

#### Name

Nothing too complex here, just the base name used to name bones.

E.g: If the name is **kilt**, reference bones are named: **kilt\_05\_03\_ref.l**

#### Collide with Legs

Allow constrained collision with leg bones.

Typically, for an Auto-Rig Pro armature:

- Leg (left): **thigh.l**
- Leg (right): **thigh.r**

#### Interactive Collision Distance

If on, the collision settings are kept interactive when posing the rig, with property -> constraint driven connections.

Since it’s more performance consuming, it is a togglable option.

However, on modern CPUs it can be enabled by default without worrying too much about performances.

The interactive settings can be found in the **Rig Main Properties** panel after Match to Rig, when selecting a control bone from the kilt:

#### Collision Distance

Set a fixed collision distance, when the setting above is disabled.

#### Collide on Z

Add a constraint on Z axes, generally gives more accurate collisions.

#### Shapes

Set the position of the controller shapes at the head, middle or tail of the bone, and set scale values.

---

### Secondary Controllers

Secondary Controllers are controllers used to curve the arms, legs, for fine pose tweaking, or cartoon/stylized purposes.

As a rule of thumb, **Twist** is recommended for most cases (export compliant, robust).

**Bendy Bones** is best for stylized/cartoon characters but not export compliant.

**Additive** is the legacy mode, it is not really relevant to choose it currently.

#### Twist

- Twist and secondary controllers are exportable to FBX/GLTF
- One secondary controller per twist bone, consequently up to 6 per limb.
- Bendy-bones control for easy adjustment of the global curve, while using real (twist) bones to deform and keeping it exportable.
- Best control over the shapes, each twist bone can be moved and rotated separately.

#### Bendy Bones

- Twist and secondary controllers are **not** exportable to Fbx. Must be used for internal Blender projects only.
- Only 2 controllers per limb but very smooth control. Ideal for cartoon characters.
- Easy skinning: only one vertex group per limb, the secondary and twist bones are computed internally by the bendy bones system.

#### Additive

- Twist and secondary controllers are exportable to FBX/GLTF. However, the exported weights may be slightly different since the additive weights are “baked” onto the main weights at export time.
- 3-4 controllers per limb for precise shapes sculpting.
- Additive skinning involves more bones, so more vertex groups.
- A secondary armature is generated: **rig\_add**

#### None

- No secondary controllers, best for simple rigs.

Important

All changes are applied when clicking **Match to Rig**.

Switching secondary controllers mode after binding may requires to re-bind the meshes. But in latest Auto-Rig Pro versions, most of the vertex groups are updated automatically.

---

### Positionning the Reference Bones

The reference bones are the guides used to align the final rig bones position and rotations. Whether your character is not supported by the Smart function (not a biped) or if you simply need to edit the reference bones position, here is how to.

- Let’s start simple: the first step is of course to adjust the bones positions so that they fit the character proportions.

  CGDive made once again good tutorials:

  [Human Rig](https://youtu.be/nvjq7C9BbAQ)

  [Fox Rig](https://youtu.be/qc7yT-hyhOI)

  [Horse Rig](https://youtu.be/ir9_lbRiYDo)

  [Dog Rig](https://youtu.be/Xm2ng33Io6I)

Written guidelines for humans below:

- The **foot\_heel** and **foot\_bank bones** (the three little bones under the foot) should match the heel back position and the foot width. The **foot\_heel\_ref** bone direction is used to align the feet rotation on the final rig, make sure to set it properly.

#### IK Chains

IK Chains for arms and legs can be capricious if not treated correctly.

They are defined by two bones, plus a pole, that is indicating the direction formed by these two bones.

- The IK pole direction can be drawn as a line to visualize its position in the final rig:

- Remember to keep a slight angle between the arms/legs bones. It’s very important for the IK chains to work properly. They **MUST NEVER be straight**, otherwise problems will raised: the IK direction may be inverted, bones won’t rotate at all, etc…

#### IK Chains Auto Roll

The roll of the IK chains (that is, the rotation of the bone along its Y axis) can’t be manually adjusted by default, it’s calculated when clicking **Match to Rig** for **consistent axes orientation**.

However the manual mode can be triggered if you prefer to freely set the arms or legs bones roll manually, see [Auto IK Roll](#autoikroll) in the **Limb Options**.

If **Auto IK Roll** is enabled, changing the bones alignment as shown below will change the roll.

(Below the arm is shown from the front view, it can be straight from this point of view, but from the top view we should see a slight backward angle)

#### Spine

- For a typical 3 bones spine, the **root\_ref** bone tip should be centered at the bellybutton height, **spine\_01** at the bottom of the chest, **spine\_02** should reach the neck base.

#### Facial

- The facial bones should be positionned as the following:

- The head (origin) of the **eyelids and eyes** bones should be located at the center of the eyeball while the tail component should reach the eyeglobe/eyelids mesh surface.

The **eye\_offset\_ref** bone is used to align the global eyes direction:

The main upper and lower eyelids controllers are defined by the **eyelid\_top/bot\_ref** bones:

The smaller individual eyelid controllers are defined by the **eyelid\_top/bot\_01(02, 03…)** ref bones and **eyelid\_corner\_01/02**:

The amount of these eyelids bones is defined in the [Eyelids Amount](#eyelidsamount) menu

- The **lips** bones have to be very close to the geometry, positionned all around the lips.

---

### Duplicate - Disable Limbs

Limbs can be duplicated or removed (disabled).

[](_images/bally.png)
[](_images/spider.png)

- To duplicate a limb, select a reference bone from it and click **Duplicate**.
- To remove a limb click **Disable**.

Important

If disabling a limb is not specific enough to remove a given bone, DO NOT DELETE the bone manually.

It would break the rig (when clicking Match to Rig for example, and other features).

Instead, consider hiding the bone.

See [Help / FAQ](faq.html#faq) **Is it possible to delete bones?**

### Parenting Reference Bones

Reference bones can be parented to each others, i.e. **shoulder\_ref** can be parented to **spine\_02\_ref** so that the shoulders will be connected to the spine when clicking **Match to Rig**.

- Only the root bone of a limb can be parented freely
- When reference bones are parented to other reference bones, a routine will automatically assign the final bone parent when clicking **Match to Rig**, using a default mapping.
- **A reference bone can be parented to non-reference bone** for more control:

  i.e parenting **shoulder\_ref** to the last bone of a 4 bones IK spline: **spline\_04\_ref**, will by default parent the shoulder to the tip controller of this IK spline, **c\_spline\_05**. To parent it to the previous controller **c\_spline\_04**, parent **shoulder\_ref** to **c\_spline\_04** directly.

### Adding Custom Bones

Adding your own new bones (custom bones) for props, clothes, hair or anything required is fairly simple and straightforward.

Just make sure to add them after **Match to Rig**, and parent them to **deforming** or **controller** bones, not **reference** bones.

See [Armature Collections](rig_behaviour_doc.html#armature-layers).

Example to add a hat bone:

- Click **Match to Rig**
- Switch to **Edit Mode** with **Tab key** and add a bone with **Shift-A**
- Parent it to **head.x** bone

It won’t conflict with the scripted instructions, unless these new bones have same names as existing ones (for example do not name a new bone **c\_root.x** or **c\_head.x**, these bones are already part of the base rig).

To export, they must be tagged as custom bones in order to tell the exporter to include them in the exported skeleton, see [Custom Bones](ge_export_doc.html#custombonesexport)

**Limitations**:

New bones must not be inserted between bones of the same limb, for example the following bones hierarchy would break the rig since a custom bone is inserted between spine bones:

```
root.x
    L spine01.x
        L mycustom_spine_bone < incorrect!
            L spine02.x
                L neck...
```

But this works:

```
neck.x
    L head.x
        L hat
```

### Saving Custom Bones

Custom bones can be saved as custom limbs.

This comes in handy to store and fetch them anytime later.

For example, if you rig antennas or hair for a character with your own bones mechanics, and need a similar setup for other characters, save these bones as custom limbs and load them into another rig afterwards. All bones data are saved to file, including custom shapes, constraints, drivers, properties…

The files path is defined in the addon preferences.

To save, click the downarrow button next to the **Add Limb** list:

To load custom limbs, click the **Add Limb** list and select a limb under the **\_\_Custom\_\_** separator:

## Generate The Rig

- Click **Match to Rig** to generate the final rig with controllers

Going back to edit mode is possible anytime by clicking **Edit Reference Bones**.

Tip

**Init Scale** : Check this to make sure the rig scale value is initialized to 1 (recommended).

**Legacy**: Rarely but possibly, new Auto-Rig Pro updates may sometimes change the rig, which may break previously made animations. To correct this, click **Legacy** and see if any options may help to preserve existing animations.

## Rig UI

Once the rig has been generated, it’s time to ensure it looks nice enough!

Controllers should be easily selectable with colorful shapes, a picker panel…

### Bone Shapes

Click the **Edit Shape…** button to edit the vertices of the shape, then **Apply Shape** to complete.

To mirror the shape to the other side, click the little mirror button next to **Edit Shape**.

### Apply Transforms

If the bone shape transforms are not zeroed-out, this feature will reset transformations while preserving the current shape.

Limitation: driven values (such as the scale of IK poles in order to hide or show them) are not applied, though.

### Set Custom Shape

To assign a preset custom shape to the selected bone.

### Picker Panel

#### Setup

The picker addon must be installed first. See [Installing the Add-Ons](install.html#id1).

- Split the 3D viewport in two, one view to display the character and one view to display the picker panel:

  Click the top right corner of the 3d viewport, then hold and drag it onto the left:

- In the **Misc** tab, **Add Picker** will generate a new picker. It’s also possible to **Export** or **Import** a picker layout file.
- Then click the **Set Picker Cam**, in the view where you want to display the bone picker.

- In option, you can add a background facial picture by framing your character’s head, and clicking **Capture Facial**. If you want to replace this openGL screenshot by a real render, just replace the saved image file with your own file.
- To change the picker layout, click **Edit Layout**…. You’re now free to select, move, rotate and scale the picker bone shapes, buttons, text and background picture. Once you’re done, click **Apply Layout** to complete.

#### Remove

- Click **X** icon button next to **Add Picker** to remove the whole picker panel

#### Customize

To add custom picker bones:

- In **Misc** tab, click **Edit Layout**
- In Edit mode (**Tab key**), select a picker bone
- Duplicate it and rename it with the correct name identifier. (e.g **c\_spine\_03\_proxy.x** to -> **c\_custombone\_proxy.x**)

- In pose mode, in the **Proxy Picker** tab of the bone menu, change the **Pick Bone** to your custom bone name

- Note: the other settings (normal shape, select shape…) are deprecated in Blender 4 and do not work. If you want to change the picker shape, change the bone custom shape directly.
- Click **Apply Layout** in the **Misc** tab

Tip

This picker system was created 10 years ago, based on the addon **Proxy Picker** by Max Hammond, when there was no real picker addon for Blender.

Although it’s absolutely usable and fine, it’s more of a hack than a real picker solution.

I recommend [this picker addon](https://superhivemarket.com/products/x-pose-picker?ref=46) that was released since then, if you need more advanced picker options.

### Color Theme

Colors of left, middle and right bones can be adjusted quickly with the Color Theme.

Click **Assign** to set the colors of all bones from the given sides.

## Import/Export Rig Data

Reference bones transforms, limb options, and custom shapes can be exported as a file and imported later.

These features are useful to restore a broken rig: for example, if you accidentally removed some internal bones, drivers or constraints, leading to break the rig.
Then, restore the rig by exporting the rig data, delete the current rig, create a new one, and import the rig data.

Only Auto-Rig Pro limbs can be exported/imported. The custom bones can be exported/imported via [Saving Custom Bones](#saving-custom-bones)

## Skinning

### Binding

Once the rig is ready, it’s time to deform the meshes with it!

- Select first the character meshes objects, then the armature while holding the **Shift** key.
- Click **Bind**

### Bind Engines

- **Heat Maps**:

  Default engine, works best with watertight meshes (closed mesh)
- **Voxelized**:

  If meshes are not watertight (e.g. multiple layers of clothes, props, complex topology…), consider using this engine for best results.

  This is an approximated voxel-surface solution though, it’s not as foolproof as true voxel skinning.
- **Voxel Heat Diffuse Skinning**:

  Third-party skinning addon to bind meshes with complex topology. Use pure voxel skinning algorithm: [Voxel Heat Diffuse Skinning](https://superhivemarket.com/products/voxel-heat-diffuse-skinning?ref=46)

Tip

Voxel skinning gives best results with multiple layers of clothes/props, however it’s less accurate with small parts (fingers, facial…) than other methods.

A good practice is to enable **Selected Vertices Only** to mix voxels skinning with surface skinning (Heat Maps).

For example, use **Heat Maps** skinning for fingers/facial and **Voxelize** for the rest of the body.

### Bind Settings

- **Split Parts (Heat Maps)**:

  This setting tries to improve heat maps skinning when meshes are separate in multiple pieces (clothes, props…)

  See picture above.
- **Optimize High Res (Heat Maps)**:

  Speeds up binding of high poly meshes that contains more faces than the given threshold below, by internally working on lower resolutions.
- **Type (Voxelized)**:

  Voxelization type, switch this setting to another type if it doesn’t lead to good results.

  Thin layer of clothings may sometimes lead to voxelization errors with one type, but works with another type.
- **Voxel Resolution (Voxelized-Voxel Heat)**:

  The higher this value is, the more accurate and longer to perform the voxelization will be. However, the **Voxelized** engine may sometimes work better with lower resolutions.
- **Refine Head Weights**:

  Makes head weights more consistent, based on the chin position, preventing the neck weights to blend too far with the head weight.

  Only when using the Smart feature, when facial is disabled, and for bipeds only.

  Alternatively when not using the Smart feature, make sure the reference jawbone is properly positionned, and disable facial afterward. As a drawback it may lead to (too) sharp deformations in the neck area, example below without/with:

- **Smooth Twist Weights**:

  Improve twist bones skinning by applying a gradient decay to weights along the bones chain. Example below without/with:

- **Improve Hips Weights**:

  Improve hips/pelvis skinning. By default, the thigh weights tend to blend too far in the hips area. This setting prevents that.

- **Improve Heel Weights**:

  By default the heel area may be slightly deformed by the thigh weights. This setting make sure to solidify it, leading to more consistent weights.

- **Facial Features**:

  Improve skinning of facial parts by defining objects used for the eyeballs, tongue, and teeth.

  The eyelid borders can also be defined for more accurate skinning, by selecting vertices around the left eyelid, click **Set Left**, and same for the right eyelid.

  [Video tutorial.](https://www.youtube.com/watch?v=BZNmCX4JkcE&t=38s)

- **Selected Bones Only**:

  Only the selected bones will be evaluated when binding. Useful to bind cloth meshes to clothes bones only for example.
- **Selected Vertices Only**:

  Only the selected vertices will be evaluated when binding. Useful to bind specific parts of a mesh, for example to only bind fingers, select only finger vertices and enable this setting.
- **Apply Shape Keys**:

  Evaluate the current shape keys deformations when binding. Useful if shape keys are deforming a lot the meshes.
- **Scale Fix**:

  Enable this setting if meshes are very small (in Blender units space) and binding doesn’t work

When binding, all existing vertex groups are cleared, except the ones used by modifiers (hair, cloth…) or nodes. However, in case some vertex groups that are actually used by other undetected features must be preserved, click their lock icon before binding:

Tip

Binding can take time, especially with high resolution meshes. See the [Clothes](#clothesskin) chapter to skin and attach clothes to the main body mesh easily.

Important

If binding does not work, see the [Help / FAQ](faq.html#faq)

### Skinning: Weight Painting and Shape Keys

It’s time to carefully paint the weight vertices for each vertex group in the list. The auto-skinning can be considered as a basis, automatic weights are never perfect.

**Facial rigging tutorials brought to you by CGDive!**

#### How to paint the weights?

To quickly select the deforming bones and check the associated vertex groups in one click, you can display only the **Deform** collection (layer 31 in older Blender versions) of the armature, wich includes the deforming bones only:

Armature collections

Older Blender versions with armature layers

A quick search in Google (such as “blender weight painting tutorial”) will give you the basis of the Blender’s weight painting tools if you don’t know them, this is something I won’t elaborate more here. Basically, it’s all about browsing the vertex groups list and painting the weights.
If you’re new to Blender skinning, you can check these two videos: [Rig Tips 1](https://youtu.be/gz7hsjcW1Xc), [Rig Tips 2](https://youtu.be/gqFN_e7nEEM)

For a high quality skinning, this process can take some time, do not hesitate to test the skin accuracy by posing the character into several extreme position (arms up, arms down, arms ahead, thighs up…)

Tip

The [Mike Rig](https://lucky3d.fr/auto-rig-pro/mike.zip) is a free character rigged with Auto-Rig Pro, it can be used as a reference to understand how the weights must be distributed for each bone. The facial rig is a mix of shape keys and bones.

Here are a few notes about some specific painting regions:

#### Clothes

If the body is modeled and skinned under the clothes, a good practice is to transfer the weights from the body to the clothes. This way, they will perfectly stick to the body.

- Select the clothes objects, then the body (holding **Shift**, the target first, then the source), press **F3 > type “Transfer Mesh Data” > choose “Vertex Groups”**.

  In the tool shelf options (T key, bottom area) choose **Nearest Face Interpolated** instead of Nearest Vertex, **All Layers** instead of Active Layer, and you’ll find here more options to fine-tune the transfer.

#### Eyes

Make sure to assign the correct vertices to these bones:

- The big circle (**c\_eye\_offset**) is meant to deform both the eyes and eyelids. It simulates the muscles stretch and compression. The eyelids and eyesballs bones have their own vertex groups though (**eyelid\_bot, eyelid\_top, c\_eye** and other secondaries), so this bone should just influence the external borders, gradually reduce the influence near the eyelids.
- The small circle (**c\_eye**) is meant to rotate the eyeball only.
- The sphere circle (**c\_eye\_ref**) is meant to control the reflexion disk mesh (if any), sometime used to fake the eye reflexion, easily animatable.

#### Shape Keys

**Lips roll**: The **c\_lips\_roll\_top/bot** bones controllers can drive shape keys, in case the [Lips Roll Constraints](#lipsrollconstraints) are disabled, or for more accurate deformations.

Note

Shape Keys can be used to rig various facial expressions, such as smiling, frown…

Then when rigging facial with shape keys, make sure to disable the bones deformations since shape keys will take over:

Select a given bone that is driving a shape key, and uncheck the **Deform** property in the bone property panel.

Auto-Rig Pro comes with tools to quickly create drivers between shape keys and bones:

- Select the armature, then in the **Shape Keys Tools** tab enter the bone name driving the shape key or select it and click the **little picker icon**.
- Hold **Shift** key and select the mesh. In the shape key list, select the one to be driven
- Back in the **Shape Keys Tools** tab, select the transform parameter that will drive the shape (location, rotation, scale and the axis)
- Click **Create Driver**.

If the shape key increases too slowly or too quickly while the bone is moving, edit the expression:

- Left click on the purple shape key value then multiply **var** by any number using the **\*** (asterisk/star) character, **e.g to speed up 60 time faster, write**:

- The **0, 1 and Reset** buttons are optional, you can use them to set a key to 0 or 1 on the curve, according to the current bone position. It’s especially useful when using multiple shape keys, such as the eyelid rotation that may involve several shapes for big eyes.

  See below **Corrective Shape Keys** for usage examples.

Note

You can also negate the expression to switch the bone direction: **“-var”**

To delete a driver:

- Right click on the shape key value > **Delete driver**

#### Corrective Shape Keys

Sometimes, painting weights is not enough to get correct deformations.

For example, rotating the forearm or calf/leg bones at extreme positions often result in poor deformations, with penetrating faces.

This is where corrective shape keys shine! They allow to fix deformations by editing the mesh manually for a given rotation.

However accessing the bone rotation from the transform values is only possible with FK chains.

For IK-FK chains such as the arms and legs, it’s a more complex to setup. This is why Auto-Rig Pro includes a convenient tool to do this in a few clicks:

- Pose the arm, leg, hand… or any bone controller in the position that leads to incorrect deformations
- Enable the **Deform** collection (layer 31 in older Blender versions) to show deforming bones, or click **Pick Selected Bone(s)** that will show an error and will display the **Deform** collection automatically.
- Select one or two deforming bones, that are related to the deformation, when they rotate to the current angle.

  > If 1 bone is selected, it must be an arm or leg bone. The other relative bone to calculate the angle from, will be automatically assigned through a built-in routine.
  >
  > If 2 bones are selected, they can be any bones. The first selected bone must be the rotated bone.
  >
  > For example, the **foot** and **leg\_twist** bones must be selected to correct the ankle deformation when the foot rotates up and down. To fix a deformation when the forearm rotates, select a bone from the **forearm**, and a bone from the **upperarm**.
- Click **Pick Selected Bone(s)**. If the selection is not valid, an error message will pop up
- A new bone is created internally, used to define the shape key driver rotation. When clicking the eye button, the bones and angle value (in radians) that will be applied to the driver will appear for information.

- Select the mesh object and the corrective shape key to be applied to this pose (create one if there is none yet).
- Click **Add Corrective Driver**
- Done! If necessary, you can use the **0** and **1** button above, to define when the shape key must start and end, as the bone rotates.

- You can also use these buttons to create multiple intermediate shape keys that will be triggered one after another as the bone rotates, for more accurate deformations. Just copy the driver (right click on the pink area > Copy) and paste it to another shape key (right click > Paste), and use the 0/1/Reset buttons to define the shape key range.

Tip

Use the **Corrective Shape Key** addon to easily edit your corrective shapes.

This allows to create corrective shapes from another object/mesh, while preserving the current mesh deformations (modifiers + shape keys). Powerful, because editing the shape keys directly on the main mesh can lead to “Crazy Space” issues, e.g. vertices moving to the right whereas you move the mouse cursor to the left.

This addon comes by default with Blender, just enable it from the addons list.

## Hand Fist

Optionally, a fist controller can be added to hands.
This controller is meant to blend the fingers into a predefined fist pose.
This allows a better grasp than the default [Fingers Grasp](rig_behaviour_doc.html#fingersbend) property since that simply curls the phalanges along the X axis, wich is inacurrate.

To create the hand fist:

- Select the hand controller
- Click **Add Fist Pose**

- Click **Apply Default Fist Pose** to set automatically the fingers in a fist pose
- If the result is fine, click **OK**.

  If not, exit the popup window and tweak manually the fingers: rotate/move/scale directly the fingers controllers. [Rotate Fingers from Scale](#rotfromscale) should not be used here.

  Then click **Add Fist Pose** again and **OK** to generate the fist controller.

- Fingers will curl into the fist pose when scaling the controller negatively.
- Optionally, an extended pose -fingers spread out- can be created as well.

  Same process, but select **Extend** after clicking **Add Hand Fist**.

  Will be applied when scaling positively.

## Blink Pose

A blink pose can be added to blend eyelids into a predefined closed pose.

This allows better eyelids contact, shape, in case the default rotation doesn’t fit.

- Select the main upper eyelid controller (**c\_eyelid\_top**) and click **Add Blink Pose**
- Click **Add Default Blink Pose** to apply an automatic pose
- If the result is fine, click **OK** to confirm. If not, exit the popup window and tweak the eylid bones manually to improve the blink pose, then click again **Add Blink Pose** and **OK**
- Now the eyelids controller will blend into this predefined pose when moving **c\_eyelid\_top**. The same process can be repeated for the lower eyelids.
- Optionally, multiple half-closed poses can be set. Just repeat the process with the eyelids being half-closed at 50% for example, and select **As In-Between** when prompted

## Changing the Rest Pose

The rest pose of the rig can be changed, for various reasons. For example, when exporting to Unreal Engine, it’s best to set the character in A-Pose.

### Set Pose

This function will automatically set the character into a predefined pose.

### Apply Pose as Rest Pose

To apply the current pose as the rest pose, click **Apply Pose as Rest Pose**

Then click **Match to Rig** to apply the changes to the rig.

## Set Character Name

For consistency and clarity in the scene, set the character name used for collections and rig objects.

To do so, click the button **Set Character Name**.

E.g, naming a character “matt” will rename the collections to “matt\_rig”, “matt\_cs”… and so on.

## Optimizing the Rig Performances

Most characters rigged with Auto-Rig Pro, except very high poly ones or with complex modifiers setup, should reach 60 fps in the Blender viewport.

They don’t?

Here are tips to drastically improve performances, by gaining up to 40 fps depending on the character meshes:

### Cleaning Weights

Reducing the number of bones/vertex groups deforming vertices is very efficient to improve performances.

As a rule of thumb, 3 or 4 bones as a maximum is a good practice.

Some superfluous vertex groups with weight values set to 0.01 (1 %) or below may be assigned to vertices, when transferring weights between meshes or smoothing weights.

Blender has a one click tool to clean them up instantly:

### Clearing Custom Normals and Auto-Smoothing

Custom normals and polygons auto-smoothing are performance consuming. Unless these features are absolutely necessary, it’s best to remove them from meshes for optimal performances.
Imported meshes from external file format often have custom normals.

Run this script to remove these on all meshes:

```
import bpy

def set_active_object(object_name):
    bpy.context.view_layer.objects.active = bpy.data.objects[object_name]
    bpy.data.objects[object_name].select_set(state=True)

for obj in bpy.data.objects:
    if obj.type != "MESH":
        continue

    try:
        set_active_object(obj.name)
    except:
        continue

    # obj.data.use_auto_smooth = False# only for older Blender versions

    try:
        bpy.ops.mesh.customdata_mask_clear()
    except:
        pass

    bpy.ops.mesh.customdata_custom_splitnormals_clear()
```

### Normal Maps Shaders

The Blender’s Eevee render engine isn’t optimized by default to display normal maps quickly in the viewport. It results in a noticeable performance drop when rendering shaders on deformed meshes.

Fortunately a providential addon can fix it! It converts normal maps nodes to custom node groups that commonly reach 60 fps. Can be reverted anytime. Tested and approved!

<https://github.com/theoldben/BlenderNormalGroups>

### Playback Options

Playing back animation in all windows (3d viewport, animation editor) is more consuming than a single one. To ensure best results, in the playback options of the timeline window, disabled all but **Active Editor Only**:

### Meshes Hiding

Sometimes we need to hide meshes (clothes, hair) to output different versions of a character in a single file.

Hiding skinned meshes with the **eye** icon in the outliner is wrong: these meshes will be evaluated when playing the animation, even if they’re hidden.

To ensure they’re excluded from the skinning evaluation, hide them from a lower level using the **screen** icon.

## Appending - Linking in a scene

There are two methods to load a rigged character in a final file.

**Appending** will load a static copy of the rigged character in the file, this means if you change the character geometry or armature in the rig file, the changes won’t be reflected to the character in the animation file. It’s only a copy.

On the contrary, **Linking** will load a dynamic copy of the character (instance). Changes made in the rig file will be automatically reflected to the animation file, which is very useful when working on large projects with multiple files. The bones “pose” data will be overridden for animation.

**Preparing the rig**

- First make sure your rig file is properly structured, with correct hierarchy, collections. See [Hierarchy and Collections](rig_behaviour_doc.html#hierarchy-and-collections).

  Make sure meshes objects are parented to the armature.

  By default, all rig/character objects are grouped inside the 3 collections:

  “charactername”, “charactername\_rig”, “charactername\_cs”.

  Make sure to include any new objects added by you as well inside (new meshes, etc…).

---

### Appending

- In a new scene, **File > Append**
- Select the rigged character file > **Collections** > Select the **root character collection**
- Click **Append from Library**

---

### Linking

To link a rig on modern Blenders, use **Library Overrides**. Otherwise, **Proxies**.

- Use **Library Overrides** with Blender 3.0 and above (no choices, proxies don’t exist anymore)
- For Blender 2.93 and below, Library Overrides are possible, but it’s recommended to use **Proxies** for stability reasons.

#### Linking Step by Step

- **[For Proxies Only]:** First, you may want to hide (in viewport mode) the armature object in the source file, to prevent the rig to be displayed two times once it’s linked (it may lead to overlapping glitches).

- In a new scene, **File > Link**
- Select the rigged character file
- **Collections** > Select the **root character collection** (e.g. “soldier” in the image above)

- **[For Proxies Only]:** If you wish to export later the rig + all skinned meshes, just click the button **Link from Library**. But in case you need to export the rig + selected meshes only, disable **Instance Collections** on the right, then click **Link from Library**. Disabling this setting allows to load individual, selectable instances of the meshes objects.

- After linking, all objects are frozen. To unfreeze them, depending if you use Library Overrides or Proxy:
- **Library Overrides:** Click the Object menu > Relations > Make Library Overrides…:

- **Proxies:** press **F3 > type “make proxy” and click it > type the rig object name and click it**

- **[For Proxies Only]**: If the rig contains a picker: select the rig collection, and turn the “cam\_ui” camera into a proxy: press **F3 > type “make proxy” and click it > type “cam\_ui” and click it**. The newly created proxy camera is named “charactername\_rig\_proxy”, select it and rename it “cam\_ui”, and finally parent it to the proxy armature (in object mode, **Ctrl-P > Object (Keep Transforms)**). In a new window (3d viewport), select a bone in pose mode and click **Set Picker Cam** in the **Rig Main Properties** tab

## Compatibility with other Addons

Auto-Rig Pro complies with other rigging related addons such as:

### Cascadeur to Game Engines

Transfer your animated characters created in the Cascadeur software to Unreal Engine, Unity and Godot -just a click of the mouse:
[Cascadeur to Game Engines](https://boosty.to/zhukovp/posts/20d04ad3-ac5d-4f37-a5d6-ceffb806e9f5?locale=en_US)

### Rig UI

Enhance the rig interface and functions with extra, convenient tools!

[Rig UI on Gumroad](https://gumroad.com/a/523613459/ogjthe)

[Rig UI on Superhive](https://superhivemarket.com/products/rig-ui?ref=46)

## Conclusion

Make sure to check the other documentation chapters on the left, [Rig Features](rig_behaviour_doc.html#rigfeatures), [Game Engine Export](ge_export_doc.html#gameengineexport) and other chapters.

Feel free to get in touch for any remarks, if anythying broke with a newest Blender API update or whatever… and happy blending!

Artell
