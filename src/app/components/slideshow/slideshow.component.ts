import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { FlickrService } from '../../services';
import { buildPhotoUrl } from '../../shared/utils';
import { AppBaseComponent } from '../../app.base.component';

declare var document: any;

@Component({
  selector: 'ar-slideshow',
  templateUrl: './slideshow.html',
  styleUrls: ['./slideshow.scss']
})
export class SlideShowComponent extends AppBaseComponent implements OnInit {
  @Input() set: string;

  maxIndex;
  images = [];
  loading = true;
  activeIndex = 0;
  buildPhotoUrl = buildPhotoUrl;
  subscription$: Observable<Event>;

  constructor(
    private service: FlickrService
  ) {
    super();
  }

  onNext() {
    if (this.activeIndex === this.maxIndex) {
      this.activeIndex = 0;
      return;
    }
    this.activeIndex += 1;
  }

  onPrev() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.maxIndex;
      return;
    }
    this.activeIndex -= 1;
  }

  getImage() {
    return buildPhotoUrl(this.images[this.activeIndex]);
  }

  ngOnInit() {
    super.isLoading().subscribe(res => this.loading = res);

    super
      .fetchData(this.service.getPhotos(this.set))
      .then(
        res => {
          this.images = res.photo;
          this.maxIndex = res.photo.length - 1;
        }
      )
      .catch(err => console.error(err));

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
