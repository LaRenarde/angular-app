import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CompteUtilisateurRoutingModule } from './compte-utilisateur-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbCardModule,
  NbInputModule
} from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    CompteUtilisateurRoutingModule,
    NbCardModule,
    NbAuthModule,
  ],
  declarations: [
    LoginComponent
    // ... here goes our new components
  ],
})
export class CompteUtilisateurModule { }