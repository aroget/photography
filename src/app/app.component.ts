import { Component } from '@angular/core';

import '../style/app.scss';


@Component({
  selector: 'ar-app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor() { }
}
