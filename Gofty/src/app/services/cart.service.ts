import { Commande } from './../models/commande.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LigneCommande } from '../models/ligneCommande.model';
import { TokenStorageService } from './token-storage.service';

const API_PATH = 'http://localhost:8080/api/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  commande: Commande = this.storageService.getCart();
  commandeId: number = null;
  lignesCommande: LigneCommande[] = this.storageService.getCartItems() || [];
  sessionCartItem: LigneCommande[] = null;

  totalPrice: Subject<number> = new BehaviorSubject<number>(0.0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  cartItems: Subject<LigneCommande[]> = new BehaviorSubject<LigneCommande[]>(
    this.lignesCommande
  );

  constructor(
    private httpClient: HttpClient,
    private storageService: TokenStorageService
  ) {}

  getCartByClient() {
    const user = this.storageService.getUser();

    if (user.id != null) {
      const url = API_PATH + '/' + user.id;
      this.httpClient.get<Commande>(url).subscribe(
        (data) => {
          this.storageService.saveCart(data);
          this.commandeId = data.id;
        },
        (err) => {},
        () => {
          this.getLignesCommande(this.commandeId);
        }
      );
    } else {
      let newCart = new Commande();
      newCart.statut = 'panier';
      this.getLignesCommande(this.commandeId);
      this.storageService.saveCart(newCart);
    }
  }

  passLignesCommandes() {
    return this.lignesCommande;
  }

  getLignesCommande(cartId: number) {
    if (cartId != null) {
      const url = API_PATH + '/' + cartId + '/lignesCommande';
      return this.httpClient.get<LigneCommande[]>(url).subscribe((data) => {
        this.lignesCommande = data;
        if (this.sessionCartItem != null) {
          for (let ligne of this.sessionCartItem) {
            this.addToCart(ligne);
          }
          this.sessionCartItem = null;
        } else {
          this.storageService.saveCartItems(this.lignesCommande);
          this.computeCartTotals();
        }
      });
    } else {
      if (this.lignesCommande == null) {
        this.storageService.saveCartItems([]);
      }
      this.computeCartTotals();
    }
  }

  addToCart(ligneCommande: LigneCommande) {
    let isExistInCart: boolean = false;
    let existingLigneCommande: LigneCommande = undefined;

    if (this.lignesCommande.length > 0) {
      existingLigneCommande = this.lignesCommande.find(
        (item) => item.produit.id === ligneCommande.produit.id
      );

      isExistInCart = existingLigneCommande != undefined;
    }

    if (isExistInCart) {
      existingLigneCommande.quantite += ligneCommande.quantite;
    } else {
      this.lignesCommande.push(ligneCommande);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let ligne of this.lignesCommande) {
      totalPriceValue += ligne.quantite * ligne.produit.prix;
      totalQuantityValue += 1;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
    this.cartItems.next(this.lignesCommande);

    this.storageService.saveCartItems(this.lignesCommande);

    if (this.commandeId != null) {
      for (let ligne of this.lignesCommande) {
        ligne.commande = this.storageService.getCart();
        this.saveLigneCommande(ligne);
      }
    }
  }

  saveLigneCommande(ligneCommande: LigneCommande) {
    const url = API_PATH + '/saveLigne';
    this.httpClient.post(url, ligneCommande).subscribe((data) => {});
  }

  incrementQuantity(ligneCommande: LigneCommande) {
    for (let ligne of this.lignesCommande) {
      if (ligne.id == ligneCommande.id) {
        ligne.quantite++;
      }
    }

    this.computeCartTotals();
  }

  decrementQuantity(ligneCommande: LigneCommande) {
    for (let ligne of this.lignesCommande) {
      if (ligne.id == ligneCommande.id) {
        ligne.quantite--;
      }
    }

    if (ligneCommande.quantite === 0) {
      this.remove(ligneCommande);
    } else {
      this.computeCartTotals();
    }
  }

  remove(ligneCommande: LigneCommande) {
    const itemIndex = this.lignesCommande.findIndex(
      (item) => item.id == ligneCommande.id
    );

    if (itemIndex > -1) {
      this.lignesCommande.splice(itemIndex, 1);
      if (ligneCommande.id) {
        console.log(ligneCommande.id);

        const url = API_PATH + '/deleteLigne/' + ligneCommande.id;
        this.httpClient.delete(url).subscribe();
      }
      this.computeCartTotals();
    }
  }

  editLigneQuantity(ligneCommande: LigneCommande, quantity: number) {
    this.lignesCommande.find((item) => {
      if (item === ligneCommande) {
        item.quantite = quantity;
        this.computeCartTotals();
      }
    });
  }
}
