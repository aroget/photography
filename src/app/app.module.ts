import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import {
  navbarReducer
} from './reducers';

import {
  SidebarPageComponent,
  DetailPageComponent,
  GalleryDetailPageComponent
} from './pages';

import { routing } from './app.routing';
import { FlickrService} from './services';

import {
  GalleryGuard,
  ProfileGuard
} from './guards';

import {
  NavBarComponent,
  SpinnerComponent,
  LightBoxComponent,
  SlideShowComponent,
  DetailItemComponent,
  GalleryItemComponent,
  LightBoxImageComponent,
  SideBarControlComponent
} from './components';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    StoreModule.provideStore(
      { navbar: navbarReducer }
    )
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    SpinnerComponent,
    LightBoxComponent,
    SlideShowComponent,
    DetailPageComponent,
    DetailItemComponent,
    SidebarPageComponent,
    GalleryItemComponent,
    LightBoxImageComponent,
    SideBarControlComponent,
    GalleryDetailPageComponent,
  ],
  providers: [
    GalleryGuard,
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
