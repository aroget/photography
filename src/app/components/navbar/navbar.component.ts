import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { InavbarState } from '../../reducers';

@Component({
  selector: 'ar-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBarComponent implements OnInit {
  @Input() data: any;
  heading: Observable<InavbarState>;
  settings = require('../../settings/config.json');

  constructor(
    private store: Store<InavbarState>
  ) {
    this.heading = this.store.select('navbar');
  }

  ngOnInit() { }

}
