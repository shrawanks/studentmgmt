import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { User } from '../user'
import { Router } from '@angular/router'
import { moveIn, fallIn } from '../../router.animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  user: any = <User>{} || []
  submitted = false
  error = ''

  constructor(private userSerive: UserService, private router: Router) {
    if (this.userSerive.isLoggedIn()) {
      this.router.navigate(['/profile'])
    }
  }

  ngOnInit() { }

  login(formdata) {
    this.submitted = true
    this.error = ''
    this.userSerive.login(this.user).subscribe(data => {
      if (data['token']) {
        localStorage.setItem('token', data['token'])
        this.userSerive.token = data['token']
        this.userSerive.currentUser = data['user']
        this.router.navigate(['/dashboard'])
      }
    }, error => {
        console.log(error)
        this.error = error['error']['error']
        this.user.password = ''
        this.submitted = false
    })
  }
}
