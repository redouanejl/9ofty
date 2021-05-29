import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../models/categorie.model';
import { LigneCommande } from '../../models/ligneCommande.model';
import { Produit } from '../../models/produit.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  lignesCommande: LigneCommande[] = [];
  totalPrice: number = 0.0;
  totalQuantity : number =0;

  relatedProds = [];

  constructor(private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
      this.lignesCommande = this.cartService.getLignesCommande();
      this.cartService.totalPrice.subscribe(
          data => this.totalPrice = data
      );
      this.cartService.totalQuantity.subscribe(
          data => this.totalQuantity = data
      );

      this.cartService.computeCartTotals();
  }

  incrementQuantity(ligneComande: LigneCommande){
      if(ligneComande.quantite < 20){
        this.cartService.incrementQuantity(ligneComande);
        this.toastr.success('Quantite incremente avec succes!','Quantite incremente');
      }else{
        this.toastr.error('Chaque produit a limite a 20!','Limite Max');
      }
  }

  decrementQuantity(ligneCommande: LigneCommande){
      this.cartService.decrementQuantity(ligneCommande);
      this.toastr.error('Quantite incremente avec succes!','Quantite decremente');
  }

  removeLigneCommande(ligneCommande: LigneCommande){
      this.cartService.remove(ligneCommande);
      this.toastr.error('Produit supprime avec succes!','Produit Supprime');
  }

}
