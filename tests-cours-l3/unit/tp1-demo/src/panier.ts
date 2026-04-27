import type { Produit } from './produit';

interface LignePanier {
  produit: Produit;
  quantite: number;
}

export class Panier {
  private lignes: LignePanier[] = [];

  ajouter(produit: Produit, quantite: number): void {
    if (quantite <= 0) {
      throw new Error('La quantité doit être strictement positive');
    }
    const existante = this.lignes.find((l) => l.produit.id === produit.id);
    if (existante) {
      existante.quantite += quantite;
    } else {
      this.lignes.push({ produit, quantite });
    }
  }

  retirer(produitId: string): void {
    this.lignes = this.lignes.filter((l) => l.produit.id !== produitId);
  }

  modifierQuantite(produitId: string, quantite: number): void {
    if (quantite <= 0) {
      throw new Error('La quantité doit être strictement positive');
    }
    const ligne = this.lignes.find((l) => l.produit.id === produitId);
    if (!ligne) {
      throw new Error('Produit absent du panier');
    }
    ligne.quantite = quantite;
  }

  total(): number {
    return this.lignes.reduce((s, l) => s + l.produit.prix * l.quantite, 0);
  }

  nombreArticles(): number {
    return this.lignes.reduce((n, l) => n + l.quantite, 0);
  }

  estVide(): boolean {
    return this.lignes.length === 0;
  }
}
