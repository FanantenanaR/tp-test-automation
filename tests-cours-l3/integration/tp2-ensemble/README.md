# TP2 — Ensemble

**Format : participation. On code ensemble.**

## Objectif

Tester la **collaboration** entre deux composants : un service métier (`PanierService`) qui appelle un repository (`CatalogueRepository`) pour vérifier le stock et le décrémenter.

C'est de l'intégration au sens « plusieurs unités combinées » : on n'utilise plus de mocks, on construit un vrai repository en mémoire.

## Code fourni

- `src/produit.ts` — interface `Produit` (avec `stock`)
- `src/catalogue.repository.ts` — `CatalogueRepository` en mémoire avec `enregistrer`, `trouver`, `decrementerStock`
- `src/panier.service.ts` — `PanierService.ajouter` qui valide via le catalogue et décrémente le stock
- `tests/panier.test.ts` — `beforeEach` qui prépare un catalogue avec 2 produits + 4 tests aux corps vides

## À écrire ensemble

- `devrait_ajouter_le_produit_et_decrementer_le_stock_quand_le_produit_est_disponible` — vérifie que `nombreLignes()` augmente **et** que `catalogue.trouver(id).stock` diminue
- `devrait_lever_une_erreur_quand_le_produit_est_inconnu` — `expect.toThrow('Produit inconnu')`
- `devrait_lever_une_erreur_quand_le_stock_est_insuffisant` — appliquer `panier.ajouter('p2', 1)` (stock 0) → erreur
- `devrait_calculer_le_total_quand_plusieurs_produits_sont_ajoutes` — combiner deux ajouts, vérifier `total()`

## Lancer

```bash
npm run test:tp2
```
