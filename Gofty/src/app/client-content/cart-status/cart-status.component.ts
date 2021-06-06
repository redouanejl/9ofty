import { TokenStorageService } from './../../services/token-storage.service';
import { Component, Input, OnInit } from '@angular/core';

import { LigneCommande } from '../../models/ligneCommande.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  totalPrice: number = 0.0;
  totalQuantity: number = 0;

  lignesCommande: LigneCommande[] = [];

  editMode: boolean = false;
  MAX_QUANTITE: number = 20;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartService.cartItems.subscribe((data) => {
      this.lignesCommande = data;
    });
  }

  removeLigne(ligneCommande: LigneCommande) {
    this.cartService.remove(ligneCommande);
  }

  isEditMode(ligneCommande: LigneCommande, quantity: number) {
    if (this.editMode) {
      if (quantity < 0) {
        console.log('less than 0');
        quantity = 1;
      } else if (quantity > this.MAX_QUANTITE) {
        console.log('more than max!');
        quantity = 1;
      } else {
        this.cartService.editLigneQuantity(ligneCommande, quantity);
      }
    }
    this.editMode = !this.editMode;
  }
}
