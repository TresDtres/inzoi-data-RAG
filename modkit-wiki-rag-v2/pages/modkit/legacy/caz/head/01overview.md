---
document_id: "c32795133ed8feef908a1c88a489f59a4f8bfac1528da22e2e94493afdfc4887"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/legacy/caz/head/01overview"
title: "Overview"
section: "modkit/legacy"
breadcrumb: ["ModKit Documentation", "ModKit", "Legacy", "CAZ", "Head"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:33+00:00"
content_sha256: "fb794bcd5c6a4cbf81c8ef7d4f0d42f76ef3cdf4999d3dba62dc25115df0d7f2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/legacy/caz/head/01overview"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

note

MetaHuman-related files required for this workflow are included in the ModKit installation directory.

Path: `\inZOIModKit\Extras\Maya\MetaHuman`

This folder contains the necessary scripts and resources used in the following MetaHuman → Maya export process.

**1.1 Launch MetaHuman Creator**

Start the creator using **UE 5.4**.

[MetaHuman Creator](https://metahuman.unrealengine.com/)

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta01/Meta01_01.png)

---

**1.2 Create a Base Face**

Click the **Create** button to enter the MetaHuman creation screen. Select a base face and click **Create Selected** to generate it.

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta01/Meta01_02.png)

---

**1.3 Recommended Proportions for inZOI**

If the proportions differ from the inZOI character standard, **errors may occur during later stages of the workflow.**

> Since the body used in-game is applied directly, it is recommended to match the following proportions. (Tall / Slot 6 / -0.85 / Short / Child Slot 5 / -1.00)

Recommended settings

- **Same for Adult Male and Female**
    - Tall
    - Slot 6
    - Head scale **-0.85**

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta01/Meta01_03.png)

- **Same for Children (Male/Female)**
    - Short
    - Slot 5
    - Head scale **-1.00**

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta01/Meta01_04.png)

---

**1.4 Edit the Face**

Edit the face in the **Face** tab.

warning

Currently, when working with MetaHuman, eyebrows, beards, and hair are not applied, and only the face is used.

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta01/Meta01_05.png)

---

**1.5 MetaHuman Creation Complete**

Return to **My MetaHumans**. If the new face appears in the list, the creation was successful.

![MetaHuman](https://mod-docs.playinzoi.com/media/Modkit/Caz/Head/Meta54/Meta01/Meta01_06.png)
