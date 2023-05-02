import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { initializeApp } from "firebase/app";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authGoogle } from 'src/app/interfaces/authgoogle';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
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
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formsubmit = false
  bodyauth: authGoogle = {
    displayName: '',
    photoURL: '',
    idToken: ''
  }
  estado: any
  form: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    terminos: new FormControl(false)
  })
  constructor(private htto: HttpClient, private usuarioService: UsuarioService, private fb: FormBuilder, private router: Router) {
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
        this.usuarioService.logingoogle(this.bodyauth).subscribe({
          next: (r: any) => {
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
  registro() {
    this.formsubmit = true
    if (this.form.invalid) {
      return;
    }
    if (this.form.valid && this.passValidas() == true) {
      return;
    }
    if (this.form.get('terminos')?.value == false) {
      return;
    }
    console.log('submit')
    this.usuarioService.registroSistema(this.form.value).subscribe({
      next: (r) => {
        Swal.fire(
          'Buen trabajo!',
          'Cuenta creada exitosamente!',
          'success'
        )
        this.router.navigateByUrl('/login')
        console.log(r)

      },
      error: (e) => {
        Swal.fire(
          'Error!',
          e.error.errors[0].msg,
          'error'
        )
        console.log(e.error.errors[0].msg)
      },
      complete: () => {

      }
    })
  }
  validarCampo(nombre: string) {
    if (this.form.get(nombre)?.pristine == false && this.form.get(nombre)?.invalid == true && this.formsubmit == true) {
      return true
    } else {
      return false
    }
  }
  aceptarTerminos() {
    if (this.form.get('terminos')?.value == false && this.formsubmit == true) {
      return true
    } else {
      return false
    }
  }
  passValidas() {
    const pass1 = this.form.get('password')?.value
    const pass2 = this.form.get('password2')?.value
    //   if(this.registerForm.get())
    if (pass1 != pass2) {
      return true
    } else {
      return false
    }
  }
  passmsg() {
    if (this.passValidas() == true && this.form.get('password2')?.touched == true && this.form.get('password2')?.pristine == false) {
      return true
    } else {
      return false
    }
  }
  verestado() {
    return this.estado = {
      formularioValido: this.form.valid,
      pristine: this.form.get('nombre')?.pristine,
      touched: this.form.get('nombre')?.touched,
      valido: this.form.get('nombre')?.valid
    }
  }
}
