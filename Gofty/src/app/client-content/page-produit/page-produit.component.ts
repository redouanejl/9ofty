import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from '../../models/categorie.model';
import { LigneCommande } from '../../models/ligneCommande.model';
import { Produit } from '../../models/produit.model';
import { CartService } from '../../services/cart.service';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css']
})
export class PageProduitComponent implements OnInit {

  produit: Produit;
  quantite: number = 1;

  MAX_QUANTITE :number = 20;

  relatedProds = [];

  constructor(private produitService: ProduitService, private route:ActivatedRoute, private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
      const nomProduit = this.route.snapshot.params['nom'];

      this.produitService.getProduit(nomProduit).subscribe(
          data =>{
              this.produit = data;
          }
      );
  }

  addToCart(){
      if(this.quantite > this.MAX_QUANTITE){
        this.toastr.error('Chaque produit a limite a 20!','Limite Max');
      }else if(this.quantite < 0){
        this.toastr.error('La Quantite doit pas etre 0 ou moins','Limite Min');
      }else{
        const ligneCommande = new LigneCommande(this.produit,this.quantite);
        this.cartService.addToCart(ligneCommande);
        this.toastr.success('Produit ajoute avec succes!','Produit ajoute au panier');
      }
  }
}
