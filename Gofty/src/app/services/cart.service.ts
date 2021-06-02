import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LigneCommande } from '../models/ligneCommande.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    lignesCommande: LigneCommande[] = [];
    totalPrice: Subject<number> = new BehaviorSubject<number>(0.0);
    totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

    constructor() { }

    getLignesCommande(): LigneCommande[] {
        return this.lignesCommande;
    }

    addToCart(ligneCommande: LigneCommande) {

        let isExistInCart: boolean = false;
        let existingLigneCommande: LigneCommande = undefined;

        if (this.lignesCommande.length > 0) {

            existingLigneCommande = this.lignesCommande.find(item => item.id === ligneCommande.id);

            isExistInCart = (existingLigneCommande != undefined);
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

    }

    incrementQuantity(ligneCommande: LigneCommande) {
        ligneCommande.quantite++;
        this.computeCartTotals();
    }


    decrementQuantity(ligneCommande: LigneCommande) {
        ligneCommande.quantite--;

        if (ligneCommande.quantite === 0) {
            this.remove(ligneCommande);
        } else {
            this.computeCartTotals();
        }
    }

    remove(ligneCommande: LigneCommande) {

        const itemIndex = this.lignesCommande.findIndex(item => item.id == ligneCommande.id);

        if (itemIndex > -1) {
            this.lignesCommande.splice(itemIndex, 1);
            this.computeCartTotals();
        }

    }

    editLigneQuantity(ligneCommande: LigneCommande, quantity: number){
        
        this.lignesCommande.find(item => {
            if(item === ligneCommande){
                item.quantite = quantity;
                this.computeCartTotals();
            }
        });
    }

}
