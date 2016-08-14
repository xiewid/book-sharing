import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tokenNotExpired } from "angular2-jwt";

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('LxSbi4jywXqWG71QvpwEm73Ibl4AM6hh', 'book-sharing.eu.auth0.com', {
      languageDictionary: {
          title: ""
      },
      theme: {
          logo: "app/assets/img/full_logo.png",
          primaryColor: "#18ba9b",
      }
  });

  userProfile: Object;
  
  // store the URL so we can redirect after logging in
  //redirectUrl: string;

  constructor() {
    // Set userProfile attribute if already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) { return; }
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // To log out, we just need to remove
    // the user's profile and token
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;   
  };
}