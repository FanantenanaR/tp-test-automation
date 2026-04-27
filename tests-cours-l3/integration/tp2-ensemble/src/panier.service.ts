import type { CatalogueRepository } from './catalogue.repository';

interface LignePanier {
  produitId: string;
  quantite: number;
  prixUnitaire: number;
}

export class PanierService {
  private lignes: LignePanier[] = [];

  constructor(private readonly catalogue: CatalogueRepository) {}

  ajouter(produitId: string, quantite: number): void {
    if (quantite <= 0) {
      throw new Error('La quantité doit être strictement positive');
    }
    const produit = this.catalogue.trouver(produitId);
    if (!produit) {
      throw new Error('Produit inconnu');
    }
    if (produit.stock < quantite) {
      throw new Error('Stock insuffisant');
    }
    this.catalogue.decrementerStock(produitId, quantite);
    this.lignes.push({ produitId, quantite, prixUnitaire: produit.prix });
  }

  total(): number {
    return this.lignes.reduce((s, l) => s + l.quantite * l.prixUnitaire, 0);
  }

  nombreLignes(): number {
    return this.lignes.length;
  }
}
