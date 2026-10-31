# Camera Filters

Camera Filters crea **filtros de color para la camara** (LUTs de grading). En el editor aparece con dos etiquetas (Camera Filters y CameraFilter): la primera es el proyecto, la segunda el asset de filtro dentro de el.

## Que se puede construir

- Filtros de color seleccionables desde el juego (v0.11 los hizo seleccionables en el filtro de camara).
- Filtros de mod (integrados en la lista de filtros del usuario).

## Campos del asset y sus reglas (del editor oficial)

| Campo | Que admite | Regla |
|---|---|---|
| Thumbnail | PNG, JPG, JPEG o EXR | Imagen de vista previa |
| Color Grading LUT | PNG/JPG/JPEG/EXR | **256 x 16 exactos** |
| Preview Static Mesh | FBX static mesh | Solo preview: NO viaja en el export |
| Preview Skeletal Mesh | FBX skeletal mesh | Solo preview: NO viaja en el export |

Reglas del import de LUT (automaticas, pero conviene conocerlas): el import aplica **Color Lookup Table**, **desactiva mipmaps** y apaga **sRGB** y **Virtual Texture Streaming**. Si tu LUT se ve raro en juego, casi siempre es que el archivo no es 256x16 o que tenia sRGB activo en origen.

## Flujo

1. Abre un workspace desde **Camera Filters** y usa **Import** junto al asset.
2. Importa LUT y thumbnail; opcionalmente meshes de preview para comparar el antes/despues.
3. **Reimport** actualiza el asset tras cambiar el archivo fuente (disponible para assets del mod actual).
4. Empaqueta el proyecto y el filtro aparece en la lista de filtros de camara del juego.

## Relacion con el juego

Los comandos CLI de camara (`camera.set_fov`, `camera.get_settings`, `camera.set_sensitivity`...) permiten verificar en vivo el resultado desde el MCP.
