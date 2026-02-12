// ==UserScript==
// @name         Molotov - Auto fermeture onglet chaînes (V1)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Ferme automatiquement l'onglet chaînes 45s après son OUVERTURE
// @author       Neptune
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
        delai_fermeture: 45000, // Délai avant fermeture après ouverture (45s)
        debug: true
    };

    // ===== SECTION #2_SELECTEURS =====
    const SELECTEUR_BOUTON = '[data-test="player-remote-btn"]';
    const SELECTEUR_PANNEAU = '.oFGWl.mAcI4'; // Panneau ouvert
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
        if (CONFIG.debug) {
            console.log(`[Molotov Auto] ${message}`);
        }
    }

    function ongletEstOuvert() {
        return document.querySelector(SELECTEUR_PANNEAU) !== null;
    }

    function trouverBouton() {
        for (let selecteur of SELECTEURS_BOUTON_POSSIBLES) {
            const bouton = document.querySelector(selecteur);
            if (bouton) {
                return bouton;
            }
        }
        return null;
    }

    function fermerOnglet() {
        if (!ongletEstOuvert()) {
            log('Onglet déjà fermé');
            return;
        }

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
        // Annuler tout timer existant
        annulerTimer();

        // Démarrer nouveau timer
        timerFermeture = setTimeout(() => {
            log(`Expiration du délai (${CONFIG.delai_fermeture}ms)`);
            fermerOnglet();
            timerFermeture = null;
        }, CONFIG.delai_fermeture);

        log(`⏱️ Timer démarré : fermeture dans ${CONFIG.delai_fermeture / 1000}s`);
    }

    // ===== SECTION #5_GESTION_OUVERTURE_FERMETURE =====
    function gererChangementOnglet() {
        const estOuvert = ongletEstOuvert();

        if (estOuvert) {
            log('🔓 Onglet OUVERT détecté');
            demarrerTimer();
        } else {
            log('🔒 Onglet FERMÉ détecté');
            annulerTimer();
        }
    }

    // ===== SECTION #6_OBSERVATION_DOM =====
    function observerDOM() {
        // Observer les changements dans le body pour détecter l'apparition/disparition du panneau
        observer = new MutationObserver((mutations) => {
            for (let mutation of mutations) {
                // Vérifier si des nœuds ont été ajoutés ou retirés
                if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
                    gererChangementOnglet();
                    break; // Pas besoin de vérifier toutes les mutations
                }
            }
        });

        // Configuration de l'observer
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        log('👁️ Observation DOM démarrée');
    }

    // ===== SECTION #7_INITIALISATION =====
    function initialiser() {
        log('=== Initialisation du script ===');

        // Vérifier l'état initial
        if (ongletEstOuvert()) {
            log('État initial : onglet OUVERT');
            demarrerTimer();
        } else {
            log('État initial : onglet FERMÉ');
        }

        // Démarrer l'observation
        observerDOM();
    }

    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialiser);
    } else {
        initialiser();
    }

})();