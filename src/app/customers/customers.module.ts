import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  PoPageModule,
  PoTableModule,
  PoDividerModule,
  PoFieldModule,
  PoInfoModule
} from '@po-ui/ng-components';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersService } from './customers.service';

@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomersListComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    CustomersRoutingModule
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
