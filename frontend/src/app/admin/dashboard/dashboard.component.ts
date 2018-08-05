import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { moveIn, fallIn } from '../../router.animations'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:use-host-property-decorator
  host: {'[@moveIn]': ''}
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
