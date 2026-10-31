# Translation

Translation es el proyecto de **localizacion** de mods: textos del juego y de tus mods en otros idiomas, via archivos PO del workspace.

## Que se puede construir

- Traducciones de tu mod (nombres de objetos, tooltips, textos de UI).
- Traducciones de contenido vanilla que no llego a tu idioma.
- Correccion de textos existentes (la famosa fila de "immigration extends outside the UI in Spanish" se arregla por aqui).

## Flujo (WF-10: localizar un mod)

1. Abre el proyecto Translation (o añade el espacio de traducciones a tu proyecto).
2. Lista los archivos y entradas de traduccion disponibles.
3. Copia la entrada original y sustituye el texto destino (nunca la clave).
4. Monta el pipeline de idiomas del workspace y compila.

```
python tools/mcp_client.py modkit modkit_list_translation_files '{}'
python tools/mcp_client.py modkit modkit_list_translation_entries '{...}'
python tools/mcp_client.py modkit modkit_set_translation_entries '{...}'
```

## Reglas practicas

- **No traduzcas claves ni identificadores**: solo el campo de texto destino. La clave es la direccion por la que el juego encuentra la cadena.
- Un mod traducido a un idioma que el juego no tiene activo simplemente no aplica sus textos: no rompe nada.
- El juego es multilingue por diseno; las traducciones de la comunidad viajan como mods normales (mismo empaquetado y publicacion).

## Docs relacionadas

WF-10 (localizar un mod PO), fichas `modkit_list_translation_*` y `modkit_set_translation_entries`, intencion CLI `datos-assets-y-traducciones`.
