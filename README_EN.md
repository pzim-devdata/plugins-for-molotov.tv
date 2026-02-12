
<p align="center">
  <img src="molotov-banniere.png" alt="Plugins for Molotov.tv" width="100%"/>
</p>

<p align="center">
  <a href="README.md">🇫🇷 Français</a> &nbsp;|&nbsp; <a href="README_EN.md">🇬🇧 English</a>
</p>

<p align="center">
  <a href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/">
    <img src="https://img.shields.io/badge/Firefox-Tampermonkey-orange?logo=firefox&logoColor=white" alt="Firefox"/>
  </a>
  <a href="https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo">
    <img src="https://img.shields.io/badge/Chrome-Tampermonkey-4285F4?logo=googlechrome&logoColor=white" alt="Chrome"/>
  </a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd">
    <img src="https://img.shields.io/badge/Edge-Tampermonkey-0078D4?logo=microsoftedge&logoColor=white" alt="Edge"/>
  </a>
  <a href="https://apps.apple.com/app/tampermonkey/id6738342400">
    <img src="https://img.shields.io/badge/Safari-Tampermonkey-000000?logo=safari&logoColor=white" alt="Safari"/>
  </a>
  <a href="https://addons.opera.com/en/extensions/details/tampermonkey-beta/">
    <img src="https://img.shields.io/badge/Opera-Tampermonkey-FF1B2D?logo=opera&logoColor=white" alt="Opera"/>
  </a>
  <br/>
  <img src="https://img.shields.io/github/commit-activity/t/pzim-devdata/plugins-for-molotov.tv" alt="Commits"/>
  <img src="https://img.shields.io/github/issues/pzim-devdata/plugins-for-molotov.tv" alt="Issues"/>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=pzim-devdata.plugins-for-molotov.tv" alt="Visitors"/>
  <img src="https://img.shields.io/github/license/pzim-devdata/plugins-for-molotov.tv" alt="MIT License"/>
</p>

> ⚠️ **This project is independent and is not affiliated with, associated with, authorized by, or officially connected to Molotov.tv or its parent companies.**

---

## 🎯 Description

**plugins-for-molotov.tv** is a collection of [Tampermonkey](https://www.tampermonkey.net/) scripts to improve the user experience on [app.molotov.tv](https://app.molotov.tv).

Molotov.tv is a French television streaming service accessible from the browser. These plugins automate repetitive actions and fix known interface bugs:

- 🖱️ **Auto click "Watch TV"** — removes the mandatory welcome step every time you open Molotov by automatically clicking the player launch button
- 📺 **Auto close channels panel** — fixes the bug where clicking on a channel does nothing, by forcing the channel list to reload every 45 seconds

These scripts work on all Tampermonkey-compatible browsers: Firefox, Chrome, Edge, Safari and Opera.

---

## 📋 Table of Contents

- [Prerequisites — Install Tampermonkey](#-prerequisites--install-tampermonkey)
- [Plugin 1 — Auto click "Watch TV"](#%EF%B8%8F-plugin-1--auto-click-watch-tv)
- [Plugin 2 — Auto close channels panel](#-plugin-2--auto-close-channels-panel)
- [Step-by-step installation](#-step-by-step-installation)
- [License](#-license)

---

## 🔧 Prerequisites — Install Tampermonkey

These plugins require the **Tampermonkey** browser extension.

<p align="center">
  <img src="https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g=s120" alt="Tampermonkey" width="80"/>
</p>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/">
        <img src="https://img.shields.io/badge/Firefox-Install-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo">
        <img src="https://img.shields.io/badge/Chrome-Install-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd">
        <img src="https://img.shields.io/badge/Edge-Install-0078D4?style=for-the-badge&logo=microsoftedge&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://apps.apple.com/app/tampermonkey/id6738342400">
        <img src="https://img.shields.io/badge/Safari-Install-000000?style=for-the-badge&logo=safari&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://addons.opera.com/en/extensions/details/tampermonkey-beta/">
        <img src="https://img.shields.io/badge/Opera-Install-FF1B2D?style=for-the-badge&logo=opera&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

---

## 🖱️ Plugin 1 — Auto click "Watch TV"

### Description

When you open [app.molotov.tv](https://app.molotov.tv), a **"Watch TV"** button appears on the home page before you can access the player. This plugin automatically clicks it **once per session**, taking you directly to the player without any manual action.

<p align="center">
  <img src="Auto clic &quot;Regarder la télé&quot;.gif" alt="Auto-click demo" width="80%"/>
</p>

### ⬇️ Download / Install directly

**Script URL** (for direct import into Tampermonkey):
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20clic%20%22Regarder%20la%20t%C3%A9l%C3%A9%22.user.js
```

### ⚙️ Configuration and parameters

You can customize the plugin behaviour by editing the `CONFIG` section at the top of the script:

```javascript
const CONFIG = {
    delai_verification: 1000,      // Delay (ms) before first button search after page load
                                   // Increase if your page loads slowly (e.g. 2000 for 2s)

    delai_avant_clic: 1000,        // Delay (ms) after finding the button, before clicking
                                   // Allows the page to stabilise before the action

    max_tentatives: 20,            // Maximum number of attempts to find the button
                                   // If the button is not on the page, the script gives up after this count

    intervalle_tentatives: 500,    // Delay (ms) between each search attempt
                                   // Lower for faster reaction, higher to reduce resource usage

    debug: true                    // Shows logs in the browser console (F12 → Console)
                                   // Set to false to disable debug messages
};
```

> 💡 **Example:** If your connection is slow, set `delai_verification` to `2000` and `delai_avant_clic` to `1500`.

### 🔍 How it works

The script uses `sessionStorage` to remember that it has already clicked during the current session. This means that if you navigate to other Molotov pages and return to the home page, the auto-click will not fire again — avoiding any intrusive behaviour. The session resets each time you close your browser.

### 📄 Source code

<details>
<summary>👁️ Click to show the full script</summary>

```javascript
// ==UserScript==
// @name         Molotov - Auto clic "Regarder la télé" SIMPLE
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Clique automatiquement sur "Regarder la télé" une seule fois par session
// @author       Vous
// @match        https://app.molotov.tv/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // ===== SECTION #1_CONFIGURATION =====
    const CONFIG = {
        delai_verification: 1000,
        delai_avant_clic: 1000,
        max_tentatives: 20,
        intervalle_tentatives: 500,
        debug: true
    };

    const SESSION_KEY = 'molotov_auto_click_done';

    // ===== SECTION #2_SELECTEURS =====
    const SELECTEURS_POSSIBLES = [
        '[data-test="watch-tv"] button',
        '[data-test="watch-tv"]',
        'div.YBdQ3 button',
    ];

    // ===== SECTION #3_FONCTIONS_UTILITAIRES =====
    function log(message) {
        if (CONFIG.debug) {
            console.log(`[Molotov Auto-Click] ${message}`);
        }
    }

    function dejaClic() {
        return sessionStorage.getItem(SESSION_KEY) === 'true';
    }

    function marquerCommeFait() {
        sessionStorage.setItem(SESSION_KEY, 'true');
        log('Session marquée comme traitée');
    }

    function trouverBouton() {
        for (let selecteur of SELECTEURS_POSSIBLES) {
            const element = document.querySelector(selecteur);
            if (element) {
                log(`Bouton trouvé avec le sélecteur: ${selecteur}`);
                return element;
            }
        }
        return null;
    }

    function cliquerBouton(callback) {
        const bouton = trouverBouton();
        if (bouton) {
            log(`Attente de ${CONFIG.delai_avant_clic}ms avant de cliquer...`);
            setTimeout(() => {
                bouton.click();
                log('Clic effectué sur "Regarder la télé"');
                marquerCommeFait();
                if (callback) callback(true);
            }, CONFIG.delai_avant_clic);
            return true;
        }
        if (callback) callback(false);
        return false;
    }

    // ===== SECTION #4_LOGIQUE_PRINCIPALE =====
    function essayerClic(tentative = 1) {
        if (dejaClic()) {
            log('Clic déjà effectué pendant cette session, aucune action');
            return;
        }
        cliquerBouton((succes) => {
            if (succes) { log('Action terminée avec succès'); return; }
            if (tentative < CONFIG.max_tentatives) {
                log(`Tentative ${tentative + 1}/${CONFIG.max_tentatives}...`);
                setTimeout(() => essayerClic(tentative + 1), CONFIG.intervalle_tentatives);
            } else {
                log('Bouton non trouvé après toutes les tentatives');
            }
        });
    }

    // ===== SECTION #5_DEMARRAGE =====
    function demarrer() {
        log('Script démarré');
        setTimeout(() => { essayerClic(); }, CONFIG.delai_verification);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', demarrer);
    } else {
        demarrer();
    }

})();
```

</details>

---

## 📺 Plugin 2 — Auto close channels panel

### Description

On Molotov, the **"Live Channels"** side panel can stay open and trigger a known bug: **clicking on a channel does nothing**. This bug occurs because the channel list is not reloaded. This plugin automatically closes the panel **45 seconds after it opens**, forcing the channel list to reload and eliminating this bug.

**Smart behaviour:**
- ⏱️ The countdown only starts **when the panel opens** — no unwanted closing if you never opened it
- 🔄 If you close the panel manually before 45s, the timer is cancelled
- 🔓 If you reopen the panel, the timer restarts from zero

<p align="center">
  <img src="Auto fermeture onglet chaînes.gif" alt="Auto-close demo" width="80%"/>
</p>

### ⬇️ Download / Install directly

**Script URL** (for direct import into Tampermonkey):
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20fermeture%20onglet%20cha%C3%AEnes.user.js
```

### ⚙️ Configuration and parameters

You can customize the plugin behaviour by editing the `CONFIG` section at the top of the script:

```javascript
const CONFIG = {
    delai_fermeture: 45000,   // Duration (ms) before auto-close after panel opens
                              // 45000 = 45 seconds. Examples: 30000 (30s), 60000 (1 minute)

    debug: true               // Shows logs in the browser console (F12 → Console)
                              // 🔓 Panel OPEN detected → timer started
                              // 🔒 Panel CLOSED detected → timer cancelled
                              // ⏱️ Timer started: closing in Xs
                              // Set to false to disable
};
```

> 💡 **Example:** For a faster close, set `delai_fermeture` to `30000` (30 seconds).

### 🔍 How it works

The script uses a `MutationObserver` — a native browser API that watches DOM changes in real time. As soon as the channels panel appears in the page (detected by the CSS class `.oFGWl.mAcI4`), a `setTimeout` is triggered. If the panel disappears before expiry (manual close), the timer is cancelled via `clearTimeout`. This approach is far more efficient than a permanent `setInterval` polling loop, which could close the panel at the wrong moment.

### 📄 Source code

<details>
<summary>👁️ Click to show the full script</summary>

```javascript
// ==UserScript==
// @name         Molotov - Auto fermeture onglet chaînes
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Ferme automatiquement l'onglet chaînes 45s après son OUVERTURE
// @author       pzim-devdata
// @match        https://www.molotov.tv/*
// @match        https://molotov.tv/*
// @match        https://app.molotov.tv/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const CONFIG = {
        delai_fermeture: 45000,
        debug: true
    };

    const SELECTEUR_PANNEAU = '.oFGWl.mAcI4';
    const SELECTEURS_BOUTON_POSSIBLES = [
        '[data-test="player-remote-btn"]',
        '.xKUVK',
        '[data-tip="Chaînes en direct"]',
        'div[data-test="player-remote-btn"]'
    ];

    let timerFermeture = null;
    let observer = null;

    function log(message) {
        if (CONFIG.debug) { console.log(`[Molotov Auto] ${message}`); }
    }

    function ongletEstOuvert() {
        return document.querySelector(SELECTEUR_PANNEAU) !== null;
    }

    function trouverBouton() {
        for (let selecteur of SELECTEURS_BOUTON_POSSIBLES) {
            const bouton = document.querySelector(selecteur);
            if (bouton) return bouton;
        }
        return null;
    }

    function fermerOnglet() {
        if (!ongletEstOuvert()) { log('Onglet déjà fermé'); return; }
        const bouton = trouverBouton();
        if (bouton) { bouton.click(); log('✓ Onglet fermé automatiquement'); }
        else { log('✗ Bouton non trouvé'); }
    }

    function annulerTimer() {
        if (timerFermeture) { clearTimeout(timerFermeture); timerFermeture = null; log('Timer annulé'); }
    }

    function demarrerTimer() {
        annulerTimer();
        timerFermeture = setTimeout(() => { fermerOnglet(); timerFermeture = null; }, CONFIG.delai_fermeture);
        log(`⏱️ Timer démarré : fermeture dans ${CONFIG.delai_fermeture / 1000}s`);
    }

    function gererChangementOnglet() {
        if (ongletEstOuvert()) { log('🔓 Onglet OUVERT détecté'); demarrerTimer(); }
        else { log('🔒 Onglet FERMÉ détecté'); annulerTimer(); }
    }

    function observerDOM() {
        observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
                    gererChangementOnglet(); break;
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        log('👁️ Observation DOM démarrée');
    }

    function initialiser() {
        log('=== Initialisation du script ===');
        if (ongletEstOuvert()) { log('État initial : onglet OUVERT'); demarrerTimer(); }
        else { log('État initial : onglet FERMÉ'); }
        observerDOM();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiser);
    } else {
        initialiser();
    }

})();
```

</details>

---

## 📥 Step-by-step installation

### Step 1 — Open Tampermonkey Dashboard

1. Click the **Tampermonkey** icon <img src="https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g=s120" height="20"/> in your browser's extension bar
2. Click **Dashboard** in the dropdown menu

### Method A — Import by URL ⭐ (recommended)

3. In the Dashboard, click the **Utilities** tab
4. In the **Import from URL** section, paste the script URL
5. Click **Import**
6. Tampermonkey displays the script → click **Install**

### Method B — Import from file

3. Download the `.user.js` file from this repository
4. In the Dashboard, click the **Utilities** tab
5. In the **Import from file** section, select the downloaded file
6. Click **Install**

### Method C — Copy/Paste

3. Copy the script code from the sections above
4. In the Dashboard, click **+** to create a new script
5. Clear the default content and paste the code
6. Press **Ctrl+S** to save

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/pzim-devdata">pzim-devdata</a>
</p>
