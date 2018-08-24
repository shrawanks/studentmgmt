import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentsService {
  private _url = "/assets/data/studentbyclass.json";

  constructor(private http: HttpClient) { }

  getStudents() {
    // return this.http.get('http://192.168.1.215:3000');
    return this.http.get(this._url);


    // return this.http.get('http://192.168.1.229:3000/user')
  }

  addStudent(student) {
    return this.http.post(this._url, student);
  }
}
