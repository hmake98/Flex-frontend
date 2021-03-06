import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotLoggedinComponent } from './not-loggedin.component';

const routes: Routes = [{ path: '', component: NotLoggedinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotLoggedinRoutingModule { }
