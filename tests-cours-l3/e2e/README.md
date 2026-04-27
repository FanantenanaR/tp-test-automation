# Tests end-to-end

Un test end-to-end (E2E) simule un **utilisateur réel** : il ouvre un vrai navigateur, clique, tape, observe ce qui s'affiche. Ces tests sont plus lents et plus fragiles que les autres — donc on en écrit peu, mais ils donnent confiance que l'ensemble (HTML + JS + CSS + données) fonctionne ensemble.

## Outil

- **Playwright** — pilote Chromium, Firefox et WebKit ; auto-wait intégré ; fixtures puissantes.

## Installation

```bash
npm install
npm run install:browsers   # télécharge Chromium
```

## Lancer les tests

```bash
npm run test:tp1
npm run test:tp2
npm run test:tp3
```

Chaque TP a son propre `playwright.config.ts` qui démarre la mini-boutique correspondante (servie en statique sur un port dédié).

## TPs

| TP | Format | Objectif pédagogique |
|----|--------|----------------------|
| `tp1-demo` | Démo (observation) | Premier test Playwright, locators sémantiques, auto-wait |
| `tp2-ensemble` | Participation collective | Interaction (formulaire + panier), assertions sur le DOM |
| `tp3-cas-reel` | Autonome (~25 min) | Parcours d'achat complet : catalogue → panier → checkout → confirmation |

## Convention de nommage

```
devrait_[comportement_attendu]_quand_[condition]
```
