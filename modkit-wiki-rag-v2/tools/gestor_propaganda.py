#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Gestor de Propaganda (H-016) - feed de PNGs para las pancartas del juego.

El sistema moderno de paneles publicitarios de inZOI (post-YouTube, cancelado
en v0.5.0) funciona asi:
  1. En el panel del mapa -> seccion "Paneles publicitarios" importas imagenes.
  2. El juego las guarda en Creations/MyTextures/<HASH32>/albedo.jpg con
     meta.json {SubCategory: "UserImport_Sign", SystemTags: [ImportedTexture]}.
  3. Eliges hasta 3 fotos y el juego las escrollea con zoom (Ken Burns)
     rotandolas de pantalla en pantalla por la ciudad.

Este script materializa imagenes DIRECTAMENTE en la galeria MyTextures con la
subcategoria correcta (UserImport_Sign), de modo que aparecen en el selector
del panel sin importarlas a mano dentro del juego.

Uso:
  python tools/gestor_propaganda.py <carpeta_o_fichero> [...] [--dry]

  - Cada imagen -> Creations/MyTextures/<hash32>/albedo.jpg + meta.json
  - El hash32 es un GUID hexadecimal generado (mismo formato que el juego).
  - --dry solo lista lo que haria.

Despues de ejecutarlo: abre el juego -> panel del mapa -> Paneles publicitarios
-> tus imagenes deberian aparecer en el selector de la galeria.
"""
import hashlib
import json
import os
import sys
import time
import uuid

MYTEXTURES = os.path.expanduser("~/Documents/inZOI/Creations/MyTextures")


def materialize(src_path, dry=False):
    src_path = os.path.abspath(src_path)
    if not os.path.isfile(src_path):
        print(f"ERROR: no existe {src_path}")
        return None
    ext = os.path.splitext(src_path)[1].lower()
    if ext not in (".png", ".jpg", ".jpeg"):
        print(f"ERROR: {src_path} no es png/jpg")
        return None
    guid = uuid.uuid4().hex.upper()
    dst = os.path.join(MYTEXTURES, guid)
    meta = {
        "Tags": [],
        "SystemTags": ["ImportedTexture"],
        "CreateTime": int(time.time()),
        "bIsShareable": 1,
        "SubCategory": "UserImport_Sign",
        "ThumbnailFiles": [],
        "Dependencies": [],
        "ModInformation": [],
        "CloModInformation": [],
    }
    print(f"[gestor] {os.path.basename(src_path)}")
    print(f"          -> {dst}")
    print(f"          PathKey probable: {guid}")
    if dry:
        return guid
    os.makedirs(dst, exist_ok=True)
    # el juego guarda la textura como albedo.jpg; copiamos tal cual el fichero
    # (si es png y el juego no lo acepta, convertir a jpg antes de pasarla aqui)
    with open(src_path, "rb") as fsrc, open(os.path.join(dst, "albedo.jpg"), "wb") as fdst:
        fdst.write(fsrc.read())
    with open(os.path.join(dst, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=1)
    return guid


def main(argv):
    args = [a for a in argv if a != "--dry"]
    dry = "--dry" in argv
    if not args:
        print(__doc__)
        return 1
    if not os.path.isdir(MYTEXTURES):
        print(f"ERROR: no existe {MYTEXTURES}")
        return 1
    made = []
    for a in args:
        if os.path.isdir(a):
            for fn in sorted(os.listdir(a)):
                if os.path.splitext(fn)[1].lower() in (".png", ".jpg", ".jpeg"):
                    g = materialize(os.path.join(a, fn), dry)
                    if g:
                        made.append(g)
        else:
            g = materialize(a, dry)
            if g:
                made.append(g)
    print(f"\n[gestor] {len(made)} imagen(es) {'planeadas (dry)' if dry else 'escritas'} en MyTextures")
    if made and not dry:
        print("[gestor] Abre el juego: panel del mapa -> Paneles publicitarios -> selector")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
