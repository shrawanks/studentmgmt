import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents() {
  	return this.http.get('http://192.168.1.215:3000/users')

  }

  addStudent(student) {
    return this.http.post('https://reqres.in/api/users', student)
  }

}
