import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  DetailComponent,
  GalleryComponent
} from './pages';

import { routing } from './app.routing';

import { ProfileGuard } from './guards';
import { FlickrService} from './services';

import {
  NavBarComponent,
  SpinnerComponent,
  LightBoxComponent,
  DetailItemComponent,
  GalleryItemComponent,
  LightBoxImageComponent
} from './components';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DetailComponent,
    NavBarComponent,
    GalleryComponent,
    SpinnerComponent,
    LightBoxComponent,
    DetailItemComponent,
    GalleryItemComponent,
    LightBoxImageComponent
  ],
  providers: [
    ProfileGuard,
    FlickrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
