
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
  <img src="https://visitor-badge.laobi.icu/badge?page_id=pzim-devdata.plugins-for-molotov.tv" alt="Visiteurs"/>
  <img src="https://img.shields.io/github/license/pzim-devdata/plugins-for-molotov.tv" alt="Licence MIT"/>
</p>

> ⚠️ **Ce projet est indépendant et n'est pas affilié, associé, autorisé, ni officiellement lié à Molotov.tv ou à ses sociétés mères.**

---

## 📋 Table des matières

- [Prérequis — Installer Tampermonkey](#-prérequis--installer-tampermonkey)
- [Plugin 1 — Auto clic "Regarder la télé"](#-plugin-1--auto-clic-regarder-la-télé)
- [Plugin 2 — Auto fermeture onglet chaînes](#-plugin-2--auto-fermeture-onglet-chaînes)
- [Installation pas à pas](#-installation-pas-à-pas)
- [Licence](#-licence)

---

## 🔧 Prérequis — Installer Tampermonkey

Ces plugins nécessitent l'extension **Tampermonkey** sur votre navigateur.

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://addons.mozilla.org/fr/firefox/addon/tampermonkey/">
        <img src="https://img.shields.io/badge/Firefox-Installer_Tampermonkey-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white" alt="Tampermonkey Firefox"/>
      </a>
    </td>
    <td align="center" width="50%">
      <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo">
        <img src="https://img.shields.io/badge/Chrome-Installer_Tampermonkey-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Tampermonkey Chrome"/>
      </a>
    </td>
  </tr>
</table>

---

## 🖱️ Plugin 1 — Auto clic "Regarder la télé"

### Description

Quand vous ouvrez [app.molotov.tv](https://app.molotov.tv), un bouton **"Regarder la télé"** s'affiche sur la page d'accueil. Ce plugin clique automatiquement dessus **une seule fois par session**, vous amenant directement au lecteur sans action manuelle.

### ⬇️ Télécharger / Installer directement

**URL du script** (pour import direct dans Tampermonkey) :
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20clic%20%22Regarder%20la%20t%C3%A9l%C3%A9%22.user.js
```

### 📄 Code source

<details>
<summary>Cliquer pour afficher le script complet</summary>

```javascript
// ==UserScript==
// @name         Molotov - Auto clic "Regarder la télé"
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
            if (succes) {
                log('Action terminée avec succès');
                return;
            }
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

## 📺 Plugin 2 — Auto fermeture onglet chaînes

### Description

Sur Molotov, l'onglet latéral **"Chaînes en direct"** peut rester ouvert et provoquer un bug connu : **cliquer sur une chaîne ne fait rien**. Ce plugin ferme automatiquement cet onglet **45 secondes après son ouverture**, ce qui force le rechargement de la liste des chaînes et évite ce bug.

**Comportement intelligent :**
- ⏱️ Le décompte ne démarre **que quand l'onglet s'ouvre** (pas en permanence)
- 🔄 Si vous fermez l'onglet manuellement, le timer s'annule
- 🔓 Si vous rouvrez l'onglet, le timer repart à zéro

### ⬇️ Télécharger / Installer directement

**URL du script** (pour import direct dans Tampermonkey) :
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20fermeture%20onglet%20cha%C3%AEnes.user.js
```

### 📄 Code source

<details>
<summary>Cliquer pour afficher le script complet</summary>

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
        delai_fermeture: 45000, // 45 secondes
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
            log(`Expiration du délai (${CONFIG.delai_fermeture}ms)`);
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

## 📥 Installation pas à pas

### Méthode 1 — Import par URL ⭐ (recommandée)

1. Ouvrez l'extension **Tampermonkey** dans votre navigateur
2. Cliquez sur l'onglet **Utilities**
3. Dans la section **Import from URL**, collez l'URL du script souhaité
4. Cliquez sur **Import**
5. Tampermonkey affiche le script → cliquez sur **Install**

### Méthode 2 — Import par fichier

1. Téléchargez le fichier `.user.js` depuis ce dépôt
2. Ouvrez l'extension **Tampermonkey**
3. Cliquez sur l'onglet **Utilities**
4. Dans la section **Import from file**, sélectionnez le fichier téléchargé
5. Cliquez sur **Install**

### Méthode 3 — Copier/Coller

1. Copiez le code du script souhaité (voir sections ci-dessus)
2. Ouvrez l'extension **Tampermonkey**
3. Cliquez sur **+** pour créer un nouveau script
4. Effacez le contenu par défaut et collez le code copié
5. Appuyez sur **Ctrl+S** pour sauvegarder

---

## 📜 Licence

Ce projet est sous licence **MIT** — voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/pzim-devdata">pzim-devdata</a>
</p>
