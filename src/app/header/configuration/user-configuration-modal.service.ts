import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { UserConfigurationComponent } from './user-configuration-modal/user-configuration.component';

@Injectable()
export class UserConfigurationModalService {

  private instance: ComponentRef<UserConfigurationComponent> = null;

  constructor(private readonly factoryResolver: ComponentFactoryResolver) {}

  open(viewContainerRef: ViewContainerRef): ComponentRef<UserConfigurationComponent> {
    if (this.instance !== null) {
      console.error('User settings modal already opened');
      return;
    }
    const factory = this.factoryResolver.resolveComponentFactory(UserConfigurationComponent);
    this.instance = viewContainerRef.createComponent(factory);
    return this.instance;
  }

  close(): void {
    if (this.instance === null) {
      console.error('User settings modal not opened');
      return;
    }

    this.instance.destroy();
    this.instance = null;
  }
}
