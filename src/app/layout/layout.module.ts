import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [LayoutComponent, HomeComponent, AccountComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
