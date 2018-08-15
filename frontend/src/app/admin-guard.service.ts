import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private auth: UserService, private router: Router) { }

  canActivate() {
    if (this.auth.isLoggedIn() && this.auth.isAdmin()) {
      return true;
    }
    this.router.navigate(['/profile']);
    return false;
  }
}
