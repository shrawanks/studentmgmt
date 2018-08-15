import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getSubjects(classId) {
    return this.http.get("http://192.168.1.229:3000/subject/getClass/" + classId)
  }

  addReport(data) {
    return this.http.post("http://192.168.1.215:3000/marksheet/create", data)
  }

}
