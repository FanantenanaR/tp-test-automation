import { describe, it, beforeEach } from 'vitest';
import { Panier } from '../src/panier';
import { RegistreCodesPromo } from '../src/codes-promo';

describe('Panier — codes promo', () => {
  let panier: Panier;
  let registre: RegistreCodesPromo;

  beforeEach(() => {
    panier = new Panier();
    registre = new RegistreCodesPromo();
    registre.ajouter({ code: 'BIENVENUE10', pourcentage: 10, actif: true });
    registre.ajouter({ code: 'EXPIRE', pourcentage: 20, actif: false });
    panier.ajouter({ id: 'p1', nom: 'Livre', prix: 30 }, 2);
  });

  it('devrait_appliquer_la_remise_quand_le_code_est_valide', () => {
    // À compléter ensemble
  });

  it('devrait_lever_une_erreur_quand_le_code_est_inexistant', () => {
    // À compléter ensemble
  });

  it('devrait_lever_une_erreur_quand_le_code_est_inactif', () => {
    // À compléter ensemble
  });

  it('devrait_accepter_le_code_quelle_que_soit_la_casse', () => {
    // À compléter ensemble
  });
});
