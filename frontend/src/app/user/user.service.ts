import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  currentUser: {} = null;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private http: HttpClient) { }


  signup(user) {
    // return this.http.post('http://192.168.1.180:3000/user', user)
    user.dob = user.dob.year + "/" + user.dob.month + "/" + user.dob.day;
    return this.http.post('http://192.168.1.229:3000/user', user);
  }

  isAdmin() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      if (user.type === 2) {
        return true;
      }
    }
    return false;
  }

  login(user) {
    // return this.http.post('http://192.168.1.243:3000/login', user)
    return this.http.post('http://192.168.1.229:3000/user/login', user);
  }

  getUserDetails(id) {
    // let headers = new HttpHeaders()
    // const token = this.getToken()
    // headers = headers.append('x-access-token', token)
    // return this.http.get('http://192.168.1.243:3000/me', {headers : headers})
    return this.http.get('http://192.168.1.229:3000/user/' + id);
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }


  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      return true;
    }
    return false;

  }

  uploadPic(pic) {
    const fd = new FormData();
    fd.append('profile_pic', pic, pic.name);
    return this.http.post("http://192.168.1.243:3000/upload", fd, {
      reportProgress: true,
      observe: 'events'
    });
  }

  logout() {
    this.token = '';
    this.currentUser = null;
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}
