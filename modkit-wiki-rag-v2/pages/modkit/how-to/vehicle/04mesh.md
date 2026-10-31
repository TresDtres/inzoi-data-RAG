---
document_id: "3af92c35500f38cc8d6208a0425606df08bd6af27a02b72657f568fdf15cd9af"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/04mesh"
title: "Changing the Look"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "63ee60f44566187cb832a273b28adcb8251539e6056e01c3134bbfba1548ca33"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/vehicle/04mesh"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

🎨

# Changing the Look

Meshes, colours and lights — the work you will do most often on a vehicle.

## 1. Import the FBX

To swap a mesh you first import the FBX into the project. That gives you an asset path starting with `/Game/...`, which you then assign to a part slot.

Check these before importing.

- **Axes** — +Y forward, +X toward the left-hand door
- **Pivots** — doors at the hinge, handlebars at the centre axis, wheels at the spin centre
- **Scale** — not wildly larger or smaller than the original part

## 2. Assign it to a slot

Pick a name under `slots` in the part list and assign the mesh path. Your change is **layered on top** of the vehicle Blueprint rather than editing it, so the original stays intact.

**Leaving a slot empty removes that part in game** — useful if you want to drop the side mirrors.

Re-fit the bounds after a mesh swap

The outer box is not recalculated when you change a mesh. If the body size changed, fix it by hand — otherwise the vehicle will not fit a parking space, or collision will be off.

## 3. Add colours

You can add paint options. One option is a name plus one sRGB value.

```
BlueSky   →  4A90D9Sunset    →  FF8800
```

The name is the key the game UI uses to tell colours apart; the value is a six-digit hex number.

## 4. Adjust the lights

Each slot under `light_slots` takes three values.

| ValueMeaningUnitColourColour of the lighthex (default `FFFFFFFF`)BrightnessIntensitynumberAttenuation radiusHow far the light reachescm |
| --- |
| ColourColour of the lighthex (default `FFFFFFFF`)BrightnessIntensitynumberAttenuation radiusHow far the light reachescm |
| BrightnessIntensitynumberAttenuation radiusHow far the light reachescm |
| Attenuation radiusHow far the light reachescm |

Use it to make head lights yellower or tail lights deeper red.

Light masking textures

Which part glows when a light turns on is decided by a masking texture. It uses an RGB texture for emissive plus a mask splitting front from rear, and it has to line up with the light state and the material's response.

## 5. Move the seats

Moving a slot under `seats` changes where a Zoi sits. You give a position (cm) and a rotation (degrees). **Moving a seat brings its sitting pose along with it.**

If you lowered the body or pushed the seat back, move the seat too — otherwise the Zoi sits in mid-air or sinks into the body.

## Next

[Audio and part motion](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/vehicle/05drive)
