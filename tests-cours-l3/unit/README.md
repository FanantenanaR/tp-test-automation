# Tests unitaires

Un test unitaire vérifie une **unité** de code (typiquement une méthode) **en isolation**, sans dépendance externe (réseau, base de données, fichiers).

## Installation

```bash
npm install
```

## Lancer les tests

```bash
npm test         # toute la suite
npm run test:tp1 # TP1 uniquement
npm run test:tp2 # TP2 uniquement
npm run test:tp3 # TP3 uniquement
```

## TPs

| TP | Format | Objectif pédagogique |
|----|--------|----------------------|
| `tp1-demo` | Démo (observation) | Découvrir Vitest, le pattern AAA, le watch mode |
| `tp2-ensemble` | Participation collective | Compléter une suite préparée, `beforeEach`, collaboration entre classes |
| `tp3-cas-reel` | Autonome (~20 min) | Tester un service métier avec règles imbriquées et cas limites |

## Convention de nommage

Tous les tests suivent ce pattern :

```
devrait_[comportement_attendu]_quand_[condition]
```

Exemples :

- `devrait_retourner_0_quand_panier_vide`
- `devrait_lever_une_erreur_quand_code_inexistant`
- `devrait_appliquer_remise_de_15_pourcent_quand_sous_total_superieur_a_200`
