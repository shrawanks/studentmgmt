import { Component, OnInit, HostBinding } from '@angular/core';
import { moveIn, fallIn } from '../../router.animations';
import { UserService } from '../user.service';
import { HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [moveIn(), fallIn()]
})
export class ProfileComponent implements OnInit {
  @HostBinding('@moveIn')
  user = this.userService.currentUser;
  msg;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let userId = this.userService.user ? this.userService.user['_id'] : '';
    if (this.route.snapshot.params['id']) {
      userId = this.route.snapshot.params['id'];
    }
    if (this.userService.currentUser === null || !this.userService.currentUser || userId !== this.userService.currentUser['_id']) {
      this.userService.getUserDetails(userId).subscribe(data => {
        this.userService.currentUser = data['data'];
        console.log(this.userService.currentUser);
      }, error => {
        console.log(error);
        this.msg = "Something went worng";
      });
    }
  }

  fileChanged(event) {
    this.userService.uploadPic(event.target.files[0]).subscribe(
      events => {
        if (events.type === HttpEventType.UploadProgress) {
          console.log("Upload Progress : " + Math.round(events.loaded / events.total * 100) + "%");
        } else if (events.type === HttpEventType.Response) {
          console.log(events);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
