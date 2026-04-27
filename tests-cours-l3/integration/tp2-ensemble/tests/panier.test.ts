import { describe, it, beforeEach } from 'vitest';
import { CatalogueRepository } from '../src/catalogue.repository';
import { PanierService } from '../src/panier.service';

describe('PanierService — collaboration avec CatalogueRepository', () => {
  let catalogue: CatalogueRepository;
  let panier: PanierService;

  beforeEach(() => {
    catalogue = new CatalogueRepository();
    catalogue.enregistrer({ id: 'p1', nom: 'Livre', prix: 20, stock: 5 });
    catalogue.enregistrer({ id: 'p2', nom: 'Stylo', prix: 3, stock: 0 });
    panier = new PanierService(catalogue);
  });

  it('devrait_ajouter_le_produit_et_decrementer_le_stock_quand_le_produit_est_disponible', () => {
    // À compléter ensemble
  });

  it('devrait_lever_une_erreur_quand_le_produit_est_inconnu', () => {
    // À compléter ensemble
  });

  it('devrait_lever_une_erreur_quand_le_stock_est_insuffisant', () => {
    // À compléter ensemble
  });

  it('devrait_calculer_le_total_quand_plusieurs_produits_sont_ajoutes', () => {
    // À compléter ensemble
  });
});
