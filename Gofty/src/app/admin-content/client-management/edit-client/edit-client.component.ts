import { ActivatedRoute, Router } from '@angular/router';
import { AdminClientService } from './../../../services/admin-client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from './../../../models/client.model';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-client',
    templateUrl: './edit-client.component.html',
    styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {

    client: Client;
    form: FormGroup;
    startDate: Date;
    endDate: Date = new Date();

    constructor(
        private clientService: AdminClientService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];

        this.clientService.getClient(id).subscribe(
            data => {
                this.client = data;

                this.form = new FormGroup({
                    id: new FormControl(this.client.id),
                    titreSocial: new FormControl(this.client.titreSocial, [Validators.required]),
                    nom: new FormControl(this.client.nom, [Validators.required]),
                    prenom: new FormControl(this.client.prenom, [Validators.required]),
                    email: new FormControl(this.client.email, [Validators.required, Validators.email]),
                    dateNaissance: new FormControl(this.client.dateNaissance, [Validators.required]),
                    statut: new FormControl(this.client.statut, [Validators.required])
                })

                this.startDate = this.client.dateNaissance;
            }
        )
    }

    get titreSocial() {
        return this.form.get('titreSocial');
    }
    get nom() {
        return this.form.get('nom');
    }
    get prenom() {
        return this.form.get('prenom');
    }
    get email() {
        return this.form.get('email');
    }
    get dateNaissance() {
        return this.form.get('dateNaissance');
    }
    get statut() {
        return this.form.get('statut');
    }

    onUpdateClient(form) {

        console.log(form);
    }

}
