import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsHomeComponent } from './lists-home/lists-home.component';
import { SharedmodulModule } from '../sharedmodul/sharedmodul.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListComponent } from './item-list/item-list.component';



@NgModule({
  declarations: [
    ListsHomeComponent,
    StatisticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedmodulModule
  ],
  exports : [
    ListsHomeComponent
  ]
})
export class ListsModule { }
