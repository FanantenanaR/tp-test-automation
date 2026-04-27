import type { Produit } from './produit';

interface EntreeStock {
  produit: Produit;
  quantite: number;
}

export class StockRepository {
  private entrees = new Map<string, EntreeStock>();

  approvisionner(produit: Produit, quantite: number): void {
    this.entrees.set(produit.id, { produit, quantite });
  }

  produit(id: string): Produit | undefined {
    return this.entrees.get(id)?.produit;
  }

  disponible(id: string): number {
    return this.entrees.get(id)?.quantite ?? 0;
  }

  reserver(id: string, quantite: number): void {
    const entree = this.entrees.get(id);
    if (!entree) {
      throw new Error('Produit inconnu');
    }
    if (entree.quantite < quantite) {
      throw new Error('Stock insuffisant');
    }
    entree.quantite -= quantite;
  }

  liberer(id: string, quantite: number): void {
    const entree = this.entrees.get(id);
    if (!entree) {
      return;
    }
    entree.quantite += quantite;
  }
}
