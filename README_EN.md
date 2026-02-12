
<p align="center">
  <img src="molotov-banniere.png" alt="Plugins for Molotov.tv" width="100%"/>
</p>

<p align="center">
  <a href="README.md">🇫🇷 Français</a> &nbsp;|&nbsp; <a href="README_EN.md">🇬🇧 English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Firefox-Tampermonkey-orange?logo=firefox&logoColor=white" alt="Firefox"/>
  <img src="https://img.shields.io/badge/Chrome-Tampermonkey-4285F4?logo=googlechrome&logoColor=white" alt="Chrome"/>
  <img src="https://img.shields.io/github/commit-activity/t/pzim-devdata/plugins-for-molotov.tv" alt="Commits"/>
  <img src="https://img.shields.io/github/issues/pzim-devdata/plugins-for-molotov.tv" alt="Issues"/>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=pzim-devdata.plugins-for-molotov.tv" alt="Visitors"/>
  <img src="https://img.shields.io/github/license/pzim-devdata/plugins-for-molotov.tv" alt="MIT License"/>
</p>

> ⚠️ **This project is independent and is not affiliated with, associated with, authorized by, or officially connected to Molotov.tv or its parent companies.**

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

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/">
        <img src="https://img.shields.io/badge/Firefox-Install_Tampermonkey-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white" alt="Tampermonkey Firefox"/>
      </a>
    </td>
    <td align="center" width="50%">
      <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">
        <img src="https://img.shields.io/badge/Chrome-Install_Tampermonkey-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Tampermonkey Chrome"/>
      </a>
    </td>
  </tr>
</table>

---

## 🖱️ Plugin 1 — Auto click "Watch TV"

### Description

When you open [app.molotov.tv](https://app.molotov.tv), a **"Watch TV"** button appears on the home page. This plugin automatically clicks it **once per session**, taking you directly to the player without any manual action.

### ⬇️ Download / Install directly

**Script URL** (for direct import into Tampermonkey):
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20clic%20%22Regarder%20la%20t%C3%A9l%C3%A9%22.user.js
```

### 📄 Source code

<details>
<summary>Click to show the full script</summary>

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

On Molotov, the **"Live Channels"** side panel can stay open and trigger a known bug: **clicking on a channel does nothing**. This plugin automatically closes the panel **45 seconds after it opens**, forcing the channel list to reload and preventing this bug.

**Smart behaviour:**
- ⏱️ The countdown only starts **when the panel opens** (not permanently)
- 🔄 If you close the panel manually, the timer is cancelled
- 🔓 If you reopen the panel, the timer restarts from zero

### ⬇️ Download / Install directly

**Script URL** (for direct import into Tampermonkey):
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20fermeture%20onglet%20cha%C3%AEnes.user.js
```

### 📄 Source code

<details>
<summary>Click to show the full script</summary>

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

    // ===== SECTION #1_CONFIGURATION =====
    const CONFIG = {
        delai_fermeture: 45000,
        debug: true
    };

    // ===== SECTION #2_SELECTEURS =====
    const SELECTEUR_PANNEAU = '.oFGWl.mAcI4';
    const SELECTEURS_BOUTON_POSSIBLES = [
        '[data-test="player-remote-btn"]',
        '.xKUVK',
        '[data-tip="Chaînes en direct"]',
        'div[data-test="player-remote-btn"]'
    ];

    // ===== SECTION #3_VARIABLES_GLOBALES =====
    let timerFermeture = null;
    let observer = null;

    // ===== SECTION #4_FONCTIONS_UTILITAIRES =====
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
        if (bouton) {
            bouton.click();
            log('✓ Onglet fermé automatiquement');
        } else {
            log('✗ Bouton non trouvé');
        }
    }

    function annulerTimer() {
        if (timerFermeture) {
            clearTimeout(timerFermeture);
            timerFermeture = null;
            log('Timer annulé');
        }
    }

    function demarrerTimer() {
        annulerTimer();
        timerFermeture = setTimeout(() => {
            fermerOnglet();
            timerFermeture = null;
        }, CONFIG.delai_fermeture);
        log(`⏱️ Timer démarré : fermeture dans ${CONFIG.delai_fermeture / 1000}s`);
    }

    // ===== SECTION #5_GESTION_OUVERTURE_FERMETURE =====
    function gererChangementOnglet() {
        if (ongletEstOuvert()) {
            log('🔓 Onglet OUVERT détecté');
            demarrerTimer();
        } else {
            log('🔒 Onglet FERMÉ détecté');
            annulerTimer();
        }
    }

    // ===== SECTION #6_OBSERVATION_DOM =====
    function observerDOM() {
        observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
                    gererChangementOnglet();
                    break;
                }
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        log('👁️ Observation DOM démarrée');
    }

    // ===== SECTION #7_INITIALISATION =====
    function initialiser() {
        log('=== Initialisation du script ===');
        if (ongletEstOuvert()) {
            log('État initial : onglet OUVERT');
            demarrerTimer();
        } else {
            log('État initial : onglet FERMÉ');
        }
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

### Method 1 — Import by URL ⭐ (recommended)

1. Open the **Tampermonkey** extension in your browser
2. Click on the **Utilities** tab
3. In the **Import from URL** section, paste the script URL
4. Click **Import**
5. Tampermonkey shows the script → click **Install**

### Method 2 — Import from file

1. Download the `.user.js` file from this repository
2. Open the **Tampermonkey** extension
3. Click on the **Utilities** tab
4. In the **Import from file** section, select the downloaded file
5. Click **Install**

### Method 3 — Copy/Paste

1. Copy the script code (see sections above)
2. Open the **Tampermonkey** extension
3. Click **+** to create a new script
4. Clear the default content and paste the code
5. Press **Ctrl+S** to save

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/pzim-devdata">pzim-devdata</a>
</p>
