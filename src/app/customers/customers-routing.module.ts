import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListecustomersComponent } from './listecustomers/listecustomers.component';
import { GestionCustomersComponent } from './gestion-customers/gestion-customers.component';


const routes: Routes = [
  {path: 'listecustomers', component: ListecustomersComponent},
  {path: 'gestion-customers', component: GestionCustomersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }