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
        delai_verification: 1000, // Attendre 1s que la page charge
        delai_avant_clic: 1000, // Attendre 1s après avoir trouvé le bouton avant de cliquer
        max_tentatives: 20, // Nombre maximum de tentatives pour trouver le bouton
        intervalle_tentatives: 500, // Attendre 500ms entre chaque tentative
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
        // Vérifier si on a déjà cliqué pendant cette session
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
        // Si déjà cliqué pendant cette session, ne rien faire
        if (dejaClic()) {
            log('Clic déjà effectué pendant cette session, aucune action');
            return;
        }

        // Chercher le bouton avec callback
        cliquerBouton((succes) => {
            if (succes) {
                log('Action terminée avec succès');
                return;
            }

            // Si pas trouvé et qu'il reste des tentatives
            if (tentative < CONFIG.max_tentatives) {
                log(`Bouton non trouvé, nouvelle tentative ${tentative + 1}/${CONFIG.max_tentatives} dans ${CONFIG.intervalle_tentatives}ms`);
                setTimeout(() => essayerClic(tentative + 1), CONFIG.intervalle_tentatives);
            } else {
                log('Bouton "Regarder la télé" non trouvé après toutes les tentatives (probablement pas sur la page d\'accueil)');
            }
        });
    }

    // ===== SECTION #5_DEMARRAGE =====
    function demarrer() {
        log('Script démarré');

        // Attendre un peu que la page charge
        setTimeout(() => {
            essayerClic();
        }, CONFIG.delai_verification);
    }

    // Lancer au chargement
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', demarrer);
    } else {
        demarrer();
    }

})();