import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authGoogle } from 'src/app/interfaces/authgoogle';
import { AuthService } from 'src/app/services/auth.service';
const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyAxnw1Yx0XbkEfQMSAQNPwho7NZLnWNoNI",
  authDomain: "fir-loginauth-5553c.firebaseapp.com",
  projectId: "fir-loginauth-5553c",
  storageBucket: "fir-loginauth-5553c.appspot.com",
  messagingSenderId: "713488124585",
  appId: "1:713488124585:web:b70b565d047973b424f7b8"
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bodyauth: authGoogle = {
    displayName: '',
    photoURL: '',
    idToken: ''
  }
  constructor(private authService: AuthService,private router:Router) {

  }

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
  google_call() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        this.bodyauth = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          idToken: credential?.idToken
        }
        console.log(user.photoURL)
        console.log(user.displayName)
        console.log(credential?.idToken)
        this.authService.logingoogle(this.bodyauth).subscribe({
          next: (r:any) => {

             console.log(r)
             localStorage.setItem('token', r.tokenSistema)

             this.router.navigateByUrl('/dashboard')

            },
          error: (e) => { console.log(e) }
        })
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}
