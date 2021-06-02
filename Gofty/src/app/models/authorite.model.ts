import { Utilisateur } from './utilisateur.model'; 


export class Authorite{

    id: number;
    authorite: string;
    listeUtilisateurs: Utilisateur[];
}