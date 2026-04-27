import express, { type Express } from 'express';
import type { Produit } from './produit';

export function creerApplication(catalogue: Produit[]): Express {
  const app = express();
  app.use(express.json());

  app.get('/produits', (_req, res) => {
    res.json(catalogue.filter((p) => p.disponible));
  });

  app.get('/produits/:id', (req, res) => {
    const produit = catalogue.find((p) => p.id === req.params.id);
    if (!produit) {
      return res.status(404).json({ erreur: 'Produit introuvable' });
    }
    res.json(produit);
  });

  return app;
}
