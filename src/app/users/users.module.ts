import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion/gestion.component';
import { ListeComponent } from './liste/liste.component';
import {UsersRoutingModule} from './users-routing.module';



@NgModule({
  declarations: [GestionComponent, ListeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
