import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { NavbarModule } from '../shared/modules/navbar/navbar.module';



@NgModule({
  declarations: [LayoutComponent, HomeComponent, AccountComponent],
  imports: [
    CommonModule,
    NavbarModule
  ]
})
export class LayoutModule { }
