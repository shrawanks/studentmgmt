import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../router.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
