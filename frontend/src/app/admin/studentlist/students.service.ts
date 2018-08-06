import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  getStudents() {
  	return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  addStudent(student) {
    return this.http.post('https://reqres.in/api/users', student);
  }
  
}
