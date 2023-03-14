import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent {
  numbers = [
    {value :62 ,label :"CUSTOMER "},
    {value :34561 ,label :"INDORSEMENT"},
    {value :174 ,label :"COMMENT"}
  ]

  images = [

    {image:'/assets/images/air.png',
     title:'Apple',
     description:'Macbook  Lorem, ipsum dolor. 13".'},

     {image:'/assets/images/mac.png',
      title:'Apple',
      description:'Mac Lorem, amet consectetur. 27".'
     }
  ]
}
