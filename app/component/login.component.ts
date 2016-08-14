import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  template: `
    <h2>LOGIN</h2>
    <h4 *ngIf="auth.authenticated() && auth.userProfile">Hi {{auth.userProfile.name}}</h4>
    <h4 *ngIf="!auth.authenticated()">You are not logged in, please click 'Log in' button to login</h4>
    <div class="toolbar">
      <button *ngIf="!auth.authenticated()" (click)="auth.login()">Login</button>
      <button *ngIf="auth.authenticated() && auth.userProfile" (click)="auth.logout()">Logout</button>
    </div>
    `
})
export class LoginComponent {
  constructor(private auth: AuthService) {}
}
