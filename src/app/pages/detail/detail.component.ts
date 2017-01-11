import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlickrService } from '../../services';
import { AppBaseComponent } from '../../app.base.component';

@Component({
  selector: 'ar-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss']
})
export class DetailComponent extends AppBaseComponent implements OnInit {
  set;
  setId;
  loading = true;
  isLightBoxOpen = false;
  constructor(
    private route: ActivatedRoute,
    private service: FlickrService
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

  ngOnInit() {
    super.isLoading().subscribe(res => this.loading = res);

    super
    .fetchData(this.service.getPhotos(this.setId))
    .then(res => this.set = res)
    .catch(err => console.log(err));
  }
}
