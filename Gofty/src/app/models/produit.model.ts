import { Categorie } from './categorie.model';

export class Produit {

    id: number;
    nom: string;
    image: string;
    prix: number;
    contenance: string;
    statut: string;
    categorie: Categorie;

    constructor(id: number, nom: string, image: string, prix: number, contenance: string, statut: string, categorie: Categorie) {
        this.id = id;
        this.nom = nom;
        this.image = image;
        this.prix = prix;
        this.contenance = contenance;
        this.statut = statut;
        this.categorie = categorie;
    }
}