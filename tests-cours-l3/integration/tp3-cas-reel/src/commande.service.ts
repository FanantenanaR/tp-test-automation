import type { LigneCommande } from './produit';
import type { StockRepository } from './stock.repository';
import type { Tarificateur } from './tarificateur';
import type { PaiementClient } from './paiement.client';

export interface Commande {
  reference: string;
  lignes: LigneCommande[];
  total: number;
  statut: 'payee' | 'refusee';
  transactionId?: string;
}

export class CommandeService {
  private compteur = 0;

  constructor(
    private readonly stock: StockRepository,
    private readonly tarificateur: Tarificateur,
    private readonly paiement: PaiementClient,
  ) {}

  // Orchestre stock + tarification + paiement.
  // En cas d'échec du paiement, le stock réservé est libéré.
  async passer(lignes: LigneCommande[]): Promise<Commande> {
    if (lignes.length === 0) {
      throw new Error('Commande vide');
    }
    const reference = `CMD-${++this.compteur}`;

    for (const ligne of lignes) {
      this.stock.reserver(ligne.produitId, ligne.quantite);
    }

    const devis = this.tarificateur.calculer(lignes);

    const resultat = await this.paiement.debiter(devis.total, reference);
    if (!resultat.accepte) {
      for (const ligne of lignes) {
        this.stock.liberer(ligne.produitId, ligne.quantite);
      }
      return { reference, lignes, total: devis.total, statut: 'refusee' };
    }

    return {
      reference,
      lignes,
      total: devis.total,
      statut: 'payee',
      transactionId: resultat.transactionId,
    };
  }
}
