import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import {
  getStorage,
  setStorage,
  LOCAL_STORAGE_KEY
} from '../shared/utils';

import { FlickrService } from '../services';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(
    private service: FlickrService
  ) { }

  canActivate() {
    let profile = getStorage(LOCAL_STORAGE_KEY.PROFILE);

    if (!profile) {
      this
      .service
      .getProfile()
      .toPromise()
      .then(
        res => {
          setStorage(LOCAL_STORAGE_KEY.PROFILE, res);
          return true;
        }
      )
      .catch(err => false);
    }

    return true;
  }
}
