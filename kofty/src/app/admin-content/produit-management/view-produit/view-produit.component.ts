import { ActivatedRoute, Router } from '@angular/router';
import { AdminProduitService } from './../../../services/admin-produit.service';
import { Produit } from './../../../models/produit.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-view-produit',
    templateUrl: './view-produit.component.html',
    styleUrls: ['./view-produit.component.css']
})
export class ViewProduitComponent implements OnInit {

    produit: Produit;

    constructor(
        private produitservice: AdminProduitService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        const nom = this.route.snapshot.params['nom'];

        this.produitservice.getProduit(nom).subscribe(
            data => {
                this.produit = data;
            }
        );
    }

    onDeleteProduit() {
        if (confirm('Voulez vous vraiment supprimer ce produit?')) {
            // this.produitservice.deleteProduit(this.produit.id);
            this.router.navigateByUrl("/admin/produits/list");
        }
    }

}
