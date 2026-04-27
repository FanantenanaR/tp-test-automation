# TP1 — Démo

**Format : observation. L'enseignant code en direct.**

## Objectif

Découvrir **Supertest** : envoyer des requêtes HTTP à une app Express sans démarrer de serveur. Comprendre la différence avec un test unitaire (la route, le middleware JSON, le contrôleur sont tous traversés).

## Code fourni

- `src/produit.ts` — interface `Produit`
- `src/app.ts` — fonction `creerApplication(catalogue)` qui construit une app Express avec `GET /produits` et `GET /produits/:id`
- `tests/catalogue.test.ts` — fichier vide à remplir

## Pendant la démo

L'enseignant écrira progressivement :

- Premier appel `GET /produits` qui renvoie 200 + le bon corps
- Filtrage des produits non disponibles
- Cas 404 sur `GET /produits/:id` avec un id inexistant
- Différence avec un test unitaire (qui aurait juste appelé `creerApplication([...])` sans HTTP)

## Lancer

```bash
npm run test:tp1
```
