import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  signup(user){

  	return this.http.post("http://192.168.1.180:3000/user",user)

  }

  login(user){
  	return this.http.post("http://192.168.1.180:3000/user/login",user)
  }
}
