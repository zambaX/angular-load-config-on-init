import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ConfigLoaderService } from './services/config-loader.service';
import { AppComponent } from './app.component';
import { PreloadFactory} from './services/preload-service.factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfigLoaderService,
    {
      provide: APP_INITIALIZER,
      deps: [
        ConfigLoaderService
      ],
      multi: true,
      useFactory: PreloadFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
