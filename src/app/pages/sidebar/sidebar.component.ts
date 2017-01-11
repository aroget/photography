import { Component, OnInit } from '@angular/core';

import { FlickrService } from '../../services';
import { AppBaseComponent } from '../../app.base.component';

@Component({
  selector: 'ar-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarPageComponent extends AppBaseComponent implements OnInit {
  sets: any;
  loading = true;
  activeSet: any;

  constructor(
    private service: FlickrService
  ) {
    super();
  }

  ngOnInit() {
    super.isLoading().subscribe(res => this.loading = res);

    super
      .fetchData(this.service.getList())
      .then(res => {
        this.sets = res;
        this.activeSet = this.sets.photoset[0].id;
      })
      .catch(err => console.error(err));
  }
}
