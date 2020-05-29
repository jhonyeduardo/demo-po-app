import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  },
  {
    path: 'new',
    component: CustomerFormComponent
  },
  {
    path: 'edit/:id',
    component: CustomerFormComponent
  },
  {
    path: 'detail/:id',
    component: CustomerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
