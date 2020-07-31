import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoPageModule } from '@po-ui/ng-components';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PoPageModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
