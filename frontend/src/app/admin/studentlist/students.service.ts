import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents() {
  	return this.http.get('http://192.168.1.229:3000/user')

  }

  addStudent(student) {
    return this.http.post('http://192.168.1.229:3000/user', student)
  }

}
