# Build (muebles y objetos)

Build Modding crea mods de **objetos**: muebles, props y materiales de construccion, tanto seleccionando del catalogo vanilla como importando mallas propias desde Blender.

## Que se puede construir

- Muebles y decoracion (con sus interacciones heredadas del objeto clonado).
- Materiales de construccion (texturas y parametrizacion).
- Objetos con interaccion (el tipo de objeto vanilla que clones define que podra hacer el Zoi con el).
- Prototipado rapido con SmartBuild (WF-17) antes de empaquetar.

## Opciones de construccion

1. **Desde el catalogo**: filtros jerarquicos `BUILD: Furniture` -> Main/Middle/Sub Select (p.ej. `Furniture > Beds > Children's Beds`), buscar, y clonar el objeto.
2. **Desde Blender**: modelar, exportar FBX e importar en el workspace del proyecto (pipeline completo en WF-01, "mueble de Blender al juego").
3. **Material mod**: clonar un material asset y sustituir texturas/parametros (WF-02), respetando los canales de textura (ver `texturechannel` en guias avanzadas).

## Reglas para que el objeto funcione en el juego

- **Importa sobre un clon**: la categoria, el tipo de interaccion y el footprint vienen del objeto vanilla que clonas. Si clonas una cama, el juego la trata como cama.
- **Mesh y colision**: el FBX debe traer la malla lista; el LOD y la colision se comportan mejor si partes del asset vanilla equivalente.
- **Texturas**: respeta el esquema de canales del material original (PBR del juego); un canal mal asignado = objeto negro o brillante.
- **Empaquetado**: compila el blueprint del proyecto antes de probar en juego; un build a medias carga vacio sin error (caida silenciosa conocida).

## Ejemplo de flujo con MCP

```
python tools/mcp_client.py modkit modkit_create_project '{"name": "MiSillon", "type": "BUILD"}'
python tools/mcp_client.py modkit modkit_compile_bp '{"plugin": "MiSillon"}'
```

Y en juego, para prototipar con SmartBuild sin reiniciar (WF-17):

```
python tools/mcp_client.py game smartbuild_restore_state '{}'
```

## Docs relacionadas en esta misma biblia

- WF-01 (mueble de Blender a juego), WF-02 (modificar material asset), WF-16 (importar textura/material), WF-17 (SmartBuild).
- `modkit/how-to/build/01overview..04advanced` (guia oficial completa).
