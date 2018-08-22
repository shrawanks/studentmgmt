import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students;

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get('http://192.168.1.229:3000/user')

  }

  getStudentsOfClass(classId) {
    return this.http.get('http://192.168.1.229:3000/user/' + classId)

  }

  addStudent(student) {
    return this.http.post('https://reqres.in/api/users', student);
  }

  updateStudent(id, student) {
    return this.http.put("http://192.168.1.229:3000/user/" + id, student)
  }

  deleteStudent(id) {
    return this.http.delete("http://192.168.1.229:3000/user/" + id)
  }

}
