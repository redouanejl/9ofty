import { AdminProduitService } from './services/admin-produit.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ProduitManagementComponent } from './admin-content/produit-management/produit-management.component';
import { CommandeManagementComponent } from './admin-content/commande-management/commande-management.component';
import { ClientManagementComponent } from './admin-content/client-management/client-management.component';
import { CategorieManagementComponent } from './admin-content/categorie-management/categorie-management.component';
import { AppComponent } from './app.component';
import { ProduitService } from './services/produit.service';
import { CartService } from './services/cart.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './client-content/search/search.component';
import { AdminComponent } from './admin-content/admin.component';
import { PageProduitComponent } from './client-content/page-produit/page-produit.component';
import { NotFoundComponent } from './client-content/not-found/not-found.component';
import { MobileFooterComponent } from './client-content/mobile-footer/mobile-footer.component';
import { ListeProduitsComponent } from './client-content/liste-produits/liste-produits.component';
import { LandingPageComponent } from './client-content/landing-page/landing-page.component';
import { FooterComponent } from './client-content/footer/footer.component';
import { CheckoutPageComponent } from './client-content/checkout-page/checkout-page.component';
import { CategorieTabsComponent } from './client-content/categorie-tabs/categorie-tabs.component';
import { CategoriesMenuComponent } from './client-content/categories-menu/categories-menu.component';
import { CartStatusComponent } from './client-content/cart-status/cart-status.component';
import { CartPageComponent } from './client-content/cart-page/cart-page.component';
import { ClientContentComponent } from './client-content/client-content.component';
import { AdminHomeComponent } from './admin-content/admin-home/admin-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LivreurManagementComponent } from './admin-content/livreur-management/livreur-management.component';
import { EditCommandeComponent } from './admin-content/commande-management/edit-commande/edit-commande.component';
import { ViewCommandeComponent } from './admin-content/commande-management/view-commande/view-commande.component';
import { AddProduitComponent } from './admin-content/produit-management/add-produit/add-produit.component';
import { EditProduitComponent } from './admin-content/produit-management/edit-produit/edit-produit.component';
import { ViewProduitComponent } from './admin-content/produit-management/view-produit/view-produit.component';
import { ListProduitComponent } from './admin-content/produit-management/list-produit/list-produit.component';
import { ListCategoriesComponent } from './admin-content/categorie-management/list-categories/list-categories.component';
import { AddCategorieComponent } from './admin-content/categorie-management/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './admin-content/categorie-management/edit-categorie/edit-categorie.component';
import { ViewCategorieComponent } from './admin-content/categorie-management/view-categorie/view-categorie.component';
import { ListClientsComponent } from './admin-content/client-management/list-clients/list-clients.component';
import { EditClientComponent } from './admin-content/client-management/edit-client/edit-client.component';
import { ViewClientComponent } from './admin-content/client-management/view-client/view-client.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { ListLivreursComponent } from './admin-content/livreur-management/list-livreurs/list-livreurs.component';
import { EditLivreurComponent } from './admin-content/livreur-management/edit-livreur/edit-livreur.component';
import { ViewLivreurComponent } from './admin-content/livreur-management/view-livreur/view-livreur.component';
import { AddLivreurComponent } from './admin-content/livreur-management/add-livreur/add-livreur.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminComponent,
    CategorieManagementComponent,
    ClientManagementComponent,
    CommandeManagementComponent,
    ProduitManagementComponent,
    ClientContentComponent,
    CartPageComponent,
    CartStatusComponent,
    CategoriesMenuComponent,
    CategorieTabsComponent,
    CheckoutPageComponent,
    FooterComponent,
    LandingPageComponent,
    ListeProduitsComponent,
    MobileFooterComponent,
    NotFoundComponent,
    PageProduitComponent,
    SearchComponent,
    LivreurManagementComponent,
    EditCommandeComponent,
    ViewCommandeComponent,
    AddProduitComponent,
    EditProduitComponent,
    ViewProduitComponent,
    ListProduitComponent,
    ListCategoriesComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    ViewCategorieComponent,
    ListClientsComponent,
    EditClientComponent,
    ViewClientComponent,
    ListLivreursComponent,
    EditLivreurComponent,
    ViewLivreurComponent,
    AddLivreurComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectModule,
    MatStepperModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
     {
       timeOut: 1500,
       progressBar: false,
       progressAnimation: 'increasing',
       positionClass:'toast-bottom-right'
     }
    )
  ],
  providers: [ CartService, ProduitService , AdminProduitService ],
  bootstrap: [AppComponent]
})
 
export class AppModule { }