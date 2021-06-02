import { AdminProduitService } from './../../../services/admin-produit.service';
import { AdminCategorieService } from './../../../services/admin-categorie.service';
import { ProduitService } from './../../../services/produit.service';
import { Categorie } from './../../../models/categorie.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-produit',
    templateUrl: './add-produit.component.html',
    styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

    categories: Categorie[] = [];
    imageSrc: string;
    form: FormGroup;


    constructor(
        private categorieService: AdminCategorieService,
        private produitService: AdminProduitService
    ) { }

    ngOnInit(): void {
        this.categorieService.getSelectCategories().subscribe(
            data => {
                this.categories = data;
            }
        );
        this.form = new FormGroup({
            nom: new FormControl('', [Validators.required]),
            image: new FormControl(null, [Validators.required]),
            prix: new FormControl(null, [Validators.required, Validators.min(0)]),
            contenance: new FormControl('', [Validators.required]),
            categorie: new FormControl('', [Validators.required]),
            statut: new FormControl('', [Validators.required])
        })
    }

    get nom() {
        return this.form.get('nom');
    }
    get image(){
        return this.form.get('image');
    }
    get prix() {
        return this.form.get('prix');
    }
    get contenance() {
        return this.form.get('contenance');
    }
    get categorie(){
        return this.form.get('categorie');
    }
    get statut(){
        return this.form.get('statut');
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

    onAddProduit(form: FormGroup) {
        console.log(form);
        // this.produitService.addProduit(form.value);
    }

}
