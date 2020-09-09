
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import {isPlatformBrowser} from "@angular/common";
import {APP_ID, APP_INITIALIZER, Inject, NgModule, PLATFORM_ID} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppInitService} from "./app-factory/services/app-init.service";
import {AppInitFactory} from "./app-factory/Defualt-states/app-init.factory";
import {TranslateBaseService} from "./app-translation/services/translation-base.service";
import {TranslationLoaderService} from "./app-translation/services/translation-load.service";
import {AppStorageService} from "./app-factory/services/app-storage.service";
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {AppInterceptor} from "./app-factory/Defualt-states/app.interceptor";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HelpService} from "./services/help.service";
import {ToastrModule} from "ngx-toastr";
import {BaseService} from "./services/base.service";
import {$PROJECT_URL} from "./static-api/static-api";
import {jwtOptionsFactory} from "./jwt-factory/jwt.factory";
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {BaseUxService} from "./services/base-ux.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'turksa-app'}),
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    TranslateModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    JwtModule.forRoot({
      config: {
        whitelistedDomains: [$PROJECT_URL]
      },
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [AppStorageService]
      }
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [
    TranslateBaseService,
    TranslationLoaderService,
    AppStorageService,
    AppInitService,
    MatIconRegistry,
    HelpService,
    BaseService,
    BaseUxService,
    Overlay,
    MatSnackBar,
    //app interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitFactory,
      deps: [
        AppInitService
      ],
      multi: true
    },
  ],
  declarations: [
    AppComponent
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
