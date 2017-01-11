import { Component, OnInit, Input } from '@angular/core';

import { buildAvatarUrl } from '../../shared/utils';

@Component({
  selector: 'ar-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBarComponent implements OnInit {
  @Input() data: any;
  buildAvatarUrl = buildAvatarUrl;

  constructor() { }

  ngOnInit() { }

}
