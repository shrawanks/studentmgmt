import { Component, OnInit } from '@angular/core'
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
  conPassValid = true

  constructor(private userSerive: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userSerive.isLoggedIn()) {
      this.router.navigate(['/profile'])
    }
  }

  confirmPassword(conpass) {
    if (conpass.value !== this.user.password) {
      this.conPassValid = false
    } else {
      this.conPassValid = true
    }
  }

  signup(formData) {
    this.submitted = true
    if (formData.valid && this.conPassValid) {
      this.user.role = 2
      console.log(this.user, 'user')
      this.userSerive.signup(this.user)
        .subscribe(data => {
          console.log(data)
          if (data['errors']) {
            console.log(data['message'])
          }
          this.successMsg = 'Great! You have joined successfully'
          this.router.navigate(['/login'])
          this.user = {}
          this.submitted = false
        }, error => {
          console.log(error)
          this.submitted = false
        })
    }
  }


}
