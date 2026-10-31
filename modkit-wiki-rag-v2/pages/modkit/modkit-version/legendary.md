---
document_id: "6f86930023e97bf96f7c2f778af3b60c743282c62be36b7a077fc84829d40099"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/modkit-version/legendary"
title: "Legendary"
section: "modkit/modkit-version"
breadcrumb: ["ModKit Documentation", "ModKit", "ModKit Version"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:34+00:00"
content_sha256: "0323d9f8a6cc42c5a5bcbd16eb7fff2c679e46d2da7857e237ffbc3716d61f89"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/modkit-version/legendary"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**Prerequisites**

The following items must be prepared in advance.

---

**0.1 Create an Epic Games Account**

[https://www.epicgames.com](https://www.epicgames.com)

1. Click **Sign In** in the top right corner
2. If you do not have an account, proceed with **Sign Up**
3. Complete email verification

note

Legendary is a CLI tool that uses the Epic Games API, so an **Epic Games account is required.**

---

**0.2 Install Epic Launcher (Recommended)**

[https://store.epicgames.com](https://store.epicgames.com)

1. Install the Launcher
2. Log in with your Epic account
3. Confirm that **inZOI ModKit** is added to your account library

warning

If the ModKit is not in your library, the download may not be available.

---

**0.3 Recommended: Use PowerShell**

It is recommended to use Windows PowerShell or Windows Terminal.

---

## 1. Install Python 3.9

---

**1.1 Download**

Download the Python 3.9 installer from the official website. (Legendary recommends using Python 3.9.)

Official page:

[Python Release Python 3.9.25](https://www.python.org/downloads/release/python-3925/)

Download item:

- **Windows installer (64-bit)**

---

**1.2 Required Installation Options**

Installation screen:

```
✓ Add Python 3.9 to PATH✓ Install launcher for all users
```

If these options are not checked, subsequent commands may not work properly.

---

**1.3 Verify Installation**

```
python --versionpy -0
```

Expected output:

```
Python 3.9.xInstalled Pythons:- 3.11-64- 3.9-64
```

---

## 2. Virtual Env (Python 3.9)

---

**2.1 Create a Working Directory**

```
mkdir C:\legendary_envcd C:\legendary_env
```

---

**2.2 Create a Python 3.9 Virtual Environment**

On Windows, use the Python Launcher (`py`) instead of `python3.9`:

```
py -3.9 -m venv venv
```

---

**2.3 Activate the Virtual Environment**

```
venv\Scripts\activate
```

Make sure `(venv)` appears at the beginning of the command prompt.

Verify the Python version:

```
python --version
```

→ Python 3.9.x

---

## 3. Install Legendary

---

**3.1 Update pip**

```
python -m pip install --upgrade pip
```

---

**3.2 Install Legendary**

```
pip install legendary-gl
```

Verify the installation:

```
legendary --version
```

---

## 4. Epic Account Auth (Required Step)

Legendary requires authentication at least once.

```
legendary auth
```

When your browser opens, log in with your Epic account.

Upon successful authentication:

![Epic Auth Success](https://mod-docs.playinzoi.com/media/Modkit/ModKitVersion/ModKitVersion_02.png)

- The authentication token is stored locally.
- Re-authentication is not required afterward.

---

## 5. Check Available Games

```
legendary list-games
```

Example output:

![Legendary list-games output](https://mod-docs.playinzoi.com/media/Modkit/ModKitVersion/ModKitVersion_03.png)

note

Make sure to use the exact **App name** displayed in the `list-games` output.

---

## 6. Download inZOI ModKit

---

**6.1 Basic Installation**

```
legendary install inzoi_modkit
```

---

**6.2 Install a Specific Version**

```
legendary install "inZOI ModKit" --version [version_name]
```

Example output:

![Legendary install version](https://mod-docs.playinzoi.com/media/Modkit/ModKitVersion/ModKitVersion_04.png)

---

Press **Y** to continue when prompted.

![Legendary download progress](https://mod-docs.playinzoi.com/media/Modkit/ModKitVersion/ModKitVersion_05.png)

---

**6.3 Verify Installed Items**

```
legendary list-installed
```

---

## 7. Launching the ModKit

Navigate to the installation directory and run the executable file directly.

Or use:

```
legendary launch inzoi_modkit
```

---

## 8. Troubleshooting

---

**❌ python3.9 not recognized**

On Windows, the following command may not exist:

```
python3.9
```

Instead, use:

```
py -3.9
```

---

**❌ No saved credentials**

```
ValueError: No saved credentials
```

Solution:

```
legendary auth
```

Authentication must be completed first.

---

**❌ Microsoft Store Python conflict**

Go to:

Settings → Apps → Advanced app settings → App execution aliases

Disable the following:

- `python.exe`
- `python3.exe`

---

**❌ Mixing administrator and normal permissions**

Legendary stores authentication credentials in the user directory.

- Running `auth` in Administrator PowerShell
- Running `list-games` in normal PowerShell

→ May result in a "no credentials" error.

Always use the same permission level consistently.

---

## 9. Reuse Virtual Env

When working again later:

```
cd C:\legendary_envvenv\Scripts\activate
```

To deactivate:

```
deactivate
```

---

## 10. Command Summary

```
py -3.9 -m venv venvvenv\Scripts\activatepython -m pip install --upgrade pippip install legendary-gllegendary authlegendary list-gameslegendary install inzoi_modkit
```
