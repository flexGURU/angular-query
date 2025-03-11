import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../types/types.interface';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http
      .get<Users[]>(`${environment.BASEURL}/users`)
      .pipe(tap((resp) => console.log(resp)));
  }
}
