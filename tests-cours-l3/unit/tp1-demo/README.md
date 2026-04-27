# TP1 — Démo

**Format : observation. L'enseignant code en direct.**

## Objectif

Découvrir Vitest, le pattern **AAA** (Arrange / Act / Assert) et le **watch mode** par démonstration.

## Code fourni

- `src/produit.ts` — interface `Produit`
- `src/panier.ts` — classe `Panier` (ajouter, retirer, modifier la quantité, total, nombre d'articles, est-il vide)
- `tests/panier.test.ts` — fichier de test vide, à remplir en direct

## Pendant la démo

L'enseignant écrira progressivement :

- Premier test sur `total()` (cas nominal)
- Le cas du panier vide
- Un ajout de plusieurs produits
- Le cas d'erreur sur quantité ≤ 0
- Mise en évidence du **watch mode** : on modifie le code, les tests se relancent automatiquement

## Lancer

```bash
npm run test:tp1
```
