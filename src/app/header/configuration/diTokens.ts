import {InjectionToken} from '@angular/core';
import {UserConfigurationModalService} from './user-configuration-modal.service';

export const USER_CONFIGURATION_SERVICE = new InjectionToken<UserConfigurationModalService>('UserConfigurationModalService');
