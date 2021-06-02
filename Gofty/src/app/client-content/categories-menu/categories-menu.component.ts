import { Component, OnInit } from '@angular/core';

import { Categorie } from '../../models/categorie.model';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

    listeCategories : Categorie[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getCategories().subscribe(
        data =>{
            this.listeCategories = data
        }
    )
  }

}
