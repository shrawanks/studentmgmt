import { Router, Route } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User;
  successMsg: string


  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
  }
 test(e){
   console.log(e);
 }
  register(e) {
    console.log(this.user);

    this.userservice.signup(this.user)
      .subscribe(response => {
        if (response['jwttoken']) {
          localStorage.setItem('token', response['jwttoken']);
          localStorage.setItem('user', JSON.stringify(response['data']));
          this.userservice.token = response['jwttoken'];
          this.successMsg = 'Great! You have been registered.';
          this.router.navigate(['./profile'])

          console.log(response)
        }

      },
        error => {
          console.log(error)

        })
  }

}
