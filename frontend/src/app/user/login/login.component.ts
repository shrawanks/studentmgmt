import { Component, OnInit } from '@angular/core';
import { moveIn } from '../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
