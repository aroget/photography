import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SideBarComponent implements OnInit {
  @Input() items: any;

  constructor() { }

  ngOnInit() { }

}
