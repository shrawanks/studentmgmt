import { Component, OnInit, HostBinding } from '@angular/core'
import { moveIn, fallIn } from '../router.animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [moveIn()],
})
export class HomeComponent implements OnInit {
  @HostBinding('@moveIn')
  user
  constructor() { }

  ngOnInit() {
  }
}
