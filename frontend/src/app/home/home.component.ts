import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
