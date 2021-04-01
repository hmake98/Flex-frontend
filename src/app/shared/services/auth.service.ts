import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToken() {
    return localStorage.getItem('token')
  }

  checkLoggedInStatus() {
    return localStorage.getItem('isLoggedIn')
  }
}
