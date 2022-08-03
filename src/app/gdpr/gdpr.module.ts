import {APP_BOOTSTRAP_LISTENER, ComponentFactoryResolver, ComponentRef, NgModule, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GDPRModalComponent } from './modal/modal.component';



@NgModule({
    declarations: [GDPRModalComponent],
    imports: [
        CommonModule
    ],
    providers: [
        {
            multi: true,
            provide: APP_BOOTSTRAP_LISTENER,
            useFactory: (resolver: ComponentFactoryResolver) => {
                // console.log('[MODULE:GDPR:APP_BOOTSTRAP_LISTENER]');
                return (componentRef: ComponentRef<any>) => {
                    const factory = resolver.resolveComponentFactory(GDPRModalComponent);
                    const viewContainerRef = componentRef.injector.get(ViewContainerRef);
                    viewContainerRef.createComponent(factory);
                };
            },
            deps: [ComponentFactoryResolver]
        }
    ]
})
export class GdprModule { }
