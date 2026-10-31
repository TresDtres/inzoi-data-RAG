# Content Template

Content Template arranca un proyecto **desde una plantilla ya montada**: la estructura de assets, datos y carpetas viene preconfigurada y tu trabajo es reemplazar el contenido por el tuyo. Es la forma mas rapida de "copiar y reemplazar" sin montar el esqueleto a mano.

## Que se puede construir

- Hoy la plantilla estrella es la de **vehiculo** (`modkit_create_vehicle_template`): monta el proyecto Vehicle completo con sus partes y slots listos para sustituir.
- Cualquier contenido del juego publicado como plantilla base para creadores.

## Flujo

1. Crea el proyecto desde **Content Template** eligiendo la plantilla (o con MCP: `modkit_create_vehicle_template`).
2. Recorre los bloques de la plantilla (en vehiculo: general, apariencia, slots, bounds, audio) sustituyendo cada asset vanilla por el tuyo.
3. No añadas piezas fuera de la jerarquia de la plantilla: los slots y bounds esperan encontrar las partes donde estan.
4. Compila, prueba en vivo, y itera solo sobre lo que cambiaste.

## Reglas practicas

- La plantilla es tu **checklist**: cada bloque vacio o sin sustituir salta a la vista; no publiques con bloques vanilla sin tocar.
- Es la via recomendada para el primer mod: enseña la anatomia completa de un tipo de proyecto sin escribir la estructura desde cero.

## Con MCP

```
python tools/mcp_client.py modkit modkit_create_vehicle_template '{...}'
```

La ficha de la herramienta (en el navegador de docs) documenta el payload literal y la respuesta esperada.
