import {APP_BOOTSTRAP_LISTENER, ComponentFactoryResolver, ComponentRef, NgModule, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ModalComponent],
  providers: [
    {
      multi: true,
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: (resolver: ComponentFactoryResolver) => {
        // console.log('[MODULE:GDPR:APP_BOOTSTRAP_LISTENER]');
        return (componentRef: ComponentRef<any>) => {
          const factory = resolver.resolveComponentFactory(ModalComponent);
          const viewContainerRef = componentRef.injector.get(ViewContainerRef);
          viewContainerRef.createComponent(factory);
        };
      },
      deps: [ComponentFactoryResolver]
    }
  ]
})
export class GdprModule { }
