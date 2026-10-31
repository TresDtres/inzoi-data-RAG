# Create A Zoi (CAZ)

CAZ es el flujo de mods de **personaje**: prendas, pelo, accesorios (incluidos los skinned), medias, piel y rasgos faciales. El ModKit ofrece el catalogo de assets vanilla para clonar y el editor CAZ para montar tu variante.

## Que se puede construir

- **Outfits**: tops, bottoms, conjuntos, calzado, abrigos.
- **Hair**: pelo con fisica de cabello ( HairCutHeight controla la linea de corte).
- **Attached accessories** y **skinned accessories** (se deforman con el cuerpo).
- **Skin y stockings**: materiales de piel y medias con regiones de mascara.

## Flujo basico (copiar y reemplazar)

1. Filtra el catalogo (p.ej. `Female` / `Adult`) hasta el tipo de asset que quieres.
2. Flecha naranja bajo la miniatura -> **Create New Mod** o **Add to Existing Mod**.
3. En el workspace, sustituye las mallas/texturas por las tuyas (import desde FBX; los LOD se generan automaticamente al importar skeletal mesh de cuerpo: 4 niveles).
4. Revisa los invariantes de la tabla (abajo) y compila el blueprint del mod.

## Reglas que deben cumplir las prendas (verificado en vivo, WF-19)

Si una prenda "no aparece", "no se combina" o "el cuerpo asoma", casi siempre es una de estas invariantes de la fila vanilla que clonaste:

- **Enlace de IDs**: `GarmentTop.Id` = `Variants[0]` = `GarmentTopMesh.Id` = `GroupId`. Si rompes el enlace, el juego no sabe vestir al Zoi.
- **Regiones de mascara** (`DrawingRegions` / `CoveringRegions` / `BodyRegions`): sin `None`; definen que tapa la prenda. `PantsWaist` y `LayerPriority` (top ~80, bottom ~50) deciden el orden de capas.
- **`OverrideMaterial`** se deja **vacio** a proposito en CAZ: los materiales van por slot, no en la prenda.
- **Enums validos**: p. ej. `Child` NO existe como valor; copia los enums de una fila vanilla del mismo tipo, no de memoria.
- Campos no documentados por la wiki pero presentes: `Comment`, `IsLockedItem`, `PartsId`, `HairCutHeight`, `bDeformingGloves`.

## Pipelines reales documentados en el corpus

- Cejas y pestanas -> `local/pipeline-cejas-pestanas-zoi`
- Zoi a DNA (Blender + Polyhammer) -> `local/pipeline-zoi-a-dna-blender`
- Prendas de accesoorio skinned (unas) -> WF-19 y `local/pipeline-unas-zoi`

## Con herramientas MCP (juego y ModKit en marcha)

```
python tools/mcp_client.py modkit modkit_list_projects '{}'
python tools/mcp_client.py modkit modkit_compile_bp '{"plugin": "<tu-mod>"}'
```

La captura de assets vanilla para clonar esta en WF-14 (`modkit_analyze_asset_capture`).
