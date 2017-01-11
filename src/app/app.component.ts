import { Component } from '@angular/core';

import '../style/app.scss';

import {
  getStorage,
  LOCAL_STORAGE_KEY,
} from './shared/utils';

@Component({
  selector: 'ar-app',
  template: `
    <ar-navbar [data]="profile"></ar-navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  profile: any;
  constructor() {
    let profile = getStorage(LOCAL_STORAGE_KEY.PROFILE);
    this.profile = JSON.parse(profile);
  }
}
