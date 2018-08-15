import { Component, OnInit, HostBinding } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class LoginComponent implements OnInit {
  @HostBinding('@moveIn')
  user: any = <User>{} || [];
  submitted = false;
  error = '';

  constructor(private userSerive: UserService, private router: Router) {
    if (this.userSerive.isLoggedIn())
      this.router.navigate(['/profile']);
  }

  ngOnInit() { }

  login(formdata) {
    if (formdata.valid) {
      this.submitted = true;
      this.error = '';
      this.userSerive.login(this.user).subscribe(response => {
        console.log(response);
        if (response['jwttoken']) {
          localStorage.setItem('token', response['jwttoken']);
          localStorage.setItem('user', JSON.stringify(response['data']));
          this.userSerive.token = response['jwttoken'];
          this.userSerive.currentUser = response['data'];
          this.router.navigate(['/profile']);
        }
      }, error => {
        console.log(error);
        this.error = error['error']['status'];
        this.user.password = '';
        this.submitted = false;
      });
    }
  }
}
