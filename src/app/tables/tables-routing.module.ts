import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographComponent } from './biograph/biograph.component';
import { CollageComponent } from './collage/collage.component';
import { PartnersComponent } from './partners/partners.component';
import {TablesHomeComponent} from './tables-home/tables-home.component';

const routes: Routes = [
  {path:"", 
  component:TablesHomeComponent,
  children:[
    {path:"",component:BiographComponent},
    {path:"collage",component:CollageComponent},
    {path:"partner",component:PartnersComponent}

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
