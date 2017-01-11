import { Component, OnInit, Input } from '@angular/core';

import { buildPhotoUrl } from '../../shared/utils';

@Component({
  selector: 'ar-gallery-item',
  templateUrl: './gallery-item.html',
  styleUrls: ['./gallery-item.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() data: any;
  buildPhotoUrl = buildPhotoUrl;

  constructor() { }

  ngOnInit() {
    // console.log(this);
  }

}
