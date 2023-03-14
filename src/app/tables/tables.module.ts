import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { SharedmodulModule } from '../sharedmodul/sharedmodul.module';
import { BiographComponent } from './biograph/biograph.component';
import { CollageComponent } from './collage/collage.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    TablesHomeComponent,
    TableComponentComponent,
    BiographComponent,
    CollageComponent,
    PartnersComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedmodulModule
  ],
  exports:[
    TablesHomeComponent
  ]

})
export class TablesModule { }
