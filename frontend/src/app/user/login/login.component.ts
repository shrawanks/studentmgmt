import { Component, OnInit, HostBinding } from '@angular/core'
import { UserService } from '../user.service'
import { User } from '../user'
import { Router } from '@angular/router'
import { moveIn, fallIn } from '../../router.animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class LoginComponent implements OnInit {
  @HostBinding('@moveIn')
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
    if (formdata.valid) {
      this.submitted = true
      this.error = ''
      this.userSerive.login(this.user).subscribe(response => {
        console.log(response)
        if (response['token']) {
          localStorage.setItem('token', response['token'])
          this.userSerive.token = response['token']
          this.userSerive.currentUser = response['user']
          this.router.navigate(['/profile'])
        }
      }, error => {
          console.log(error)
          this.error = error['error']['error']
          this.user.password = ''
          this.submitted = false
      })
    }
  }
}
