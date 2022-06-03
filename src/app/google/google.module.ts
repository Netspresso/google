import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleComponent } from './google.component';


@NgModule({
  declarations: [
    GoogleComponent
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule
  ]
})
export class GoogleModule { }
