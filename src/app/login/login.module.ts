import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoTemplatesModule } from '@po-ui/ng-templates';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PoTemplatesModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
