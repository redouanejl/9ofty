import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from './../../services/token-storage.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onLogin(form: FormGroup): void {
    this.authService.login(this.username.value, this.password.value).subscribe(
      (data) => {
        const cartItems = this.tokenStorageService.getCartItems();
        this.cartService.sessionCartItem = cartItems;
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveUser(data);
        this.toastr.success('connexion avec succes!');

        const user = this.tokenStorageService.getUser();

        if (user.roles[0] === 'ROLE_ADMIN') {
          window.location.replace('/admin');
        } else {
          this.cartService.getCartByClient();
          window.location.replace('/');
        }
      },
      (err) => {
        this.toastr.error('Erreur de connexion!');
      }
    );
    this.form.reset();
  }
}
