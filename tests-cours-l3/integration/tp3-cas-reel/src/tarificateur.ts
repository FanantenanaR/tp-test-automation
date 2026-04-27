import type { LigneCommande, Produit } from './produit';

export interface DevisCommande {
  sousTotal: number;
  fraisDePort: number;
  total: number;
}

export class Tarificateur {
  private static readonly SEUIL_FRANCO = 100;
  private static readonly FRAIS_DE_PORT = 7;

  constructor(private readonly resoudreProduit: (id: string) => Produit | undefined) {}

  calculer(lignes: LigneCommande[]): DevisCommande {
    const sousTotal = lignes.reduce((s, ligne) => {
      const produit = this.resoudreProduit(ligne.produitId);
      if (!produit) {
        throw new Error('Produit inconnu');
      }
      return s + produit.prix * ligne.quantite;
    }, 0);
    const fraisDePort = sousTotal < Tarificateur.SEUIL_FRANCO ? Tarificateur.FRAIS_DE_PORT : 0;
    return { sousTotal, fraisDePort, total: sousTotal + fraisDePort };
  }
}
