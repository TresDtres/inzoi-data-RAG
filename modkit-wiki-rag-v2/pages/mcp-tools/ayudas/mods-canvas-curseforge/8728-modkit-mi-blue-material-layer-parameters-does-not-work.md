---
source: mcp-tools
categoria: ayuda
familia: mods-canvas-curseforge
clase: aceptado
verified: pendiente
game_version: 20251221.9433
source_url: https://forum.playinzoi.com/t/topic/8728
idioma: en
foro_capturado: 2026-10-09
---

# ModKit: MI Blue Material Layer Parameters does not work

**Sintoma:** This issue is hugely impacting the creation of build mods. Modkit Version: 20251221.9433.W.MODKIT.EGS Situation: A modder is creating a new picture frame object. By default the game allows players to change the color of the frame and change the picture. Unfortunately when attempting to create a new Picture Frame object for the game that has the same customization options, the game does not register the layer parameters at all. The modkit provides the “MI Blue material” instance to support layer parameter materials but it does not work. It’s useless as it doesn’t function any different that the “MI Prop material". Normally once you create a new row for your mod object in the ObjectCustomizeMa

**Causa:** desconocida

**Solucion:** Root Cause : Okay so apparently the issue was that I was reusing the same material for more than one layer parameter which is a no no. SOLUTION : So when you are creating an object with material layer parameters, you will need to create one a MI Blue material and one or more MLI Default materials based on how many layer parameters you have. So for your RGB channel layers on the MI Blue, you must create a MLI for each layer parameter and assign it to your layer asset

**EN:** ModKit: MI Blue Material Layer Parameters does not work

**Fuente:** https://forum.playinzoi.com/t/topic/8728 (aceptado, views 146, creado 2026-01-03)
