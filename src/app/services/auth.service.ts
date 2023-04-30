import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { authGoogle } from '../interfaces/authgoogle';
import { environment } from 'src/environments/environment.development';
const base_url = environment.url_api
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  logingoogle(body: authGoogle) {
    const url = `${base_url}/auth/tokenfirebase`
    return this.http.post(url, body)
  }
}
