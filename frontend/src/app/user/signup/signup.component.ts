import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animations';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn(), fallIn()],
})
export class SignupComponent implements OnInit {
  // model='';
  // user=new User();
  error : string
  successMsg : string
  user: any = <User>{}||[]
  submitted: boolean = false;
  constructor(private userSerive : UserService, private router : Router) { }


  ngOnInit() {
  }
  model;


  signup(formData) {
   this.submitted = true;
   if(formData.valid){
     this.user.role = 2;
     console.log(this.user, "user")
     this.userSerive.signup(this.user)
     .subscribe(data=>{
        console.log(data);
        if(data['errors'])
          console.log(data['message'])
        this.successMsg = "Great! You have joined successfully"
        this.router.navigate(['/login']);
        this.user = {}
     }, error=>{
       console.log(error)
     })
   }
  }


}
