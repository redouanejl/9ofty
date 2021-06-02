import { Client } from './../models/client.model';
import { TokenStorageService } from './../services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-content',
  templateUrl: './client-content.component.html',
  styleUrls: ['./client-content.component.css'],
})
export class ClientContentComponent implements OnInit {
  username: string;
  connecte: boolean = false;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.connecte = !!this.tokenStorageService.getToken();

    if (this.connecte) {
      const utilisateur = this.tokenStorageService.getUser();

      console.log(utilisateur.username);

      this.username = utilisateur.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
