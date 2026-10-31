# Blank y fundamentos

El proyecto **Blank** es el punto de entrada: un proyecto vacio con su carpeta bajo `Plugins/` y nada mas. Es tambien el sitio donde entender el ModKit como plataforma antes de elegir departamento.

## Fundamentos del editor

- **MY MOD PROJECTS**: tus proyectos. "Create Empty Project" para empezar de cero (Blank).
- **MOD WORKSPACES**: la estructura de archivos del proyecto seleccionado (`.uasset`, `.json`, materiales, meshes). Cada proyecto = una subcarpeta bajo `Plugins/`.
- **Content Browser 1-4**: navegadores de contenido; el boton del ModKit Home abre el hub (v0.11 anadio un menu rapido para abrir los navegadores 1-4).
- **Toolbar**: ModKit Home, abrir la documentacion, subir UGC a CurseForge.

## Instalacion y puesta en marcha

1. Instala el ModKit (getting-started/01install) y el juego con el mismo cuenta/rama (02setup).
2. Crea tu primer proyecto (03project) y aprende a usar assets externos (04usingexternalassets: import FBX, texturas).
3. El tutorial oficial (`inzoi-modkit-tutorial`) recorre los flujos con videos.

## Empaquetado y publicacion

- **Build** compila el proyecto: sin build no hay mod instalable (un build a medias = caida silenciosa).
- Export **local** para probar en tu juego; export **CurseForge** para publicar (WF-03: publicacion completa con fotos, tags y verificacion de que aparece).
- Tras un parche del juego: **Fix Up Mod Project** (Utility) repara referencias rotas; si el salto de motor es grande (ej. UE 5.5.4 -> 5.6.1), muchos mods hay que recrearlos (WF-20).

## Triaje de problemas (workflows verificados)

| Sintoma | Workflow |
|---|---|
| Mi mod no carga / no aparece | WF-07 (diagnostico) |
| Mi mod dejo de funcionar tras actualizar el juego | WF-20 (migracion, no es bug) |
| El juego no me arranca | WF-21 (compatibilidad: GPU sin DirectX 12.1/12.2 = no inicia) |
| Publicar en CurseForge | WF-03 |
| Proyecto/workspace desde cero | WF-08 |

## Regla de oro del corpus

Todo lo anterior tiene su version detallada en esta biblia: los **indices** (fichas MCP, workflows, intenciones CLI, ayudas del foro) estan enlazados en la documentacion de esta seccion, y los 9.957 documentos oficiales en el navegador.
