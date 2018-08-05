import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getStudents() {
  	return this.http.get('https://reqres.in/api/users')
  }

  addStudent(student){
    return this.http.post('https://reqres.in/api/users')
  }

}
