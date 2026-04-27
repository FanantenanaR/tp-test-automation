# TP3 — Cas réel

**Format : autonome. Seul ou en binôme. ~20 minutes.**

## Objectif

Tester un service de tarification avec plusieurs règles imbriquées. Vous devez identifier vous-mêmes les cas limites et les frontières.

## Spécification métier

Le `Tarificateur.calculer(lignes)` produit un `Devis` à partir d'une liste de `LigneDevis` (prix unitaire, quantité).

**Sous-total HT**

- Somme de `prixUnitaire * quantite` pour chaque ligne

**Remise par palier sur le sous-total**

- Sous-total **strictement** supérieur à 200 € → 15 %
- Sinon supérieur à 100 € → 10 %
- Sinon supérieur à 50 € → 5 %
- Sinon → 0 %

**Frais de port**

- 5 € si sous-total HT < 80 €
- 0 € sinon

**TVA**

- 20 % appliquée sur (sous-total − remise + frais de port)

**Total final**

- sous-total − remise + frais de port + TVA

**Arrondis**

- Tous les montants du `Devis` sont arrondis à 2 décimales.

## Pistes de tests

À titre de suggestion (rien d'imposé) :

- Liste vide
- Chaque palier de remise (0 %, 5 %, 10 %, 15 %)
- **Frontières exactes** des paliers (ex : 50 €, 100 €, 200 €)
- Frais de port présents puis absents (frontière 80 €)
- Combinaisons réalistes (plusieurs lignes, quantités variées)
- Cohérence du total : `sousTotal − remise + fraisDePort + tva` doit valoir `total`

> Le code peut avoir un comportement inattendu sur des valeurs aberrantes (quantités ou prix négatifs). Vos tests devraient permettre de le révéler.

## Lancer

```bash
npm run test:tp3
```
