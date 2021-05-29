import { AddLivreurComponent } from './admin-content/livreur-management/add-livreur/add-livreur.component';
import { ViewLivreurComponent } from './admin-content/livreur-management/view-livreur/view-livreur.component';
import { EditLivreurComponent } from './admin-content/livreur-management/edit-livreur/edit-livreur.component';
import { ListLivreursComponent } from './admin-content/livreur-management/list-livreurs/list-livreurs.component';
import { ViewClientComponent } from './admin-content/client-management/view-client/view-client.component';
import { EditClientComponent } from './admin-content/client-management/edit-client/edit-client.component';
import { ListClientsComponent } from './admin-content/client-management/list-clients/list-clients.component';
import { ViewCategorieComponent } from './admin-content/categorie-management/view-categorie/view-categorie.component';
import { EditCategorieComponent } from './admin-content/categorie-management/edit-categorie/edit-categorie.component';
import { AddCategorieComponent } from './admin-content/categorie-management/add-categorie/add-categorie.component';
import { ListCategoriesComponent } from './admin-content/categorie-management/list-categories/list-categories.component';
import { ListProduitComponent } from './admin-content/produit-management/list-produit/list-produit.component';
import { ViewProduitComponent } from './admin-content/produit-management/view-produit/view-produit.component';
import { EditProduitComponent } from './admin-content/produit-management/edit-produit/edit-produit.component';
import { AddProduitComponent } from './admin-content/produit-management/add-produit/add-produit.component';
import { EditCommandeComponent } from './admin-content/commande-management/edit-commande/edit-commande.component';
import { LivreurManagementComponent } from './admin-content/livreur-management/livreur-management.component';
import { ClientManagementComponent } from './admin-content/client-management/client-management.component';
import { CategorieManagementComponent } from './admin-content/categorie-management/categorie-management.component';
import { ProduitManagementComponent } from './admin-content/produit-management/produit-management.component';
import { CommandeManagementComponent } from './admin-content/commande-management/commande-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from './client-content/cart-page/cart-page.component';
import { LandingPageComponent } from './client-content/landing-page/landing-page.component';
import { ListeProduitsComponent } from './client-content/liste-produits/liste-produits.component';
import { PageProduitComponent } from './client-content/page-produit/page-produit.component';
import { CheckoutPageComponent } from './client-content/checkout-page/checkout-page.component';
import { NotFoundComponent } from './client-content/not-found/not-found.component';
import { AdminComponent } from './admin-content/admin.component';
import { ClientContentComponent } from './client-content/client-content.component';
import { AdminHomeComponent } from './admin-content/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'commandes',
        component: CommandeManagementComponent,
        pathMatch: 'full',
        children: [{ path: 'edit', component: EditCommandeComponent }],
      },
      {
        path: 'produits',
        component: ProduitManagementComponent,
        children: [
          { path: 'list', component: ListProduitComponent },
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'add', component: AddProduitComponent },
          { path: 'edit/:nom', component: EditProduitComponent },
          { path: 'view/:nom', component: ViewProduitComponent },
        ],
      },
      {
        path: 'categories',
        component: CategorieManagementComponent,
        children: [
          { path: 'list', component: ListCategoriesComponent },
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'add', component: AddCategorieComponent },
          { path: 'edit/:nom', component: EditCategorieComponent },
          { path: 'view/:nom', component: ViewCategorieComponent },
        ],
      },
      {
        path: 'clients',
        component: ClientManagementComponent,
        children: [
          { path: 'list', component: ListClientsComponent },
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'edit/:id', component: EditClientComponent },
          { path: 'view/:id', component: ViewClientComponent },
        ],
      },
      {
        path: 'livreurs',
        component: LivreurManagementComponent,
        children: [
          { path: 'list', component: ListLivreursComponent },
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'add', component: AddLivreurComponent },
          { path: 'edit/:id', component: EditLivreurComponent },
          { path: 'view/:id', component: ViewLivreurComponent },
        ],
      },
    ],
  },
  {
    path: '',
    component: ClientContentComponent,
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full' },
      { path: 'checkout', component: CheckoutPageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'produits/:nom', component: PageProduitComponent },
      { path: 'categories/:nom', component: ListeProduitsComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
