import type { Produit } from './produit';

interface LignePanier {
  produit: Produit;
  quantite: number;
}

export class Panier {
  lignes: LignePanier[] = [];

  ajouter(produit: Produit, quantite: number): void {
    //ajout de produit
  }

  retirer(produitId: string): void {
    // retirer un produit du panier
  }

  modifierQuantite(produitId: string, quantite: number): void {
    // modifier la quantité d'un produit dans le panier
  }

  total(): number {
    // calculer le total du panier
    return -1;
  }

  nombreArticles(): number {
    // calculer le nombre d'articles dans le panier
    return -1;
  }

  estVide(): boolean {
    // vérifier si le panier est vide
    return this.lignes.length === 0;
  }
}
