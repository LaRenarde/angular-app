import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { NbAuthComponent, NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

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
    path: 'auth', component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },

  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
