import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { CustomersService } from '../customers.service';
import { Customer } from '../customer.interface';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  title = 'Novo cliente';

  customerForm: FormGroup;

  private id;

  readonly genreOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
    { value: 'another', label: 'Outro' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private customerService: CustomersService) {

      const { id } = this.activatedRoute.snapshot.params;

      this.id = id;
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: [''],
      genre: [''],
      cpf: ['', Validators.required],
      zipcode: ['', Validators.required],
      address_number: []
    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.customerService.get(id).subscribe((customer: Customer) => {
        this.customerForm.patchValue(customer);

        this.title = customer.name;
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.customerForm.invalid) {
      this.markAsDirtyInvalidControls(this.customerForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const customer = this.customerForm.value;

    const operation = !!this.id
      ? this.customerService.update(this.id, customer)
      : this.customerService.save(customer);

    const successMessage = !!this.id ? 'Cliente atualizado com sucesso' : 'Cliente salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);

      this.router.navigate(['app/customers']);
    });

  }

  private markAsDirtyInvalidControls(controls: { [key: string]: AbstractControl }) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];

        if (control.invalid) {
          control.markAsDirty();
        }
      }
    }
  }

}
