import { Livreur } from './livreur.model'
import { Produit } from './produit.model' 

export class Stock{

    id: number;
    quantite: number;
    livreur: Livreur;
    produit: Produit;
    
}