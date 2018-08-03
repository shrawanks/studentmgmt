import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  signup(user){
  	console.log(user);
  	// return this.http.post("url",user)
  }
}
