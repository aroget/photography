import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-sidebar-control',
  templateUrl: './sidebar-control.html',
  styleUrls: ['./sidebar-control.scss']
})
export class SideBarControlComponent implements OnInit {
  @Input() sets: any;

  constructor() { }

  ngOnInit() {

  }

}
