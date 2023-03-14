import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceHoldersComponent } from './placeholders/place-holders.component';
import { SharedmodulModule } from '../sharedmodul/sharedmodul.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    PlaceholdersHomeComponent,
    PlaceHoldersComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule,
    SharedmodulModule
  ],

  exports : [
    PlaceholdersHomeComponent
  ]
})
export class PlaceholdersModule { }
