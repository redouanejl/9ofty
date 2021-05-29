import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Livreur } from './../models/livreur.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLivreurService {
    
    listeLivreurs: Livreur[] = [];

    private baseUrl = "http://localhost:8080/api/livreurs";

  constructor(
      private httpClient : HttpClient
  ) { }

    getLivreurs(){
        const url = this.baseUrl+'/all-reverse';

        return this.httpClient.get<GetLivreursResponse>(url).pipe(
            map(response=> response)
        )
    }

    addLivreur(Livreur : Livreur){
        const url = this.baseUrl+'/add'

        this.httpClient.post(url, Livreur);
    }

    updateLivreur(Livreur: Livreur){
        const url = this.baseUrl+'/update'

        this.httpClient.put(url, Livreur);
    }

    deleteLivreur(LivreurId: number){
        const url = this.baseUrl+'/'+LivreurId;

        this.httpClient.delete(url);
    }

    getLivreur(nom: string){
        const url= this.baseUrl+'/'+nom;

        return this.httpClient.get<Livreur>(url);
    }
 

}

interface GetLivreursResponse {
    content: Livreur[],
    totalElements: number,
    size: number,
    number: number
}