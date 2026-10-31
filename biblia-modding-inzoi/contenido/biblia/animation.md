# Animation

El proyecto **Animation** cubre las animaciones de personaje: locomotion (caminar, correr, nadar), interacciones y sobre todo los **Animation Events** (AnimNotify), que son la manera estandar de enganchar cosas al timeline de una animacion.

## Que se puede construir

- Animaciones de interaccion de personaje (hablar, cocinar, bailar...).
- Eventos sobre una animacion existente: en un punto exacto del timeline disparan otra animacion, enganchan/desenganchan meshes o actores, FX, sonido, camara o **scripts**.

## Catalogo de Animation Events (AnimNotify)

Los AnimNotify del juego son clases documentadas una a una en `modkit/how-to/animation/animationevents/`:

| Grupo | Ejemplos |
|---|---|
| Estado y control | `ChangeState`, `LoopStart`, `LoopEnd`, `ChangeVehiclePartState` |
| Meshes | `AttachMesh`, `AttachActor`, `DetachMesh`, `DetachActor`, `AttachTemporaryMesh`, `HideOriginMesh`, `BodyFit` |
| Animaciones | `PlayAnim`, `PlayStaticMeshAnim`, `PlayVATAnim` |
| FX y camara | `PlayFXObject`, `PlayObjectSlotFX`, `TimedFXObject`, `CameraOffset`, `Portrait` |
| Audio | `GameObjectSound`, `CharacterPlayAudio`, `VoiceTalk`, `VoiceIdle`, `VoiceDream`, `VoiceInteraction`, `Footsteps` |
| Scripts | **`RunScript`** (los NotifyState tambien: `RunScript`) |
| Vehiculo | `EnterVehicle`, `ExitVehicle` |

## Reglas practicas

- **Clona una animacion vanilla del mismo tipo de interaccion** y sustituye el clip: los notifies de sonido/footsteps ya vienen colocados en el timeline correcto.
- `RunScript` es el puente con Lua: en el frame que quieras, llama a tu script.
- Las animaciones interrumpibles y el montaje (Montage) tienen su guia en la wiki (ver "Montage Data Guide" en structguide); el chunking de secciones y referencias es lo que rompe cuando se clona mal.

## Con MCP

Cambiar pose/expresion en vivo para verificar (sin tocar el mod):

```
python tools/mcp_client.py game pose_set '{...}'
```

## Pipelines del corpus

- Animaciones Blender -> inZOI: `local/pipeline-animaciones-blender`
- Mixamo a inZOI: `local/mixamo-animaciones-blender`
- Pelo con animacion (cabello largo): `local/animar-cabello-largo`
