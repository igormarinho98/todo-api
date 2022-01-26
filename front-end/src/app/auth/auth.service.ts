import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = 'http://localhost:8080/api/login';

  constructor(
    private http: HttpClient
  ) { }

  login(auth: Auth) : Observable<Auth> {
    return this.http.post<Auth>(this.apiURL, Auth)
  }

}
