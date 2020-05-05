import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoToolbarModule, PoMenuModule } from '@portinari/portinari-ui';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
