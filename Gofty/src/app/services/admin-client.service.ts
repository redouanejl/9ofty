import { map } from 'rxjs/operators';
import { Client } from './../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminClientService {

    listeClients: Client[] = [];

    private baseUrl = "http://localhost:8080/api/clients";

  constructor(
      private httpClient : HttpClient
  ) { }

    getClients(){
        const url = this.baseUrl+'/all-reverse';

        return this.httpClient.get<GetClientsResponse>(url).pipe(
            map(response=> response)
        )
    }

    addClient(Client : Client){
        const url = this.baseUrl+'/add'

        this.httpClient.post(url, Client);
    }

    updateClient(Client: Client){
        const url = this.baseUrl+'/update'

        this.httpClient.put(url, Client);
    }

    deleteClient(ClientId: number){
        const url = this.baseUrl+'/'+ClientId;

        this.httpClient.delete(url);
    }

    getClient(id: number){
        const url= this.baseUrl+'/'+id;

        return this.httpClient.get<Client>(url);
    }
 

}

interface GetClientsResponse {
    content: Client[],
    totalElements: number,
    size: number,
    number: number
}