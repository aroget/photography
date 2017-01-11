import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ar-app-base-component',
  template: ''
})
export class AppBaseComponent implements OnInit {
  private _isLoading = new Subject<boolean>();
  private _isLoading$ = this._isLoading.asObservable();

  constructor() { }

  isLoading(): Observable<boolean> {
    return this._isLoading$;
  }

  fetchData(stream$: Observable<any>): Promise<any> {
    this._isLoading.next(true);

    return stream$
      .toPromise()
      .then(
        res => {
          this._isLoading.next(false);
          return res;
        }
      )
      .catch(
        err => {
          this._isLoading.next(false);
          return err;
        }
      );
  }

  ngOnInit() { }

}
