import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},

  { path: 'accueil', component: AccueilComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'contact', component: ContactComponent},

  {
    path: 'users', loadChildren: () => import('./users/users.module')
      .then(m => m.UsersModule)
  },
  {
    path: 'customers', loadChildren: () => import('./customers/customers.module')
      .then(m => m.CustomersModule)
  },
  {
    path: 'auth', loadChildren: () => import('./compte-utilisateur/compte-utilisateur.module')
      .then(m => m.CompteUtilisateurModule)
  },

  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
