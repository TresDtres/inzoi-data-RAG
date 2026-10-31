---
source: mcp-tools
categoria: ayuda
familia: instalacion-arranque
clase: aceptado
verified: pendiente
game_version: 0.3.1
source_url: https://forum.playinzoi.com/t/topic/3078
idioma: en
foro_capturado: 2026-10-09
---

# Black screen in game after launch game

**Sintoma:** After launching the game, the shader compilation starts up, and so far, so good. After the shaders finish compiling, I get a black screen. I noticed that when I click a key on my keyboard or right-click my mouse, a loading screen appears. After the loading screen finishes, I get another endless black screen (I left it running for 30 minutes, still black screen)

**Causa:** desconocida

**Solucion:** Hello, I managed to get the game working by modifying the GameUserSettings.ini file using this path: <…>\AppData\Local\BlueClient\Saved\Config\Windows\ I modified the parameter: bSkipIntroVideo=False by replacing False with True and my game started working. There is a real problem with the intro video, which needs to be addressed because a lot of people are having this issue (Steam discussion)

**EN:** Black screen in game after launch game

**Fuente:** https://forum.playinzoi.com/t/topic/3078 (aceptado, views 679, creado 2025-08-21)
