import type { Produit } from './produit';
import type { RegistreCodesPromo } from './codes-promo';

interface LignePanier {
  produit: Produit;
  quantite: number;
}

export class Panier {
  private lignes: LignePanier[] = [];
  private remisePourcentage = 0;

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

  appliquerCodePromo(code: string, registre: RegistreCodesPromo): void {
    const codePromo = registre.trouver(code);
    if (!codePromo) {
      throw new Error('Code promo inexistant');
    }
    if (!codePromo.actif) {
      throw new Error('Code promo inactif');
    }
    this.remisePourcentage = codePromo.pourcentage;
  }

  remise(): number {
    return this.remisePourcentage;
  }

  total(): number {
    const sousTotal = this.lignes.reduce((s, l) => s + l.produit.prix * l.quantite, 0);
    return sousTotal * (1 - this.remisePourcentage / 100);
  }
}
