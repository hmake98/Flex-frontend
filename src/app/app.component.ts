import { Component } from '@angular/core';

declare const STABLE_FEATURE: boolean;
declare const EXPERIMENTAL_FEATURE: boolean;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flex-frontend';
  stableFeature: string;
  experimentalFeature: string;

  constructor() { }

  ngOnInit() {
    this.stableFeature = STABLE_FEATURE ? 'Stable feature enabled' : 'Stable feature disabled';
    this.experimentalFeature = EXPERIMENTAL_FEATURE ? 'Experimental feature enabled' : 'Experimental feature disabled';
    console.log(this.stableFeature, this.experimentalFeature)
  }
}
