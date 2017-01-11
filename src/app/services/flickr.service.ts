import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {
  API_URL,
  API_METHODS
} from '../settings/api';

const SETTINGS = require('../settings/config.json');

let search = new URLSearchParams();
search.append('format', SETTINGS.flickr.format);
search.append('api_key', SETTINGS.flickr.key);
search.append('user_id', SETTINGS.flickr.user_id);
search.append('nojsoncallback', '1');

@Injectable()
export class FlickrService {
  API_URL: string;
  constructor(
    private http: Http
  ) {
    this.API_URL = API_URL;
  }

  getList() {
    search.append('method', API_METHODS.GET_LIST);
    return this.http.get(`${this.API_URL}`, { search })
      .map(res => res.json().photosets)
      .map(res => {
        if (!res.photoset.length) {
          return Observable.throw(new Error('No albums found in your profile.'));
        }
        return res;
      });
  }

  getPhotos(photoset_id: string) {
    search.append('method', API_METHODS.GET_PHOTOS);
    search.append('photoset_id', photoset_id);
    return this.http.get(`${this.API_URL}`, { search }).map(res => res.json().photoset);
  }

  getProfile() {
    search.append('method', API_METHODS.GET_PROFILE);
    return this.http.get(this.API_URL, { search }).map(res => res.json().person);
  }
}
