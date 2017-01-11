import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { buildPhotoUrl } from '../../shared/utils';

declare var documnet: any;

@Component({
  selector: 'ar-lightbox',
  templateUrl: './lightbox.html',
  styleUrls: ['./lightbox.scss']
})
export class LightBoxComponent implements OnInit {
  @Input() images: any[];
  @Output() closeLightBox: EventEmitter<null> = new EventEmitter();
  subscription$: Observable<Event>;
  buildPhotoUrl = buildPhotoUrl;

  maxIndex;
  activeImageIndex = 0;

  constructor() { }

  onNext() {
    if (this.activeImageIndex === this.maxIndex ) {
      this.activeImageIndex = 0;
      return;
    }
    this.activeImageIndex += 1;
  }

  onPrev() {
    if (this.activeImageIndex === 0 ) {
      this.activeImageIndex = this.maxIndex;
      return;
    }
    this.activeImageIndex -= 1;
  }

  getActive() {
    return buildPhotoUrl(this.images[this.activeImageIndex]);
  }

  onCloseLightBox() {
    this.closeLightBox.emit();
  }

  ngOnInit() {
    this.maxIndex = this.images.length - 1;
    this.subscription$ = Observable.fromEvent(document, 'keydown');

    this.subscription$
    .subscribe(
      (e: any) => {
        if (e.keyCode === 39) {
          this.onNext();
        } else if (e.keyCode === 37) {
          this.onPrev();
        }
      },
      err => {
        console.error(err.json());
      }
    );
  }

}
