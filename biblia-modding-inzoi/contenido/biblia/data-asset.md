# Data Asset

Data Asset es la via de los **mods de datos**: stats, relaciones, emociones, trabajos, precios, recetas... sin mallas ni texturas. Es el caso ideal de la filosofia "copiar y reemplazar": exportas la tabla vanilla, cambias la fila que te interesa y la devuelves como override.

## Que se puede construir

- Nuevas filas de datos (un mueble con otro precio, una nueva receta, un trabajo con otros numeros).
- Overrides de filas existentes ( WF-09: editar datos del juego por tabla o fila, tambien via DataAsset).
- Traducciones y textos (aqui vive tambien el pipeline de Translation).

## Flujo copiar-y-reemplazar (WF-09)

1. Lista las tablas/filas vanilla del dato que quieres tocar.
2. Elige: **override de fila** (cambias valores de una fila existente) o **fila nueva** (clonas la fila con ID nuevo).
3. Edita los campos. Copia los enums de filas vanilla: los enums cambian entre parches y `Child`, por ejemplo, no existe donde crees.
4. Compila y verifica en juego que el dato nuevo aparece (readback: lista la fila tras aplicarla).

```
python tools/mcp_client.py modkit modkit_create_row '{...}'
```

## Reglas practicas

- **Nunca inventes la forma de la fila**: clonala. La wiki (structguide, 2.213 paginas) documenta la estructura de cada fila del juego: Buscar ahi el nombre de la tabla antes de escribir.
- Los campos no documentados existen (`Comment`, `IsLockedItem`, `PartsId`...): si una fila vanilla los tiene, tu clon tambien.
- v0.11 añadio comandos CLI para ajustar maximo de coches y Zois de la ciudad: ejemplo canonico de dato expuesto que antes requería mod de datos.

## Docs relacionadas

- WF-09 (editar datos del juego), ficha `modkit_create_row`, intencion CLI `datos-assets-y-traducciones`.
- Guia oficial: `modkit/project/dataasset` (39 fragmentos) y `advancedguides` (canales de textura y temas avanzados).
