import { AdminClientService } from './../../../services/admin-client.service';
import { Client } from './../../../models/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-clients',
    templateUrl: './list-clients.component.html',
    styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

    listeClients: Client[] = [];
    page: number = 1;
    size: number = 12;
    totalElements: number = 0;

    constructor(
        private clientService: AdminClientService
    ) { }

    ngOnInit(): void {
        this.clientService.getClients().subscribe(this.processResult());
    }

    processResult() {
        return data => {
            this.listeClients = data.content;
            this.page = data.number + 1;
            this.size = data.size;
            this.totalElements = data.totalElements;
        }
    }
}
