import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { NavbarModule } from '../shared/modules';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    LandingPageRoutingModule,
    MatCarouselModule.forRoot(),
  ]
})
export class LandingPageModule { }
