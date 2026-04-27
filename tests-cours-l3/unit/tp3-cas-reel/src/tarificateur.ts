export interface LigneDevis {
  prixUnitaire: number;
  quantite: number;
}

export interface Devis {
  sousTotal: number;
  remise: number;
  fraisDePort: number;
  tva: number;
  total: number;
}

export class Tarificateur {
  private static readonly TAUX_TVA = 0.2;
  private static readonly SEUIL_FRANCO = 80;
  private static readonly FRAIS_DE_PORT = 5;

  // Comportement non spécifié sur quantités ou prix négatifs.
  calculer(lignes: LigneDevis[]): Devis {
    const sousTotal = this.arrondir(
      lignes.reduce((s, l) => s + l.prixUnitaire * l.quantite, 0),
    );
    const remise = this.arrondir(this.calculerRemise(sousTotal));
    const fraisDePort = sousTotal < Tarificateur.SEUIL_FRANCO ? Tarificateur.FRAIS_DE_PORT : 0;
    const baseTva = sousTotal - remise + fraisDePort;
    const tva = this.arrondir(baseTva * Tarificateur.TAUX_TVA);
    const total = this.arrondir(baseTva + tva);
    return { sousTotal, remise, fraisDePort, tva, total };
  }

  private calculerRemise(sousTotal: number): number {
    if (sousTotal > 200) return sousTotal * 0.15;
    if (sousTotal > 100) return sousTotal * 0.1;
    if (sousTotal > 50) return sousTotal * 0.05;
    return 0;
  }

  private arrondir(montant: number): number {
    return Math.round(montant * 100) / 100;
  }
}
