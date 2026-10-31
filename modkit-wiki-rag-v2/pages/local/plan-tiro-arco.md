---
source: "local"
title: "Plan experimental: dinámica de tiro con arco para inZOI"
section: "local/ideas"
page_type: "experimental-plan"
updated_at: "2026-10-08"
---

# Plan experimental: dinámica de tiro con arco para inZOI

## Propósito

Evaluar si se puede crear una dinámica de tiro con arco con ModKit, Blender y el juego actual. El objetivo inicial no es prometer un minijuego completo, sino probar las capacidades por etapas y descubrir pronto qué parte bloquea el proyecto.

**Estado global: EXPERIMENTAL — nada de esta dinámica se ha probado de extremo a extremo dentro del juego.** Una guía oficial o una herramienta visible en el catálogo demuestra que hay documentación o una operación expuesta, no que este mod concreto funcione.

**Conclusión provisional:** la documentación describe animaciones de interacción, montajes y mallas adjuntas a sockets; el MCP de ModKit expone operaciones de datos para duplicar o crear filas. Son indicios para diseñar pruebas, no validación del mod. Siguen sin probarse la importación de animaciones propias desde Blender, la ejecución de una nueva interacción y el vuelo/impacto de la flecha.

## Estados de evidencia

- **Documentado:** aparece descrito en una fuente oficial. Aún requiere prueba en el proyecto y en la partida.
- **Observado en catálogo:** el MCP mostró una herramienta, tabla o ID durante esta sesión. No demuestra el resultado en juego.
- **Pendiente de prueba:** hipótesis que debe ejecutarse dentro del juego.
- **Validado en juego:** reservar esta etiqueta hasta que el mod se pruebe de extremo a extremo y el comportamiento se repita correctamente.

En este plan, “posible”, “compatible” o “soportado” describen una hipótesis o una capacidad documentada, no una función validada. Actualmente no hay ningún paso marcado como **Validado en juego**.

## Dinámica deseada

1. El Zoi coloca una flecha en el arco, inicialmente apuntando hacia abajo.
2. Levanta el arco, tensa la cuerda y apunta a la diana.
3. Dispara, acompaña el movimiento y mantiene la mirada hacia el objetivo.
4. La diana registra el impacto y, si es posible, la puntuación.

El arco debe flexionarse aproximadamente 25 grados durante la tensión. La flecha debe pasar de estar en la mano/arco a volar hacia la diana.

## Enfoque de modelado y animación en Blender

Se cuenta con Zois originales para probar en Blender. Conviene usar ese rig como destino de la animación desde el principio, en vez de diseñar primero para otro esqueleto y dejar todo el retargeting para el final.

### Rig del arco

La flexión del arco se puede plantear como un experimento de rigging independiente de la animación del Zoi:

- Mantener un hueso raíz o de empuñadura para alinear el arco con la mano.
- Añadir huesos a las palas superior e inferior, y ponderar la malla para que se flexione al tensar.
- Si la cuerda se modela aparte, probar un control o huesos para cuerda y punto de anclaje.
- Empezar con una flexión visual aproximada de 25 grados y revisar si la deformación se conserva al exportar e importar.

La documentación revisada confirma el uso de mallas adjuntas a sockets, pero no confirma que un arco esquelético y su animación se importen o reproduzcan en ModKit. El rig debe quedar marcado como experimental hasta probarlo dentro del juego.

### Animación del Zoi: animación manual o Live Link

1. **Animación manual en Blender:** crear las tres fases sobre el rig del Zoi original. Permite controlar bien manos, dedos, hombros, mirada y sincronización con el arco, pero requiere resolver la pose de tensado.
2. **MetaHuman Live Link como fuente de movimiento:** se toma como premisa que Live Link permite obtener movimiento de MetaHuman. La prueba pendiente no es si puede generar/capturar una actuación, sino cómo convertirla, exportarla y retargetearla al rig original del Zoi sin perder la pose.

La documentación de inZOI también describe expresiones faciales con secuencias de animación en la tabla `FacialExpression`. Esto confirma que existe un canal documentado para animación facial; no demuestra por sí solo que la importación de animación corporal completa use el mismo flujo. Con Live Link como base, ajustar en Blender las manos al grip/cuerda, la posición del arco, la mirada a la diana y el instante de suelta. Si el retargeting deforma dedos, hombros o postura, corregirlo a mano.

## Evidencia disponible (sin prueba de extremo a extremo)

### Animaciones de interacción

- La documentación de ModKit describe las animaciones de interacción como **Animation Montages** configurados para posturas y condiciones de los personajes.
- La estructura de montaje contempla secciones con nombre, tiempo de inicio, transición a otra sección y opción de bucle. Esto encaja conceptualmente con `Nock`, `Aim` y `Release`.
- La fila `AnimCharacter_Interaction` contiene configuraciones por postura, edad/crecimiento y género, y referencia assets de animación.
- En esta sesión, el catálogo de ModKit mostró 4.634 entradas en la categoría `Character_Interaction`.

La documentación y el catálogo muestran un sistema de animación de interacción y muchos datos existentes. **No se ha probado en este proyecto** si una nueva entrada o un clip del usuario se reproducen en el juego.

### Modificación y creación de filas

El catálogo MCP de ModKit expone herramientas que declaran permitir:

- Leer filas y tablas.
- Cambiar campos de una fila en el parche del plugin.
- Crear una fila nueva en una tabla de datos, opcionalmente duplicando otra como plantilla.
- Guardar los cambios en el plugin.

En el catálogo consultado aparecieron tablas como `AnimCharacter_Interaction`, `InteractionBag`, `Interaction` y `Montage`. Por tanto, se puede probar algo más que reemplazar una animación: pedir al ModKit que añada filas de datos. Esto es una capacidad expuesta por el MCP, no una prueba de que una fila nueva funcione en el juego. Crear una fila **no garantiza** que el código del juego la descubra, que aparezca en la interfaz o que la interacción pueda ejecutarse de forma autónoma.

### Adjuntar objetos a la animación

Según su documentación, `B1AnimNotifyState_AttachDetachMesh` adjunta una malla estática a un socket durante un tramo de una secuencia o montaje y la retira al finalizar. **Pendiente de probar** con el arco, la flecha, los sockets y la versión del juego de este proyecto.

Ese notify no lanza un proyectil: al finalizar destruye la malla adjunta. La flecha visual y la flecha física/de juego son problemas distintos.

### Lógica sincronizada y proyectil

`B1AnimNotify_RunScript` aparece documentado como trabajo en curso: su implementación está comentada. No se debe diseñar la primera versión suponiendo que permitirá ejecutar lógica Lua exactamente en el fotograma del disparo.

Las herramientas disponibles para reproducir animaciones usan IDs de animaciones que ya existen. La herramienta para ejecutar una interacción también espera un `InteractionBagId`; no demuestra que un mod pueda registrar por sí solo una interacción nueva en el menú contextual.

### Animaciones de arco existentes

Se consultó el catálogo de movimiento del juego mediante búsquedas filtradas:

- `archery`: cero resultados.
- `bow`: resultados de cuencos, bolos y otros nombres coincidentes, sin una animación identificable de tiro con arco.
- `shoot`: aparecen animaciones de lanzamiento de baloncesto y disparo policial, no tiro con arco.

Es una búsqueda por nombre, no una prueba exhaustiva de todos los assets del juego. Sí indica que no hay un movimiento de arquería evidente para reutilizar con esos términos.

## Qué se va a intentar y qué puede fallar

| Parte | Evidencia preliminar (no validada) | Riesgo | Posible fallo |
| --- | --- | --- | --- |
| Arco, flecha y diana como modelos | La documentación de ModKit describe importación de assets; el flujo concreto debe probarse | Bajo | Escala, pivote, materiales o formato incorrectos |
| Reemplazar el montaje de una interacción existente | Hay filas de animación y referencias a montajes; no se ha aplicado un override de prueba | Medio | El override afecta otros usos de esa misma fila o el juego no acepta el asset asignado |
| Crear una fila propia de animación | El MCP expone creación de filas en tablas de datos | Medio-alto | La fila no se referencia desde ningún flujo de juego o faltan campos obligatorios |
| Importar una animación de Zoi creada en Blender | No hay un flujo completo confirmado en la documentación consultada | Alto | El FBX no importa como secuencia/montaje compatible o el rig/retargeting falla |
| Transferir movimiento de Live Link al Zoi | Live Link se acepta como fuente; no se ha probado exportar/retargetear el movimiento corporal al rig de inZOI | Alto | El clip no se puede convertir en un asset reproducible o el retargeting pierde manos, postura o mirada |
| Mostrar arco y flecha en sockets | Hay un notify documentado para adjuntar mallas estáticas | Medio | No hay socket adecuado, la posición no coincide o el objeto se elimina en un momento incorrecto |
| Flexión animada del arco | Hace falta un asset deformable/animable y un sistema que lo reproduzca | Alto | Una malla estática adjunta no se dobla; el flujo de animación de objeto personalizado no está probado |
| Flecha con vuelo, colisión e impacto | No se encontró un flujo confirmado en las APIs consultadas | Muy alto | La flecha solo puede representarse como efecto visual; no hay trayectoria ni impacto real |
| Nueva interacción seleccionable por el jugador | Hay filas de interacción y herramientas que ejecutan IDs existentes | Alto | La fila nueva no aparece en menús ni se integra con el objeto/diana |
| Puntuación | Requiere detectar el impacto y asociarlo a la diana | Muy alto | Sin evento de impacto fiable no se puede calcular una puntuación de forma robusta |

## Estrategia de prototipado

### Prueba 0: comprobar sustitución de datos

1. Crear un plugin de prueba y trabajar en una copia de una fila de interacción, no sobre la fila base compartida.
2. Cambiar temporalmente su referencia a un montaje que ya exista.
3. Ejecutar la interacción afectada y comprobar que el cambio se ve en el juego.
4. Desactivar el plugin y verificar que la animación original vuelve.

**Objetivo:** comprobar si un override de la fila llega hasta la animación reproducida. Solo se marca **Validado en juego** si se observa funcionando en una sesión real, se repite y vuelve a la animación original al desactivar el plugin. Esta prueba todavía no implica importar animaciones de Blender.

### Prueba 1: importar un clip propio

1. Conseguir el esqueleto/rig de Zoi apropiado para animación.
2. Crear en Blender un clip pequeño y fácil de evaluar, como levantar ambos brazos, para probar el rig y la exportación sin invertir tiempo en el tiro entero.
3. Averiguar si ModKit importa el FBX como animación y cómo se obtiene una referencia válida para el campo `Animation`.
4. Asignarlo en una fila duplicada y probarlo con un Zoi.

**Punto de decisión:** si no se puede importar o asignar una secuencia propia en una prueba real, detener el desarrollo de animación original y valorar un reemplazo construido con montajes/animaciones que ya existan. No declarar compatible el flujo solo porque el archivo se importe en el editor.

### Prueba 1B: transferir la actuación de Live Link al Zoi

Live Link se considera una fuente disponible de actuación de MetaHuman. Esta fase prueba el traspaso al formato/rig de inZOI:

1. Obtener una acción breve de tiro con arco mediante Live Link.
2. Exportar/retargetear la actuación al rig del Zoi original.
3. Comprobar si el resultado puede convertirse en un asset de animación que el juego reproduzca.
4. Revisar muñecas, manos, dedos, hombros, mirada, apoyo de pies y orientación del arco.
5. Comparar el resultado con el clip manual de prueba.

**Punto de decisión:** Live Link es la fuente prevista; su integración con el juego solo se marca **Validado en juego** cuando el clip transferido se reproduce con el rig y la pose correctos. Si falla el traspaso, la actuación aún puede servir de referencia artística.

### Prueba 2: montaje de tres fases

Si la prueba 1 funciona:

- `Nock`: colocar la flecha con el arco bajo.
- `Aim`: levantar y tensar; decidir si debe ser una sección en bucle para que el jugador pueda mantener la puntería.
- `Release`: soltar y seguir el movimiento, manteniendo la mirada hacia la diana.

Verificar transiciones, salida del bucle, mezcla al terminar e interrupciones por movimiento o por otra interacción.

### Prueba 3: props y flexión

- Adjuntar el arco al socket de la mano durante la interacción.
- Mostrar la flecha en el tramo de preparación y retirarla en el momento de soltar.
- Para doblar el arco, comprobar si se admite un asset con esqueleto/animación propia. El notify de malla estática no deforma la geometría.
- Comprobar qué ocurre si se interrumpe la animación, se cancela la interacción o cambia de postura.

### Prueba 4: acción nueva y tiro real

Solo después de validar la animación:

1. Intentar añadir una fila nueva para la interacción y determinar qué filas adicionales necesita.
2. Comprobar si una diana puede exponer esa acción en su menú contextual.
3. Investigar si existe una API compatible para crear, mover y detectar impacto de una flecha.
4. Añadir puntuación solo si el impacto se puede detectar de forma fiable.

Si no hay interacción o proyectil programable, el resultado todavía puede ser una animación de tiro con una diana y un efecto visual, pero no debe presentarse como un minijuego físico funcional.

## Orden recomendado de decisiones

1. **¿Se aplica un override de animación existente?** Si no, solucionar primero la ruta de datos.
2. **¿Se importa y reproduce un clip de Blender?** Si no, el mod queda limitado a animaciones existentes.
3. **¿Puede el juego reproducir un montaje con las tres fases?** Si no, probar una sola animación continua.
4. **¿Se pueden adjuntar y retirar arco/flecha en los momentos adecuados?** Si no, reducir la prueba a animación corporal.
5. **¿Se registra una interacción nueva y puede seleccionarse?** Si no, buscar un reemplazo de una interacción existente o aceptar un mod visual.
6. **¿Se puede detectar el impacto del proyectil?** Si no, omitir puntuación y física.

## Recomendación

Vale la pena intentarlo, empezando por el **override reversible de una fila duplicada**. Es la prueba más barata y comprueba la hipótesis de reemplazar una interacción antes de producir toda la animación en Blender.

La expectativa prudente —todavía experimental— es:

- **Animación corporal y props:** objetivo plausible, pendiente de demostrar el flujo de importación de animaciones propias.
- **Reemplazo de una animación existente:** primer experimento recomendado.
- **Interacción de tiro nueva:** posible a nivel de datos, pero su registro y aparición en el juego no están confirmados.
- **Flecha física y puntuación:** fuera de lo que se ha podido confirmar en la API disponible; tratarlas como una fase experimental separada.

Los cambios de datos del plugin de prueba deben ser reversibles al desactivar el mod. No hace falta pedir confirmación por cada acción reversible durante las pruebas; reservarla para cualquier operación que vaya a producir un cambio permanente o sin forma fiable de deshacerlo.

## Registro de pruebas

| Fecha | Prueba | Resultado observado en el juego | Estado |
| --- | --- | --- | --- |
| 2026-10-08 | Revisión de documentación y catálogos MCP | Evidencia preliminar reunida; no se ha ejecutado ni validado un mod de tiro con arco | EXPERIMENTAL |

Actualizar esta tabla con resultados reproducibles. Cambiar una función a **Validado en juego** solo después de probarla dentro del juego; anotar también versión/build, plugin usado, pasos de reproducción y limitaciones.

## Referencias oficiales

- [Character Animation](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/characteranimation)
- [Interaction animations](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/characteranimation/interaction)
- [Montage data guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/montage)
- [AnimCharacter data guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/animcharacter)
- [FacialExpression data guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/facialexpression)
- [B1AnimNotifyState_AttachDetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachdetachmesh-en)
- [B1AnimNotify_RunScript](https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-runscript-en)
- [motion.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/motion/motion-play)
- [interaction.execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute)
