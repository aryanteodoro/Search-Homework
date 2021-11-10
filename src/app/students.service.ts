import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private url: string = "/assets/Students.json";

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Student>{
    return this.http.get<Student>(this.url);
  }

}
