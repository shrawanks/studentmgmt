import { Component, OnInit, HostBinding } from '@angular/core'
import { moveIn, fallIn } from '../../router.animations'
import { UserService } from '../user.service'
import { HttpEventType } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [moveIn(), fallIn()]
})
export class ProfileComponent implements OnInit {
  @HostBinding ('@moveIn')
  user = this.userService.currentUser

  constructor(private userService: UserService) { }

  ngOnInit() {
  	if (this.userService.currentUser === null || !this.userService.currentUser) {
  		this.userService.getUserDetails().subscribe(data => {
  			this.userService.currentUser = data['data']
  			console.log(this.userService.currentUser)
	  	}, error => {
	  		console.log(error)
	  	})
  	}
  }

  fileChanged(event) {
    this.userService.uploadPic(event.target.files[0]).subscribe(
      events => {
        if (events.type === HttpEventType.UploadProgress) {
          console.log("Upload Progress : " + Math.round(events.loaded / events.total * 100) + "%")
        } else if (events.type === HttpEventType.Response) {
          console.log(events)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
