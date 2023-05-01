import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
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
}
