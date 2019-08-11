import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent {
  slideOpts = {
    speed: 400
  };
  constructor() {}
}
