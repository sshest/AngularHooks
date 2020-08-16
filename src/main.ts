import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {HeaderModule} from './app/header/header.module';
import {FooterModule} from './app/footer/footer.module';
import {WidgetsModule} from './app/widgets/widgets.module';

if (environment.production) {
  enableProdMode();
}

const platformRef = platformBrowserDynamic();

platformRef.bootstrapModule(AppModule);
platformRef.bootstrapModule(HeaderModule);
platformRef.bootstrapModule(FooterModule);
platformRef.bootstrapModule(WidgetsModule);
