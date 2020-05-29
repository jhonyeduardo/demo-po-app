import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@portinari/portinari-ui';
import { Observable } from 'rxjs';

import { CustomersService } from '../customers.service';
import { Customer } from '../customer.interface';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Array<Customer>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    {
      label: 'Adicionar',
      url: 'app/customers/new',
      icon: 'po-icon-plus'
    }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Editar', action: customer => this.router.navigate([`app/customers/edit/${customer.id}`])},
    { label: 'Remover', action: this.onRemove.bind(this) },
    { label: 'Visualizar', action: customer => this.router.navigate([`app/customers/detail/${customer.id}`]) },
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Nome', property: 'name' },
    { label: 'Email', property: 'email' },
    { label: 'CPF', property: 'cpf' }
  ];

  constructor(
    private router: Router,
    private customerService: CustomersService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.customerService
      .getAll()
      .subscribe((customers: Array<Customer>) => {
        this.customers = customers;

        this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Customer) {
    this.dialog.confirm({
      message: 'Tem certeza remover este cliente?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.customerService.delete(id).subscribe(() => {
      this.customers = this.customers.filter(customer => customer.id !== id);

      this.isTableLoading = false;
    });
  }

}
