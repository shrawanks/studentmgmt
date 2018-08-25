import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../user/user.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/'])
    console.log(this.userService.currentUser);
  }

}
