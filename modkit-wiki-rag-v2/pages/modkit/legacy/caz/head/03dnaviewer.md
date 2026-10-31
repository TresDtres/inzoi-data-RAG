---
document_id: "ad9ccaf91a6437485a642cdb447c80105add5e8fdc581b12449d837e299b6355"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/legacy/caz/head/03dnaviewer"
title: "DNA Viewer"
section: "modkit/legacy"
breadcrumb: ["ModKit Documentation", "ModKit", "Legacy", "CAZ", "Head"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "5bc7d01e338a1c81e2711c73fc171401aba5a71d181fdc47162de65257d14f01"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/legacy/caz/head/03dnaviewer"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**3.1 Download MetaHuman-DNA-Calibration**

Download **MetaHuman-DNA-Calibration** provided by Epic.

[GitHub - EpicGames/MetaHuman-DNA-Calibration](https://github.com/EpicGames/MetaHuman-DNA-Calibration)

---

**3.2 Extract the Archive**

Extract the downloaded folder to your desired location. (In this example, it is extracted to the **C:** drive.)

Then copy the following file:

`C:\...\Downloads\MetaHuman-DNA-Calibration-main\MetaHuman-DNA-Calibration-main\lib\Maya2023\embeddedRL4.dll`

and overwrite it here:

`C:\Program Files\Autodesk\Maya2023\bin\plug-ins\embeddedRL4.dll`

In a new Maya scene, execute the script `fbx_preset_loader.py` or drag it into the scene. Then drag the file from `inZOI_Export_FBX.zip` into the window.

![DNA Viewer Extract](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta03/Meta03_01.png)

---

**3.3 Open Script Editor in Maya**

In Maya, go to:

**Windows → General Editors → Script Editor**

![Script Editor](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta03/Meta03_02.png)

---

**3.4 Run the DNA Viewer Script**

In **Maya Script Editor (Python)**, run the following code to launch **DNA Viewer**.

Update the following values before running:

- `ROOT_DIR` → set this to your actual **MetaHuman-DNA-Calibration** folder path
- `MAYA_VERSION` → set this to your Maya version (`2023` in this guide)

![FBX Preset Loader](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta03/Meta03_03.png)

```
from sys import path as syspathfrom sys import platformimport os# ★ Change this to your actual PC pathROOT_DIR = "C:/.../MetaHuman-DNA-Calibration-main/MetaHuman-DNA-Calibration-main"# ★ Maya versionMAYA_VERSION = "2023"ROOT_LIB_DIR = f"{ROOT_DIR}/lib/Maya{MAYA_VERSION}"if platform == "win32":    LIB_DIR = f"{ROOT_LIB_DIR}/windows"elif platform == "linux":    LIB_DIR = f"{ROOT_LIB_DIR}/linux"else:    raise OSError("OS not supported")# ★ Register Python module pathssyspath.insert(0, ROOT_DIR)syspath.insert(0, LIB_DIR)# ★ Path to the script to runscript_path = f"{ROOT_DIR}/examples/dna_viewer_run_in_maya.py"print("Script exists:", os.path.exists(script_path))exec(open(script_path, "r", encoding="utf-8").read())
```

---

**3.5 Return to Bridge and Open SourceAssets**

Go back to **Bridge**, select the character you created, right-click it, and choose **Go to Files**.

![Go to Files](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta03/Meta03_04.png)

When the folder opens, go to the following path:

`%USERPROFILE%\Documents\Megascans Library\Downloaded\DHI\[asset_name]\8k\asset_source\MetaHumans\[character_name]\SourceAssets`

In **DNA Viewer - Path**, load the `.dna` file from the folder above, then click **Load DNA**.

In this example, use:

- `Jesse.dna`

![SourceAssets Path](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta03/Meta03_05.png)

---

**3.6 Process with LOD0 Only**

Only use **LOD0**.

Before processing:

- Uncheck `eyelashes_lod0_mesh`
- Uncheck `cartilage_lod0_mesh`

Then, in the lower section:

- Check **joints**
- Check **skin cluster**

After that, click **Process**.

![Load DNA](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta03/Meta03_06.png)

![LOD0 Process](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta03/Meta03_07.png)
