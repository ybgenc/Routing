import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component'

const routes: Routes = [
  {path:'Home' , component:HomeComponent}
  {path:'NotFound' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
