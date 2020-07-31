import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Customer } from '../customer.interface';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  title = 'Detalhando';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private customerService: CustomersService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.customerService.get(id).subscribe((customer: Customer) => {
      this.customer = customer;

      this.title = customer.name;
    });
  }

  back() {
    this.router.navigate(['app/customers']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza remover este cliente?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/customers/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.customerService.delete(id).subscribe(() => {
      this.notification.success('Cliente removido com sucesso');

      this.router.navigate([`app/customers`]);
    });
  }

}
