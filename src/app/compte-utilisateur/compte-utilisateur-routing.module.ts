import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteUtilisateurRoutingModule { }
