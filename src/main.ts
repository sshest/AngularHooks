import {enableProdMode, ENVIRONMENT_INITIALIZER, PLATFORM_INITIALIZER} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {FooterModule} from './app/footer/footer.module';
import {WidgetsModule} from './app/widgets/widgets.module';
import {ApplicationPropertiesService} from './app/platform/application-properties.service';
import {UserSettingsService} from './app/platform/user-settings.service';
import {combineLatest} from 'rxjs';
import {SettingsStoreService} from './app/platform/settings-store.service';
import {HeaderComponent} from './app/header/header.component';
import {bootstrapApplication} from '@angular/platform-browser';
import {share} from 'rxjs/operators';

if (environment.production) {
  enableProdMode();
}

const platformRef = platformBrowserDynamic([
  {
    provide: ApplicationPropertiesService,
    useClass: ApplicationPropertiesService,
    deps: []
  },
  {
    provide: UserSettingsService,
    useClass: UserSettingsService,
    deps: []
  },
  {
    provide: SettingsStoreService,
    useClass: SettingsStoreService,
    deps: []
  },
  {
    provide: PLATFORM_INITIALIZER,
    multi: true,
    useFactory: (
      applicationPropertiesService: ApplicationPropertiesService,
      settingsService: UserSettingsService,
      settingsStoreService: SettingsStoreService
    ) => {
      // console.log('[PLATFORM INITIALIZER]');
      return () => {
        const applicationProperties$ = applicationPropertiesService.get().pipe(share());
        applicationProperties$
          .subscribe(() => {
            platformRef.bootstrapModule(AppModule);
            bootstrapApplication(HeaderComponent, {
              providers: [{
                multi: true,
                provide: ENVIRONMENT_INITIALIZER,
                useValue: () => {
                  console.log('[COMPONENT:HEADER:ENVIRONMENT_INITIALIZER] gets created');
                }
              }]
            });
            platformRef.bootstrapModule(FooterModule);
          });

        combineLatest([applicationProperties$, settingsService.get()])
          .subscribe(([_, val]) => {
            settingsStoreService.setWidget(val.enabledWidget);
            platformRef.bootstrapModule(WidgetsModule);
          });
      };
    },
    deps: [ApplicationPropertiesService, UserSettingsService, SettingsStoreService]
  }
]);
