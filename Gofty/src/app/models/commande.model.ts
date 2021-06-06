import { LigneCommande } from './ligneCommande.model';
import { Adresse } from './adresse.model';
import { Client } from './client.model';
import { Livreur } from './livreur.model';

export class Commande {
  id: number;
  date: Date;
  ref: string;
  statut: string;
  typePaiement: string;
  billingAdresse: Adresse;
  shippingAdresse: Adresse;
  client: Client;
  livreur: Livreur;
}
