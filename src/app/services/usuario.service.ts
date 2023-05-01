import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Usuario, authGoogle, authSistema, respAuth, } from '../interfaces/authgoogle';
const api_url = environment.url_api
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public usuario: any
  constructor(private http: HttpClient) { }
  guardarLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }
  get token(): string {
    return localStorage.getItem('token') || '';
  }
  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }
  validarToken(): Observable<boolean> {
    return this.http.get(`${api_url}/auth/renovar`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map((resp: any) => {
        console.log(resp)//TODO: ver la respuesta del token
        this.usuario = resp.usuario
        this.guardarLocalStorage(resp.token);
        return true;
      }),
      catchError(error => of(false))
    );
  }
  logingoogle(body: authGoogle) {
    const url = `${api_url}/auth/tokenfirebase`
    return this.http.post<respAuth>(url, body).pipe(
      tap(
        (resp) => {
          this.usuario = resp.usuario
        }
      )
    )
  }
  loginSistema(body: authSistema) {
    const url = `${api_url}/auth/login`
    return this.http.post<respAuth>(url, body).pipe(
      tap(
        (resp) => {
          this.usuario = resp.usuario
          localStorage.setItem('token', resp.token)
        }
      )
    )
  }
}
