import { LigneCommande } from './../models/ligneCommande.model';
import { Commande } from './../models/commande.model';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CART_KEY = 'cart';
const CART_ITEM_KEY = 'cart-items';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveCart(commande: Commande): void {
    window.sessionStorage.removeItem(CART_KEY);
    window.sessionStorage.setItem(CART_KEY, JSON.stringify(commande));
  }

  public getCart(): any {
    const cart = window.sessionStorage.getItem(CART_KEY);
    if (cart) {
      return JSON.parse(cart);
    }

    return { statut: 'panier' };
  }

  public saveCartItems(lignesCommande: LigneCommande[]): void {
    window.sessionStorage.removeItem(CART_ITEM_KEY);
    window.sessionStorage.setItem(
      CART_ITEM_KEY,
      JSON.stringify(lignesCommande)
    );
  }

  public getCartItems(): any {
    const cartItems = window.sessionStorage.getItem(CART_ITEM_KEY);
    if (cartItems) {
      return JSON.parse(cartItems);
    }
  }
}
