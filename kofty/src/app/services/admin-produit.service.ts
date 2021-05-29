import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Produit } from './../models/produit.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProduitService {

    listeProduits: Produit[] = [];

    private baseUrl = "http://localhost:8080/api/produits";

  constructor(
      private httpClient : HttpClient
  ) { }

    getProduits(){
        const url = this.baseUrl+'/all-reverse';

        return this.httpClient.get<GetProduitsResponse>(url).pipe(
            map(response=> response)
        )
    }

    addProduit(produit : Produit){
        const url = this.baseUrl+'/add'

        this.httpClient.post(url, produit);
    }

    updateProduit(produit: Produit){
        const url = this.baseUrl+'/update'

        this.httpClient.put(url, produit);
    }

    deleteProduit(produitId: number){
        const url = this.baseUrl+'/'+produitId;

        this.httpClient.delete(url);
    }

    getProduit(nom: string){
        const url= this.baseUrl+'/'+nom;

        return this.httpClient.get<Produit>(url);
    }
 

}

interface GetProduitsResponse {
    content: Produit[],
    totalElements: number,
    size: number,
    number: number
}
