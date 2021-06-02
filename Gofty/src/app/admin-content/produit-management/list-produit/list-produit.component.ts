import { AdminProduitService } from './../../../services/admin-produit.service';
import { Produit } from './../../../models/produit.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

    listeProduits: Produit[] = [];
    page: number = 1;
    size: number = 12;
    totalElements: number = 0;

    constructor(
        private produitService: AdminProduitService
    ) { }

    ngOnInit(): void {
        this.produitService.getProduits().subscribe(this.processResult());
    }

    processResult() {
        return data => {
            this.listeProduits = data.content;
            this.page = data.number + 1;
            this.size = data.size;
            this.totalElements = data.totalElements;
        }
    }


}
