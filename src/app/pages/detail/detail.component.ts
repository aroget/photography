import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { FlickrService } from '../../services';
import { AppBaseComponent } from '../../app.base.component';

import {
  InavbarState,
  NAVBAR_RESET,
  NAVBAR_UPDATE
} from '../../reducers';

@Component({
  selector: 'ar-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss']
})
export class DetailPageComponent extends AppBaseComponent implements OnInit, OnDestroy {
  set;
  setId;
  loading = true;
  isLightBoxOpen = false;
  constructor(
    private route: ActivatedRoute,
    private service: FlickrService,
    private store: Store<InavbarState>
  ) {
    super();
    this.setId = this.route.snapshot.params['id'];
  }

  onOpenLightBox(image) {
    this.isLightBoxOpen = true;
  }

  onCloseLightBox() {
    this.isLightBoxOpen = false;
  }

  ngOnDestroy() {
    this.store.dispatch({ type: NAVBAR_RESET });
  }
  ngOnInit() {
    super.isLoading().subscribe(res => this.loading = res);

    super
    .fetchData(this.service.getPhotos(this.setId))
    .then(res => {
      this.set = res;
      this.store.dispatch({
        type: NAVBAR_UPDATE,
        payload: {
          backButton: true,
          setTitle: this.set.title
        }
      });
    })
    .catch(err => console.log(err));
  }
}
