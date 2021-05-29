import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../models/categorie.model';
import { ProduitService } from '../../services/produit.service';

@Component({
    selector: 'app-mobile-footer',
    templateUrl: './mobile-footer.component.html',
    styleUrls: ['./mobile-footer.component.css']
})
export class MobileFooterComponent implements OnInit {

    listeCategories: Categorie[] = []


    constructor(private produitService: ProduitService) { }

    ngOnInit(): void {
        this.produitService.getCategories().subscribe(
            data =>{
                this.listeCategories = data
            }
        )
    }

}
