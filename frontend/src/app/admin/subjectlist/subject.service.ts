import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: "root"
})
export class SubjectService {
	subjectList: any
  constructor(private http: HttpClient) { }

   getSubject() {
  	// return this.http.get('http://192.168.1.215:3000/subject/')
  	return this.http.get('http://192.168.1.229:3000/subject')
  }

  postSubject(subject) {
  	return this.http.post('http://192.168.1.229:3000/subject', subject)
  }

  deleteSubject(id) {
  	return this.http.delete('http://192.168.1.215:3000/subject/' + id)
  }

  updateSubject(id, subject) {
  	return this.http.put('http://192.168.1.215:3000/subject/' + id, subject)
  }

}
