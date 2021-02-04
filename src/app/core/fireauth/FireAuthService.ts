import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable()
export class FireAuthService {
  authenticated: boolean;

  constructor(private firebaseAuth: AngularFireAuth, public router: Router) {
    this.authenticated = false;
    this.firebaseAuth.authState.subscribe(data => { });
  }

  isLoggedIn(): boolean {
    return this.authenticated;
  }

  login(user: string, pass: string) {
      this.firebaseAuth.signInWithEmailAndPassword(user, pass).then(
          res => {
            this.authenticated = true,
            this.router.navigate(['mdashboard']);
          }
      ).catch(
          (error) => {
            window.alert('Authorization errors, please report this as FireAuthService.ts: ' + error.message);
          }
      );
  }

  logout() {
      this.authenticated = false;
      this.firebaseAuth.signOut();
      this.router.navigate(['portal']);
  }
}
