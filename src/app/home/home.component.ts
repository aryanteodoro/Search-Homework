import { Component, OnInit, Input } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public students = [];
  Students: any; 
  @Input() searchValue: any;

  constructor(private studentService: StudentsService) {
  
   }
  ngOnInit() {
    this.studentService.getStudent()
        .subscribe( data => this.Students = data);
  }

}
