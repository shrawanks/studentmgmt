import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
// model='';
// user=new User();
 
user: any = <User>{}||[]
submitted: boolean = false;
  constructor(private userSerive : UserService, private router : Router) { }
 

  ngOnInit() {
  }
  model;

 
  signup(formData) {

   this.submitted = true;
   if(formData){
     console.log(this.user, "user")
     this.user = {
       "f_name": "Robert",
       "l_name": "Shrestha",
       "email": "robertshrestha@gmail.com",
       "phone": 98453255,
       "dob": "1992/25/25",
       "address":"Kathmandu,Nepal",
       "password":"robertisgreat"
      }
     this.userSerive.signup(this.user)
     .subscribe(success=>{
        console.log(success);
     }, error=>{
       console.log(error)
     })
   }
  }
 

}

 
