import { Produit } from './produit.model';

export class Categorie{

    id: number;
    nom: string;
    icon: string;
    listeProduits: Produit[];

    constructor(id: number, nom: string, icon: string)
    {
        this.id = id;
        this.nom = nom;
        this.icon = icon;
    }
}