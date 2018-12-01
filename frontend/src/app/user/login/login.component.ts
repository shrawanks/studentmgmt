import { Component, OnInit, HostBinding } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn(), fallIn()]
})
export class LoginComponent implements OnInit {
  @HostBinding('@moveIn')
  user: any = <User>{} || [];
  submitted = false;
  error = '';

  constructor(
    private userSerive: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.userSerive.isLoggedIn()) this.router.navigate(['/profile']);
  }

  ngOnInit() {}

  login(formdata) {
    if (formdata.valid) {
      this.submitted = true;
      this.error = '';
      this.userSerive.login(this.user).subscribe(
        response => {
          console.log(response);
          if (response['jwttoken']) {
            localStorage.setItem('token', response['jwttoken']);
            localStorage.setItem('user', JSON.stringify(response['data']));
            this.userSerive.user = response['data'];
            this.userSerive.token = response['jwttoken'];
            this.userSerive.currentUser = response['data'];
            const returnUrl = this.route.snapshot.queryParamMap.get(
              'returnUrl'
            );
            if (this.userSerive.user['type'] === 2)
              this.router.navigate([returnUrl || '/dashboard']);
            else this.router.navigate([returnUrl || '/profile']);
          }
        },
        error => {
          console.log(error);
          if (error['error']['status']) {
            this.error = error['error']['status'];
          } else {
            this.error = "Can't connect you right now.";
          }
          this.user.password = '';
          this.submitted = false;
        }
      );
    }
  }
}
