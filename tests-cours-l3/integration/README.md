# Tests d'intégration

Un test d'intégration vérifie la **collaboration** entre plusieurs composants — une route HTTP avec son contrôleur et son repository, par exemple. On accepte des dépendances réelles (base SQLite en mémoire, serveur Express en mémoire), on évite seulement les services externes (réseau, paiement réel, etc.).

## Outils

- **Vitest** — exécution des tests
- **Supertest** — envoi de requêtes HTTP à une app Express sans démarrer de port
- **better-sqlite3** — base SQLite **en mémoire** pour des tests rapides et isolés

## Installation

```bash
npm install
```

## Lancer les tests

```bash
npm test
npm run test:tp1
npm run test:tp2
npm run test:tp3
```

## TPs

| TP | Format | Objectif pédagogique |
|----|--------|----------------------|
| `tp1-demo` | Démo (observation) | Tester une route HTTP avec Supertest |
| `tp2-ensemble` | Participation collective | Service métier qui collabore avec un repository |
| `tp3-cas-reel` | Autonome (~25 min) | Service `Commande` qui orchestre stock + tarification + paiement |

## Convention de nommage

```
devrait_[comportement_attendu]_quand_[condition]
```
