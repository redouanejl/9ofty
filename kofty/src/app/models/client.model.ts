import { Adresse } from './adresse.model';
import { Commande } from './commande.model';
import { Utilisateur } from './utilisateur.model';

export class Client extends Utilisateur{

    billingAdresse: Adresse;

    shippingAdresse: Adresse;

    listeCommande: Commande[];

}