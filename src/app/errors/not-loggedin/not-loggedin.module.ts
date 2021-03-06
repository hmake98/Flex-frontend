import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotLoggedinRoutingModule } from './not-loggedin-routing.module';
import { NotLoggedinComponent } from './not-loggedin.component';


@NgModule({
  declarations: [NotLoggedinComponent],
  imports: [
    CommonModule,
    NotLoggedinRoutingModule
  ]
})
export class NotLoggedinModule { }
