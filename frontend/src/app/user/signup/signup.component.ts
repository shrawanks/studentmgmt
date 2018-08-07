import { Component, OnInit, HostListener } from '@angular/core'
import { User } from '../user'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
import { moveIn, fallIn } from '../../router.animations'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class SignupComponent implements OnInit {
  error: string
  successMsg: string
  user: any = <User>{} || []
  submitted = false
  // tslint:disable-next-line:member-ordering
  model: any
  conPassValid = false

  constructor(private userSerive: UserService, private router: Router) {
    if (this.userSerive.isLoggedIn()) {
      this.router.navigate(['/profile'])
    }
  }

  ngOnInit() { }

  confirmPassword(conpass) {
    if (conpass.value !== this.user.password) {
      this.conPassValid = false
    } else {
      this.conPassValid = true
    }
  }

  signup(formData) {
    if (formData.valid && this.conPassValid) {
      this.submitted = true
      this.user.role = 2
      this.userSerive.signup(this.user)
        .subscribe(data => {
          if (data['token']) {
            this.successMsg = 'Great! You have been registered.'
            localStorage.setItem('token', data['token'])
            this.userSerive.token = data['token']
            this.userSerive.currentUser = data['user']
            this.router.navigate(['/profile'])
            this.user = {}
            this.submitted = false
          }
        }, error => {
          console.log(error)
          this.error = error['error']['error']
          this.submitted = false
        })
    }
  }



}

