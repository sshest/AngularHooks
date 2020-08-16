import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {ModalComponent} from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class GdprService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  open(viewContainerRef: ViewContainerRef): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    viewContainerRef.createComponent(factory);
  }
}
