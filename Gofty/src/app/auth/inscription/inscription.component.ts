import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from './../../services/token-storage.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      titreSocial: new FormControl('Mr'),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSignup(form: FormGroup) {
    const titre = form.get('titreSocial').value;
    const nom = form.get('nom').value;
    const prenom = form.get('prenom').value;

    this.authService
      .register(
        titre,
        nom,
        prenom,
        this.username.value,
        this.email.value,
        this.password.value
      )
      .subscribe(
        (data) => {
          this.toastr.success('Inscription avec succes!');
          this.router.navigateByUrl('/connexion');
        },
        (err) => {
          this.toastr.error("Erreur d'inscription!");
        }
      );
    this.form.reset();
  }
}
