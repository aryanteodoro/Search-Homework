import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search';

  Students: any; 
  searchValue: any;

  constructor(private httpClient: HttpClient, public router: Router) {
  
   }
  ngOnInit() {
    this.httpClient.get('/assets/Students.json').subscribe(result => {
      this.Students = result;
    
    });

    

  }

}
