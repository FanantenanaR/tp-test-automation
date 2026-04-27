# TP2 — Ensemble

**Format : participation. On code ensemble.**

## Objectif

Compléter une suite de tests préparée. On découvre `beforeEach` pour préparer le contexte et la collaboration entre deux classes (`Panier` et `RegistreCodesPromo`).

## Code fourni

- `src/produit.ts` — interface `Produit`
- `src/codes-promo.ts` — interface `CodePromo` et classe `RegistreCodesPromo`
- `src/panier.ts` — `Panier` avec `appliquerCodePromo(code, registre)`
- `tests/panier.test.ts` — squelette : un `describe`, un `beforeEach`, 4 `it` avec corps vides

## À écrire ensemble

Quatre tests sont à remplir :

- `devrait_appliquer_la_remise_quand_le_code_est_valide` — vérifie que le total est réduit du bon pourcentage
- `devrait_lever_une_erreur_quand_le_code_est_inexistant` — code absent du registre
- `devrait_lever_une_erreur_quand_le_code_est_inactif` — code présent mais marqué `actif: false`
- `devrait_accepter_le_code_quelle_que_soit_la_casse` — `bienvenue10`, `BIENVENUE10`, `Bienvenue10` doivent tous fonctionner

## Lancer

```bash
npm run test:tp2
```
