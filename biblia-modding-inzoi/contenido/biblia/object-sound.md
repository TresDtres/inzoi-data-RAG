# Object Sound

Object Sound asigna **sonidos por objeto y por estado de interaccion**: como suena un piano al tocarlo, una silla al arrastrarla, una puerta al abrirse. Se configura por objeto, paso a paso.

## Que se puede construir

- Remplazo o nueva asignacion de sonidos de interaccion para un objeto (muebles, instrumentos, objetos de la vida diaria).
- Capas de audio por estado (abrir, cerrar, loop, un-shot).

## Flujo (paso a paso en la pantalla del ModKit)

1. Abre la pantalla **Object Sound** y localiza el objeto por nombre (p.ej. `Piano01`).
2. Elige el estado de interaccion al que asignas audio.
3. Importa tu audio (los recursos de audio del workspace del proyecto) y asignalo al estado.
4. Prueba en juego la interaccion: el estado correcto debe disparar tu sonido y no el vanilla.

## Reglas practicas

- La configuracion es **por objeto**: clona el sonido de un objeto vanilla con interaccion equivalente y sustituye el archivo de audio.
- Si el objeto clonado tenia varios estados, cubre todos o quedaran mezclados los tuyos y los vanilla.
- El audio importado debe respetar el formato/compresion del proyecto; un audio demasiado pesado engorda el build completo (el mod empaqueta todo el proyecto).

## Relacion con Animation

Los AnimNotify de audio (`GameObjectSound`, `CharacterPlayAudio`, `VoiceTalk`...) son la otra mitad del pipeline de sonido: Object Sound cubre el objeto; los notifies cubren el timeline de las animaciones que lo usan.

## Doc oficial

`modkit/how-to/object-sound/01overview.md` y siguientes (pantalla, busqueda, asignacion por estados).
