import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  modalOpen = false;

  onClick(){
     this.modalOpen = !this.modalOpen 
  }

}
