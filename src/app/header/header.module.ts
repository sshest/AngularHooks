import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  bootstrap: [HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }