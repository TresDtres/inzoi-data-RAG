---
source: "local"
title: "Ideas de mods para inZOI"
section: "local/ideas"
page_type: "user-authored-reference"
updated_at: "2026-10-08"
---

# Ideas de mods para inZOI

## Objetivo

Este documento reúne ideas de mods que se pueden explorar con los MCP de `inzoi-game` y `inzoi-modkit`, con especial atención a un **director de ambiciones y deseos** que también tenga en cuenta carreras, relaciones y hogar.

La propuesta se basa en las herramientas y el catálogo Lua consultados en esta sesión. Los nombres exactos de comandos se conservan para que sirvan de referencia al implementar y validar cada función.

## Resumen ejecutivo

La opción más viable para empezar es un mod Lua que **lea el estado de los Zois y recomiende objetivos usando contenido que ya existe en el juego**:

1. Consulta ambición y deseos del Zoi.
2. Revisa, cuando sea relevante, su hogar, carrera y relaciones.
3. Presenta una sugerencia comprensible.
4. Aplica cambios reversibles de acuerdo con las reglas elegidas para el mod, sin pedir confirmación en cada acción.
5. Pide confirmación solo antes de un cambio permanente o que no tenga una forma fiable de deshacerse.

El catálogo consultado permite iniciar ambiciones existentes, administrar deseos, leer relaciones y consultar o cambiar algunos datos de carrera y hogar. No se encontró una API confirmada para crear definiciones nuevas de ambición o sus pasos. Por ello, el alcance inicial debe ser un **director de contenido existente**, no un editor de nuevas ambiciones.

## Qué aporta cada MCP

| MCP | Papel principal | Ejemplos de uso |
| --- | --- | --- |
| `inzoi-game` | Herramientas conectadas a la partida en ejecución. Pueden leer información y también modificar el estado del juego. | Consultar Zois y hogares, revisar carreras, iniciar una ambición, seleccionar deseos o cambiar relaciones. |
| `inzoi-modkit` | Herramientas de autoría y validación de mods. Permiten trabajar en proyectos, scripts, bindings y contenido compatible con ModKit. | Crear y escribir scripts Lua, añadir bindings, consultar recetas y validar scripts. |

El MCP del juego **no equivale a un mod ya instalado**: permite probar o controlar funciones en la sesión conectada. Para entregar una funcionalidad reutilizable como mod, se debe crearla y validarla mediante ModKit.

La [guía oficial de trucos de inZOI](https://playinzoi.com/es-es/guide/cheats) es documentación oficial y presenta los trucos como herramientas creativas para experimentar y controlar distintos aspectos del juego. El diseño de un mod debe respetar ese flujo: una acción de juego reversible no requiere una confirmación repetitiva; la confirmación se reserva para cambios permanentes o sin una reversión fiable. El resto de este archivo es un plan de ideas elaborado para este espacio de trabajo, no documentación publicada por inZOI.

## Conceptos que conviene separar

### Ambiciones

Comandos confirmados:

- `ambition.get`: consulta si hay una ambición activa, el paso actual, los IDs jugables y el recuento completado.
- `ambition.play`: inicia una ambición existente mediante su ID. Acepta `guard=true` para exigir que sea jugable.
- `ambition.complete`: intenta completar una ambición, pero está documentado como cheat y no hace nada en versiones comerciales.

Por tanto, un mod puede **elegir e iniciar** una ambición existente, pero no se ha confirmado que pueda crear ambiciones o editar sus pasos. No se debe diseñar la progresión suponiendo que `ambition.complete` funcionará para jugadores.

### Deseos y aspiraciones

En el catálogo aparecen como `hope` (deseos):

- Lectura: `hope.list`, `hope.get_config`.
- Selección y mantenimiento: `hope.select`, `hope.deselect`, `hope.deselect_all`, `hope.set_fix`, `hope.set_expire`, `hope.force_update`.
- Configuración: `hope.set_config`.

`hope.set_config` cambia la configuración global de generación de deseos, por lo que puede afectar a todos los Zois. No debe usarse como si fuera un ajuste individual sin haberlo explicado al jugador.

### Carreras

Comandos relevantes:

- Lectura: `career.list_openings`, `career.get_work_status`, `career.can_promote`.
- Acciones: `career.join`, `career.promotion`, `career.set_skill_level`, `career.set_business_level`, entre otros.

`career.join` requiere identificadores válidos de carrera y empleo; se pueden consultar vacantes con `career.list_openings`. Algunos comandos de progresión tienen acceso de tipo cheat.

### Relaciones y hogar

Comandos relevantes:

- Relaciones: `relationships.list`, `relationships.get_value`, `relationships.get_value_between`, `relationships.set_value`, `relationships.set_value_between`, `relationships.set_full`, `relationships.set_worst`, `relationships.obliviate`, `relationships.unlock_profile`.
- Hogar: `household.list`, `household.get_members`, `household.add_member`, `household.remove_member`, `household.create`, `household.possess`.

Algunos cambios de relación tienen validaciones del juego. Por ejemplo, el valor romántico está protegido por compatibilidad y los vínculos familiares requieren que exista una relación familiar.

## Ideas de mods

### 1. Director de ambiciones y deseos

**Prioridad:** muy alta  
**Complejidad inicial:** media  
**Valor:** convierte los sistemas de ambición y deseos en una dirección narrativa configurable, sin inventar contenido que el juego no exponga.

Funciones posibles:

- Mostrar la ambición activa, su paso y las opciones jugables.
- Detectar si el Zoi no tiene una ambición activa y recomendar una opción existente.
- Consultar deseos activos y permitir fijar, quitar o renovar un deseo.
- Proponer prioridades por reglas configurables: carrera, familia, vida social o desarrollo personal.
- Permitir tres modos: solo sugerencias, automatización de cambios reversibles y confirmación para cambios permanentes.
- Evitar repetir una sugerencia que el jugador haya rechazado recientemente durante la misma sesión.

**Límite:** los IDs jugables vienen del juego. La selección automática no crea una ambición nueva ni garantiza que exista una ambición para cada situación.

### 2. Orientador profesional

**Prioridad:** alta  
**Complejidad inicial:** baja-media

Funciones posibles:

- Mostrar el trabajo y el estado laboral del Zoi.
- Consultar vacantes y resumirlas en una lista legible.
- Recomendar un empleo si el Zoi puede trabajar y el jugador activa esa regla.
- Señalar cuándo se puede promocionar.
- Separar recomendaciones de acciones: consultar no debería aceptar un trabajo ni promocionar automáticamente.

Comandos de referencia: `career.get_work_status`, `career.list_openings`, `career.can_promote`, `career.join`.

### 3. Consejero de relaciones

**Prioridad:** alta  
**Complejidad inicial:** media

Funciones posibles:

- Mostrar relaciones entre los miembros del hogar.
- Detectar relaciones que el jugador quiere mejorar o mantener.
- Recomendar una meta narrativa —por ejemplo, pasar tiempo con un familiar— o aplicar ajustes reversibles según las reglas elegidas.
- Pedir confirmación solo si la acción concreta es permanente o no se puede revertir de forma fiable.

Comandos de referencia: `relationships.get_value_between`, `relationships.list`, `household.get_members`.

**Precaución:** los cambios directos pueden ser bidireccionales y están sujetos a reglas del juego. Debe evitarse “maximizar todas las relaciones” como comportamiento predeterminado.

### 4. Director de historias del hogar

**Prioridad:** alta  
**Complejidad inicial:** media

Funciones posibles:

- Usar los miembros, trabajos y relaciones del hogar para sugerir objetivos semanales o por etapa de vida.
- Proponer metas de convivencia, apoyo familiar, independencia o reconciliación.
- Hacer que la historia avance mediante objetivos existentes, no mediante cambios invisibles de estado.
- Dejar que el jugador descarte o posponga una historia.

Comandos de referencia: `household.get_members`, `relationships.get_value_between`, `career.get_work_status`, `ambition.get`, `hope.list`.

### 5. Panel de control del director

**Prioridad:** media-alta  
**Complejidad inicial:** media-alta

Una interfaz de UI Mod podría mostrar:

- Zoi seleccionado y hogar.
- Ambición actual y opciones disponibles.
- Deseos activos y fijados.
- Trabajo y estado de promoción.
- Recomendación actual, motivo y botones para aceptar o ignorar.

Una combinación de UI Mod y Lua permitiría presentar la información en el juego y mantener la lógica en un script. Primero conviene construir y probar el director sin interfaz compleja; después se puede añadir el panel.

### 6. Director reactivo a emociones

**Prioridad:** experimental  
**Complejidad:** media-alta

El catálogo de recetas de ModKit incluye un ejemplo de Lua que registra cambios de emoción. A partir de ese patrón se podría estudiar un director que sugiera objetivos tras cambios emocionales.

Ejemplo de comportamiento: si cambia la emoción, revisar si hay una meta compatible y mostrar una sugerencia. El cambio emocional por sí solo no debería modificar relaciones, deseos ni carrera.

**Límite:** antes de crear reglas definitivas hay que probar qué eventos se reciben en el juego y con qué frecuencia; no conviene asumir que todos los estados generan un evento fiable.

## Propuesta detallada: primera versión del Director

### Alcance de la versión 0.1

Incluir:

1. Consultar una vez el estado de ambición con `ambition.get`.
2. Consultar deseos activos con `hope.list`.
3. Mostrar recomendaciones basadas en reglas explícitas.
4. Permitir iniciar una ambición existente con `ambition.play` y `guard=true`, sin confirmación por ser una acción de juego reversible.
5. Permitir fijar o quitar un deseo seleccionado sin confirmación repetitiva.
6. Registrar mensajes comprensibles cuando una acción no se pueda aplicar.
7. Reservar confirmación para cualquier acción que se clasifique como permanente o sin reversión fiable.

Dejar fuera inicialmente:

- Crear ambiciones o pasos nuevos.
- Completar ambiciones automáticamente.
- Cambiar la configuración global de deseos.
- Cambiar relaciones, empleos o miembros del hogar sin aprobación.
- Automatizar acciones cada frame.

### Flujo de uso

1. El jugador abre o activa el director.
2. El mod consulta el estado actual; no presupone que los valores anteriores sigan vigentes.
3. Evalúa reglas sencillas y muestra una sugerencia con su motivo.
4. Según la configuración, el jugador puede aceptar, descartar o posponerla; las acciones reversibles automatizadas se ejecutan sin diálogo por acción.
5. Antes de ejecutar una acción permanente o sin reversión fiable, el mod explica el efecto y pide confirmación.
6. Tras cada cambio, vuelve a consultar el estado y comunica el resultado.

### Reglas de diseño recomendadas

- **El jugador decide el nivel de autonomía.** Ofrecer sugerencias, automatización de acciones reversibles y una opción separada para cambios permanentes.
- **No pedir confirmación por cada cheat o cambio reversible.** Los trucos son herramientas de juego; no requieren un permiso adicional cuando la acción es reversible y el jugador ha habilitado esa función del mod.
- **Confirmar solo lo permanente.** Si no hay una reversión fiable, explicar qué cambia y pedir confirmación antes de ejecutarlo.
- **Clasificar acciones por efecto, no por nombre.** Que un comando sea un cheat no determina si el resultado es permanente; evaluar si se puede deshacer y qué alcance tiene.
- **Comprobar justo antes de actuar.** La partida puede cambiar entre la recomendación y su ejecución.
- **Usar las comprobaciones del juego.** Para empezar una ambición, usar `guard=true`.
- **Explicar el alcance.** Indicar si una acción afecta a un Zoi, a un vínculo entre dos Zois o a toda la generación global de deseos.
- **No usar comandos de cheat como base de progresión.** En particular, no depender de `ambition.complete`.
- **No actuar en bucle por frame.** El catálogo de recetas incluye un ejemplo de lógica periódica con intervalo controlado; usar ese patrón o eventos y limitar las consultas.
- **Separar lectura y escritura.** Las consultas pueden generar recomendaciones; las acciones reversibles pueden automatizarse según las opciones y las permanentes requieren confirmación.

## Esqueleto técnico en ModKit

El catálogo Lua confirma estos callbacks: `on_begin`, `on_tick`, `on_end`, `on_lua_message`, `on_savegame` y `on_loadgame`. También expone `inzoi.cli.execute`, eventos `inzoi.event.on/off`, mensajería y helpers de entidades.

Organización conceptual:

```text
Director de ambiciones
├── Lectura del estado
│   ├── ambición actual y opciones jugables
│   ├── deseos seleccionados
│   ├── carrera
│   └── hogar y relaciones (fase posterior)
├── Reglas de recomendación
├── Presentación de la sugerencia
└── Acción confirmada
    ├── iniciar ambición existente
    └── mantener o modificar un deseo
```

Flujo de trabajo sugerido con las herramientas ModKit:

1. Consultar `modkit_list_lua_recipes` y partir de una receta adecuada.
2. Crear el script con `modkit_create_lua_script`.
3. Añadir el binding correspondiente con `modkit_add_lua_binding`.
4. Consultar cada comando y sus parámetros antes de incluir una llamada en el script.
5. Validar con `modkit_validate_lua_script`.
6. Probar primero las consultas y después las acciones, una por una, en una partida de prueba.

Los comandos Lua para ambiciones, deseos, carrera, relaciones y hogar aparecen en el catálogo de `modkit_list_lua_api_catalog`. Las herramientas de estado directo del MCP de juego sirven para explorar la partida, pero no sustituyen la validación del mod final.

## Plan por fases

### Fase 1 — Prototipo de lectura

- Crear un script Lua mínimo.
- Consultar `ambition.get` y `hope.list`.
- Mostrar o registrar los resultados sin alterar la partida.
- Validar el script y comprobar cómo se manejan errores y respuestas.

**Criterio de salida:** puede leer los datos dos veces sin duplicar listeners ni producir acciones inesperadas.

### Fase 2 — Recomendaciones

- Añadir reglas declarativas y sencillas.
- Explicar por qué aparece cada recomendación.
- Permitir descartarla.
- Limitar consultas periódicas y evitar lógica por frame.

**Criterio de salida:** ninguna recomendación modifica por sí misma el estado del juego.

### Fase 3 — Acciones reversibles y protección de cambios permanentes

- Añadir inicio de ambición con `guard=true`, sin pedir confirmación por cada inicio.
- Añadir selección o mantenimiento de deseos de acuerdo con las opciones de autonomía del jugador.
- Identificar las acciones sin reversión fiable y pedir confirmación solo para esas acciones.
- Volver a consultar el estado tras cada cambio.

**Criterio de salida:** las acciones reversibles funcionan sin diálogos innecesarios; las permanentes piden confirmación; los fallos se informan como fallos, no como éxitos.

### Fase 4 — Contexto de carrera y hogar

- Añadir lecturas de carrera y vacantes.
- Añadir composición del hogar y relaciones.
- Proponer historias que combinen estos datos, sin escribir cambios automáticos.

**Criterio de salida:** las reglas distinguen entre sugerir una acción y ejecutarla.

### Fase 5 — Interfaz y opciones

- Crear un panel UI Mod para aceptar, descartar y configurar sugerencias.
- Añadir opciones independientes para cada sistema.
- Informar del alcance de los cambios globales o de tipo cheat sin bloquear acciones reversibles con confirmaciones repetitivas.
- Pedir confirmación desde el panel únicamente para operaciones permanentes o sin reversión fiable.

**Criterio de salida:** las acciones reversibles respetan las opciones del jugador y las permanentes tienen una explicación y una confirmación previa.

## Riesgos y límites conocidos

1. **No se confirmó creación de ambiciones nuevas.** Solo se observaron consultas e inicio de IDs existentes.
2. **Completar una ambición no es una ruta fiable.** `ambition.complete` está marcado como cheat y no operativo en versiones comerciales.
3. **La configuración de deseos puede ser global.** `hope.set_config` afecta a todos los personajes.
4. **Hay comandos de carrera con acceso de cheat.** Deben marcarse como funciones de depuración o tratarse con cautela.
5. **Las relaciones no son valores libres.** El juego puede rechazar cambios románticos o familiares que no respeten sus validaciones.
6. **La estabilidad de eventos debe probarse.** No asumir que un callback se dispara una vez, ni que un evento está disponible para todos los sistemas.
7. **Las herramientas de juego pueden modificar una partida real.** Durante el desarrollo, separar lectura de escritura y utilizar una partida de prueba cuando sea posible.

## Siguiente paso recomendado

Implementar únicamente la **Fase 1** del Director: leer ambición y deseos y producir una salida clara, sin modificar nada. Después, añadir reglas para automatizar acciones reversibles y reservar las confirmaciones para cambios permanentes o sin reversión fiable.
