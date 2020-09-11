import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { GestionComponent } from './gestion/gestion.component';


const routes: Routes = [
  {path: 'liste', component: ListeComponent},
  {path: 'gestion', component: GestionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }