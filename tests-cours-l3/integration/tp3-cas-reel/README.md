# TP3 — Cas réel

**Format : autonome. Seul ou en binôme. ~25 minutes.**

## Objectif

Tester un service `CommandeService` qui **orchestre** trois collaborateurs : un repository de stock, un tarificateur et un client de paiement. C'est typiquement le genre de service qu'on retrouve dans une vraie application e-commerce.

## Code fourni

- `src/produit.ts` — `Produit`, `LigneCommande`
- `src/stock.repository.ts` — `StockRepository` en mémoire (`approvisionner`, `reserver`, `liberer`, `disponible`)
- `src/tarificateur.ts` — `Tarificateur.calculer(lignes)` : sous-total + frais de port (gratuits au-dessus de 100 €)
- `src/paiement.client.ts` — interface `PaiementClient.debiter(montant, reference)`
- `src/commande.service.ts` — `CommandeService.passer(lignes)` qui :
  1. réserve le stock pour chaque ligne,
  2. calcule le devis,
  3. débite le paiement,
  4. **libère le stock si le paiement est refusé**.
- `tests/commande.test.ts` — vide, à vous

## Spécification métier (à tester)

- Une commande vide → erreur
- Cas nominal : stock suffisant + paiement accepté → commande `payee`, total correct, stock décrémenté
- Stock insuffisant → erreur, **rien n'est débité**
- Paiement refusé → commande `refusee`, **stock restauré**
- Frais de port : 7 € si total < 100 €, 0 € sinon
- Référence de commande unique et incrémentale

## Pistes de tests

- Construire un vrai `StockRepository` rempli en `beforeEach`
- Construire un `PaiementClient` simple en mémoire qui renvoie selon ce que vous voulez tester (objet anonyme : `{ debiter: async () => ({ accepte: true, transactionId: 'tx-1' }) }`)
- Vérifier l'**état du stock après** un échec de paiement (ce que les tests unitaires sur le service seul auraient du mal à attraper)
- Vérifier qu'une commande vide lève une erreur **avant** de toucher au stock

## Lancer

```bash
npm run test:tp3
```
