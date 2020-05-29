import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoPageModule } from '@portinari/portinari-ui';

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
