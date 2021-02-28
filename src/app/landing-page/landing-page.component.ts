import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  public slides: Array<string>

  constructor(public router: Router) {
    this.slides = [
      "../../assets/images/christin-hume-Hcfwew744z4-unsplash.jpg",
      "../../assets/images/surface-zAwhBlqWp6k-unsplash.jpg",
      "../../assets/images/xps-pduutGbL2-M-unsplash.jpg"
    ]

  }

  ngOnInit(): void {

  }

}
