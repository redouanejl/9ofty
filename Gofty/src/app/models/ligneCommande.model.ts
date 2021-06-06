import { Commande } from './commande.model';
import { Produit } from './produit.model';

export class LigneCommande {
  id: number;
  commande: Commande;
  produit: Produit;
  quantite: number;

  constructor(produit: Produit, quantite: number) {
    this.commande = new Commande();
    this.produit = produit;
    this.quantite = quantite;
  }
}
