import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../student'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  Students: any; 
  @Input() data: any;
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
   /* this.httpClient.get('/assets/Students.json').subscribe(result => {
      this.Students = result;
    
    });*/

  }

}
