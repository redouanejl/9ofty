import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../models/categorie.model';
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../services/produit.service';

@Component({
    selector: 'app-categorie-tabs',
    templateUrl: './categorie-tabs.component.html',
    styleUrls: ['./categorie-tabs.component.css']
})
export class CategorieTabsComponent implements OnInit {

    active = 0;
    listeCategories: Categorie[] = [];
    listeProduits: Produit[] = [];
    tabpanel: string = '';

    constructor(private produitService: ProduitService) { }

    ngOnInit(): void {
        this.produitService.getCategories().subscribe(
            data =>{
                this.listeCategories = data
            }
        )
    }


    onCategorieSelected(event, categorie: string) {

        // clear all tabs
        let tabs = document.querySelectorAll(".tab-pane");
        tabs.forEach(tab => {
            tab.classList.remove("active");
            tab.classList.remove("show");
        });

        // get selected tab
        let att = event.target.getAttribute("aria-controls");

        // show tab content
        let content = document.getElementById(att);
        content.classList.add("active");
        content.classList.add("show");

        this.produitService.getProduitsByCategorie(categorie).subscribe(
            data => {
                this.listeProduits = data.content;
            }
        );
    }

}
