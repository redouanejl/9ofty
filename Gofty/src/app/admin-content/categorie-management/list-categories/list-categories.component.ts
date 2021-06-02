import { AdminCategorieService } from './../../../services/admin-categorie.service';
import { Categorie } from './../../../models/categorie.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-categories',
    templateUrl: './list-categories.component.html',
    styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

    listeCategories: Categorie[] = [];
    page: number = 1;
    size: number = 12;
    totalElements: number = 0;

    constructor(
        private categorieService: AdminCategorieService
    ) { }

    ngOnInit(): void {
        this.categorieService.getCategories().subscribe(this.processResult());
    }

    processResult() {
        return data => {
            this.listeCategories = data.content;
            this.page = data.number + 1;
            this.size = data.size;
            this.totalElements = data.totalElements;
        }
    }
}
