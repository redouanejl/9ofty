import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { LigneCommande } from '../../models/ligneCommande.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  lignesCommande: LigneCommande[] = [];
  totalPrice: number = 0.0;
  totalQuantity: number = 0;

  isLinear = true;

  authenticationFormGroup: FormGroup;
  billingAddressForm: FormGroup;
  shippingAddressForm: FormGroup;
  paiementForm: FormGroup;

  constructor(
    private cartService: CartService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((data) => {
      this.lignesCommande = data;
    });
    this.cartService.totalPrice.subscribe((data) => {
      this.totalPrice = data;
    });
    this.cartService.totalQuantity.subscribe((data) => {
      this.totalQuantity = data;
    });

    this.authenticationFormGroup = this._formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });

    this.billingAddressForm = this._formBuilder.group({
      address: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
    });

    this.shippingAddressForm = this._formBuilder.group({
      address: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
    });

    this.paiementForm = this._formBuilder.group({
      method: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('submitted!');
  }
}
