import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const Auth_Path = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(
      Auth_Path + 'connexion',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(
    titreSocial: string,
    nom: string,
    prenom: string,
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.httpClient.post(
      Auth_Path + 'inscription',
      {
        titreSocial,
        nom,
        prenom,
        username,
        email,
        password,
      },
      httpOptions
    );
  }
}
