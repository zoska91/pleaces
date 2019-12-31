import { AuthService } from 'src/app/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isLogin) {
      this.router.navigate(['/not-login']);
      return false;
    }
    return true;
  }
}
