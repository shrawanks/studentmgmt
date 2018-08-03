import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
// model='';
// user=new User();
user = new User();
  constructor(private userSerive:UserService) { }

  ngOnInit() {
  }
  model;

  signup() {
    // console.log(this.user, "dddd")
   this.userSerive.signup(this.user)
  //  .subscribe(success=>{}, error=>{})
    
  // }

}

// export class NgbdDatepickerPopup {
}