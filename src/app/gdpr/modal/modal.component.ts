import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  // constructor() {
  //   console.log('[COMPONENT:MODAL:CONSTRUCTOR]');
  // }

  modalVisible = true;

  close(): void {
    this.modalVisible = false;
  }

}
