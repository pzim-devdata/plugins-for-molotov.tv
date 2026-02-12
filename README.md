
<p align="center">
  <img src="molotov-banniere.png" alt="Plugins for Molotov.tv" width="100%"/>
</p>

<p align="center">
  <a href="README.md">🇫🇷 Français</a> &nbsp;|&nbsp; <a href="README_EN.md">🇬🇧 English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Firefox-Tampermonkey-orange?logo=firefox&logoColor=white" alt="Firefox"/>
  <img src="https://img.shields.io/badge/Chrome-Tampermonkey-4285F4?logo=googlechrome&logoColor=white" alt="Chrome"/>
  <img src="https://img.shields.io/badge/Edge-Tampermonkey-0078D4?logo=microsoftedge&logoColor=white" alt="Edge"/>
  <img src="https://img.shields.io/badge/Safari-Tampermonkey-000000?logo=safari&logoColor=white" alt="Safari"/>
  <img src="https://img.shields.io/badge/Opera-Tampermonkey-FF1B2D?logo=opera&logoColor=white" alt="Opera"/>
  <br/>
  <img src="https://img.shields.io/github/commit-activity/t/pzim-devdata/plugins-for-molotov.tv" alt="Commits"/>
  <img src="https://img.shields.io/github/issues/pzim-devdata/plugins-for-molotov.tv" alt="Issues"/>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=pzim-devdata.plugins-for-molotov.tv" alt="Visiteurs"/>
  <img src="https://img.shields.io/github/license/pzim-devdata/plugins-for-molotov.tv" alt="Licence MIT"/>
</p>

> ⚠️ **Ce projet est indépendant et n'est pas affilié, associé, autorisé, ni officiellement lié à Molotov.tv ou à ses sociétés mères.**

---

## 📁 Contenu du dépôt

| Fichier | Description |
|---|---|
| [`Molotov - Auto clic "Regarder la télé".user.js`](Molotov%20-%20Auto%20clic%20%22Regarder%20la%20t%C3%A9l%C3%A9%22.user.js) | Script Tampermonkey — clic automatique sur "Regarder la télé" |
| [`Molotov - Auto fermeture onglet chaînes.user.js`](Molotov%20-%20Auto%20fermeture%20onglet%20cha%C3%AEnes.user.js) | Script Tampermonkey — fermeture automatique de l'onglet chaînes |
| [`Auto clic "Regarder la télé".gif`](Auto%20clic%20%22Regarder%20la%20t%C3%A9l%C3%A9%22.gif) | Démonstration du plugin auto-clic |
| [`Auto fermeture onglet chaînes.gif`](Auto%20fermeture%20onglet%20cha%C3%AEnes.gif) | Démonstration du plugin auto-fermeture |
| [`molotov-banniere.png`](molotov-banniere.png) | Bannière du projet |
| [`LICENSE`](LICENSE) | Licence MIT |

---

## 📋 Table des matières

- [Prérequis — Installer Tampermonkey](#-prérequis--installer-tampermonkey)
- [Plugin 1 — Auto clic "Regarder la télé"](#%EF%B8%8F-plugin-1--auto-clic-regarder-la-télé)
- [Plugin 2 — Auto fermeture onglet chaînes](#-plugin-2--auto-fermeture-onglet-chaînes)
- [Installation pas à pas](#-installation-pas-à-pas)
- [Licence](#-licence)

---

## 🔧 Prérequis — Installer Tampermonkey

Ces plugins nécessitent l'extension **Tampermonkey** sur votre navigateur.

<p align="center">
  <img src="https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g=s120" alt="Tampermonkey" width="80"/>
</p>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/">
        <img src="https://img.shields.io/badge/Firefox-Installer-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo">
        <img src="https://img.shields.io/badge/Chrome-Installer-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd">
        <img src="https://img.shields.io/badge/Edge-Installer-0078D4?style=for-the-badge&logo=microsoftedge&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://apps.apple.com/app/tampermonkey/id6738342400">
        <img src="https://img.shields.io/badge/Safari-Installer-000000?style=for-the-badge&logo=safari&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <a href="https://addons.opera.com/en/extensions/details/tampermonkey-beta/">
        <img src="https://img.shields.io/badge/Opera-Installer-FF1B2D?style=for-the-badge&logo=opera&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

---

## 🖱️ Plugin 1 — Auto clic "Regarder la télé"

### Description

Quand vous ouvrez [app.molotov.tv](https://app.molotov.tv), un bouton **"Regarder la télé"** s'affiche sur la page d'accueil avant d'accéder au lecteur. Ce plugin clique automatiquement dessus **une seule fois par session**, vous amenant directement au lecteur sans aucune action manuelle.

<p align="center">
  <img src="Auto clic &quot;Regarder la télé&quot;.gif" alt="Démonstration auto-clic" width="80%"/>
</p>

### ⬇️ Télécharger / Installer directement

**URL du script** (pour import direct dans Tampermonkey) :
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20clic%20%22Regarder%20la%20t%C3%A9l%C3%A9%22.user.js
```

### ⚙️ Configuration et paramètres

Vous pouvez personnaliser le comportement du plugin en modifiant la section `CONFIG` en haut du script :

```javascript
const CONFIG = {
    delai_verification: 1000,      // Délai (ms) avant la première recherche du bouton après le chargement de la page
                                   // Augmenter si la page charge lentement (ex: 2000 pour 2s)

    delai_avant_clic: 1000,        // Délai (ms) d'attente après avoir trouvé le bouton, avant de cliquer
                                   // Permet à la page de se stabiliser avant l'action

    max_tentatives: 20,            // Nombre maximum de tentatives pour trouver le bouton
                                   // Si le bouton n'est pas sur la page, le script abandonne après ce nombre

    intervalle_tentatives: 500,    // Délai (ms) entre chaque tentative de recherche du bouton
                                   // Réduire pour une réaction plus rapide, augmenter si trop de ressources utilisées

    debug: true                    // Affiche les logs dans la console du navigateur (F12 → Console)
                                   // Mettre à false pour désactiver les messages de debug
};
```

> 💡 **Exemple :** Si votre connexion est lente, passez `delai_verification` à `2000` et `delai_avant_clic` à `1500`.

### 🔍 Fonctionnement technique

Le script utilise `sessionStorage` pour mémoriser qu'il a déjà cliqué pendant la session en cours. Ainsi, si vous naviguez sur d'autres pages Molotov et revenez à l'accueil, le clic automatique ne se reproduit pas — évitant tout comportement intrusif. La session est réinitialisée à chaque fermeture du navigateur.

### 📄 Code source

<details>
<summary>👁️ Cliquer pour afficher le script complet</summary>

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
            log(`Attente de ${CONFIG.delai_avant_clic}ms avant de cliquer (stabilisation de la page)...`);
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
                log(`Bouton non trouvé, nouvelle tentative ${tentative + 1}/${CONFIG.max_tentatives} dans ${CONFIG.intervalle_tentatives}ms`);
                setTimeout(() => essayerClic(tentative + 1), CONFIG.intervalle_tentatives);
            } else {
                log('Bouton "Regarder la télé" non trouvé après toutes les tentatives');
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

Sur Molotov, l'onglet latéral **"Chaînes en direct"** peut rester ouvert et provoquer un bug connu : **cliquer sur une chaîne ne fait rien**. Ce bug survient parce que la liste des chaînes n'est pas rechargée. Ce plugin ferme automatiquement cet onglet **45 secondes après son ouverture**, ce qui force le rechargement de la liste et élimine ce bug.

**Comportement intelligent :**
- ⏱️ Le décompte ne démarre **que lorsque l'onglet s'ouvre** — pas de fermeture intempestive si vous ne l'avez pas ouvert
- 🔄 Si vous fermez l'onglet manuellement avant les 45s, le timer est annulé
- 🔓 Si vous rouvrez l'onglet, le timer repart à zéro depuis 45s

<p align="center">
  <img src="Auto fermeture onglet chaînes.gif" alt="Démonstration auto-fermeture" width="80%"/>
</p>

### ⬇️ Télécharger / Installer directement

**URL du script** (pour import direct dans Tampermonkey) :
```
https://raw.githubusercontent.com/pzim-devdata/plugins-for-molotov.tv/main/Molotov%20-%20Auto%20fermeture%20onglet%20cha%C3%AEnes.user.js
```

### ⚙️ Configuration et paramètres

Vous pouvez personnaliser le comportement du plugin en modifiant la section `CONFIG` en haut du script :

```javascript
const CONFIG = {
    delai_fermeture: 45000,   // Durée (ms) avant fermeture automatique après ouverture de l'onglet
                              // 45000 = 45 secondes. Exemples : 30000 (30s), 60000 (1 minute)

    debug: true               // Affiche les logs dans la console du navigateur (F12 → Console)
                              // 🔓 Onglet OUVERT détecté → timer démarré
                              // 🔒 Onglet FERMÉ détecté → timer annulé
                              // ⏱️ Timer démarré : fermeture dans Xs
                              // Mettre à false pour désactiver
};
```

> 💡 **Exemple :** Pour une fermeture plus rapide, passez `delai_fermeture` à `30000` (30 secondes).

### 🔍 Fonctionnement technique

Le script utilise un `MutationObserver` — une API native du navigateur qui surveille les modifications du DOM en temps réel. Dès que l'onglet chaînes apparaît dans la page (détecté par la classe CSS `.oFGWl.mAcI4`), un `setTimeout` est déclenché. Si l'onglet disparaît avant expiration (fermeture manuelle), le timer est annulé via `clearTimeout`. Cette approche est bien plus efficace qu'un `setInterval` permanent qui vérifierait en boucle et pourrait fermer l'onglet au mauvais moment.

### 📄 Code source

<details>
<summary>👁️ Cliquer pour afficher le script complet</summary>

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

### Étape 1 — Ouvrir le Dashboard Tampermonkey

1. Cliquez sur l'icône **Tampermonkey** <img src="https://lh3.googleusercontent.com/zoY8FwoOqPlBgFxcmFdNSK2Q4CcLmv-gw7vTjF2KMR9cEabwBsGNrHBTEMitn0Ba6OmCVJ0NcLnFGu3N97BP8Phu0g=s120" height="20"/> dans la barre d'extensions de votre navigateur
2. Cliquez sur **Dashboard** dans le menu déroulant

### Méthode A — Import par URL ⭐ (recommandée)

3. Dans le Dashboard, cliquez sur l'onglet **Utilities**
4. Dans la section **Import from URL**, collez l'URL du script souhaité
5. Cliquez sur **Import**
6. Tampermonkey affiche le script → cliquez sur **Install**

### Méthode B — Import par fichier

3. Téléchargez le fichier `.user.js` depuis ce dépôt
4. Dans le Dashboard, cliquez sur l'onglet **Utilities**
5. Dans la section **Import from file**, sélectionnez le fichier téléchargé
6. Cliquez sur **Install**

### Méthode C — Copier/Coller

3. Copiez le code du script souhaité (sections ci-dessus)
4. Dans le Dashboard, cliquez sur **+** pour créer un nouveau script
5. Effacez le contenu par défaut et collez le code copié
6. Appuyez sur **Ctrl+S** pour sauvegarder

---

## 📜 Licence

Ce projet est sous licence **MIT** — voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/pzim-devdata">pzim-devdata</a>
</p>
