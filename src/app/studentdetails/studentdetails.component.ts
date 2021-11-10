import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  Students: any; 
  @Input() data: any;
  constructor() { }
  
  ngOnInit() {
   

  }

}
