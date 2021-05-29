import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../../models/categorie.model';
import { Produit } from '../../models/produit.model';
import { ProduitService } from '../../services/produit.service';

@Component({
    selector: 'app-liste-produits',
    templateUrl: './liste-produits.component.html',
    styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

    listeProduits: Produit[] = [];
    listeCategories : Categorie[] = [];

    currentNomCategorie: string = '';
    previousNomCategorie: string = '';

    pageNumber: number = 1;
    pageSize: number = 12;
    totalElements: number = 0;

    constructor(private produitService: ProduitService, private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.route.params.subscribe(()=>{
            this.loadProduits();
        });

        this.produitService.getCategories().subscribe(
            data =>{
                this.listeCategories = data
            }
        )
    }

    loadProduits(){
        const hasNomCategorie: boolean = this.route.snapshot.paramMap.has('nom');
        
        const keyword: string = this.route.snapshot.params['keyword'];

        if(keyword === undefined){
            if(hasNomCategorie){
                this.currentNomCategorie = this.route.snapshot.params['nom'];
            }else{
                this.currentNomCategorie = 'Fruits';
            }

            if(!this.previousNomCategorie.match(this.currentNomCategorie)){
                this.pageNumber =1;
            }

            this.previousNomCategorie = this.currentNomCategorie;

            this.produitService.getProduitsPaginated(this.pageNumber-1, this.pageSize, this.currentNomCategorie).subscribe(this.processResult());
        }else{
            this.produitService.searchProduitsPaginated(this.pageNumber-1, this.pageSize,keyword);
        }
    }

    processResult(){
        
        return data =>{
            
            this.listeProduits = data.content;
            this.pageNumber = data.number+1;
            this.pageSize = data.size;
            this.totalElements = data.totalElements;
        }
    }

}
