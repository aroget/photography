import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { buildPhotoUrl } from '../../shared/utils';

@Component({
  selector: 'ar-detail-item',
  templateUrl: './detail-item.html',
  styleUrls: ['./detail-item.scss']
})
export class DetailItemComponent implements OnInit {
  @Input() image: any;
  @Output() openLightBox: EventEmitter<string> = new EventEmitter();
  buildPhotoUrl = buildPhotoUrl;

  constructor() { }

  onOpen(image) {
    this.openLightBox.emit(image);
  }

  ngOnInit() {
    // console.log(this);
  }

}
