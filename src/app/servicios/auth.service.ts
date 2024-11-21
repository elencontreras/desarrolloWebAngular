import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credenciales: Usuario): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(environment.apiUrl + "auth/login", credenciales);
  }

  setToken(token: string) {
    localStorage.setItem("authToken", token);
  }

  logout() {
    localStorage.removeItem("authToken");

  }

  isLoggedIn() {
    return localStorage.getItem("authToken");
  }

}
