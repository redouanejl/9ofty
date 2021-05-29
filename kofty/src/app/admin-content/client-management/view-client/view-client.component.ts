import { ActivatedRoute, Router } from '@angular/router';
import { AdminClientService } from './../../../services/admin-client.service';
import { Client } from './../../../models/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view-client',
    templateUrl: './view-client.component.html',
    styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {

    client: Client;

    constructor(
        private clientService: AdminClientService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];

        this.clientService.getClient(id).subscribe(
            data => {
                this.client = data;
            }
        )
    }

    onDeleteclient() {
        if (confirm('Voulez vous vraiment supprimer ce client?')) {
            // this.clientService.deleteClient(this.client.id);
            this.router.navigateByUrl('/admin/clients/list');
        }
    }

}
