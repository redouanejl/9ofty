import { Utilisateur } from './utilisateur.model';
import { Stock } from './stock.model';
import { Commande } from './commande.model';

export class Livreur extends Utilisateur{

    matricule: string;
    lattitude: string;
    longitude: string;
    listeStockes: Stock[];
    listeCommandes: Commande[];

}