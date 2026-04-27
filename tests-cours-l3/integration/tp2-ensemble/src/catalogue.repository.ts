import type { Produit } from './produit';

export class CatalogueRepository {
  private produits = new Map<string, Produit>();

  enregistrer(produit: Produit): void {
    this.produits.set(produit.id, { ...produit });
  }

  trouver(id: string): Produit | undefined {
    const p = this.produits.get(id);
    return p ? { ...p } : undefined;
  }

  decrementerStock(id: string, quantite: number): void {
    const produit = this.produits.get(id);
    if (!produit) {
      throw new Error('Produit inconnu');
    }
    if (produit.stock < quantite) {
      throw new Error('Stock insuffisant');
    }
    produit.stock -= quantite;
  }
}
