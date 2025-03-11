import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  Account,
  LoginUserRequest,
  LoginUserResponse,
} from '../../types/types.interface';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private readonly key = 'JWT-KEY';
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  login(credentials: LoginUserRequest): Observable<LoginUserResponse> {
    return this.http
      .post<LoginUserResponse>(`${environment.BASEURL}/user/login`, credentials)
      .pipe(
        tap((response) => {
          this.jwt = response.access_token;
          this.router.navigateByUrl('/'); // Navigate after successful login
        })
      );
  }

  private set jwt(value: string) {
    console.log('Setting JWT:', value); // Debugging

    sessionStorage.setItem(this.key, value);
    this.isUserLoggedIn.next(!!value);
  }

  get jwt(): string {
    return sessionStorage.getItem(this.key) ?? '';
  }

  listAccount(id: number): Observable<Account> {
    return this.http.post<Account>(
      `${environment.BASEURL}/getaccount/${id}`,
      ''
    );
  }

  get isLoggedIn(): boolean {
    return !!this.jwt;
  }
}
