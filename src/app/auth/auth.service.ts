import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, Observable, tap } from "rxjs";

import { environment } from '@environments/environment';
import { TokenResponseDto } from "./models/login.response.dto";

@Injectable()
export class AuthService {
  authSubject = new BehaviorSubject(false);
  token!: string;
  constructor(private http: HttpClient) { }
  login(login: string, pwd: string): Observable<TokenResponseDto> {
    return this.http.post<TokenResponseDto>(`${environment.serverUri}/auth/login`, {
      login: login,
      password: pwd
    }).pipe(tap(res => {
      this.saveToken(res.access_token, res.expire_in.toString())
    }));
  }
  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem(environment.accessTokenNameCache) || '';
    }
    return this.token;
  }
  logout(): void {
    this.token = '';
    localStorage.removeItem(environment.accessTokenNameCache);
    localStorage.removeItem(environment.expireInNameCache);
  }
  private saveToken(token: string, expireIn: string) {
    localStorage.setItem(environment.accessTokenNameCache, token);
    localStorage.setItem(environment.expireInNameCache, expireIn);
    this.token = token;
  }
}
