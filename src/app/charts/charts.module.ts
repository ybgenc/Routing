import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartComponent } from './chart/chart.component';
import { SharedmodulModule } from '../sharedmodul/sharedmodul.module';
import { ChartdataComponent } from './chartdata/chartdata.component';



@NgModule({
  declarations: [
    ChartComponent,
    ChartdataComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedmodulModule
  ],
  exports:[
    ChartComponent
  ]
})
export class ChartsModule { }
