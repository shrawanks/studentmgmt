import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
	token:string
	currentUser:{} = {}

  constructor(private http : HttpClient) { }


  signup(user){
  	return this.http.post("http://192.168.1.180:3000/user",user)
  }

  login(user){
  	return this.http.post("https://reqres.in/api/login",user)
  }

  getToken(){
  	if(!this.token){
  		this.token = localStorage.getItem('token');
  	}
  	return this.token;
  }

  isLoggedIn():boolean{
  	let token = this.getToken();
  	if(token)
  		return true;
  	return false;
  }

  logout(){
  	this.token = "";
  	localStorage.removeItem('token');
  }

}
