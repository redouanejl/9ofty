import { Client } from './../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_PATH = 'http://localhost:8080/api/clients';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  getClient(id: number) {
    const url = API_PATH + '/' + id;

    return this.httpClient.get<Client>(url);
  }
}
