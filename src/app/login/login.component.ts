import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit({ login, password }) {
    if (login === 'admin' && password === 'admin') {
      this.authService.login();
      this.router.navigate(['/app/home']);
    }
  }

}
