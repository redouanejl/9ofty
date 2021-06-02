import { AdminCategorieService } from './../../../services/admin-categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from './../../../models/categorie.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view-categorie',
    templateUrl: './view-categorie.component.html',
    styleUrls: ['./view-categorie.component.css']
})
export class ViewCategorieComponent implements OnInit {

    categorie: Categorie;

    constructor(
        private route: ActivatedRoute,
        private categorieService: AdminCategorieService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const nom = this.route.snapshot.params['nom'];

        this.categorieService.getCategorie(nom).subscribe(
            data => {
                this.categorie = data;
            }
        )
    }

    onDeleteCategorie() {
        if (confirm('Voulez vous vraiment supprimer cette categorie?')) {
            // this.categorieService.deleteCategorie(this.categorie.id);
            this.router.navigateByUrl('/admin/categories/list');
        }
    }

}
