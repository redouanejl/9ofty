import { ActivatedRoute } from '@angular/router';
import { AdminCategorieService } from './../../../services/admin-categorie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categorie } from './../../../models/categorie.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-edit-categorie',
    templateUrl: './edit-categorie.component.html',
    styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

    categorie: Categorie;

    form: FormGroup;

    constructor(
        private categorieService: AdminCategorieService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const nom = this.route.snapshot.params['nom'];
        this.categorieService.getCategorie(nom).subscribe(
            data =>{
                this.categorie = data;

                this.form = new FormGroup({
                    id: new FormControl(this.categorie.id),
                    nom: new FormControl(this.categorie.nom, [Validators.required])
                })
            }
        )
    }

    get nom() {
        return this.form.get('nom');
    }

    onUpdateCategorie(form){

        console.log(form);
        // this.categorieService.updateCategorie(form.value);
    }

}
