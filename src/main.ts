import {enableProdMode, PLATFORM_INITIALIZER} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {HeaderModule} from './app/header/header.module';
import {FooterModule} from './app/footer/footer.module';
import {WidgetsModule} from './app/widgets/widgets.module';
import {ApplicationPropertiesService} from './app/platform/application-properties.service';
import {UserSettingsService} from './app/platform/user-settings.service';
import {combineLatest} from 'rxjs';

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
    provide: PLATFORM_INITIALIZER,
    multi: true,
    useFactory: (
      applicationPropertiesService: ApplicationPropertiesService,
      settingsService: UserSettingsService
    ) => {
      return () => {
        applicationPropertiesService.get()
          .subscribe(() => {
            platformRef.bootstrapModule(AppModule);
            platformRef.bootstrapModule(HeaderModule);
            platformRef.bootstrapModule(FooterModule);
          });

        combineLatest([applicationPropertiesService.get(), settingsService.get()])
          .subscribe(() => {
            platformRef.bootstrapModule(WidgetsModule);
          });
      };
    }
  }
]);
