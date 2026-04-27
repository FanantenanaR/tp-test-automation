# TP3 — Cas réel

**Format : autonome. Seul ou en binôme. ~25 minutes.**

## Objectif

Tester un **parcours d'achat complet** sur une vraie page web : catalogue → panier → checkout → confirmation. Sentir les différences avec un test unitaire ou d'intégration : on observe l'application comme un client.

## Code fourni

- `public/index.html` — boutique avec catalogue, panier, formulaire de paiement et écran de confirmation. Tout est sur une seule page, masqué/affiché via `hidden`.
- `server.mjs`, `playwright.config.ts` — démarre la boutique sur `localhost:4103`
- `tests/checkout.spec.ts` — vide, à vous

## Spécification fonctionnelle (à tester)

- Au chargement, le panier est vide ; le bouton « Passer commande » est désactivé
- Cliquer sur « Ajouter au panier » sur une carte fait monter le compteur, ajoute une ligne, met à jour les totaux
- Frais de port = 7 € si sous-total < 100 €, **gratuits** au-dessus
- Le bouton « Passer commande » devient actif dès qu'il y a au moins une ligne
- Cliquer dessus affiche la section « Paiement »
- Soumettre avec un numéro de carte commençant par `4242` → écran de confirmation avec une référence de commande et le total
- Soumettre avec un autre numéro → message d'erreur, pas de confirmation

## Pistes de tests

- Cas nominal : parcours complet avec un seul article, vérifier la confirmation
- Frontière des frais de port : ajouter exactement 100 € → port à 0 €
- Paiement refusé : numéro `1111`, vérifier que l'erreur s'affiche
- Compteur du panier qui se met bien à jour après plusieurs ajouts
- Bouton « Passer commande » désactivé tant que le panier est vide

## Sélecteurs disponibles

- Cartes de produit : `page.getByRole('article', { name: 'Livre' })`
- Sections : `page.getByRole('region', { name: 'Panier' })` (via `aria-label`)
- Test ids : `page.getByTestId('total')`, `page.getByTestId('reference')`, etc.
- Champs du formulaire : `page.getByLabel('Numéro de carte')`

## Lancer

```bash
npm run test:tp3
```
