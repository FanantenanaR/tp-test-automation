import { describe, expect, it } from 'vitest';
import { Panier } from '../src/panier';
describe('Panier', () => {
  // À remplir en direct pendant la démo
  it('doit ajouter un produit au panier', () => {
    const panier = new Panier();

    const produit_pomme = { id: 'p1', nom: 'Pomme', prix: 0.5 };

    panier.ajouter(produit_pomme, 3);

    // check panier
    expect(panier.lignes.length).toBe(1);
    expect(panier.lignes[0]!.quantite).toBe(3);
  });
});
