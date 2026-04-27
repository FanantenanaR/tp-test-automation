# tests-cours-l3

Support pratique d'un cours L3 d'introduction aux tests automatisés (4 h). Fil rouge : un site d'e-commerce.

## Organisation

- `unit/` — tests unitaires (Vitest) : isoler une unité de code
- `integration/` — tests d'intégration (à venir)
- `e2e/` — tests end-to-end (à venir)

## Format des TPs

Chaque famille suit la même progression pédagogique :

- **TP1 — Démo** : l'enseignant code en direct, les étudiants observent
- **TP2 — Ensemble** : participation collective, on remplit ensemble une suite préparée
- **TP3 — Cas réel** : exercice autonome (~20 min) sur un service réaliste

## Démarrage rapide

```bash
cd unit
npm install
npm run test:tp1
```

## État actuel

Seul `unit/` est implémenté. Les sections `integration/` et `e2e/` seront ajoutées lors d'itérations ultérieures.
