import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import {
  getStorage,
  setStorage,
  LOCAL_STORAGE_KEY
} from '../shared/utils';

import { FlickrService } from '../services';

@Injectable()
export class GalleryGuard implements CanActivate {
  constructor(
    private service: FlickrService
  ) { }

  canActivate() {
    let sets = getStorage(LOCAL_STORAGE_KEY.SETS);

    if (!sets) {
      this
      .service
      .getList()
      .toPromise()
      .then(
        res => {
          setStorage(LOCAL_STORAGE_KEY.SETS, res);
          return true;
        }
      )
      .catch(err => false);
    }
    return true;
  }
}
