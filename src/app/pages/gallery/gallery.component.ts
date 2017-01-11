import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { FlickrService } from '../../services';
import { AppBaseComponent } from '../../app.base.component';

@Component({
  selector: 'ar-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class GalleryComponent extends AppBaseComponent implements OnInit {
  loading = true;
  galleries = [];
  constructor(
    private service: FlickrService
  ) {
    super();
  }

  ngOnInit() {
    super.isLoading().subscribe(res => this.loading = res);
    const galleries$ = this.service.getList();

    const stream$ = galleries$.switchMap(galleries => {
      let imagesInGallery$ = [];

      for (let gallery of galleries.photoset) {
        imagesInGallery$.push(this.service.getPhotos(gallery.id));
      }
      return Observable.combineLatest(imagesInGallery$);
    });

    super
      .fetchData(stream$)
      .then(
        res => {
          this.galleries = res.map(item => {
            let serie = {};
            serie['id'] = item.id;
            serie['title'] = item.title;
            serie['total'] = item.total;
            serie['cover'] = item.photo[0];
            return serie;
          });
        }
      )
      .catch(err => {
        console.error(err);
      });
  }
}
