import { AdminProduitService } from './../../services/admin-produit.service';
import { Produit } from './../../models/produit.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-produit-management',
    templateUrl: './produit-management.component.html',
    styleUrls: ['./produit-management.component.css']
})
export class ProduitManagementComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
       
    }

}
