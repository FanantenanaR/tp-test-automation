# TP2 — Ensemble

**Format : participation. On code ensemble.**

## Objectif

Tester des **interactions** : clics sur des boutons, ajouts au panier, mise à jour de l'affichage. Apprendre à choisir des locators robustes (`getByRole`, `getByLabel`, `data-test`).

## Code fourni

- `public/index.html` — boutique avec 3 articles, chaque carte a un bouton « Ajouter au panier ». Une section panier affiche le nombre de lignes, la liste et le total.
- `server.mjs`, `playwright.config.ts` — démarre la boutique sur `localhost:4102`
- `tests/panier.spec.ts` — `beforeEach` qui charge la page + 4 tests aux corps vides

## À écrire ensemble

- `devrait_afficher_le_panier_vide_au_chargement` — vérifier `data-test=nb-articles` = 0 et `data-test=total` = "0,00 €"
- `devrait_ajouter_un_article_au_panier_quand_on_clique_sur_ajouter` — cliquer sur le bouton « Ajouter au panier » de la carte « Livre », vérifier que la liste contient 1 ligne
- `devrait_mettre_a_jour_le_total_quand_plusieurs_articles_sont_ajoutes` — ajouter Livre (15) + Stylo (25), vérifier total « 40,00 € »
- `devrait_vider_le_panier_quand_on_clique_sur_vider` — ajouter quelques articles puis cliquer sur « Vider le panier »

## Sélecteurs disponibles

- Cartes : `page.getByRole('article', { name: 'Livre' })`
- Boutons d'ajout : `page.getByRole('button', { name: 'Ajouter au panier' })` (plusieurs sur la page → utiliser `.first()` ou cibler dans une carte)
- Total : `page.getByTestId('total')` ou `page.locator('[data-test=total]')`

## Lancer

```bash
npm run test:tp2
```
