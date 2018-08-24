import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MarksheetService {
  private _url = "/assets/data/studentbyclass.json";

  constructor(private http: HttpClient) { }

  // getsubject(classID) {
  //   // return this.http.get("http://192.168.1.215:3000/subject/byclass/" + classID)
  //   // return this.http.get(this._url + classID);
  //   return this.http.get("http://192.168.1.215:3000/marksheet/" + classID)

  // }

  getsubject() {
    // return this.http.get("http://192.168.1.215:3000/subject/byclass/" + classID)
    // return this.http.get(this._url + classID);
    return this.http.get("http://192.168.1.215:3000/marksheet/")

  }



}
