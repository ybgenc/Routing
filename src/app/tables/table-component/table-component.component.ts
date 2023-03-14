import { Component } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent {
data =[
  {name :"Jill"  ,age:25 ,job:"Mechanical Engineer"  ,employed:"No"},
  {name :"Hill"  ,age:28,job:"Civil Engineer"  ,employed:"No"},
  {name :"Kill"  ,age:35  ,job:"Software engineer"  ,employed:"Yes"},
  {name :"Bill"  ,age:61  ,job:"Computer Engineer"  ,employed:"No"}
];

headers = [
  {key:"employed" ,label:"Is he/she satisfied with her salary?"},
  {key:"job" ,label:"Job"},
  {key:"age" ,label:"Age"},
  {key:"name" ,label:"Name"}
];
}
