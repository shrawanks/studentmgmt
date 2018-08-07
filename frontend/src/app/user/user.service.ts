import { Injectable } from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {
	token: string
	currentUser: {} = null

  constructor(private http: HttpClient) { }


  signup(user) {
	  // return this.http.post('http://192.168.1.180:3000/user', user)
	  return this.http.post('https://reqres.in/api/register', user)
  }

  login(user) {
    // return this.http.post('http://192.168.1.243:3000/login', user)
    return this.http.post('https://reqres.in/api/login', user)
  }

  getUserDetails() {
    // let headers = new HttpHeaders()
    // const token = this.getToken()
    // headers = headers.append('x-access-token', token)
    // return this.http.get('http://192.168.1.243:3000/me', {headers : headers})
    return this.http.get('https://reqres.in/api/users/2')
  }

  getToken() {
  	if (!this.token) {
  		this.token = localStorage.getItem('token')
  	}
  	return this.token
  }


  isLoggedIn(): boolean {
  	const token = this.getToken()
  	if (token) {
  		return true
   }
  	return false

  }

  uploadPic(pic) {
    const fd = new FormData()
    fd.append('profile_pic', pic, pic.name)
    return this.http.post("http://192.168.1.243:3000/upload", fd, {
      reportProgress: true,
      observe: 'events'
    })
  }

  logout() {
  	this.token = ''
  	localStorage.removeItem('token')
  }

}
