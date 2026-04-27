export interface Produit {
  id: string;
  nom: string;
  prix: number;
}

export interface LigneCommande {
  produitId: string;
  quantite: number;
}
