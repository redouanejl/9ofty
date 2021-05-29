import { Authorite } from './authorite.model'

export class Utilisateur{

    id: number;
    titreSocial:string;
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
    statut: string;
    dateNaissance: Date;
    dateEnregistrement: Date;
    authorite: Authorite;
    
}