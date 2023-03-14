import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SharedmodulModule } from '../sharedmodul/sharedmodul.module';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    PopUpComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PopupsRoutingModule,
    SharedmodulModule
  ],
  exports:[
    PopUpComponent
  ]
})
export class PopupsModule { }
