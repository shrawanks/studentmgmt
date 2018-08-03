import { Component, OnInit } from '@angular/core';
import { moveIn } from '../../router.animations'
import { UserService } from '../user.service'
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

	user : any = <User>{} || []

  constructor(private userSerive : UserService, private router : Router) { }

  ngOnInit() {
  }

  login(formdata){
  	let login = {

  	}
  	this.userSerive.login(this.user).subscribe(data=>{
  		console.log(data)
  	},error=>{
  			console.log(error)
  	})
  	}
  }

}
