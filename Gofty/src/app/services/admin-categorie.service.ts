import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Categorie } from './../models/categorie.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCategorieService {
    
    listeCategories: Categorie[] = [];

    private baseUrl = "http://localhost:8080/api/categories";

  constructor(
      private httpClient : HttpClient
  ) { }

    getCategories(){
        const url = this.baseUrl+'/all-reverse';

        return this.httpClient.get<GetCategoriesResponse>(url).pipe(
            map(response=> response)
        )
    }

    getSelectCategories(){
        const url = this.baseUrl+'/all';

        return this.httpClient.get<Categorie[]>(url).pipe(
            map(response => response)
        );
    }

    addCategorie(Categorie : Categorie){
        const url = this.baseUrl+'/add'

        this.httpClient.post(url, Categorie);
    }

    updateCategorie(Categorie: Categorie){
        const url = this.baseUrl+'/update'

        this.httpClient.put(url, Categorie);
    }

    deleteCategorie(CategorieId: number){
        const url = this.baseUrl+'/'+CategorieId;

        this.httpClient.delete(url);
    }

    getCategorie(nom: string){
        const url= this.baseUrl+'/'+nom;

        return this.httpClient.get<Categorie>(url);
    }
 

}

interface GetCategoriesResponse {
    content: Categorie[],
    totalElements: number,
    size: number,
    number: number
}