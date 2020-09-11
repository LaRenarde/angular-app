import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCustomersComponent } from './gestion-customers/gestion-customers.component';
import { ListecustomersComponent } from './listecustomers/listecustomers.component';
import {CustomersRoutingModule} from './customers-routing.module';



@NgModule({
  declarations: [GestionCustomersComponent, ListecustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule { }
