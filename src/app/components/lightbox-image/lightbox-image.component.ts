import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ar-lightbox-image',
  templateUrl: './lightbox-image.html',
  styleUrls: ['./lightbox-image.scss']
})
export class LightBoxImageComponent implements OnInit {
  @Input() image: string;

  constructor() { }

  ngOnInit() {
    // console.log(this);
  }

}
