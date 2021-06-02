import { AdminProduitService } from './../../../services/admin-produit.service';
import { AdminCategorieService } from './../../../services/admin-categorie.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Produit } from './../../../models/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from './../../../services/produit.service';
import { Categorie } from './../../../models/categorie.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-edit-produit',
    templateUrl: './edit-produit.component.html',
    styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

    categories: Categorie[] = [];
    produit: Produit;
    form: FormGroup;
    imageSrc; string;

    constructor(
        private produitService: AdminProduitService,
        private route: ActivatedRoute,
        private router: Router,
        private categorieService: AdminCategorieService
    ) { }

    ngOnInit(): void {
        this.categorieService.getSelectCategories().subscribe(
            data => {
                this.categories = data;
            }
        );
        const nom = this.route.snapshot.params['nom'];
        this.produitService.getProduit(nom).subscribe(
            data => {
                this.produit = data;

                this.imageSrc = this.produit.image;

                this.form = new FormGroup({
                    id: new FormControl(this.produit.id),
                    nom: new FormControl(this.produit.nom, [Validators.required]),
                    image: new FormControl(''),
                    prix: new FormControl(this.produit.prix, [Validators.required, Validators.min(0)]),
                    contenance: new FormControl(this.produit.contenance, [Validators.required]),
                    categorie: new FormControl(this.produit.categorie.nom, [Validators.required]),
                    statut: new FormControl(this.produit.statut, [Validators.required])
                })
            }
        );
    }

    get nom() {
        return this.form.get('nom');
    }
    get image() {
        return this.form.get('image');
    }
    get prix() {
        return this.form.get('prix');
    }
    get contenance() {
        return this.form.get('contenance');
    }
    get categorie() {
        return this.form.get('categorie');
    }
    get statut() {
        return this.form.get('statut');
    }

    onUpdateProduit(form) {
        if (this.image.value == '') {
            this.form.get('image').disable();
        }

        console.log(form);
        // this.produitService.updateProduit(form.value);
        this.router.navigateByUrl('/admin/produits/list');
    }

    onFileChange(event) {
        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [image] = event.target.files;
            reader.readAsDataURL(image);

            reader.onload = () => {
                this.imageSrc = reader.result as string;
            }
        }
    }

}
