---
document_id: "67868f86c096da7f3900ed51fca3d3e8dd58fad39f808570f44444bfd750383f"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/legacy/caz/head/02export"
title: "Export"
section: "modkit/legacy"
breadcrumb: ["ModKit Documentation", "ModKit", "Legacy", "CAZ", "Head"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "f3f074bb6e6f5562daf9ffdbf15ae8cd1d02e24f575706741ccce71bda98bb5b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/legacy/caz/head/02export"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**2.1 Launch Quixel Bridge**

Install and launch **Quixel Bridge**.

[Quixel Bridge](https://quixel.com/bridge) [Download Link](https://d2shgxa8i058x8.cloudfront.net/bridge/win/Bridge.exe)

warning

If the official address changes due to Quixel policy, you may also use the temporary download link below.

**2.2 Open My MetaHumans**

Once Bridge launches, open the **My MetaHumans** tab. Select the MetaHuman face you created earlier.

![Bridge Launch](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_01.png) ![Bridge My MetaHumans](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_02.png)

---

**2.3 Configure Download / Export Settings**

Select the character and open **Download Settings** and **Export Settings**.

![Download Settings](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_03.png)

For inZOI, texture assets are not required. Only configure the following options.

**Download Settings**

- **FBX**
- **UAsset + Source Asset**

![Download Models](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_04.png)

**Export Settings**

- Set the export target to **Maya**

---

**2.4 Download and Export**

After setting the configuration, press **Download**.

![Download Button](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_05.png)

Once the download is complete, launch **Maya** and press **Export**.

![Export Button](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_06.png)

---

**2.5 Install the Maya Plugin**

If a plugin installation prompt appears during this process, allow the installation.

In Maya:

- **Untrusted Plugin → Allow**
- **Confirm dialog → Yes**

This only needs to be done **once**.

![Untrusted Plugin](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_07.png)

![Confirm Dialog](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_08.png)

---

**2.6 Import Progress**

If everything runs correctly, Maya will begin importing the head data.

![Import Progress](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_09.png)

---

**2.7 Verify the Imported Character**

When the import is finished:

- The MetaHuman character appears in the Maya scene.
- The **MetaHuman controller panel** appears on the side.

If both appear correctly, the export process was successful. It is recommended to open a **new scene** to verify that everything loads properly.

![Maya Result](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta02/Meta02_10.png)
