import { Commande } from './../models/commande.model';
import { LigneCommande } from './../models/ligneCommande.model';
import { CartService } from './../services/cart.service';
import { Client } from './../models/client.model';
import { TokenStorageService } from './../services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-content',
  templateUrl: './client-content.component.html',
  styleUrls: ['./client-content.component.css'],
})
export class ClientContentComponent implements OnInit {
  username: string;
  connecte: boolean = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.connecte = !!this.tokenStorageService.getToken();

    if (this.connecte) {
      const utilisateur = this.tokenStorageService.getUser();
      this.username = utilisateur.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    const commande = new Commande();
    commande.statut = 'panier';
    this.tokenStorageService.saveCart(commande);
    this.tokenStorageService.saveCartItems([]);
    window.location.reload();
  }
}
