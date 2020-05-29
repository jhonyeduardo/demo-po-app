import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged = false;

  constructor() { }

  isLoggedIn() {
    return this.isLogged;
  }

  login() {
    return this.isLogged = true;
  }

  logout() {
    return this.isLogged = false;
  }
}
