import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
// import { AngularFireAuth } from '@angular/fire/auth';
// import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
    // public auth: AngularFireAuth
  ) {

  }

  ngOnInit(): void {
  }

  login(form) {
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
    this.router.navigate(['/app/home']);
  }

  async googleLogin() {
    // const response = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // const {
    //   additionalUserInfo: {
    //     providerId,
    //     profile
    //   },
    //   user: {
    //     email
    //   }
    // } = response
  }

}
