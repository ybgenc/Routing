import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  employee = [

    { image : 'assets/images/jenny.jpg',
      name : 'Jill Feliciano',
      title : 'Mechanical Engineer',
      description :'Lorem ipsum dolor sit amet consectetur.'},

    {  image : 'assets/images/stevie.jpg',
       name : 'Civil Ossi',
       title : 'Software Developer',
       description :'Lorem ipsum dolor sit amet consectetur.'},

    { image : 'assets/images/veronika.jpg',
      name : 'Kill Hess',
      title : 'Software Engineer',
      description :'Lorem ipsum dolor sit amet consectetur.'},
    
    { image : 'assets/images/bill.jpg' ,
      name : 'Bill Dwer',
      title : 'Computer Engineer',
      description :'Lorem ipsum dolor sit amet consectetur.'},
  ]
}
