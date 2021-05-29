import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Categorie } from '../models/categorie.model';
import { Produit } from '../models/produit.model';

@Injectable({
    providedIn: 'root'
})
export class ProduitService {

    listeProduits: Produit[] = [];
    listeCategories: Categorie[] = [];

    private baseUrl = "http://localhost:8080/api/produits";

    private categoriesUrl = "http://localhost:8080/api/categories";



    constructor(private httpClient: HttpClient) { }

    getProduitsByCategorie(nomCategorie: string) {
        const searchByCatNameUrl = this.baseUrl + "/categorie/" + nomCategorie;

        return this.httpClient.get<GetProduitsResponse>(searchByCatNameUrl).pipe(
            map(response => response)
        );
    }

    getProduitsPaginated(page: number, pageSize: number, nomCategorie: string) {
        const paginationUrl = this.baseUrl + "/categorie/" + nomCategorie + '?page=' + page + '&size=' + pageSize;
        return this.httpClient.get(paginationUrl);
    }

    searchProduitsPaginated(page: number, pageSize: number, keyword: string) {
        const searchKeywordUrl = this.baseUrl + '/search?q=' + keyword + '&page=' + page + '&size=' + pageSize;

        return this.httpClient.get(searchKeywordUrl);
    }

    searchProduits(keyword: string): Observable<Produit[]> {
        const searchKeywordUrl = this.baseUrl + '/search?q=' + keyword;
        return this.httpClient.get<GetProduitsResponse>(searchKeywordUrl).pipe(
            map(response => response.content)
        );
    }

    getCategories() {
        return this.httpClient.get<Categorie[]>(this.categoriesUrl+'/all').pipe(
            map(response => response)
        );
    }

    getProduit(nom: string) {
        const urlProduit = this.baseUrl + '/' + nom;
        return this.httpClient.get<Produit>(urlProduit);
    }
}

interface GetProduitsResponse {
    content: Produit[],
    totalElements: number,
    size: number,
    number: number
}
