# TP1 — Démo

**Format : observation. L'enseignant code en direct.**

## Objectif

Découvrir Playwright : ouvrir une vraie page dans Chromium, faire des assertions sur le DOM, sentir l'**auto-wait**.

## Code fourni

- `public/index.html` — mini catalogue avec 3 articles (1 indisponible)
- `server.mjs` — serveur statique qui sert `public/` sur `localhost:4101`
- `playwright.config.ts` — config qui démarre le serveur automatiquement
- `tests/catalogue.spec.ts` — vide, à remplir en direct

## Pendant la démo

L'enseignant montrera :

- Ouvrir la page d'accueil et vérifier le titre `Boutique en ligne`
- Compter les articles avec `getByRole('article')`
- Vérifier qu'un article est marqué « Indisponible »
- Mettre en évidence l'**auto-wait** (pas de `waitForTimeout`)

## Lancer

```bash
npm run test:tp1
```
