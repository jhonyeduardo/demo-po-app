import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Customer } from './customer.interface';

@Injectable()
export class CustomersService {

  private url = 'http://localhost:3000/customers';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  save(customer: Customer) {
    return this.http.post(this.url, customer, { headers: this.headers});
  }

  update(id, customer: Customer) {
    return this.http.put(`${this.url}/${id}`, customer, { headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { headers: this.headers });
  }

  getAll(): Observable<Array<Customer>> {
    return this.http.get(this.url) as Observable<Array<Customer>>;
  }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, { headers: this.headers });
  }

}
