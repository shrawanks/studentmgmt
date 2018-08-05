import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../router.animations';

import { UserService } from '../user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  	console.log(this.userService.currentUser)
  	if (this.userService.currentUser !== {}){
  		console.log(this.userService.currentUser)
  		this.userService.getUserDetails().subscribe(data=>{
  			this.userService.currentUser = data['data'];
  			console.log(this.userService.currentUser)
	  	}, error => {
	  		console.log(error)
	  	});
  	}
  }

}
