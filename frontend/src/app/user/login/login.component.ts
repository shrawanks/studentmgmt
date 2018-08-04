import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../router.animations';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  user: any = <User>{} || [];
  submitted = false;

  constructor(private userSerive: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userSerive.isLoggedIn()) {
      this.router.navigate(['/profile']);
    }
  }

  login(formdata) {
    this.submitted = true;
    this.userSerive.login(this.user).subscribe(data => {
      if (data['token']) {
        localStorage.setItem('token', data['token']);
        this.userSerive.token = data['token'];
        this.userSerive.currentUser = data['user'];
        this.router.navigate(['/profile']);
        this.submitted = false;
      }
    }, error => {
        console.log(error);
        this.submitted = false;
    });
  }
}
